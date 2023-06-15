import { useSelector, useDispatch } from "react-redux";
import { signOutAction } from "../store/auth/actions";
import { Button, Profile } from "@demo/components/src";

const Home = () => {
  const user = useSelector((state: any) => state.auth.user);
  const dispatch = useDispatch();
  return (
    <div>
      <Profile
        name={user.displayName}
        avatar={user.photoURL}
        email={user.email}
      />
      <Button text="Logout" onClick={() => dispatch(signOutAction())} />
    </div>
  );
};

export default Home;
