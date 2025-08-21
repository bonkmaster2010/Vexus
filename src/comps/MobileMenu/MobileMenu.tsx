import Svg from '../../utils/extras/Svgs';
import MMTopRow from './mm.top-row';
import UserUtils from './mm.user-utils';
import MASubMenu from './my-acc-submenu';
import Submenu from './sublinks-submenu';
import { useMain } from '../../states/MainStates';
import { NavLink } from 'react-router';
import { allMobileMenuLinks } from '../../utils/Links/all-cates.links';
import '../../styles/Mobile.css';

function MobileMenu() {
    const { toggleSingleGroup, singleGroup, showMM} = useMain();
    const setShowMM = useMain(s => s.setShowMM);

    return (
        <div className={`main-mobile-menu-cont ${showMM ? 'displayed' : ''}`} onClick={() => setShowMM(false)}>
            <div className={`mobile-menu-sidebar ${showMM ? 'expanded' : ''}`} onClick={(e) => e.stopPropagation()}> 
                <MMTopRow/>

                {!singleGroup && <UserUtils/>}
                {!singleGroup && <p className='mm-categories-flair'>CATEGORIES</p>}        

                {singleGroup !== 'my-account' && <div className={`mm-links-wrapper ${singleGroup ? 'noGap' : ''}`}>
                    {allMobileMenuLinks.filter(l => l.display !== false).map((l, i) => (
                        <div key={`${l.key} - ${i}`} className={`mm-link-group ${singleGroup ? 'noGap' : ''}`}>
                            <div className='mm-main-link-wrapper'>
                                {!singleGroup && <> 
                                    <NavLink 
                                        className='mm-main-link' 
                                        to={`/${l.routeType ? l.routeType : 'category'}/${l.route}`}
                                    >
                                        {l.linkName}
                                    </NavLink>

                                    <span onClick={() => toggleSingleGroup(l.route)}>
                                        <Svg type='right-arrow'/>
                                    </span>
                                </>}
                            </div>

                            {singleGroup === l.route && <Submenu data={l.subLinks}/>}
                        </div>
                    ))}
                </div>}

            {singleGroup === 'my-account' && <MASubMenu/>}
            </div>
        </div>
    );
};

export default MobileMenu;
