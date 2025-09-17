import { useEffect } from "react";
import { useLocation } from "react-router";
import { useMain } from "../../states/MainStates";

type ResetWrapperProps = {
  children: React.ReactNode;
};

// does this even work?!
// Resets things on route change (why do i have this if i have the hook ?!)
export function ResetOnRouteChange({ children }: ResetWrapperProps) {
  const location = useLocation();
  const { setShowOverlayedFilter, setShowMM, resetGroup, setSearchTerm} = useMain();
    useEffect(() => {
    resetGroup();
    setShowOverlayedFilter(false);
    setShowMM(false);
    setSearchTerm('');
  }, [location.pathname]);

  return <>{children}</>;
};
