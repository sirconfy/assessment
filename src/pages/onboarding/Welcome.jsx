import Text from "../../assets/images/text.png";
import Ball from "../../assets/images/ball.png";
import { useNavigate } from "react-router-dom";

export default function WelcomeScreen() {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#060d1f] text-white px-4 overflow-hidden  font-redhat">
      
      {/* Top left icon */}
      <img
        src={Ball}
        alt="Decoration"
        className="absolute top-40 right-20 w-6 h-6 opacity-30"
      />

      {/* Bottom left icon */}
      <img
        src={Ball}
        alt="Decoration"
        className="absolute bottom-20 left-8 w-6 h-6 opacity-30"
      />

      {/* Center content */}
      <div className="text-center space-y-6 z-10">
        {/* Logo */}
        <div className="flex items-center justify-center">
          <img src={Text} alt="Kick Logo" className="w-[30%] h-auto" />
        </div>

        {/* Phone detection message */}
        <div className="space-y-2">
          <p className="text-lg font-medium">
            Welcome to KICK <span className="font-bold">+234 7050 857 338</span>,
          </p>
          <p className="text-sm text-gray-300">
            We've successfully detected your phone number.<br />
            Let’s set up your account
          </p>
        </div>

        {/* Continue Button */}
        <button className="mt-4 px-6 py-3 rounded-lg font-bold text-white bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg shadow-pink-500/30 hover:scale-105 transition-transform duration-200 cursor-pointer"
        
       onClick={()=>navigate('/onboarding')} 
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
}
