import React from "react";
import { CenterPage, Feed } from "../index";
import { Stack } from "@mui/material";

const Explore = () => {
  const exploreCenterPage = {
    pageHeader: "Trending",
  };

  return (
    <Stack sx={{ bgcolor: "black", display: "flex", flexDirection: "row" }}>
      <CenterPage content={exploreCenterPage} />
      <Feed />
    </Stack>
  );
};

export default Explore;
