import React from "react";
import { Button } from "@mui/material";

const ChirpButton = ({ buttonSizing: height, width, onClick }) => {
  return (
    <Button
      className="chirp-button"
      onClick={onClick}
      sx={{ height: height, width: width, borderRadius: 20 }}
      variant="contained"
    >
      <span>Chirp</span>
    </Button>
  );
};

export default ChirpButton;
