import React from "react";
import { Box } from "@mui/material";

const CenterPage = ({ content }) => {
  return (
    <Box className="layout-centerpage">
      {/* Displays header for currently selected section */}
      {content.pageHeader}
      {/* Tweets */}
      {content.chirps}
      {/* Displays accunt details if under profile */}
      {content.accountDetails}
    </Box>
  );
};

export default CenterPage;
