import React, { useEffect } from "react";
import { dispatch, state } from "../store/GlobalStore";
import { createNewUser, signupUser } from "../server/firebase";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

export default function hikes() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const writeNewUser = async () => {
    const placeholderUserData = {
      username: "Paul G",
      email: "pmail@gmail.com",
      password: "password12rdf34",
    };
    //1. send POST request to firebase
    const response = await createNewUser(placeholderUserData);
    console.log(response);
    //2. If response.idToken: dispatch 'LOGIN_USER', ...response.data, newUser.userId: response.idToken

    if (!response?.idToken) return;
    const newUser = {
     ...placeholderUserData,
     userId: response.localId
    }
    dispatch({ type: "LOGIN_USER", payload: newUser });
  };

  useEffect(() => {
    console.log(state?.currentUser);
  }, [state.currentUser]);

  return (
    <div className="page-container">
      <button className="bg-slate-400 h-16 w-32" onClick={() => writeNewUser()}>
        Add User
      </button>
      <button className="bg-slate-600 h-16 w-32" onClick={() => getAllUsers()}>
        Get Users
      </button>
    </div>
  );
}
