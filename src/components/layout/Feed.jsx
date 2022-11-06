import React from "react";
import { Stack, Box } from "@mui/material";
import { CenterPage, SidebarRight } from "../index";

const Feed = () => {
  return (
    // <Box flexGrow={1.5}>
      <Stack sx={{ bgcolor: "black", display: "flex", flexDirection: "row" }}>
        <CenterPage />
        <SidebarRight />
      </Stack>
    // </Box>
  );
};

export default Feed;
