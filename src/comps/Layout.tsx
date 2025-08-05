import { Outlet } from "react-router";
import { useMain } from "../states/MainStates";
import Footer from "./Footer";
import Navbar from "./Navbar";



function Layout() {
  const showOverlayedFilter = useMain((state) => state.showOverlayedFilter);

  return (
    <>
    <Navbar/>     
    <Outlet />
    {!showOverlayedFilter && <Footer />}
    </>
  );
}

export default Layout;
