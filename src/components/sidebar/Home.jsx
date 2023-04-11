import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";
import { CenterPage, Feed } from "../index";
import ChirpButton from "../utilities/ChirpButton.jsx";

import { Stack, Box, Typography, Button } from "@mui/material";
import { Star } from "@mui/icons-material";

const Home = () => {
  const [inputBox, setInputBox] = useState();
  const { store, actions } = useContext(Context);

  const homeCenterPage = {
    pageHeader: (
      <Box sx={{ borderBottom: 1, padding: "12px", paddingTop: 0 }}>
        <Stack sx={{ justifyContent: "space-between", flexDirection: "row" }}>
          <Typography>Latest Chirps</Typography>
          <Star />
        </Stack>
        <form>
          <input
            className="home-input-box"
            placeholder="What's on your mind?"
            onChange={(e) => setInputBox(e.target.value)}
          />
          <ChirpButton
            onClick={() => actions.postChirp(inputBox)}
            buttonSizing={{ height: "35px", width: "" }}
          />
        </form>
      </Box>
    ),
    chirps: (
      <ul className="chirps">
        {store.chirpSection.map((item) => {
          return (
            <Link
              key={item.collectionID}
              style={{ textDecoration: "none" }}
              to={`/status/${item.collectionID}`}
            >
              <li>
                <Stack
                  sx={{
                    padding: "12px",
                    flexDirection: "row",
                  }}
                >
                  <Box
                    sx={{
                      marginRight: "12px",
                    }}
                  >
                    Picture
                  </Box>
                  <Stack
                    sx={{
                      flexDirection: "column",
                    }}
                  >
                    <Box>{store.currentUser}</Box>
                    <Stack>
                      <Box>{item.chirp}</Box>
                      <Box>Icons</Box>
                    </Stack>
                  </Stack>
                </Stack>
              </li>
            </Link>
          );
        })}
      </ul>
    ),
  };

  return (
    <Stack sx={{ flexDirection: "row" }}>
      <CenterPage content={homeCenterPage} />
      <Feed />
    </Stack>
  );
};

export default Home;
