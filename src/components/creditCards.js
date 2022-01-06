import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const circleSize = 250;

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 24,
    paddingTop: 20,
    borderRadius: 12,
    width: 284,
    height: 138,
    position: "relative",
  },
  logoContainer: { position: "relative", marginBottom: 24 },
  circle: { width: 34, height: 34, borderRadius: 17 },
  rightCircle: { backgroundColor: "#f9a000", position: "absolute", left: 20 },
  leftCircle: { backgroundColor: "#ed0006", zIndex: 999 },
  cardNumberContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 18,
  },
  cardNumberPart: { flexDirection: "row" },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 4,
  },
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontFamily: "Courier",
    fontSize: 16,
    letterSpacing: 0.53,
  },
  bgCircle: {
    position: "absolute",
    backgroundColor: "white",
    opacity: 0.05,
    height: circleSize,
    width: circleSize,
    borderRadius: circleSize,
  },
  rightBgCircle: {
    top: (-1 * circleSize) / 4,
    right: (-1 * circleSize) / 2,
  },
  bottomBgCircle: {
    bottom: (-1 * circleSize) / 2,
    left: (0 * (-1 * circleSize)) / 2,
  },
}));
export default function CreditCard({
  name,
  date,
  suffix,
  style,
  textColor = "white",
  bgColor = "#525252",
}) {
  const classes = useStyles();

  const dotStyle = [classes.dot, { backgroundColor: textColor }];
  return (
    <div className={[classes.container, { backgroundColor: bgColor }, style]}>
      <div className={[classes.bgCircle, classes.rightBgCircle]} />
      <div className={[classes.bgCircle, classes.bottomBgCircle]} />
      <div className={classes.logoContainer}>
        <div className={[classes.circle, classes.leftCircle]} />
        <div className={[classes.circle, classes.rightCircle]} />
      </div>
      <div className={classes.cardNumberContainer}>
        <div className={classes.cardNumberPart}>
          <div className={dotStyle} />
          <div className={dotStyle} />
          <div className={dotStyle} />
          <div className={dotStyle} />
        </div>
        <div className={classes.cardNumberPart}>
          <div className={dotStyle} />
          <div className={dotStyle} />
          <div className={dotStyle} />
          <div className={dotStyle} />
        </div>
        <div className={classes.cardNumberPart}>
          <div className={dotStyle} />
          <div className={dotStyle} />
          <div className={dotStyle} />
          <div className={dotStyle} />
        </div>
        <Typography className={[classes.text, { color: textColor }]}>{suffix}</Typography>
      </div>
      <div className={classes.footerContainer}>
        <Typography className={[classes.text, { color: textColor }]}>{name}</Typography>
        <Typography className={[classes.text, { color: textColor }]}>{date}</Typography>
      </div>
    </div>
  );
}
