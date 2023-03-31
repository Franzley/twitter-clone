import React from "react";
import { Box } from "@mui/material";

const Feed = () => {
  const arr = [];
  for (let i = 0; i < 40; i++) arr.push(i); //placeholder list
  return (
    <Box className="layout-feed">
      <Box className="sticky">
        <Box className="overflow">
          MainFeed
          {arr.map(() => {
            return <p key={Math.random()}>Feed</p>;
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Feed;
