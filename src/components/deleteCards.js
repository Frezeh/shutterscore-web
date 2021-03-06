import React from "react";
import { Divider, Typography, Grid } from "@material-ui/core";

export const FirstCard = () => {
  return (
    <Grid
      item
      xs={3}
      md={12}
      lg={12}
      style={{ display: "flex", flexDirection: "row", marginBottom: 40 }}
    >
      {/* Credit Card 1 */}
      <div
        style={{
          backgroundColor: "#2C2C2C",
          height: 140,
          width: 285,
          marginLeft: 20,
          borderRadius: 20,
        }}
      >
        <div>
          <div style={{ margin: 20, display: "flex", flexDirection: "row" }}>
            <Typography
              style={{ fontSize: 17, color: "#FFFFFF", marginRight: 5 }}
            >
              {"150  000"}
            </Typography>
            <Typography
              style={{ fontSize: 11, color: "#CCCCCC", marginTop: 4 }}
            >
              {"UAH"}
            </Typography>
          </div>
          <div style={{ marginBottom: 15, marginLeft: 20 }}>
            <Typography style={{ fontSize: 12, color: "#979797" }}>
              {"2132 8732 2347 3478"}
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div style={{ marginLeft: 20 }}>
              <Typography
                style={{
                  fontSize: 8,
                  color: "#919191",
                  textAlign: "center",
                  paddingTop: 5,
                }}
              >
                {"07/20"}
              </Typography>
            </div>
            <div style={{ marginRight: 20 }}>
              <Typography
                style={{
                  fontSize: 15,
                  color: "#FFFFFF",
                  textAlign: "center",
                  paddingTop: 5,
                }}
              >
                {"VISA"}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export const CardInfo = () => {
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
            {"Card Info"}
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
         <Typography style={{ fontSize: 13, color: "#808080", marginTop: 20 }}>
          {"CARD NAME:"}
        </Typography>
        </div>
        <Typography style={{ fontSize: 14, color: "#373737", marginTop: 20 }}>
          {"Chris Jombo"}
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
         <Typography style={{ fontSize: 13, color: "#808080", marginTop: 20 }}>
          {"CARD NO:"}
        </Typography>
        </div>
        <Typography style={{ fontSize: 14, color: "#373737", marginTop: 20 }}>
          {"4685885266465242"}
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
         <Typography style={{ fontSize: 13, color: "#808080", marginTop: 20 }}>
          {"CVV:"}
        </Typography>
        </div>
        <Typography style={{ fontSize: 14, color: "#373737", marginTop: 20 }}>
          {"133"}
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
         <Typography style={{ fontSize: 13, color: "#808080", marginTop: 20 }}>
          {"ZIPCODE:"}
        </Typography>
        </div>
        <Typography style={{ fontSize: 14, color: "#373737", marginTop: 20 }}>
          {"23401"}
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
            marginBottom: 10
          }}
        >
         <Typography style={{ fontSize: 13, color: "#808080", marginTop: 20 }}>
          {"ADDRESS:"}
        </Typography>
        </div>
        <Typography style={{ fontSize: 14, color: "#373737", marginTop: 20 }}>
          {"19, Olubunmi Rotimi, Lekki, Lagos"}
        </Typography>
      </div>
    </div>
  );
};
export const Info = () => {
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
            {"All category"} {"???"}
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
              {"???Food & Drinks??? restaurant"}
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
          <Typography
            style={{ fontSize: 20, color: "#373737", marginLeft: 10 }}
          >
            {"480"}
          </Typography>
          <Typography
            style={{ fontSize: 15, color: "#999999", marginLeft: 10 }}
          >
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
              {"???Walmart??? store (Main Str. 13)"}
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
          <Typography
            style={{ fontSize: 20, color: "#373737", marginLeft: 10 }}
          >
            {"80"}
          </Typography>
          <Typography
            style={{ fontSize: 15, color: "#999999", marginLeft: 10 }}
          >
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
            marginBottom: 30,
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

export const DeleteCards = () => {
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
            {"Debit card"}
          </Typography>
          <Typography style={{ fontsize: 14, color: "#525252" }}>
            {"Sed ut perspiciatis unde omnis iste natus error sit"}
          </Typography>
        </div>
        <div style={{ marginTop: 45 }}>
          <img
            style={{ width: 50, height: 50 }}
            src={require("../assets/delete.png")}
            alt="add"
          />
        </div>
      </div>
    </div>
  );
};
