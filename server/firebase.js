import { initializeApp } from "firebase/app";
import {v4 as uuidv4} from 'uuid';
import { getDatabase, ref, set, child, get } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://app-trail-hikes-default-rtdb.firebaseio.com/",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);


export const loginUser = async () => {};
export const logoutUser = async () => {};


////GET
//fetch all users in DB
export const getAllUsers = async () => {
  const dbRef = ref(getDatabase());
  get(child(dbRef, `users`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};



////POST
/*
set(ref(DB, `JSON endpoint to save document`), {
  data
})
*/
//create user in DB
export const createNewUser = async (userData) => {
  // const db = getDatabase();
  // const newUserId = uuidv4();
  // console.log(newUserId);
    set(ref(database, "users/" + `${userData.userId}`), {
      username: userData.username,
      email: userData.email,
      userId: userData.userId
    });
};






////PATCH




////DELETE


const dummyUsers = [
  {
    username: 'Ben G',
    email: 'bmail@gmail.com',
    userId: '123456',
  },
  {
    username: 'Paul G',
    email: 'pmail@gmail.com',
    userId: '654321',
  }
] 