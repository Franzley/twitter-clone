import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Box } from "@mui/material";

const Feed = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    console.log("sfjnfksndfkjsdnkfnkfnkjgfniuafnjlk");
    actions.loadFeed();
  }, []);
  return (
    <Box className="layout-feed">
      <Box className="sticky">
        <Box className="overflow">
          Follow Other Chirper Users
          {store.listOfUsersFeed.map((item) => {
            return (
              <Link
                key={item.collectionID}
                style={{ textDecoration: "none" }}
                // to={`/status/${item.email}`}
              >
                <Button
                  sx={{ color: "white", height: "50px", width: "200px" }}
                  variant="text"
                >
                  <span>{item.username}</span>
                </Button>
                <hr />
              </Link>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Feed;
