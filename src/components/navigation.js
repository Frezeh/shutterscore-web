import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  CssBaseline,
  Box,
  Drawer,
  Toolbar,
  AppBar,
  List,
  Divider,
  Container,
  IconButton,
} from "@material-ui/core";
import { ChevronLeft, Menu } from "@material-ui/icons";
import { MainListItems } from "./listItems";
import { Cards, Dashboard, TransactionHistory } from "./dashboard";
import { Activity, MyCards, AllCards } from "./myCards";
import { FirstCard, Info, DeleteCards, CardInfo } from "./deleteCards";

const drawerWidth = 240;

const Appbar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerLeft = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const [toggleDashboard, setToggleDashboard] = React.useState(false);
  const [toggleMyCards, setToggleMyCards] = React.useState(false);
  const [toggleDeleteCards, setToggleDeleteCards] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Appbar
          position="absolute"
          open={open}
          style={{ backgroundColor: "white" }}
        >
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <Menu />
            </IconButton>
          </Toolbar>
        </Appbar>
        <DrawerLeft variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeft />
            </IconButton>
          </Toolbar>

          <List>
            <MainListItems setToggleDashboard={setToggleDashboard} setToggleMyCards={setToggleMyCards} setToggleDeleteCards={setToggleDeleteCards}/>
          </List>
        </DrawerLeft>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            {toggleDashboard && (
              <Grid container spacing={3}>
                <Grid item xs={12} md={12} lg={12}>
                  <Dashboard />
                  <Divider />
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <Cards />
                </Grid>
                <Grid item xs={12}>
                  <Paper
                    sx={{ p: 2, display: "flex", flexDirection: "column", borderRadius: "50%" }}
                  >
                    <TransactionHistory />
                  </Paper>
                </Grid>
              </Grid>
            )}

            {toggleMyCards && (
              <Grid container spacing={3}>
                <Grid item xs={12} md={12} lg={12}>
                  <MyCards />
                  <Divider />
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <AllCards />
                </Grid>
                <Grid item xs={12}>
                  <Paper
                    sx={{ p: 2, display: "flex", flexDirection: "column" }}
                  >
                    <Activity />
                  </Paper>
                </Grid>
              </Grid>
            )}

            {toggleDeleteCards && (
              <Grid container spacing={3}>
                <Grid item xs={12} md={12} lg={12}>
                  <DeleteCards />
                  <Divider />
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <FirstCard />
                </Grid>
              {/* Activity */}
              <Grid item xs={12} md={8} lg={8}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Info />
                </Paper>
              </Grid>
              {/* Card Info */}
              <Grid item xs={12} md={4} lg={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <CardInfo />
                </Paper>
              </Grid>
              </Grid>
            )}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Navigation() {
  return <DashboardContent />;
}
