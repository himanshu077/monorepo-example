import { Outlet, Navigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

function AuthOutlet() {
  const user = useAppSelector((state) => state.auth.user);
  return user ? <Navigate to="/" /> : <Outlet />;
}

export default AuthOutlet;
