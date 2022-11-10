import React from "react";
import { Stack } from "@mui/material";
import { CenterPage, Feed } from "../index";

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
