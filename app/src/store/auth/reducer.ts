import { SIGN_IN, SIGN_OUT } from "./types";

const initialState = {
  loading: true,
  user: null,
  token: null,
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        token: action.payload.token,
      };
    case SIGN_OUT:
      return {
        ...state,
        loading: false,
        user: null,
        token: null,
      };
    default:
      return state;
  }
}
