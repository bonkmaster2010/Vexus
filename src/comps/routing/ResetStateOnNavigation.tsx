import { useEffect } from "react";
import { useLocation } from "react-router";
import { useMain } from "../../states/MainStates";
import { useFilters } from "../../states/FilterState";

type ResetWrapperProps = {
  children: React.ReactNode;
};

export function ResetOnRouteChange({ children }: ResetWrapperProps) {
  const location = useLocation();
  const { setSelectedManufacturerArray, setSelectedSpecsArray, setSelectedTypesArray } = useFilters();
  const { setShowOverlayedFilter, setShowMM, resetGroup} = useMain();
    useEffect(() => {
    resetGroup()
    setShowOverlayedFilter(false);
    setShowMM(false)
    setSelectedManufacturerArray([]);
    setSelectedSpecsArray([]);
    setSelectedTypesArray([]);
  }, [location.pathname]);

  return <>{children}</>;
};
