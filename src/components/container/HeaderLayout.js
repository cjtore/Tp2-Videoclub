import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const HeaderLayout = () => (
    <>
      <header>
        <NavBar />
      </header>
      <Outlet />
    </>
);

export default HeaderLayout;
  