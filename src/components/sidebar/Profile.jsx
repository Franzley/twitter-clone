import React, { useState, useContext } from "react";
import { CenterPage, Feed } from "../index";
import { Stack, Box } from "@mui/material";
import { Context } from "../../store/appContext";

const Profile = () => {
  const [inputBox, setInputBox] = useState();

  const { store, actions } = useContext(Context);
  const profileCenterPage = {
    pageHeader: <Stack>Update Account Details</Stack>,
    accountDetails: (
      <Stack>
        <Box>Update User Name</Box>
        <input
          className="home-input-box"
          placeholder="What name do you want to be known as?"
          onChange={(e) => setInputBox(e.target.value)}
        />
        <button onClick={() => actions.updateUserName(inputBox)}>Change</button>
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
