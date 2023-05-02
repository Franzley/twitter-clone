import { getFirestore } from "firebase/firestore";
import {
  addDoc,
  collection,
  getDocs,
  doc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/FirebaseConfig";

import { getStorage, ref } from "firebase/storage";

const getState = ({ getStore, getActions, setStore }) => {
  const db = getFirestore(app);

  // Initialize Cloud Storage and get a reference to the service
  const storage = getStorage(app);

  const auth = getAuth(app);
  return {
    store: {
      currentUser: "",
      selectedChirp: "",
      currentUserEmail: "",
      listOfUsersFeed: [],
      modalMessage: {
        sectionMessage: "Sign in to Chirper",
        accountStatusBtn: "signIn",
      },
      chirpSection: [],
      chirpSectionDefault: [],
    },
    actions: {
      isUserLogged: () => {
        // When page loads, detect if there is a user currently logged in or not
        onAuthStateChanged(auth, (user) => {
          const actions = getActions();
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            //console.log("current user details", user);

            setStore({
              currentUser: user.displayName ? user.displayName : user.email,
            });
            setStore({
              currentUserEmail: user.email,
            });
            actions.getChirp();
            // ...
          } else {
            // User is signed out
            // ...
            actions.getChirpDefault();
          }
        });
      },
      createAccount: (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            //console.log(user);
          })
          .then(() => {
            async function storeUser() {
              const docRef = await addDoc(collection(db, "users"), {
                email,
              });
              //console.log("Document written with ID: ", docRef.id);
            }

            storeUser();
            window.location.reload(false);
          });
        //console.log("succeeded");
      },
      loadFeed: () => {
        async function getFromFirestore() {
          const chirpArray = [];
          const querySnapshot = await getDocs(collection(db, "users"));
          querySnapshot.forEach((doc) => {
            chirpArray.push({ ...doc.data(), collectionID: doc.id });
          });

          setStore({ listOfUsersFeed: chirpArray });
        }
        getFromFirestore();
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
        //console.log("succeeded");
      },
      signOut: () => {
        signOut(auth)
          .then(() => {})
          .catch((error) => {
            // An error happened.
          });
      },
      postChirp: (chirp) => {
        // Submit the message and store details inside the firestore database
        const store = getStore();
        const actions = getActions();
        //console.log("submitted");

        async function postToFirestore() {
          const docRef = await addDoc(collection(db, store.currentUserEmail), {
            chirp,
            timestamp: serverTimestamp(),
          });
          //console.log("Document written with ID: ", docRef.id);
        }

        // After posting the message, immediately retrieve the message from the database
        postToFirestore().then(() => {
          actions.getChirp();
        });
      },
      getChirp: (user, id) => {
        const store = getStore();
        // Retrieve details only for the clicked message
        // Otherwise, display all tweets associated with the user
        if (id) {
          async function getFromFirestore() {
            const docRef = doc(db, user, id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
              setStore({ selectedChirp: docSnap.data() });
            } else {
              // docSnap.data() will be undefined in this case
              //console.log("No such document!");
            }
          }
          getFromFirestore();
        } else {
          async function getFromFirestore() {
            const chirpArray = [];
            const querySnapshot = await getDocs(
              collection(db, store.currentUserEmail)
            );
            querySnapshot.forEach((doc) => {
              chirpArray.push({ ...doc.data(), collectionID: doc.id });
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
        }
      },
      getChirpDefault: () => {
        // Load users chirps when signed out
        async function getFromFirestore2() {
          const chirpArray = [];
          const querySnapshot2 = await getDocs(collection(db, "defaultlist"));
          querySnapshot2.forEach((doc) => {
            chirpArray.push({ ...doc.data(), collectionID: doc.id });
          });

          chirpArray.map((item) => {
            async function getFromFirestore() {
              const chirpArray2 = [];
              const querySnapshot = await getDocs(collection(db, item.email));
              querySnapshot.forEach((doc) => {
                chirpArray2.push({ ...doc.data(), collectionID: doc.id });
              });

              const sorted = chirpArray2.sort((a, b) => {
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
          });
        }
        getFromFirestore2();
      },
      updateUserName: (name) => {
        const store = getStore();

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => {
            // Profile updated!
            // ...
            window.location.reload(false);
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
      },
      noUserIsLogged: (accountStatus) => {
        // Used to change the displayed information depending on the button the user clicked on
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
