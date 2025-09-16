import Noti from '.././SC/noti';
import Svg from '../../utils/extras/Svgs';
import userAvatar from '../../images/extra/microless-user-avatar.webp';
import { useCreateUser } from '../../states/CreateUserState';
import { AccountCardsImgs } from '../../utils/image-arrays/components/account-cards-imgs';
import { useNavigate } from 'react-router';
import { useMain } from '../../states/MainStates';
import '../../styles/AccountCards.css';


function AccountCards(){
    const navi = useNavigate();
    const { isMobile, Logout} = useMain();
    const { name } = useCreateUser();

    return (
    <div className='main-account-cards-cont'>
     
    {isMobile && (
    <div className="ma-user-details">    
    <div className="profile-picture">
    <img src={userAvatar} alt="user avatar"/>  
    </div>
    <p className="ma-username">{name}</p>
    <p className="signout-btn" onClick={() => Logout()}><Svg type='poweroff'/> Sign Out</p>
    </div>
     )}

    <p className='user-welcoming-txt'>Hello, {name}</p>
    <Noti text="This is your dashboard. From here you can update your profile details, account security settings and see the details of your orders, inquiries etc "/>
    
    <div className='account-cards-wrapper'>
    {AccountCardsImgs.map(img => (
    <div className='account-card' style={{backgroundImage: `url(${img.src})`}} onClick={() => navi(img.route)}>
    <p className='account-card-title'>{img.title}</p>
    <p className='account-card-overview'>{img.overview}</p>
    </div>
    ))}
    </div>

    </div>
    )
};

export default AccountCards;