import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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
