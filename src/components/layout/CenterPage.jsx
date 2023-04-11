import React from "react";
import { Box } from "@mui/material";

const CenterPage = ({ content }) => {
  return (
    <Box className="layout-centerpage">
      {content.pageHeader}
      {content.chirps}
      {content.accountDetails}
    </Box>
  );
};

export default CenterPage;
