import { useFilters } from "../../states/FilterState";
import { useNavigate, useLocation } from "react-router";
import { useEffect } from "react";

// resets some filters on navigation 
function useResetFilters() {
  const navigate = useNavigate();
  const location = useLocation();
  const { setSelectedSpecsArray, setSelectedTypesArray, setSelectedManufacturerArray} = useFilters();

  function clearUrlParams() {
    if (location.search) {
      navigate({ pathname: location.pathname, search: "" }, { replace: true });
    }
  }

  useEffect(() => {
    if (!location.search) {
    setSelectedSpecsArray([]);
    setSelectedTypesArray([]);
    setSelectedManufacturerArray([]);
    }
  }, [location.search, setSelectedSpecsArray, setSelectedTypesArray]);

  return { clearUrlParams };
}

export default useResetFilters;
