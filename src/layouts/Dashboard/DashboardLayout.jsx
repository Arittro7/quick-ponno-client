import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  return (
    <div className="grid lg:grid-cols-12">
      <div className="lg:col-span-2">
        <Sidebar></Sidebar>
      </div>
      <div className="lg:col-span-10">
        <div className="p-16 ">
        <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
