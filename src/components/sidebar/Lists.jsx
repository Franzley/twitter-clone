import React from "react";
import { CenterPage, Feed } from "../index";
import { Stack } from "@mui/material";

const Lists = () => {
  const listsCenterPage = {
    pageHeader: <Stack>Pinned Lists</Stack>,
  };

  return (
    <Stack sx={{ bgcolor: "black", display: "flex", flexDirection: "row" }}>
      <CenterPage content={listsCenterPage} />
      <Feed />
    </Stack>
  );
};

export default Lists;
