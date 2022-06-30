// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAR3W7bau0SRiILcEBWcOjkJToLy2o_l5Y",
//   authDomain: "app-trail-hikes.firebaseapp.com",
//   databaseURL: "https://app-trail-hikes-default-rtdb.firebaseio.com",
//   projectId: "app-trail-hikes",
//   storageBucket: "app-trail-hikes.appspot.com",
//   messagingSenderId: "636435857773",
//   appId: "1:636435857773:web:d0c899df151ab661231a64",
//   measurementId: "G-RG7NW6YRSF",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const FIREBASE_KEY = process.env.FIREBASE_KEY;
// console.log(FIREBASE_KEY);

// export const loginUser = async (user) => {
//   const { email, password } = user;

//   try {
//     const response = await fetch(
//       `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_KEY}`,
//       {
//         method: "POST",
//         body: JSON.stringify({
//           email: email,
//           password: password,
//           returnSecureToken: true,
//         }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     console.log(response);
//     if (response.ok) {
//       return response.json();
//     }
//   } catch (err) {
//     console.log(err);
//     return err;
//   }
// };
