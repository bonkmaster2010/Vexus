import { useMain } from "../../states/MainStates";


function OverlayedFilter({ Filter, filterProps }: { Filter: React.ComponentType<any>, filterProps: any }) {
  const { setShowOverlayedFilter } = useMain();

  return (
    <div className="overlay">
      <button onClick={() => setShowOverlayedFilter()} id="close-overlayed-filter-btn">x</button>
      <div className="overlay-content-wrapper">
        <Filter {...filterProps} />
      </div>
    </div>
  );
}

export default OverlayedFilter;