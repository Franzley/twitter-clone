import React from "react";
import { Stack } from "@mui/material";
import { CenterPage, SidebarRight } from "../index";

const Feed = () => {
  return (
    <Stack sx={{ bgcolor: "black", display: "flex", flexDirection: "row"}}>
      <CenterPage />
      <SidebarRight />
    </Stack>
  );
};

export default Feed;
