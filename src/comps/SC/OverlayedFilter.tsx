import { useMain } from "../../states/MainStates";
import type { CFIF } from "../../utils/interfaces/components/main.comps.if";
import type { FilterProps } from "../../utils/interfaces/components/SC.if";

function OverlayedFilter({ Filter, filterProps }: { Filter: React.ComponentType<any>, filterProps: FilterProps | CFIF }) {
  // Variables
  const { setShowOverlayedFilter, showOverlayedFilter } = useMain();

  return (
    <div className={`overlay ${showOverlayedFilter ? 'active' : ''}`}>
      <button onClick={() => setShowOverlayedFilter()} id="close-overlayed-filter-btn">
      X
      </button>
      <div className="overlay-content-wrapper">
      <Filter {...filterProps} />
      </div>
    </div>
  );
}

export default OverlayedFilter;