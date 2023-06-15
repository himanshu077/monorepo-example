import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PrivateOutlet from "./PrivateOutlet";
import AuthOutlet from "./AuthOutlet";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PrivateOutlet />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route element={<AuthOutlet />}>
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
