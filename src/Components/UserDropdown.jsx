import { NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import userImg from "../assets/user.png"

const UserDropdown = () => {
  const {user, Logout} = useAuth()
  const handleLogout = () => {
    Logout()
  }
  return (
    <div>
      <div className="dropdown dropdown-bottom dropdown-end">
        <div tabIndex={0} role="button" className="btn m-1">
          <div className="avatar">
            <div className="w-12  rounded-full ring ring-offset-2">
              <img src={user?.photoURL ? user.photoURL : userImg} 
              className="p-1"/>
            </div>
          </div>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <NavLink to="/dashboard/overview">Dashboard</NavLink>
          </li>
          <li>
            <button onClick={handleLogout} className="btn btn-primary  btn-outline btn-sm">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserDropdown;
