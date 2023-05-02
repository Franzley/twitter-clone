import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

const PromptMessage = ({ handleOpen }) => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <div className="">
        <div>Don’t miss what’s happening </div>
        <div>People on Chirper are the first to know.</div>
      </div>

      <button
        onClick={() => {
          actions.noUserIsLogged("login");
          handleOpen();
        }}
      >
        login
      </button>

      <button
        onClick={() => {
          actions.noUserIsLogged("signup");
          handleOpen();
        }}
      >
        signup
      </button>
    </div>
  );
};

export default PromptMessage;
