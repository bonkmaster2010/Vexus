import { NavLink } from "react-router";
import Svg from "../../utils/extras/Svgs";
import { useMain } from "../../states/MainStates";


function Submenu({ data }: { data: any[] }){
    
    const { toggleSingleGroup } = useMain();

    return (
        <div className='mm-submenu'>
        <h3 className="mm-submenu-return" onClick={() => toggleSingleGroup('')}>
        <Svg type='left-arrow'/> 
        Main Menu
        </h3>
        <div className="mm-submenu-hr"/>

        <div className='mm-sublinks-group'>
        {data.map((s, i) => (
        <NavLink
        key={`${s.id} - ${i}`}
        to={`/category/${s.route}`}
        className='mm-sublink'
        >
        {s.title}
        </NavLink>
        ))}
        </div>
        </div>
    )
};

export default Submenu;