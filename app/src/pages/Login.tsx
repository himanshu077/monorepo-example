import { useDispatch } from "react-redux";
import { GoogleLogin } from "@demo/components/src";
import { signInAction } from "../store/auth/actions";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex h-full w-full">
      <GoogleLogin onClick={() => {
        dispatch(signInAction());
      }} />
    </div>
  );
};

export default Login;
