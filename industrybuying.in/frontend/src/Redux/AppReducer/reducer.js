import * as types from "./actionType";
const initData = {
  isLoading: false,
  isError: false,
  products: [],
};
export const reducer = (oldState = initData, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_PRODUCTS_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };
    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        products: payload,
      };
    case types.GET_PRODUCTS_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
        products: [],
      };

     

    default:
      return oldState;
  }
};

