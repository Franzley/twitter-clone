import React from "react";
import { Stack } from "@mui/material";
import { CenterPage, Feed } from "../index";

const Bookmarks = () => {
  const bookmarksCenterPage = {
    pageHeader: (
      <Stack>
        Save Tweets for later
      </Stack>
    ),
  };

  return (
    <Stack sx={{ bgcolor: "black", display: "flex", flexDirection: "row" }}>
      <CenterPage content={bookmarksCenterPage} />
      <Feed />
    </Stack>
  );
};

export default Bookmarks;
