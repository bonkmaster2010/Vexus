import Footer from ".././Footer";
import Navbar from ".././Navbar";
import MobileMenu from ".././MobileMenu/MobileMenu";import { Outlet } from "react-router";
import MobileNavbar from ".././MobileMenu/MobileNavbar";
import { useMain } from "../../states/MainStates";
import { useEffect } from 'react';


function Layout() {
  const showOverlayedFilter = useMain((state) => state.showOverlayedFilter);
  const { isMobile, setIsMobile } = useMain();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 770);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
    {isMobile && <MobileMenu/>}
    {isMobile ? <MobileNavbar/> : <Navbar />}
    <Outlet />
    {!showOverlayedFilter && <Footer />}
    </>
  );
}

export default Layout;
