import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase/FirebaseConfig";

// TESTING FIREBASE CREATE USER FUNCTION

const [user, setUser] = useState();
const auth = getAuth(app);

function createAccount(auth, email, password) {
  createUserWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      // Signed in
      const user = userCredential.user;
      setUser;
      console.log(user);
      // ...
    }
  );

  console.log("succeeded");
}

<>
  <Stack sx={{ flexDirection: "row" }}>
    <CenterPage content={homeCenterPage} />
    <Feed />
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
      }}
    >
      <button onClick={handleOpen}>Create Account</button>
    </Box>
  </Stack>
  <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <form>
        <input placeholder="email" />
        <input placeholder="password" />
        <button
          onClick={(event) => {
            event.preventDefault();
            createAccount(auth, "af@email.com", "12345677");
          }}
        >
          s
        </button>
      </form>
    </Box>
  </Modal>
</>;
