import React from "react";
import Home from "./components/sidebar/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Sidebar,
  Bookmarks,
  Explore,
  Lists,
  Messages,
  Notifications,
  Profile,
  Tweets
} from "./components/index.js";

import { Stack, Box } from "@mui/material";

// https://reactrouter.com/en/v6.3.0/getting-started/overview

const App = () => {
  return (
    <BrowserRouter>
      <Stack
        direction="row"
        sx={{
          width: "100%",
        }}
      >
        <Sidebar />
        <Box
          flexGrow={2}
          sx={{ width: "60%", overflowY: "auto", maxHeight: "100vh" }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/lists" element={<Lists />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/status/:id" element={<Tweets />} />
          </Routes>
        </Box>
      </Stack>
    </BrowserRouter>
  );
};

export default App;
