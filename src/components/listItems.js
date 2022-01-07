import * as React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Home, CreditCard, DeleteOutline } from "@material-ui/icons";
import image from "../assets/logout.png";
import { useHistory } from 'react-router-dom';

export const MainListItems = ({
  setToggleDashboard,
  setToggleMyCards,
  setToggleDeleteCards,
}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const history = useHistory();

  const handleDashBoard = (event, index) => {
    setSelectedIndex(index);
    setToggleDashboard(true);
    setToggleMyCards(false);
    setToggleDeleteCards(false);
  };

  const handleMyCards = (event, index) => {
    setSelectedIndex(index);
    setToggleDashboard(false);
    setToggleDeleteCards(false);
    setToggleMyCards(true);
  };

  const handleDeleteCards = (event, index) => {
    setSelectedIndex(index);
    setToggleDashboard(false);
    setToggleMyCards(false);
    setToggleDeleteCards(true);
  };

  const handleLogout = () => {
    history.push('/');
  };

  return (
    <div style={{ paddingTop: 50 }}>
      <ListItem
        button
        selected={selectedIndex === 0}
        onClick={(event) => handleDashBoard(event, 0)}
      >
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>

      <ListItem
        button
        selected={selectedIndex === 1}
        onClick={(event) => handleMyCards(event, 1)}
      >
        <ListItemIcon>
          <CreditCard />
        </ListItemIcon>
        <ListItemText primary="My cards" />
      </ListItem>
      <ListItem
        button
        selected={selectedIndex === 2}
        onClick={(event) => handleDeleteCards(event, 2)}
      >
        <ListItemIcon>
          <DeleteOutline />
        </ListItemIcon>
        <ListItemText primary="Delete cards" />
      </ListItem>
      <ListItem
        button
        selected={selectedIndex === 2}
        onClick={(event) => handleLogout(event, 2)}
        style={{ marginTop: 500 }}
      >
        <ListItemIcon>
          <img
            src={image}
            alt="first"
            style={{ width: "11px", height: "13px" }}
          />{" "}
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </div>
  );
};
