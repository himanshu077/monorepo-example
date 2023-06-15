import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "./firebase";

export const onSignIn = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const user = result.user;

    return {
      token,
      user,
    };
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);

    throw new Error(
      JSON.stringify({
        errorCode,
        errorMessage,
        email,
        credential,
      })
    );
  }
};

export const onSignOut = async () => {
  await signOut(auth);
  return true;
};
