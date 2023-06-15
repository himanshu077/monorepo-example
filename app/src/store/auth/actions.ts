import { onSignIn, onSignOut } from "@demo/api";
import { Dispatch } from "redux";
import { SIGN_IN, SIGN_OUT } from "./types";

export const signInAction = () => async (dispatch: Dispatch) => {
  try {
    const { token, user } = await onSignIn();
    dispatch({
      type: SIGN_IN,
      payload: {
        token,
        user,
      },
    });
  } catch (error) {
    const err = error as Error;
    const parsedError = JSON.parse(err.message);
    console.log(parsedError, "error sign in");
  }
};

export const signOutAction = () => async (dispatch: Dispatch) => {
  try {
    await onSignOut();
    dispatch({
      type: SIGN_OUT,
    });
  } catch (error) {
    console.log(error, "errors are here!");
  }
};
