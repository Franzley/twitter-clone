import React from "react";
import { Stack, Box } from "@mui/material";
import { CenterPage, SidebarRight } from "../index";

const Feed = () => {
  return (
    <Box
      flexGrow={2}
      sx={{ width: "60%", overflowY: "auto", maxHeight: "100vh" }}
    >
      <Stack
        // className="right-side"
        sx={{ bgcolor: "black", display: "flex", flexDirection: "row" }}
      >
        <CenterPage />
        <SidebarRight />
      </Stack>
    </Box>
  );
};

export default Feed;
