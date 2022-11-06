import React from "react";
import { Stack, Button, Box } from "@mui/material";
import { icons } from "../../utils/icons";
import "../../css/sidebar-left.css";

const SidebarLeft = () => {
  return (
    // <Box flexGrow={0.2}>
      <Stack
        className="sidebar-left"
        sx={{
          display: "grid",
          rowGap: 2,
          // position: "fixed",
          height: '100vh'
        }}
      >
        <Button variant="text">🕊️</Button>

        {icons.map((item, index) => {
          return (
            <Button   sx={{ color: "white", bgcolor: 'red' }} variant="text">
              <span key={index}>{item.icon}</span>
              <span>{item.name}</span>
            </Button>
          );
        })}

        <Button className="tweet-btn" variant="contained">
          <span>Tweet</span>
        </Button>
      </Stack>
    // </Box>
  );
};

export default SidebarLeft;
