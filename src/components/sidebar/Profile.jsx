import React from "react";
import { CenterPage, Feed } from "../index";
import { Stack } from "@mui/material";

const Profile = () => {
  const profileCenterPage = {
    pageHeader: <Stack>Who to follow</Stack>,
  };

  return (
    <Stack sx={{ bgcolor: "black", display: "flex", flexDirection: "row" }}>
      <CenterPage content={profileCenterPage} />
      <Feed />
    </Stack>
  );
};

export default Profile;
