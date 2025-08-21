import MyAccountSidebar from "../profile.things.lol/MyAccount-sidebar";
import { Outlet } from "react-router";
import { useMain } from "../../states/MainStates";


function ProfileLayout(){
    
    const { isMobile } = useMain();

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