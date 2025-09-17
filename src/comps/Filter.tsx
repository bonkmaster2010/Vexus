import Svg from '../utils/extras/Svgs';
import FilterShowGroupBtn from './SC/Filter_Show_Group_btn';
import { useFilters } from '../states/FilterState';
import { useMain } from '../states/MainStates';
import { useSearchParams } from 'react-router';
import type { FilterProps } from '../utils/interfaces/components/SC.if';
import '../styles/Filter.css';

function Filter({ specArr, typeArr, manufacturer }: FilterProps) {
  // Variables
  const {
    selectedTypes,
    selectedManufacturers,
    selectedSpecs,
    setSelectedTypes,
    setSelectedManufacturers,
    setSelectedSpecs,
    setMinPrice,
    maxPrice,
    minPrice,
    setMaxPrice,
  } = useFilters();

  const [searchParams, setSearchParams] = useSearchParams();
  const { expandedGroups } = useMain();
  
  // adds value to url params 
  function addQueryValue(key: string, value: string) {
    const val = value.toLowerCase().trim();
    const params = new URLSearchParams(searchParams.toString());
    const existing = params.get(key)?.split(',').filter(Boolean) ?? [];
    if (!existing.includes(val)) existing.push(val);
    params.set(key, existing.join(','));
    setSearchParams(params);
  }

  // removes value from url params
  function removeQueryValue(key: string, value: string) {
    const val = value.toLowerCase().trim();
    const params = new URLSearchParams(searchParams.toString());
    const existing = params.get(key)?.split(',').filter(Boolean) ?? [];
    const updated = existing.filter((v) => v !== val);
    if (updated.length > 0) params.set(key, updated.join(','));
    else params.delete(key);
    setSearchParams(params);
  }

  return (
    <>
      <div className="filtering-container">
        {/* Manufacturers */}
        {manufacturer.length > 0 && (
          <div className="filter-group">
            <legend className="filter-group-title">Manufacturers</legend>
            <div
              className={
                expandedGroups.manufacturer === 'manu'
                  ? 'filter-options'
                  : 'filter-options scrollable'
              }
            >
              {manufacturer.map((m) => {
                const normalizedId = m.id.trim().toLowerCase();
                return (
                  <label
                    key={m.id}
                    className="filter-checkbox-cont"
                    htmlFor={`manu-${normalizedId}`}
                  >
                    <div
                      id={`manu-${normalizedId}`}
                      className={`checkbox ${selectedManufacturers.includes(normalizedId.toLowerCase()) ? 'checked' : ''}`}
                      onClick={() => {
                        if (selectedManufacturers.includes(normalizedId))
                          removeQueryValue('manufacturers', normalizedId);
                        else addQueryValue('manufacturers', normalizedId);

                        setSelectedManufacturers(normalizedId);
                      }}
                    >
                    {selectedManufacturers.includes(normalizedId.toLowerCase()) && <Svg type="checkmark"/>}
                    </div>
                    {m.title}
                  </label>
                );
              })}
            </div>
            {manufacturer.length > 6 && (
              <FilterShowGroupBtn type="manufacturer" val="manu" />
            )}
            <div className="pdr-long" />
          </div>
        )}

        {/* Types */}
        {typeArr.length > 0 && (
          <div className="filter-group">
            <legend className="filter-group-title">Types</legend>
            <div
              className={
                expandedGroups.types === 'type'
                  ? 'filter-options'
                  : 'filter-options scrollable'
              }
            >
              {typeArr.map((type) => {
                const normalizedId = type.id.trim().toLowerCase();
                return (
                  <label
                    key={type.id}
                    className="filter-checkbox-cont"
                    htmlFor={`type-${normalizedId}`}
                  >
                    <div
                      id={`type-${normalizedId}`}
                      className={`checkbox ${selectedTypes.includes(normalizedId.toLowerCase()) ? 'checked' : ''}`}
                      onClick={() => {
                        if (selectedTypes.includes(normalizedId))
                          removeQueryValue('types', normalizedId);
                        else addQueryValue('types', normalizedId);

                        setSelectedTypes(normalizedId);
                      }}
                    >
                    {selectedTypes.includes(normalizedId.toLowerCase()) && <Svg type="checkmark"/>}
                    </div>
                    {type.title}
                  </label>
                );
              })}
            </div>
            {typeArr.length > 6 && (
              <FilterShowGroupBtn type="type" val="type" />
            )}
            <div className="pdr-long" />
          </div>
        )}

        {/* Specs */}
        {specArr.length > 0 &&
          specArr.map((spec) => (
            <div key={spec.id} className="filter-group">
              <legend className="filter-group-title">{spec.name}</legend>
              <div
                className={
                  expandedGroups.spec === spec.name
                    ? 'filter-options'
                    : 'filter-options scrollable'
                }
              >
                {spec.data.map((s) => {
                  const normalizedSpec = s.trim().toLowerCase();
                  return (
                    <label
                      key={s}
                      className="filter-checkbox-cont"
                      htmlFor={`spec-${spec.id}-${normalizedSpec}`}
                    >
                      <div
                        id={`spec-${spec.id}-${normalizedSpec}`}
                        className={`checkbox ${selectedSpecs.includes(normalizedSpec.toLowerCase()) ? 'checked' : ''}`}
                        onClick={() => {
                          if (selectedSpecs.includes(normalizedSpec))
                            removeQueryValue('specs', normalizedSpec);
                          else addQueryValue('specs', normalizedSpec);

                          setSelectedSpecs(normalizedSpec);
                        }}
                      >
                    {selectedSpecs.includes(normalizedSpec.toLowerCase()) && <Svg type="checkmark"/>}
                      </div>
                      {s}
                    </label>
                  );
                })}
              </div>
              {spec.data.length > 6 && (
                <FilterShowGroupBtn type="spec" val={spec.name} />
              )}
              <div className="pdr-long" />
            </div>
          ))}

        {/* Price */}
        {(manufacturer.length > 0 || typeArr.length > 0 || specArr.length > 0) && <div className="filter-group">
          <legend className="filter-group-title">Price (USD)</legend>
          <div className="filtering-inputs">
            <input
              type="string"
              placeholder="Min"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              aria-label="Minimum price"
            />
            <span>to</span>
            <input
              type="string"
              placeholder="Max"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              aria-label="Maximum price"
            />
          </div>
        </div>}
      </div>
      {(manufacturer.length > 0 || typeArr.length > 0 || specArr.length > 0) && <div className="vr" />}
    </>
  );
}

export default Filter;
