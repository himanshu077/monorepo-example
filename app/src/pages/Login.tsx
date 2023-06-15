import { GoogleLogin } from "@demo/components/src";
import { signInAction } from "../store/auth/actions";
import { useAppDispatch } from "../store/hooks";

const Login = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex h-full w-full">
      <GoogleLogin onClick={() => {
        dispatch(signInAction());
      }} />
    </div>
  );
};

export default Login;
