import React from "react";
import { Box } from "@mui/material";

const CenterPage = ({ content }) => {
  return (
    <Box
      sx={{
        color: "white",
        width: "600px",
        borderRight: 1,
        borderColor: "#464646",
      }}
    >
      {content.pageHeader}
      {content.tweets}
    </Box>
  );
};

export default CenterPage;
