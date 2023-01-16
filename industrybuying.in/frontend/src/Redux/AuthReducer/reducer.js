import * as types from "./actionType";
const initData = {
  isLoading: false,
  isError: false,
  userData: [],
};
export const reducer = (oldState = initData, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.POST_USER_SIGNUP_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };
    case types.POST_USER_SIGNUP_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        userData: payload,
      };
    case types.POST_USER_SIGNUP_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
        userData: [],
      };

     

    default:
      return oldState;
  }
};

