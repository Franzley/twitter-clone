import React from "react";
import { Stack } from "@mui/material";
import { CenterPage, Feed } from "../index";

const Notifications = () => {
  const notificationsCenterPage = {
    pageHeader: (
      <Stack>
        Nothing to see here — yet From likes to Retweets and a whole lot more,
        this is where all the action happens.
      </Stack>
    ),
  };

  return (
    <Stack sx={{ bgcolor: "black", display: "flex", flexDirection: "row" }}>
      <CenterPage content={notificationsCenterPage} />
      <Feed />
    </Stack>
  );
};

export default Notifications;
