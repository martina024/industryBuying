import axios from "axios";
import * as types from "./actionType";

const postUserSignupRequest = () => {
  return { type: types.POST_USER_SIGNUP_REQUEST };
};

const postUserSignupSuccess = (payload) => {
  return { type: types.POST_USER_SIGNUP_SUCCESS, payload };
};

const postUserSignupFailure = () => {
  return { type: types.POST_USER_SIGNUP_FAILURE };
};