import { useState, useEffect } from "react";
import AppRouter from "./router";
import { auth } from "./lib/firebase";
import { SIGN_IN } from "./store/auth/types";
import { useAppDispatch } from "./store/hooks";

function App() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(function (user: any) {
      if (user) {
        dispatch({
          type: SIGN_IN,
          payload: {
            user,
            token: user.token,
          },
        });
        setLoading(false)
      } else {
        setLoading(false)
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="h-full w-full">
      {loading ? <p>Loading...</p>: <AppRouter />}
    </div>
  )
}

export default App;
