import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"
import { FaFacebook} from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10 mt-4">
      <aside>
        <img
        className="w-24 m-4"
        src={logo} alt="" />
        <p className="text-xl font-semibold">
          QuickPonno 
          <br />
          Providing reliable products since 2022
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="flex flex-col gap-2">
         <NavLink>About Us</NavLink>
         <NavLink to="/">Home</NavLink>
         <NavLink to="/">Contact us</NavLink>
         <NavLink to="/">Policy</NavLink>
        </div>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <NavLink to="#"><FaFacebook size={24}></FaFacebook></NavLink>
          <NavLink to="#"><FaInstagramSquare size={24}></FaInstagramSquare></NavLink>
          
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
