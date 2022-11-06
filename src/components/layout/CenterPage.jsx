import React from "react";
import { Box } from "@mui/material";

const CenterPage = () => {
  const testArr = [];

  for (let i = 0; i < 50; i++) testArr.push(i);

  return (
    <Box sx={{ color: "white", borderRight: 1, borderLeft: 1 }}>
      CenterPage
      {testArr.map(() => (
        <Box sx={{ color: "white", borderRight: 1, borderLeft: 1 }}>
          CenterPage
        </Box>
      ))}
    </Box>
  );
};

export default CenterPage;
