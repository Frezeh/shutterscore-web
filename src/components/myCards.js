import React from "react";
import CreditCard from "./creditCards";
import { Button, Divider, Typography } from "@material-ui/core";
import mask from "../assets/masked.png";

export const Cards = () => {
  return (
    <div style={{ marginBottom: 40 }}>
      <div style={{ backgroundImage: `url(${mask})` }}>
        <div style={{ margin: 25 }}>
          <Typography style={{ fontSize: 9, color: "#FFFFFF" }}>
            {"Total Available balance"}
          </Typography>
          <div style={{ marginBottom: 15 }}>
            <Typography
              style={{ fontSize: 31, fontWeight: "bold", color: "#FFFFFF" }}
            >
              {"$25,958,485"}
            </Typography>
          </div>
          {/* <div
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          > */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Button
              style={{
                width: 108,
                height: 29,
                backgroundColor: "#FFFFFF",
              }}
            >
              <Typography
                style={{
                  fontSize: 10,
                  color: "#00217B",
                  textAlign: "center",
                  paddingTop: 5,
                }}
              >
                {"Fund wallet"}
              </Typography>
            </Button>
            {/* </div> */}

            <div>
              <Button
                style={{
                  width: 108,
                  height: 29,
                  borderWidth: 0.5,
                  borderColor: "#FFFFFF",
                }}
              >
                <Typography
                  style={{
                    fontSize: 9,
                    color: "#FFFFFF",
                    textAlign: "center",
                    paddingTop: 5,
                  }}
                >
                  {"Withdraw wallet"}
                </Typography>
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* My Credit Card */}
      {/* <div
        style={{
          marginTop: 10,
          marginLeft: 30,
          marginRight: 10,
        }}
      >
        <CreditCard name="Frank Ezeh" date="11/22" suffix="3904" />
      </div>
      <div
        style={{
          marginTop: 10,
          marginLeft: 30,
          marginRight: 10,
        }}
      >
        <CreditCard name="James Bond" date="03/25" suffix="4573" />
      </div>

      <div
        style={{
          marginTop: 10,
          marginLeft: 30,
          marginRight: 10,
        }}
      >
        <CreditCard name="Daniel Scholes" date="03/25" suffix="4573" />
      </div> */}
    </div>
  );
};

export const Activity = () => {
  return (
    <div
      style={{
        marginLeft: 30,
        marginRight: 30,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ marginBottom: 30, marginTop: 20 }}>
          <Typography
            style={{ fontSize: 18, fontweight: "bold", color: "#373737" }}
          >
            {"Activity"}
          </Typography>
        </div>
        <div style={{ marginBottom: 30, marginTop: 20 }}>
          <Typography style={{ fontSize: 14, color: "#808080" }}>
            {"All category"} {"⌄"}
          </Typography>
        </div>
      </div>
      <Divider />

      <div
        style={{
          marginVertical: 10,
          backgroundColor: "##F2F2F2",
          width: "100%",
          height: 2,
        }}
      ></div>
      <div style={{ marginBottom: 20 }}>
        <Typography style={{ fontSize: 14, color: "#808080", marginTop: 20 }}>
          {"December 31"}
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 15,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <img
            style={{ width: 50, height: 50 }}
            src={require("../assets/food&drinks.png")}
            alt="food"
          />
          <div style={{ marginLeft: 10 }}>
            <Typography style={{ fontSize: 18, color: "#515151" }}>
              {"”Food & Drinks” restaurant"}
            </Typography>
            <Typography style={{ fontSize: 15, color: "#999999" }}>
              {"Cafe and restaurants"}
            </Typography>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Typography style={{ fontSize: 20, color: "#373737" }}>
            {"-"}
          </Typography>
          <Typography style={{ fontSize: 20, color: "#373737", marginLeft: 10 }}>
            {"480"}
          </Typography>
          <Typography style={{ fontSize: 15, color: "#999999", marginLeft: 10 }}>
            {"UAH"}
          </Typography>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 15,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <img
            style={{ width: 50, height: 50 }}
            src={require("../assets/walmart.png")}
            alt="walmart"
          />
          <div style={{ marginLeft: 10 }}>
            <Typography style={{ fontSize: 18, color: "#515151" }}>
              {"”Walmart” store (Main Str. 13)"}
            </Typography>
            <Typography style={{ fontSize: 15, color: "#999999" }}>
              {"Groceries & food"}
            </Typography>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Typography style={{ fontSize: 20, color: "#373737" }}>
            {"-"}
          </Typography>
          <Typography style={{ fontSize: 20, color: "#373737", marginLeft: 10 }}>
            {"80"}
          </Typography>
          <Typography style={{ fontSize: 15, color: "#999999", marginLeft: 10 }}>
            {"USD"}
          </Typography>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 15,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: 30
          }}
        >
          <img
            style={{ width: 50, height: 50 }}
            src={require("../assets/transfer.png")}
            alt="transfer"
          />
          <div style={{ marginLeft: 10 }}>
            <Typography style={{ fontSize: 18, color: "#515151" }}>
              {"Transfer from Alexey"}
            </Typography>
            <Typography style={{ fontSize: 15, color: "#999999" }}>
              {"Transactions"}
            </Typography>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Typography style={{ fontSize: 20, color: "#39B54A" }}>
            {"6 000"}
          </Typography>
          <Typography
            style={{ fontSize: 15, color: "#999999", marginLeft: 10 }}
          >
            {"UAH"}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export const MyCards = () => {
  return (
    <div>
      <div
       style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15,
      }}
      >
        <div style={{ marginBottom: 24, marginTop: 50 }}>
          <Typography style={{ fontWeight: "bold", fontSize: 30 }}>
          {"My cards"}
          </Typography>
          <Typography style={{ fontsize: 14, color: "#525252" }}>
            {"Sed ut perspiciatis unde omnis iste natus error sit"}
          </Typography>
        </div>
        <div style={{ marginTop: 45 }}>
        <img
            style={{ width: 50, height: 50 }}
            src={require("../assets/add.png")}
            alt="add"
          />
        </div>
      </div>
    </div>
  );
};
