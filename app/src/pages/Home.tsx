import { signOutAction } from "../store/auth/actions";
import { Profile } from "@demo/components/src/index";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const Home = () => {
  const user = useAppSelector(state => state.auth.user);
  const dispatch = useAppDispatch();
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
