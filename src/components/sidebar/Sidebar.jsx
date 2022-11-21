import React from "react";
import { Stack, Button, Box } from "@mui/material";
import { icons } from "../../utils/icons";
import { Link } from "react-router-dom";
import "../../css/sidebar.css";
import TweetButton from "../utilities/TweetButton";

const Sidebar = () => {
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
          <Button variant="text">🕊️</Button>
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
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </Button>
            </Link>
          );
        })}

        <TweetButton buttonSizing={{ height: "50px" }} />

        <Box
          sx={{
            marginTop: "50px",
            height: "60px",
            color: "white",
            bgcolor: "black",
          }}
        ></Box>
      </Stack>
    </Box>
  );
};

export default Sidebar;
