import MyAccountSidebar from "../profile.things.lol/MyAccount-sidebar";
import { Outlet, useNavigate } from "react-router";
import { useMain } from "../../states/MainStates";
import { useEffect } from "react";


function ProfileLayout(){
    
    const { isMobile, registered} = useMain();
    const navi = useNavigate();

    useEffect(() => {
    if(!registered) navi('/register');
    }, [registered])

    return (
    <div className="profile-layout">
    {!isMobile && <MyAccountSidebar/>}
    
    <div className="pa-main-content">
    <Outlet/>
    </div>
    </div>
    )
};

export default ProfileLayout;