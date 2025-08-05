import { useEffect } from "react";
import { useLocation } from "react-router";
import { useMain } from "../../states/MainStates";

type ResetWrapperProps = {
  children: React.ReactNode;
};

export function ResetOnRouteChange({ children }: ResetWrapperProps) {
  const location = useLocation();
  const { setShowOverlayedFilter } = useMain();
    useEffect(() => {
    setShowOverlayedFilter(false);
  }, [location.pathname]);

  return <>{children}</>;
};
