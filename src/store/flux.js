import { getFirestore } from "firebase/firestore";
import {
  doc,
  getDoc,
  setDoc,
  addDoc,
  collection,
  getDocs,
  query,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { app } from "../firebase/FirebaseConfig";

const getState = ({ getStore, getActions, setStore }) => {
  const db = getFirestore(app);

  const auth = getAuth(app);
  return {
    store: {
      currentUser: "",
      modalMessage: {
        sectionMessage: "Sign in to Chirper",
        accountStatusBtn: "signIn",
      },
      chirpSection: [],
    },
    actions: {
      isUserLogged: () => {
        onAuthStateChanged(auth, (user) => {
          const actions = getActions();
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const email = user.email;
            // console.log("Current User", email);
            const currentUser = {
              email: email,
            };
            setStore({ currentUser: currentUser.email });
            actions.getChirp();
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
      postChirp: (chirp) => {
        const store = getStore();
        const actions = getActions();
        console.log("submitted");
        // console.log(chirp)

        async function postToFirestore() {
          const docRef = await addDoc(collection(db, store.currentUser), {
            chirp,
            timestamp: serverTimestamp(),
          });
          console.log("Document written with ID: ", docRef.id);
        }

        postToFirestore().then(() => {
          actions.getChirp();
        });
      },
      getChirp: () => {
        const store = getStore();

        async function getFromFirestore() {
          const chirpArray = [];
          // const chirpArraySort = [];
          const querySnapshot = await getDocs(
            collection(db, store.currentUser)
          );
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            chirpArray.push({ ...doc.data(), collectionID: doc.id });
            // console.log(doc.id, " => ", doc.data());
            // console.log(doc.data().timestamp.toDate());
          });

          const sorted = chirpArray.sort((a, b) => {
            const dateA = new Date(`${a.timestamp.toDate()}`).valueOf();
            const dateB = new Date(`${b.timestamp.toDate()}`).valueOf();
            if (dateA > dateB) {
              return 1; // return -1 here for DESC order
            }
            return -1; // return 1 here for DESC Order
          });

          setStore({ chirpSection: sorted });
        }

        getFromFirestore();
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
