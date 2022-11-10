import React from "react";
import { Stack } from "@mui/material";
import { CenterPage, Feed } from "../index";

const Messages = () => {
  const messagesCenterPage = {
    pageHeader: (
      <Stack>
       Welcome to your inbox!
      </Stack>
    ),
  };

  return (
    <Stack sx={{ bgcolor: "black", display: "flex", flexDirection: "row" }}>
      <CenterPage content={messagesCenterPage} />
      <Feed />
    </Stack>
  );
};

export default Messages;
