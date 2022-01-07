import React from "react";
import {
  Paper,
  Button,
  TextField,
  Grid,
  CssBaseline,
  Typography,
  Checkbox,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import { Link } from "react-router-dom";
import first from "../assets/surface1.png";
import second from "../assets/bank.png";
import third from "../assets/atm.png";

function Slider({ item }) {
  return (
    <>
      <img
        src={item.image}
        alt="first"
        style={{ width: "180px", height: "167px" }}
      />
      <Typography
        style={{
          fontSize: 22,
          fontWeight: "bold",
          marginTop: 80,
          marginLeft: 40,
          color: "#000E48",
        }}
      >
        {item.title}
      </Typography>
      <div style={{ width: 300, justifyContent: "center" }}>
        <Typography
          style={{
            fontSize: 14,
            marginTop: 40,
            color: "#000E48",
            textAlign: "center",
            letterSpacing: "0px",
            opacity: 1,
          }}
        >
          {item.text}
        </Typography>
      </div>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  carousel: {
    animation: "fade",
    width: "-100vh",
    height: "-100vh",
    opacity: 1,
  },
}));

export default function Intro() {
  const data = [
    {
      id: 1,
      title: "Pay with card",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,",
      image: `${first}`,
    },
    {
      id: 2,
      title: "Grow your funds",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,",
      image: `${second}`,
    },
    {
      id: 3,
      title: "Pay anywhere, anytime",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,",
      image: `${third}`,
    },
  ];

  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={6} md={5} className={classes.image}>
        <div style={{ margin: 100 }}>
          <Paper
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ paddingTop: 30 }}></div>
            <Typography
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 20,
                fontweight: "bold",
              }}
            >
              {"Create an account"}
            </Typography>
            <Typography
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 15,
              }}
            >
              {"Create an account to continue"}
            </Typography>
            <div style={{ margin: 30 }}>
              <Typography>{"Email"}</Typography>
              <TextField
                id="email"
                label="Topebanlosin@gmail.com"
                variant="filled"
                fullWidth
              />{" "}
            </div>
            <div style={{ margin: 30 }}>
              <Typography>{"Password"}</Typography>
              <TextField
                id="password"
                label="*****************"
                variant="filled"
                fullWidth
              />{" "}
            </div>
            <div style={{ margin: 30 }}>
              <Typography>{"Confirm password"}</Typography>
              <TextField
                id="confirm"
                label="*****************"
                variant="filled"
                fullWidth
              />{" "}
            </div>
            <div style={{ margin: 30 }}>
              <Typography>{"Select currency"}</Typography>
              <TextField
                id="currency"
                label="United States Dollar (USD)"
                variant="filled"
                fullWidth
              />{" "}
            </div>
            <div style={{ margin: 30, display: "flex", flexDirection: "row" }}>
              <Checkbox value="remember" color="primary" />
              <Typography style={{ fontSize: 10, marginTop: 15 }}>
                {"I accept these terms and conditions"}
              </Typography>
            </div>
            <div style={{ margin: 30 }}>
              <Link to={`/navigation`}>
                <Button variant="contained" color="primary" fullWidth>
                  Get Started
                </Button>
              </Link>
            </div>
            <div style={{ paddingBottom: 30 }}></div>
          </Paper>
        </div>
      </Grid>
      <Grid
        item
        xs={0}
        sm={6}
        md={7}
        component={Paper}
        elevation={6}
        square
        style={{ backgroundColor: "#80BFFF" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <Carousel className={classes.carousel}>
            {data.map((item, i) => (
              <Slider key={i} item={item} />
            ))}
          </Carousel>
        </div>
      </Grid>
    </Grid>
  );
}
