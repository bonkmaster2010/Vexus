import { useEffect } from "react";
import { useLocation } from "react-router";
import { useMain } from "../../states/MainStates";

type ResetWrapperProps = {
  children: React.ReactNode;
};

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
