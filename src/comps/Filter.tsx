import { useFiltersWithQuery } from './hooks/useFilterWithQuery';
import { useFilters } from '../states/FilterState';
import { useState } from 'react';
import type { FilterProps } from '../utils/interfaces/components/SC.if';
import '../styles/Filter.css';

function Filter({ specArr, typeArr, manufacturer}: FilterProps) {
    const { selectedTypes, selectedSpecs } = useFilters();
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const { updateFilter } = useFiltersWithQuery();

    
       console.log(specArr)

    return (
        <div className="filtering-container">
            
            {/* Manufacturers */}
            {manufacturer.length > 0  && <div className="filter-group">
                <h4 className="filter-group-title">Manufacturers</h4>
                <div className="filter-options">
                    {manufacturer.map((m) => (
                        <label key={m.id} className="filter-checkbox-cont">
                            <input
                                type="checkbox"
                                checked={selectedTypes.includes(m.id)}
                                onChange={() => updateFilter('types', m.id)}
                            />
                            {m.title}
                        </label>
                    ))}
                </div>
                <hr />
            </div>}

            {/* Types */}
            {typeArr.length > 0 && <div className="filter-group">
                <h4 className="filter-group-title">Types</h4>
                <div className="filter-options">
                    {typeArr.map((type) => (
                        <label key={type.id} className="filter-checkbox-cont">
                            <input
                                type="checkbox"
                                checked={selectedTypes.includes(type.id)}
                                onChange={() => updateFilter('types', type.id)}
                            />
                            {type.title}
                        </label>
                    ))}
                </div>
                <hr />
            </div>}

            
            {/* Specs */}
           {specArr.length > 0  && specArr.map((spec) => (
            <div key={spec.id} className='filter-group'>
                <h4 className='filter-group-title'>{spec.name}</h4>
                
                {spec.data.map((s) => (
                <div className="filter-options">
                        <label className='filter-checkbox-cont'>
                        <input
                        type='checkbox'
                        checked={selectedSpecs.includes(s)}
                        onChange={() => updateFilter('specs', s)}
                        />
                        {s}
                        </label>
                </div>   
                ))}
                <hr/>
            </div>
        ))}


            {/* Price */}
            <div className="filter-group">
                <h4 className="filter-group-title">Price (USD)</h4>
                <div className="filtering-inputs">
                    <input
                        placeholder="Min"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                    />
                    TO
                    <input
                        placeholder="Max"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}

export default Filter;
