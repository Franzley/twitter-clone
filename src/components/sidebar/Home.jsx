import React from "react";
import { Link } from "react-router-dom";
import { CenterPage, Feed } from "../index";
import ChirpButton from "../utilities/ChirpButton.jsx";

import { Stack, Box, Typography } from "@mui/material";
import { Star } from "@mui/icons-material";

const Home = () => {
  const arr = [];
  for (let i = 0; i < 50; i++) arr.push(i); //placeholder list
  const homeCenterPage = {
    pageHeader: (
      <Box sx={{ borderBottom: 1, padding: "12px", paddingTop: 0 }}>
        <Stack sx={{ justifyContent: "space-between", flexDirection: "row" }}>
          <Typography>Latest Chirps</Typography>
          <Star />
        </Stack>
        <form>
          <input className="home-input-box" placeholder="What's on your mind?" />
          <ChirpButton buttonSizing={{ height: "35px", width: "75px" }} />
        </form>
      </Box>
    ),
    chirps: (
      <ul className="chirps">
        {arr.map((item, index) => {
          return (
            <Link
              key={index}
              style={{ textDecoration: "none" }}
              to={`/status/${index}`}
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
                    <Box>{`User ${index}`}</Box>
                    <Stack>
                      <Box>Content</Box>
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
