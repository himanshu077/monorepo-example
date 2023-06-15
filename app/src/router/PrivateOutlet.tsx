import {useSelector} from "react-redux";
import {Outlet, Navigate} from "react-router-dom";

function PrivateOutlet() {
  const user = useSelector((state: any) => state.auth.user);
  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateOutlet;