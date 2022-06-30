import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";
import { reducer } from "./reducers";


const preloadedState = {
  currentUser: {
      username: null,
      email: null,
      isLoggedIn: null,
  },
};

const store = configureStore({
  reducer,
  preloadedState,
});



module.exports = { store };
