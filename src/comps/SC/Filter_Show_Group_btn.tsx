import { useMain } from "../../states/MainStates"
import Svg from "../../utils/extras/Svgs";

function FilterShowGroupBtn({type, val}: {type: string, val: string}){
    // Variables
    const { toggleGroup, expandedGroups } = useMain();
    
    return (
    <>
    {/* used to know which groups to give the scroll bar to */}
    <span onClick={() => toggleGroup(type, val)} className="show-more-btn">
    {expandedGroups[type] === val ? (
        <>
       <Svg type="down arrow" /> Show More 
        </>
    ) : (
        <>
       <Svg type="up arrow" />  Show Less
        </>
    )}
    </span>
  
    </>
    )
};

export default FilterShowGroupBtn;