import React, { useContext } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { CenterPage, Feed } from "../index";
import { Star } from "@mui/icons-material";
import "../../css/home.css";
import TweetButton from "../utilities/TweetButton.jsx";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
 
const Home = () => {
  const { store, actions } = useContext(Context);

  const arr = [];
  for (let i = 0; i < 1; i++) arr.push(i);
  const homeCenterPage = {
    pageHeader: (
      <Box sx={{ borderBottom: 1, padding: "12px", paddingTop: 0 }}>
        <Stack sx={{ justifyContent: "space-between", flexDirection: "row" }}>
          <Typography>Latest Tweets</Typography>
          <Star />
        </Stack>
        <form>
          <input className="inputHome" placeholder="What's on your mind?" />
          <TweetButton buttonSizing={{ height: "35px", width: "75px" }} />
        </form>
      </Box>
    ),
    tweets: (
      <ul className="tweets">
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
