import { useSearchParams } from 'react-router';
import { useFilters } from '../../states/FilterState';
import { useEffect } from 'react';

export function useFiltersWithQuery() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { setSelectedSpecsArray, setSelectedTypesArray, setSelectedManufacturerArray } = useFilters();

  useEffect(() => {
  setSelectedSpecsArray([]);
  setSelectedManufacturerArray([]);
  setSelectedTypesArray([]);
  }, [location.pathname])

  function updateFilter(
    filterType: 'specs' | 'types' | 'manufacturers',
    value: string,
    singleSelectForTypes = false
  ) {
    const newParams = new URLSearchParams(searchParams.toString());
    const existing = newParams.get(filterType)?.split(',').map(v => v.trim().toLowerCase()).filter(Boolean) ?? [];

    let updated: string[];
    if (filterType === 'types' && singleSelectForTypes) {
      updated = [value];
    } else {
      if (existing.includes(value)) {
        updated = existing.filter(v => v !== value);
      } else {
        updated = [...existing, value];
      }
    }

    if (updated.length > 0) {
      newParams.set(filterType, updated.join(','));
    } else {
      newParams.delete(filterType);
    }

    setSearchParams(newParams);

    if (filterType === 'specs') setSelectedSpecsArray(updated);
    if (filterType === 'types') setSelectedTypesArray(updated);
    if (filterType === 'manufacturers') setSelectedManufacturerArray(updated); 

    return newParams;
  }

  return { updateFilter };
}
