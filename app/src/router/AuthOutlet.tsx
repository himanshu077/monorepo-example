import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

function AuthOutlet() {
  const user = useSelector((state: any) => state.auth.user);
  console.log('user in auth')
  return user ? <Navigate to="/" /> : <Outlet />;
}

export default AuthOutlet;
