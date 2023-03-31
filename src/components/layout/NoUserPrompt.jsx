// Display box if there is no account currently signed in
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";

import { Box, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";

import PromptMessage from "../../utils/PromptMessage";

const NoUserPrompt = () => {
  const navigate = useNavigate();

  const { store, actions } = useContext(Context);
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleChange(event) {
    const { value, name } = event.target;
    setLogin((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <Box
      className={`no-account-box ${
        store.currentUser.length && "remove-from-view"
      }`}
    >
      <PromptMessage handleOpen={handleOpen} />
      <Modal open={open} onClose={handleClose}>
        <Box className="modal-box">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {store.modalMessage.sectionMessage}
          </Typography>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              store.modalMessage.accountStatusBtn === "signIn"
                ? actions.signIn(login.email, login.password)
                : actions.createAccount(login.email, login.password);
              navigate("/");
            }}
          >
            <input
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={login.email}
            />
            <input
              placeholder="Password"
              onChange={handleChange}
              name="password"
              value={login.password}
            />
            <button type="submit">Send</button>
          </form>
        </Box>
      </Modal>
    </Box>
  );
};

export default NoUserPrompt;
