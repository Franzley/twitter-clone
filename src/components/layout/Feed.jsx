import React from "react";
import { Box } from "@mui/material";

const Feed = () => {
  const arr = [];
  for (let i = 0; i < 20; i++) arr.push(i);
  return (
    <Box
      sx={{
        color: "white",
        width: "300px",
        marginLeft: "30px",
      }}
    >
      <Box sx={{ position: "sticky", top: 0 }}>
        <Box sx={{ overflowY: "auto" }}>
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
