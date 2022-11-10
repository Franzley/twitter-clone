import React from "react";
import { Box } from "@mui/material";

const CenterPage = ({ content }) => {
  return (
    <Box
      sx={{
        color: "white",
        borderRight: 1,
        borderLeft: 1,
        width: "600px",
        height: "100vh",
      }}
    >
      {content.pageHeader}
      {content.tweets}
    </Box>
  );
};

export default CenterPage;
