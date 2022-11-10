import React from "react";
import { Stack } from "@mui/material";
import { CenterPage, Feed } from "../index";

const Profile = () => {
  const profileCenterPage = {
    pageHeader: (
      <Stack>
        Who to follow
      </Stack>
    ),
  };

  return (
    <Stack sx={{ bgcolor: "black", display: "flex", flexDirection: "row" }}>
      <CenterPage content={profileCenterPage} />
      <Feed />
    </Stack>
  );
};

export default Profile;
