import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import AppRouter from "./router";
import { auth } from "./lib/firebase";
import { SIGN_IN } from "./store/auth/types";

function App() {
  const dispatch = useDispatch();
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
    <div>
      {loading ? <p>Loading...</p>: <AppRouter />}
    </div>
  )
}

export default App;
