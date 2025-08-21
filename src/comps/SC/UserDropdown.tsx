import { NavLink, useNavigate } from "react-router";
import { useMain } from "../../states/MainStates";
import '../../styles/Dropdown.css'

function UserDropdown() {
  const { registered, Logout, dropdown, setDropdown } = useMain();
  const navi = useNavigate();

  return dropdown === 'user-dropdown' ? (
    <div className="user-dropdown"
    onMouseEnter={() => setDropdown('user-dropdown')}
    onMouseLeave={() => setDropdown('')}
    >
      <div
      onMouseEnter={() => setDropdown('user-dropdown')}
      onMouseLeave={() => setDropdown('')}
      className="user-dropdown-content-wrapper">
        {registered ? (
          <>
            <NavLink to='/account'>My Account</NavLink>
            <div className="user-dropdown-hr" />
            <p onClick={() => Logout()}>Log Out</p>
          </>
        ) : (
          <p onClick={() => navi('/register')}>Sign Up</p>
        )}
      </div>
    </div>
  ) : null;
}


export default UserDropdown;