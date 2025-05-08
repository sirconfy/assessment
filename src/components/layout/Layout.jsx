import Sidebar from "./SideBar";
import Header from "./Header";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import { useState } from "react";




const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen flex">
      {/* Sidebar for Desktop */}
      <div className="hidden md:block fixed top-0 left-0 h-full w-64 z-40">
        <Sidebar />
      </div>

      {/* Sidebar for Mobile (Drawer) */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="w-64 bg-[#0F111C]">
            <Sidebar />
          </div>
          <div
            className="flex-1 bg-black bg-opacity-50"
            onClick={toggleSidebar}
          />
        </div>
      )}

      <div className="flex-1 md:ml-64">
        <div className="fixed top-0 left-0 right-0 z-30">
          <Header toggleSidebar={toggleSidebar} />
        </div>

        <main className="pt-20 px-4 bg-[#0F111C] min-h-screen overflow-y-auto">
          {children || <Outlet />}
        </main>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
