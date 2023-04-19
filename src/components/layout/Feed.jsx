import React, { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";
import { Button, Box } from "@mui/material";

const Feed = () => {
  const { store, actions } = useContext(Context);

  // Calls action to get the users feed when the page reloads
  useEffect(() => {
    actions.loadFeed();
  }, []);

  return (
    <Box className="layout-feed">
      <Box className="sticky">
        <Box className="overflow">
          Follow Other Chirper Users
          {store.listOfUsersFeed.map((item) => {
            return (
              <Link key={item.collectionID} style={{ textDecoration: "none" }}>
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
