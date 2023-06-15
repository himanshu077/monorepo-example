import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { SIGN_IN, SIGN_OUT } from "./types";
import { auth, provider } from "../../lib/firebase";
import { Dispatch } from "redux";

// Posts action
export const signInAction = () => async (dispatch: Dispatch) => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const user = result.user;
    dispatch({
      type: SIGN_IN,
      payload: {
        token,
        user,
      },
    });
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  }
};

export const signOutAction = () => async (dispatch) => {
  try {
    await signOut(auth);
    dispatch({
      type: SIGN_OUT,
    });
  } catch (error) {}
};
