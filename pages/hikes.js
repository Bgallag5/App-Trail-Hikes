import React from 'react'
import { getDatabase, ref, set, child, get } from "firebase/database";
import { initializeApp } from "firebase/app";
import { data } from 'autoprefixer';

const firebaseConfig = {
  databaseURL: "https://app-trail-hikes-default-rtdb.firebaseio.com/",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);

/*
set(ref(DB, `JSON endpoint to save document`), {
  data
})
*/
//create user in DB
async function writeUserData(userId, name, email, imageUrl) {
  // const db = getDatabase();
  dummyUsers.forEach(user => {
    set(ref(database, 'users/' + `${user.userId}`), {
      username: user.username,
      email: user.email,
    })
  });

  // set(ref(database, 'users/' + '654321'), {
  //   username: "Paul G",
  //   email: "pmail@gmail.com",
  //   profile_picture : 'img2.url'
  // });
}

//fetch all users in DB
async function getAllUsers(){
  const dbRef = ref(getDatabase())
  get(child(dbRef, `users`)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}

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


export default function hikes() {
  return (
    <div className='page-container'>
      <button className='bg-slate-400 h-16 w-32' onClick={() => writeUserData()}>Add User</button>
      <button className='bg-slate-600 h-16 w-32' onClick={() => getAllUsers()}>Get Users</button>
    </div>
  )
}