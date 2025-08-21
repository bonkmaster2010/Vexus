import { useMain } from "../../states/MainStates"
import Svg from "../../utils/extras/Svgs";





function FilterShowGroupBtn({type, val}: {type: string, val: string}){
    const { toggleGroup, expandedGroups } = useMain();
    return (
    <>

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