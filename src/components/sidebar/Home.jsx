import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";
import { CenterPage, Feed } from "../index";
import ChirpButton from "../utilities/ChirpButton.jsx";

import { Stack, Box, Typography } from "@mui/material";
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
          //console.log(item);
          return (
            // Each message is a clickable link that allows user to open up message
            <Link
              key={item.collectionID}
              style={{ textDecoration: "none" }}
              to={`/status/${item.email}/${item.collectionID}`}
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
                    <img
                      width="30px"
                      height="30px"
                      src="https://firebasestorage.googleapis.com/v0/b/twitter-clone-99e67.appspot.com/o/default-avatar-icon-of-social-media-user-vector.jpg?alt=media&token=96fb19c4-4895-471c-8ba1-9d57a8c0c813"
                    />
                  </Box>
                  <Stack
                    sx={{
                      flexDirection: "column",
                    }}
                  >
                    <Box>{store.currentUser || item.username}</Box>
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
