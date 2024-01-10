import {
  GET_Login_Error,
  GET_Login_Success,
  GET_Login_request,
  GET_Singup_Error,
  GET_Singup_Success,
  GET_Singup_request,
} from "./actionTypes";

const initialState = {
  isLoad: false,
  isError: false,
  userdata: [],
  isAuth: false,
  createAccount: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_Singup_request:
      return {
        ...state,
        isLoad: true,
        isError: false,
        isAuth: false,
        createAccount: false,
      };
    case GET_Singup_Success:
      return {
        ...state,
        isLoad: false,
        isError: false,
        userdata: payload,
        isAuth: false,
        createAccount: true,
      };
    case GET_Singup_Error:
      return {
        ...state,
        isLoad: false,
        isError: true,
        isAuth: false,
        createAccount: false,
      };
    case GET_Login_request:
      return {
        ...state,
        isLoad: true,
        isError: false,
      };
    case GET_Login_Success:
      return {
        ...state,
        isLoad: false,
        isError: false,
        isAuth: true,
        userdata: payload,
      };
    case GET_Login_Error:
      return {
        ...state,
        isLoad: false,
        isError: true,
        isAuth: false,
      };
    default:
      return state;
  }
};

export default reducer;
