import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import { CenterPage, Feed } from "../index";
import { Star } from "@mui/icons-material";
import "../../css/home.css";
import TweetButton from "../utilities/TweetButton.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  const arr = []
  for (let i=0; i<50; i++) arr.push(i)
  const homeCenterPage = {
    pageHeader: (
      <Box sx={{ borderBottom: 1, padding: "12px" }}>
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
        <Link style={{ textDecoration: "none" }} to="/status/1">
          {arr.map((item, index)=>{
            return <li key={index}>
            <Box
              sx={{
                padding: "12px",
              }}
            >
              Example
            </Box>
          </li>
          })}
        </Link>
      </ul>
    ),
  };

  return (
    <Stack sx={{ bgcolor: "black", display: "flex", flexDirection: "row" }}>
      <CenterPage content={homeCenterPage} />
      <Feed />
    </Stack>
  );
};

export default Home;
