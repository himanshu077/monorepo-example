import { useSelector, useDispatch } from "react-redux";
import { signOutAction } from "../store/auth/actions";
import { Profile } from "@demo/components/src/index";

const Home = () => {
  const user = useSelector((state: any) => state.auth.user);
  const dispatch = useDispatch();
  return (
    <Profile
      name={user.displayName}
      avatar={user.photoURL}
      email={user.email}
      onLogout={() => dispatch(signOutAction())}
    />
  );
};

export default Home;
