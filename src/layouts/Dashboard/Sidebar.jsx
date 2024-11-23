import { NavLink } from "react-router-dom";
import useUserData from "../../Hooks/useUserData";
import useAuth from "../../Hooks/useAuth";
import logo from "../../assets/logo.png";

const routes = {
  admin: [
    {
      id: 1,
      route: "/dashboard/admin",
      title: "Action",
    },
  ],
  buyer: [
    {
      id: 1,
      route: "/dashboard/wishlist",
      title: "Wishlist",
    },
  ],
  seller: [
    {
      id: 1,
      route: "/dashboard/my-product",
      title: "My Product",
    },
    {
      id: 2,
      route: "/dashboard/add-product",
      title: "Add Product",
    },
  ],
};

const Sidebar = () => {
  const userData = useUserData();
  const { Logout } = useAuth();

  const getRoutes = () => {
    if (userData.role === "seller") return routes.seller;
    if (userData.role === "buyer") return routes.buyer;
    if (userData.role === "admin") return routes.admin;
    return [];
  };

  return (
    <div className="bg-emerald-400 border-r-2 border-green-800 min-h-screen h-full">
      <img className="w-24 mx-auto pt-5" src={logo} alt="" />
      <ul className="flex flex-col gap-2 p-4">
        <li className="btn btn-outline mt-8">
          <NavLink to="/dashboard/overview">Overview</NavLink>
        </li>
        {getRoutes().map((route) => (
          <li className="btn btn-outline" key={route.id}>
            <NavLink to={route.route}>{route.title}</NavLink>
          </li>
        ))}
        <li className="btn btn-outline">
          <NavLink
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="btn btn-outline">
          <button onClick={Logout}>Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
