import { FaGift, FaGamepad, FaQuestionCircle, FaTrophy, FaUserFriends, FaLifeRing, FaUser, FaCog } from "react-icons/fa";
import { useState } from "react";
import Text from '../../assets/images/text.png';
import Shine from '../../assets/images/shine.png';
import number from '../../assets/images/20.png';
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { label: "Kick Arcade", icon: <FaGamepad />, path: "/home" },
    { label: "Kick Trivia", icon: <FaQuestionCircle />, path: "/kick-trivia" },
    { label: "Leaderboard", icon: <FaTrophy />, path: "" },
    { label: "Win & Cash", icon: <FaGift />, path: "" },
    { label: "Invite a friend", icon: <FaUserFriends />, path: "" },
    { label: "Support", icon: <FaLifeRing />, path: "" },
  ];

  return (
    <aside className="h-screen w-64 bg-[#0F111C] text-white flex flex-col py-6 px-4 shadow-lg border-r-1 border-gray-600">
      {/* Logo */}
      <div className="mb-6 ml-20 mx-auto ">
        <img src={Text} alt="" className="w-[60%] h-auto" />
      </div>

      <div className="bg-[#111829] p-4 rounded-lg">
        {/* Bonus */}
        <div className="bg-[#1A1C2C] p-4 rounded-xl text-center mb-6">
          <div className="flex space-x-3 text-xs text-gray-400">
            <img src={Shine} alt="" />
            <p>Bonus</p>
          </div>
          <div className="flex space-x-2 font-bold text-yellow-400">
            <img src={number} alt="" className="w-6 h-6" />
            <p className="text-[10px] text-gray-500 mt-1">Get every day extra points</p>
          </div>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 space-y-2 bg-[#171E2F] rounded-lg p-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`w-full flex items-center gap-3 px-3 py-4 rounded-lg text-sm font-medium ${
                currentPath === item.path
                  ? "bg-[#3e0f42] text-white"
                  : "text-gray-400 hover:text-white hover:bg-[#1A1C2C]"
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Bottom Links */}
        <div className="pt-6 mt-4 bg-[#171E2F] rounded-lg p-4">
          <Link
            to=""
            className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-white hover:bg-[#1A1C2C] rounded-lg text-sm w-full"
          >
            <FaUser />
            Profile
          </Link>
          <Link
            to=""
            className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-white hover:bg-[#1A1C2C] rounded-lg text-sm w-full"
          >
            <FaCog />
            Settings
          </Link>
        </div>
      </div>
    </aside>
  );
};


export default SideBar