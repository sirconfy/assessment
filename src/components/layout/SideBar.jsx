import { FaGift, FaGamepad, FaQuestionCircle, FaTrophy, FaUserFriends, FaLifeRing, FaUser, FaCog } from "react-icons/fa";
import { useState } from "react";
import Text from '../../assets/images/text.png';
import Shine from '../../assets/images/shine.png';
import number from '../../assets/images/20.png';

const SideBar = () => {
  const [active, setActive] = useState("Kick Arcade");

  const navItems = [
    { label: "Kick Arcade", icon: <FaGamepad /> },
    { label: "Kick Trivia", icon: <FaQuestionCircle /> },
    { label: "Leaderboard", icon: <FaTrophy /> },
    { label: "Win & Cash", icon: <FaGift /> },
    { label: "Invite a friend", icon: <FaUserFriends /> },
    { label: "Support", icon: <FaLifeRing /> },
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


        <div className=" flex space-x-3 text-xs text-gray-400">
          <img src={Shine} alt="" />
        <p>Bonus</p>  
          
          </div>
        <div className=" flex space-x-2 font-bold text-yellow-400">
        <img src={number} alt="" className="w-6 h-6"/>
        <p className="text-[10px] text-gray-500 mt-1">Get every day extra points</p>
          </div>
    
      </div>

      {/* Nav Items */}
      <nav className="flex-1 space-y-2 bg-[#171E2F] rounded-lg p-4">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-3 px-3 py-4 rounded-lg text-sm font-medium ${
              active === item.label
                ? "bg-[#3e0f42] text-white"
                : "text-gray-400 hover:text-white hover:bg-[#1A1C2C]"
            }`}
            onClick={() => setActive(item.label)}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>

      {/* Bottom Links */}
      <div className="pt-6   mt-4 bg-[#171E2F] rounded-lg p-4">
        <button className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-white hover:bg-[#1A1C2C] rounded-lg text-sm w-full">
          <FaUser />
          Profile
        </button>
        <button className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-white hover:bg-[#1A1C2C] rounded-lg text-sm w-full">
          <FaCog />
          Settings
        </button>
      </div>
      </div>
    </aside>
  );
};

export default SideBar