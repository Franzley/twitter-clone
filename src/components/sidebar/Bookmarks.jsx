import React from "react";
import { CenterPage, Feed } from "../index";
import { Stack } from "@mui/material";

const Bookmarks = () => {
  const bookmarksCenterPage = {
    pageHeader: <Stack>Save Chirps for later</Stack>,
  };

  return (
    <Stack sx={{ bgcolor: "black", display: "flex", flexDirection: "row" }}>
      <CenterPage content={bookmarksCenterPage} />
      <Feed />
    </Stack>
  );
};

export default Bookmarks;
