import React from "react";
import { Stack, Box, Typography, Button } from "@mui/material";
import Modal from "@mui/material/Modal";

const LoginPrompt = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Box
      sx={{
        color: "white",
        background: "rgb(29, 155, 240)",
        position: "absolute",
        bottom: 0,
        width: "98.9%",
        height: "72px",
        zIndex: 30,
      }}
    >
      <div className="login-prompt">
        <div className="login-prompt-message">
          <div>Don’t miss what’s happening</div>
          <div>People on Chirper are the first to know.</div>
        </div>
        <div className="login-prompt-buttons">
          <Button
            sx={{
              height: "30px",
              width: "110px",
              borderRadius: 20,
              color: "white",
              background: "rgb(94 136 165)",
            }}
            className="default-btn"
            variant="outlined"
            onClick={handleOpen}
          >
            <span>
              <strong>Log in</strong>
            </span>
          </Button>
          <Button
            sx={{
              height: "30px",
              width: "110px",
              borderRadius: 20,
              background: "white",
              color: "black",
            }}
            className="default-btn"
            variant="contained"
            onClick={handleOpen}
          >
            <span>
              <strong>Sign up</strong>
            </span>
          </Button>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Sign in to Chirper
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Don't have an account? Sign up
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};

export default LoginPrompt;
