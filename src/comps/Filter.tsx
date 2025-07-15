

function Filter({filterArr}: any) {

    const options = ["sort by popularity"];


    return (
        <div className="pc-filtering-container">
          
          <select className='filtering-select'>
          {options.map((option: string, i: number) => (
            <option key={`${option} - ${i}`}>{option}</option>
          ))}
          </select>

                {filterArr.map((type: any, i: number) => ( 
                <div key={type} className="filter-group">
                <h4 className="filter-group-title">{type.name}</h4>
                <div className="filter-options">
                       
                        {type.data.map((title: string, i: number) => (
                          <label key={title} className="filter-checkbox-cont">
                            <input
                                type="checkbox"
                                name="manufacturer"
                                value={title}
                                id={`manufacturer-${i}`}
                            />
                            {title}
                        </label>
                       ))}
                </div>
                <hr/>
            </div>
             ))}

            <div className="filter-group">
                <h4 className="filter-group-title">Price (USD)</h4>
                
               <div className="filtering-inputs">
                <input />
                TO
                <input/>
               </div>

            </div>

        </div>
    );
}

export default Filter;
