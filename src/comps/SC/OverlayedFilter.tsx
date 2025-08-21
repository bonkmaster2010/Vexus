import { useMain } from "../../states/MainStates";


function OverlayedFilter({ Filter, filterProps }: { Filter: React.ComponentType<any>, filterProps: any }) {
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