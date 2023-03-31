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
    store: {
      currentUser: "",
      modalMessage: {
        sectionMessage: "Sign in to Chirper",
        accountStatusBtn: "signIn",
      },
    },
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
            setStore({ currentUser: currentUser.email });
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
            window.location.reload(false);
          }
        );
        console.log("succeeded");
      },
      signIn: (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            window.location.reload(false);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
        console.log("succeeded");
      },
      signOut: () => {
        signOut(auth)
          .then(() => {})
          .catch((error) => {
            // An error happened.
          });
      },
      noUserIsLogged: (accountStatus) => {
        const logInSection = {
          sectionMessage: "Sign in to Chirper",
          accountStatusBtn: "signIn",
        };
        const signUpSection = {
          sectionMessage: "Join Chirper today",
          accountStatusBtn: "createAccount",
        };

        if (accountStatus === "login") {
          setStore({ modalMessage: logInSection });
        } else if (accountStatus === "signup") {
          setStore({ modalMessage: signUpSection });
        }
      },
    },
  };
};

export default getState;
