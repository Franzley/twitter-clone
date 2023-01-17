import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { app } from "../firebase/FirebaseConfig";

const getState = ({ getStore, getActions, setStore }) => {
  const auth = getAuth(app);
  return {
    store: {},
    actions: {
      isUserLogged: () => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const email = user.email;
            console.log("Current User", email);
            const currentUser = {
              email: email,
            };
            setStore({ currentUser: currentUser });
            // ...
          } else {
            // User is signed out
            // ...
          }
        });
      },
      createAccount: (email, password) => {
        createUserWithEmailAndPassword(auth, email, password).then(
          (userCredential) => {
            const user = userCredential.user;
            console.log(user);
          }
        );
        console.log("succeeded");
      },
      signIn: (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      },
      signOut: () => {
        signOut(auth)
          .then(() => {})
          .catch((error) => {
            // An error happened.
          });
      },
    },
  };
};

export default getState;
