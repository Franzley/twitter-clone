import React from "react";
import Feed from "./components/layout/Feed.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarLeft } from "./components/index.js";
import { Stack } from "@mui/material";

// https://reactrouter.com/en/v6.3.0/getting-started/overview

const App = () => {
  return (
    <BrowserRouter>
      <Stack direction="row"
       sx={{
        width: '100%'
      }}
      >
        <SidebarLeft />
        <Routes>
          <Route path="/" element={<Feed />} />
        </Routes>
      </Stack>
    </BrowserRouter>
  );
};

export default App;
