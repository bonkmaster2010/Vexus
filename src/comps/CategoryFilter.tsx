import { NavLink, useNavigate } from "react-router";
import { useFiltersWithQuery } from "./hooks/useFilterWithQuery";
import type { CFIF } from "../utils/interfaces/components/main.comps.if";
import "../styles/CF.css";

function CategoryFilter({ title, data}: CFIF) {
  // Variables
  const { updateFilter } = useFiltersWithQuery();
  const navigate = useNavigate();

  // uses update filter & navigates to link route
  function handleRouting(id: string, route: string, routeType: string) {
    const updatedParams = updateFilter("types", id);
    navigate(`/${routeType}/${route}?${updatedParams.toString()}`);
  }

  return (
    <div className="cf-filtering-container">
      
    <h3 className="cf-cont-title">{title}</h3>
    <div className="cf-filtering-container-hr"/>

      <div className="cf-group-wrapper">
        
        {data.map((link: any, i: number) => (
          <div className="cf-group" key={link.key}>
            
            <div className="cf-filters-group-wrapper" >
            {link.cf?.map((cfItem: any, cfIndex: number) => (
              <div key={`${link.key}-cf-${cfIndex}`}>
               
                <NavLink
                  className="cf-main-link"
                  to={`/${cfItem.routeType}/${cfItem.route}`}
                >
                  {cfItem.name}
                </NavLink>

                
                {cfItem.filters?.length > 0 && (
                  <div className="cf-sublinks">
                    {cfItem.filters.map((sl: any) => (
                      <NavLink
                        className="cf-sublink"
                        key={`cf-sublink-${sl.id}-${sl.route}`}
                        to={`/${sl.route}`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleRouting(
                            sl.id,
                            `${sl.route}`,
                            "category"
                          );
                        }}
                      >
                        {sl.title}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
            </div>
            {data[i] !== data[data.length - 1] && <div className='pdr-long'/>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;
