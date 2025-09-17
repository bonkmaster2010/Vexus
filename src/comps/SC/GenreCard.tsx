import { useNavigate } from "react-router";
import type { GC } from "../../utils/interfaces/components/SC.if";
import { useFiltersWithQuery } from "../hooks/useFilterWithQuery";

function GenreCard({ src, route, type }: GC) {
  // Variables
  const navigate = useNavigate();
  const { updateFilter } = useFiltersWithQuery();

  /* handles routing in here 
  id - filtering id (ram, storage, etc)
  route - /category/laptops?type=gaming
  filterType - types | manufacturers | specs
  */
  function handleRouting(
    id?: string, 
    route: string = '', 
    filterType?: 'specs' | 'types' | 'manufacturers'
  ) {
    let queryString = '';

    if (id && filterType) {
      const updatedParams = updateFilter(filterType, id);
      queryString = `?${updatedParams.toString()}`;
    }

    navigate(`${route}${queryString}`);
  }

  return (
    <div 
      className="genre-card" 
      onClick={() => handleRouting(type, route, type ? 'types' : undefined)}
    >
      <img src={src} alt="genre card image" />
    </div>
  );
}

export default GenreCard;
