import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// doesn't work idk why i keep trying to fix it but nothing works 
export default function ScrollToTop({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      window.scrollTo({ top: 10, behavior: "auto" });
    });
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return <>{children}</>;
}
