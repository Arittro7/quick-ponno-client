import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import UserDropdown from "./UserDropdown";
import logo from "../assets/logo.png"

const Navbar = () => {

  const navLinks = <>
  <li> <Link to="/">Home</Link> </li>
  <li> <Link to="/about">About</Link> </li>
  <li> <Link to="/product">Product</Link> </li>
  <li> <Link to="/contact">Contact</Link> </li>
  </>

  const {user} = useAuth()


  return (
    <div className="navbar border-b-4 border-emerald-400">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-primary lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex items-center">
        <img className="w-20" src={logo} alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      {
        user? <div className="navbar-end gap-2"><UserDropdown></UserDropdown></div> : <div className="navbar-end gap-2">
        <Link to='/register'>
        <button className="btn bg-black text-white px-4 py-2 rounded-lg">Sign Up</button>
        </Link>
        <Link to='/login'>
        <button className="btn bg-black text-white px-4 py-2 rounded-lg">Sign In</button>
        </Link>
      </div>
      }
    </div>
  );
};

export default Navbar;
