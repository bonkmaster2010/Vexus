import { useSearchParams } from 'react-router';
import { useFilters } from '../../states/FilterState';
import { useEffect } from 'react';

export function useFiltersWithQuery() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { setSelectedSpecsArray, setSelectedTypesArray } = useFilters();

  useEffect(() => {
    const specs = searchParams.get('specs');
    const types = searchParams.get('types');
    const splittedSpecs = specs ? specs.split(',') : [];
    const splittedTypes = types ? types.split(',') : [];

    setSelectedSpecsArray(splittedSpecs);
    setSelectedTypesArray(splittedTypes);
  }, [searchParams]);

  function updateFilter(
  filterType: 'specs' | 'types',
  value: string,
  singleSelectForTypes = false
) {
  const newParams = new URLSearchParams(searchParams.toString());

  const existing = newParams.get(filterType)?.split(',').filter(Boolean) ?? [];
  
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
  return newParams;
}



  return { updateFilter };
}
