import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import useAuth from "../Hooks/useAuth";
import userImg from "../assets/user.png";
import useUserData from "../Hooks/useUserData";

const UserDropdown = () => {
  const { user, Logout } = useAuth();
  const userData = useUserData();
  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {
    if (userData?.wishlist) {
      setWishlistCount(userData.wishlist.length);
    }
  }, [userData]);

  const handleLogout = () => {
    Logout();
  };

  return (
    <div>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="flex items-center">
          <div className="avatar">
            <div className="w-12 rounded-full ring ring-offset-2">
              <img
                src={user?.photoURL ? user.photoURL : userImg}
                className="p-1"
                alt="User Avatar"
              />
            </div>
          </div>
          <div className="badge badge-secondary ml-2 bg-black p-3 font-semibold text-lg border-none">
            {wishlistCount}
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
            <button
              onClick={handleLogout}
              className="btn btn-primary btn-outline btn-sm"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserDropdown;