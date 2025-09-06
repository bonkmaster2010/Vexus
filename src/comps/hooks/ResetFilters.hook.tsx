import { useFilters } from "../../states/FilterState";
import { useNavigate, useLocation } from "react-router";
import { useEffect } from "react";

function useResetFilters() {
  const navigate = useNavigate();
  const location = useLocation();
  const { setSelectedSpecsArray, setSelectedTypesArray } = useFilters();

  function clearUrlParams() {
    if (location.search) {
      navigate({ pathname: location.pathname, search: "" }, { replace: true });
    }
  }

  useEffect(() => {
    if (!location.search) {

    }
  }, [location.search, setSelectedSpecsArray, setSelectedTypesArray]);

  return { clearUrlParams };
}

export default useResetFilters;
