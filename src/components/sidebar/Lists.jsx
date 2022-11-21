import React from "react";
import { Stack } from "@mui/material";
import { CenterPage, Feed } from "../index";

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
