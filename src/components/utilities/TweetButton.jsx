import React from "react";
import { Button } from "@mui/material";

const TweetButton = ({ buttonSizing: height, width }) => {
  return (
    <Button
      className="default-btn"
      sx={{ height: height, width: width, borderRadius: 20 }}
      variant="contained"
    >
      <span>Tweet</span>
    </Button>
  );
};

export default TweetButton;
