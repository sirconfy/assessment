

import { FaBars, FaSearch, FaUserCircle } from "react-icons/fa";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="flex items-center justify-between bg-[#0F111C] text-white px-4 py-4 shadow-md">
      {/* Left section */}
      <div className="flex items-center gap-4">
        {/* Hamburger for Mobile */}
        <button onClick={toggleSidebar} className="md:hidden">
          <FaBars size={20} />
        </button>
        <div className="hidden md:block text-sm text-gray-400">
          <div className="text-xs">GMT - 02:48</div>
          <div className="text-xs">12/04/24</div>
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#1A1C2C] text-white text-sm px-4 py-2 rounded-full focus:outline-none"
          />
          <FaSearch className="absolute right-3 top-2.5 text-gray-400" />
        </div>
        <div className="w-8 h-8 rounded-full bg-[#1A1C2C] flex items-center justify-center">
          <FaUserCircle size={20} />
        </div>
      </div>
    </header>
  );
};

export default Header;

