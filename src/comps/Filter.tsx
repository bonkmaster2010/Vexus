import FilterShowGroupBtn from './SC/Filter_Show_Group_btn';
import { useFiltersWithQuery } from './hooks/useFilterWithQuery';
import { useFilters } from '../states/FilterState';
import { useState } from 'react';
import { useMain } from '../states/MainStates';
import type { FilterProps } from '../utils/interfaces/components/SC.if';
import '../styles/Filter.css';

function Filter({ specArr, typeArr, manufacturer }: FilterProps) {
  const { selectedTypes, selectedSpecs } = useFilters();
  const { updateFilter } = useFiltersWithQuery();
  const { expandedGroups } = useMain();

  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  return (
    <div className="filtering-container">
      {/* Manufacturers */}
      {manufacturer.length > 0 && (
        <div className="filter-group">
          <legend className="filter-group-title">Manufacturers</legend>
          <div
            className={
              expandedGroups.manufacturer == 'manu' ? 'filter-options' : 'filter-options scrollable'
            }
          >
            {manufacturer.map((m) => (
              <label key={m.id} className="filter-checkbox-cont" htmlFor={`manu-${m.id}`}>
                <input
                  id={`manu-${m.id}`}
                  type="checkbox"
                  checked={selectedTypes.includes(m.id)}
                  onChange={() => updateFilter('types', m.id)}
                />
                {m.title}
              </label>
            ))}
          </div>
         
          {manufacturer.length > 6 && <FilterShowGroupBtn type='manufacturer' val='manu'/>}

          <div className='pdr-long'/>
        </div>
      )}

      {/* Types */}
      {typeArr.length > 0 && (
        <div className="filter-group">
          <legend className="filter-group-title">Types</legend>
          <div
            className={expandedGroups.types == 'type' ? 'filter-options' : 'filter-options scrollable'}
          >
            {typeArr.map((type) => (
              <label key={type.id} className="filter-checkbox-cont" htmlFor={`type-${type.id}`}>
                <input
                  id={`type-${type.id}`}
                  type="checkbox"
                  checked={selectedTypes.includes(type.id)}
                  onChange={() => updateFilter('types', type.id)}
                />
                {type.title}
              </label>
            ))}
          </div>
          
          {typeArr.length >  6 && <FilterShowGroupBtn type='type' val='type'/>}
          
          <div className='pdr-long'/>
        </div>
      )}

      {/* Specs */}
      {specArr.length > 0 &&
        specArr.map((spec) => (
          <div key={spec.id} className="filter-group">
            <legend className="filter-group-title">{spec.name}</legend>
            <div className={expandedGroups.spec == spec.name ? "filter-options" : "filter-options scrollable"}>
              {spec.data.map((s) => (
                <label
                  key={s}
                  className="filter-checkbox-cont"
                  htmlFor={`spec-${spec.id}-${s}`}
                >
                  <input
                    id={`spec-${spec.id}-${s}`}
                    type="checkbox"
                    checked={selectedSpecs.includes(s)}
                    onChange={() => updateFilter('specs', s)}
                  />
                  {s}
                </label>
              ))}
            </div>
          
          {spec.data.length > 6 && <FilterShowGroupBtn type='spec' val={spec.name}/>}

            <div className='pdr-long'/>
          </div>
        ))}

      {/* Price (local state only) */}
      <div className="filter-group">
        <legend className="filter-group-title">Price (USD)</legend>
        <div className="filtering-inputs">
          <input
            type="number"
            min={0}
            placeholder="Min"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            aria-label="Minimum price"
          />
          <span>to</span>
          <input
            type="number"
            min={0}
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            aria-label="Maximum price"
          />
        </div>
      </div>
    </div>
  );
}

export default Filter;
