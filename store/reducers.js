// import { v4 as uuidv4 } from "uuid";
const uuid = require('uuid');

export const reducer = (state, { type, payload }) => {
  switch (type) {
    default:
      return {
        ...state,
      };
    case "LOGIN_USER":
        console.log(payload);
      return {
        ...state,
        currentUser: {
          username: payload.username,
          email: payload.email,
          userId: payload.userId,
          isLoggedIn: true,
        },
      };
  }
};
