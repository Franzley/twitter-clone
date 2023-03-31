import React from "react";
import { Box } from "@mui/material";

const CenterPage = ({ content }) => {
  return (
    <Box className="layout-centerpage">
      {content.pageHeader}
      {content.chirps}
    </Box>
  );
};

export default CenterPage;
