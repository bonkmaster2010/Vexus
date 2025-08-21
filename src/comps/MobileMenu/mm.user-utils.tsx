import { useNavigate } from "react-router";
import { useMain } from "../../states/MainStates"
import Svg from "../../utils/extras/Svgs";
import { useEffect } from "react";

function UserUtils(){
    const navi = useNavigate();   
    const { registered, SignUp, toggleSingleGroup} = useMain();
  
    useEffect(() => SignUp(), [])

    return (
    <div className="mm-user-utils">
    
    <button className="navbar-button" onClick={() => navi('/')}>
    <Svg type='home'/>
    Home
    </button>
    
    {!registered && <>
    <button className="navbar-button">
    <Svg type='signup'/>
    Register
    </button>
    </>
    }

    {registered && <>
    <button className="navbar-button" onClick={() => toggleSingleGroup('my-account')}>
    <Svg type='signup'/>
    My Account
    </button>
    </>
    }

    </div>
    )
};

export default UserUtils