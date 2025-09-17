import { useLocation, useSearchParams } from 'react-router';
import { useFilters } from '../../states/FilterState';
import { useEffect } from 'react';

// like adds url params & sets filters too
export function useFiltersWithQuery() {
  // Variables
  const [searchParams, setSearchParams] = useSearchParams();
  const { setSelectedSpecsArray, setSelectedTypesArray, setSelectedManufacturerArray } = useFilters();
  const location = useLocation();
 
  // useEffect #1 (checks the current url if it changes it resets all filters array)
  useEffect(() => {
  const params = new URLSearchParams(location.search);

  if (!params.has('specs') && !params.has('types') && !params.has('manufacturers')) {
    setSelectedManufacturerArray([]);
    setSelectedSpecsArray([]);
    setSelectedTypesArray([]);
  }
  }, [location.pathname])

  // add url params and updates all 3 filter arrays
  function updateFilter(
    filterType: 'specs' | 'types' | 'manufacturers',
    value: string,
  ) {
    const newParams = new URLSearchParams(searchParams.toString());
    const updated = [value]
     
    // checks if the params already has that value
    if (updated.length > 0) {
      newParams.set(filterType, updated.join(','));
    } else {
      newParams.delete(filterType);
    }

    setSearchParams(newParams);
    
    // sets based on what type we pass
    if (filterType === 'specs') setSelectedSpecsArray([value]);
    if (filterType === 'types') setSelectedTypesArray([value]);
    if (filterType === 'manufacturers') setSelectedManufacturerArray([value]); 

    return newParams;
  }

  return { updateFilter };
}
