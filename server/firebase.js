import { initializeApp } from "firebase/app";
import { v4 as uuidv4 } from "uuid";
// import dotenv from 'dotenv';
const dotenv = require('dotenv');
dotenv.config();
import { getDatabase, ref, set, child, get } from "firebase/database";
const FIREBASE_KEY = process.env.REACT_APP_FIREBASE_AUTH_KEY;
console.log(FIREBASE_KEY);

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyAR3W7bau0SRiILcEBWcOjkJToLy2o_l5Y",
  authDomain: "app-trail-hikes.firebaseapp.com",
  //databaseURL: "https://app-trail-hikes-default-rtdb.firebaseio.com/",
  databaseURL: "https://app-trail-hikes-default-rtdb.firebaseio.com",
  projectId: "app-trail-hikes",
  storageBucket: "app-trail-hikes.appspot.com",
  messagingSenderId: "636435857773",
  appId: "1:636435857773:web:d0c899df151ab661231a64",
  measurementId: "G-RG7NW6YRSF",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

////GET
//fetch all users in DB
export const getAllUsers = async () => {
  let allUsers;
  const dbRef = ref(getDatabase());
  await get(child(dbRef, `users`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        allUsers = snapshot.val();
        console.log(allUsers);
        // return allUsers;
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
    console.log(allUsers);
  return allUsers;
};

////POST
/*
set(ref(DB, `JSON endpoint to save document`), {
  data
})
*/
//create user in DB
export const createNewUser = async (userData) => {
  //fetch all users
  const exisitingUsers = await getAllUsers();
  const existUser = exisitingUsers && [...Object.values(exisitingUsers)].find((user) => {
    console.log(user);
    return user.email == userData.email
  });
  console.log(existUser);
  if (existUser){
    //setAppMessage
    console.log("USER ALREADY EXISTS IN DB");
    return
  }

  //set user Auth in FirebaseDB
  const newUser = await signupUser(userData);
  console.log(newUser);

  //if a user is not created, return
  if (!newUser?.idToken) return;

  //create user in Firebase DB
   set(ref(database, "users/" + `${newUser.localId}`), {
    username: userData.username,
    email: userData.email,
    userId: newUser.localId,
    idToken: newUser.idToken,
  });

  return newUser;
};

//auth signUp - firebase Authentication
export const signupUser = async (user) => {
  console.log(user);
  const { email, password } = user;

  try {
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseConfig.apiKey}`,
      {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    if (response.ok) {
      return response.json();
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const loginUser  = async (userData) => {
  const {email, password } = userData;


  try {
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseConfig.apiKey}`,
      {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    if (response.ok) {
      return response.json();
    }
  } catch (err) {
    console.log(err);
    return err;
  }

}

const checkExistingUser = (email) => {};

////PATCH

////DELETE




