import Svg from "../../utils/extras/Svgs";
import { useNavigate } from "react-router";
import { useMain } from "../../states/MainStates"

function UserUtils(){
    const navi = useNavigate();   
    const { toggleSingleGroup } = useMain();
    const registered = useMain(s => s.registered)


    return (
    <div className="mm-user-utils">
    
    <button className="navbar-button" onClick={() => navi('/')}>
    <Svg type='home'/>
    Home
    </button>
    
    {!registered && <>
    <button className="navbar-button" onClick={() => navi('/register')}>
    <Svg type='signup' />
    Register
    </button>
    </>
    }

    {registered && <>
    <button className="navbar-button" onClick={() => toggleSingleGroup('my-account')}>
    <Svg type='my-account'/>
    My Account
    </button>
    </>
    }

    </div>
    )
};

export default UserUtils