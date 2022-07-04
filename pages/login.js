import React, { useEffect, useRef } from "react";
import { dispatch, state } from "../store/GlobalStore";
import { createNewUser, signupUser } from "../server/firebase";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../server/firebase";
import {useRouter} from 'next/router';

export default function hikes() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const router = useRouter();
  const emailRef = useRef()
  const passwordRef = useRef()

  const writeNewUser = async () => {
    const placeholderUserData = {
      username: "Benny",
      email: "bmail@gmail.com",
      password: "password1234",
    };
    //1. send POST request to firebase
    const response = await createNewUser(placeholderUserData);
    console.log(response);
    //2. If response.idToken: dispatch 'LOGIN_USER', ...response.data, newUser.userId: response.idToken

    if (!response?.idToken) return;
    const newUser = {
      ...placeholderUserData,
      userId: response.localId,
    };
    dispatch({ type: "LOGIN_USER", payload: newUser });
  };

  async function login() {
    let user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    const response = await loginUser(user);
    console.log(response);
    if (response.idToken){
      router.push('/home')
    }
  }

  useEffect(() => {
    console.log(state?.currentUser);
  }, [state.currentUser]);

  return (
    <div className="page-container">
      <div className="flex justify-center h-full w-full items-center">
        <div className="flex flex-col items-center w-1/3 h-1/3 p-3 justify-center bg-slate-700 rounded gap-2 shadow-slate-900 shadow-lg">
          <div className="flex flex-col gap-5 w-1/2 mb-4">
            <input
            ref={emailRef}
              className="rounded p-1 shadow-sm text-slate-900 placeholder-slate-900 outline-none focus:placeholder-slate-400 focus:shadow-emerald-400 "
              placeholder="Email"
            />
            <input
            ref={passwordRef}
              className="rounded p-1 shadow-sm shadow-black text-slate-900 placeholder-slate-900 outline-none focus:placeholder-slate-400 focus:shadow-emerald-400"
              placeholder="Password"
            />
          </div>
          <button
            className="bg-slate-200 rounded p-3 px-8 hover:bg-slate-400 active:translate-y-[1px]"
            onClick={() => login()}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

{
  /* <button className="bg-slate-400 h-16 w-32" onClick={() => writeNewUser()}>
Add User
</button>
<button className="bg-slate-600 h-16 w-32" onClick={() => getAllUsers()}>
Get Users
</button> */
}
