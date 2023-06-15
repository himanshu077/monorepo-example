import {Outlet, Navigate} from "react-router-dom";
import { useAppSelector } from "../store/hooks";

function PrivateOutlet() {
  const user = useAppSelector((state) => state.auth.user);
  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateOutlet;