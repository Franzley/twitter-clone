import React from "react";
import { Stack } from "@mui/material";
import { icons } from "../../utils/icons";

const SidebarLeft = () => {
  return (
    <Stack sx={{ color: "white" }}>
      {icons.map((item, index) => {
        return (
          <button>
            <span key={index}>{item.icon}</span>
            <span>{item.name}</span>
          </button>
        );
      })}
      <button>Tweet</button>
    </Stack>
  );
};

export default SidebarLeft;
