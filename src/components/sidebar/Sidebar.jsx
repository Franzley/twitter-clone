import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";

import ChirpButton from "../utilities/ChirpButton";
import { icons } from "../../utils/icons";
import chirper from "../../images/chirper.ico";

import { Stack, Button, Box } from "@mui/material";

const Sidebar = () => {
  const { store, actions } = useContext(Context);
  return (
    <Box flexGrow={1}>
      <Stack
        className="sidebar"
        sx={{
          display: "grid",
          rowGap: 2,
          height: "100vh",
          paddingRight: "20px",
          justifyContent: "flex-end",
          borderRight: 1,
          borderColor: "#464646",
        }}
      >
        <Link style={{ textDecoration: "none" }} to="/home">
          <Button variant="text">
            <img className="page-icon" src={chirper} width="35px" />
          </Button>
        </Link>

        {icons.map((item, index) => {
          return (
            <Link
              style={{ textDecoration: "none" }}
              key={index}
              to={`/${item.name.toLowerCase()}`}
            >
              <Button
                sx={{ color: "white", height: "50px", width: "200px" }}
                variant="text"
              >
                <span className="sidebar-icon">{item.icon}</span>
                <span>{item.name}</span>
              </Button>
            </Link>
          );
        })}

        <ChirpButton buttonSizing={{ height: "50px" }} />
        <button
          className={`${!store.currentUser.length && "remove-from-view"}`}
          onClick={() => {
            actions.signOut();
            window.location.reload(false);
          }}
        >
          logout
        </button>
        <Box
          className={`${!store.currentUser.length && "remove-from-view"}`}
          sx={{
            height: "60px",
            color: "white",
            bgcolor: "black",
          }}
        >
          {store.currentUser}
        </Box>
      </Stack>
    </Box>
  );
};

export default Sidebar;
