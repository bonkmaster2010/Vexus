import { useLocation, useSearchParams } from 'react-router';
import { useFilters } from '../../states/FilterState';
import { useEffect } from 'react';

export function useFiltersWithQuery() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { setSelectedSpecsArray, setSelectedTypesArray, setSelectedManufacturerArray } = useFilters();
  const location = useLocation();

  useEffect(() => {
  const params = new URLSearchParams(location.search);

  if (!params.has('specs') && !params.has('types') && !params.has('manufacturers')) {
    setSelectedManufacturerArray([]);
    setSelectedSpecsArray([]);
    setSelectedTypesArray([]);
  }
  }, [location.pathname])

  function updateFilter(
    filterType: 'specs' | 'types' | 'manufacturers',
    value: string,
  ) {
    const newParams = new URLSearchParams(searchParams.toString());

    const updated = [value]

    if (updated.length > 0) {
      newParams.set(filterType, updated.join(','));
    } else {
      newParams.delete(filterType);
    }

    setSearchParams(newParams);

    if (filterType === 'specs') setSelectedSpecsArray([value]);
    if (filterType === 'types') setSelectedTypesArray([value]);
    if (filterType === 'manufacturers') setSelectedManufacturerArray([value]); 

    return newParams;
  }

  return { updateFilter };
}
