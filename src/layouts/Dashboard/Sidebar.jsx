import { NavLink } from "react-router-dom";
import useUserData from "../../Hooks/useUserData";
import useAuth from "../../Hooks/useAuth";

const sellerRoutes = [
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
];

const Sidebar = () => {
  const userData = useUserData();
  // console.log(userData);
  const {Logout} = useAuth()
  return (
    <div className="bg-blue-200 border-r-2 border-green-800 min-h-screen">
      <ul className="flex flex-col gap-2 p-4">
        <li>
          <NavLink to="/dashboard/overview">Overview</NavLink>
        </li>
        {userData.role === "seller" &&
          sellerRoutes.map((route) => (
            <li key={route.id}>
              <NavLink to={route.route}>
                {route.title}
              </NavLink>
            </li>
          ))}
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <button onClick={Logout}>Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
