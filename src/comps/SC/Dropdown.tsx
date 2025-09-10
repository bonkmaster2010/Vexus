import { NavLink, useNavigate } from "react-router";
import { useFiltersWithQuery } from "../hooks/useFilterWithQuery";
import { useMain } from "../../states/MainStates";
import type { DropdownProps } from "../../utils/interfaces/dropdown";
import type { DropDownLink } from "../../utils/Links/Electronics/ElectronicLinks";

import '../../styles/Dropdown.css';

function Dropdown({ data, route, src, brandArr = [], type }: DropdownProps) {
  const { updateFilter } = useFiltersWithQuery();
  const dropdown = useMain((state) => state.dropdown);
  const setDropdown = useMain((state) => state.setDropdown);
  const navigate = useNavigate();

  function handleRouting(id: string, route: string, routeType: string, filterType?: 'specs' | 'types' | 'manufacturers') {
    const updatedParams = updateFilter(filterType ? filterType : "types", id);
    navigate(`/${routeType}/${route}?${updatedParams.toString()}`);
  }

  if (dropdown !== type) return null;

  return (
    <div
      className="dropdown"
      onMouseEnter={() => setDropdown(type)}
      onMouseLeave={() => setDropdown("")}
    >
      <div className="dropdown-content-wrapper">
        {/* Main Links */}
        {data.filter((link: DropDownLink) => link.display !== false).map((link: DropDownLink) => (
          <div key={`mainlink-${type}-${link.route}`} className="dropdown-links">
            <NavLink
              className="main-dropdown-link"
              to={`/${link.routeType}/${link.route}`}
            >
              {link.linkName}
            </NavLink>

        {/* Sublinks */}
        {link.subLinks?.length > 0 && (
          <div className="dropdown-sublinks">
            {link.subLinks.slice(0, 5).map((sl: any) => (
              <NavLink
                className="sublink"
                key={`sublink-${type}-${sl.id}-${sl.route}`}
                to={`/category/${sl.route}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleRouting(sl.id, `${sl.route}`, "category", link.filterType);
                }}
              >
                {sl.title}
              </NavLink>
            ))}
            {link.subLinks?.length > 5 && <NavLink to={`/${link.routeType}/${link.route}`} className="dropdown-viewall">View All</NavLink>}
          </div>
        )}
          </div>
        ))}

        {/* Image */}
          <img
            onClick={() => route && navigate(route)}
            className={`main-dropdown-img ${route ? 'routable' : ''}`}
            src={src}
            alt="navbar image"
          />
      </div>

      {/* Brand Logos */}
      {brandArr.length > 0 && (
        <div className="dropdown-brand-cont">
          {brandArr.map((b) => (
            <div
              className="brand-div"
              key={`brand-${type}-${b.route}`}
              onClick={() => navigate(`/b/${b.route}`)}
            >
              <img src={b.src} alt={`${b.title} icon`} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
