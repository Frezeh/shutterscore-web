import React, { useState } from "react";
import {
  Paper,
  Avatar,
  Button,
  TextField,
  Grid,
  CssBaseline,
  Typography,
  Box,
  Checkbox,
} from "@material-ui/core";
import Payment from "@material-ui/icons/Payment";
import {
  makeStyles,
  ThemeProvider,
  createTheme,
} from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import { Link } from "react-router-dom";

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    // backgroundImage: 'url(https://source.unsplash.com/random)',
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
    width: "752px",
    height: "768px",
    opacity: 1,
  },
}));

export default function Intro() {
  const classes = useStyles();

  let items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

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
        <div className={classes.paper}>
          <Carousel className={classes.carousel}>
            {items.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </Carousel>
        </div>
      </Grid>
    </Grid>
  );
}
