import React, { useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { useParams } from "react-router-dom";
import { CenterPage, Feed } from "../index";
import { Stack, Box, Typography } from "@mui/material";

// Tweets
// Isolated page for the chirp that the user clicks on

const Chirps = () => {
  // Grabs details from the parameters in the URL
  let { id } = useParams();
  let { user } = useParams();

  const { store, actions } = useContext(Context);

  // Calls action to get the message details when the page reloads
  useEffect(() => {
    actions.getChirp(user, id);
  }, []);

  const chirpsCenterPage = {
    pageHeader: (
      <Box sx={{ padding: "12px", paddingTop: 0 }}>
        <Stack sx={{ justifyContent: "space-between", flexDirection: "row" }}>
          <Typography>{store.selectedChirp.username}</Typography>
        </Stack>
      </Box>
    ),
    chirps: (
      <Box sx={{ borderBottom: 1, padding: "12px", paddingTop: 0 }}>
        <Stack sx={{ justifyContent: "space-between", flexDirection: "row" }}>
          <Typography>{store.selectedChirp.chirp}</Typography>
        </Stack>
      </Box>
    ),
  };

  return (
    <Stack sx={{ flexDirection: "row" }}>
      <CenterPage content={chirpsCenterPage} />
      <Feed />
    </Stack>
  );
};

export default Chirps;
