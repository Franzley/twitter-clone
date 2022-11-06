import React from "react";
import { Stack, Button, Box } from "@mui/material";
import { icons } from "../../utils/icons";
import "../../css/sidebar-left.css";

const SidebarLeft = () => {
  return (
    <Box flexGrow={1}>
      <Stack
        className="sidebar-left"
        sx={{
          display: "grid",
          rowGap: 2,
          height: "100vh",
          paddingRight: "12px",
          justifyContent: "flex-end",
        }}
      >
        <Button variant="text">🕊️</Button>

        {icons.map((item, index) => {
          return (
            <Button
              key={index}
              className="side-btn"
              sx={{ color: "white" }}
              variant="text"
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </Button>
          );
        })}

        <Button className="tweet-btn" variant="contained">
          <span>Tweet</span>
        </Button>
      </Stack>
    </Box>
  );
};

export default SidebarLeft;
