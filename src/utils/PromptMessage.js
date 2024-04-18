import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

const PromptMessage = ({ handleOpen }) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="no-account">
      <div className="no-account-message">
        <div>Don’t miss what’s happening </div>
        <div>People on Chirper are the first to know.</div>
      </div>

      <div className="btn-auth-wrapper">
        <button className="btn-auth"
          onClick={() => {
            actions.noUserIsLogged("login");
            handleOpen();
          }}
        >
          <span>login</span><i></i>

        </button>

        <button className="btn-auth"
          onClick={() => {
            actions.noUserIsLogged("signup");
            handleOpen();
          }}
        >
          <span>signup</span><i></i>
        </button>
      </div>
    </div>
  );
};

export default PromptMessage;
