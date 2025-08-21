import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useMain } from "../../states/MainStates";

export default function ScrollRestorationWrapper({ children }: { children: React.ReactNode }) {
    const { pathname } = useLocation();
    const [showChildren, setShowChildren] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        const timeout = setTimeout(() => {
            setShowChildren(true);
        }, 50);

        return () => {
            clearTimeout(timeout);
            setShowChildren(false);
        };
    }, [pathname]);

  const setIsMobile = useMain((s) => s.setIsMobile);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 770);
    checkMobile(); 
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [setIsMobile]);

    return showChildren ? <>{children}</> : null;
}
