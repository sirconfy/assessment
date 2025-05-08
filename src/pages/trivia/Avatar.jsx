import { useState } from "react";
import Avatar1 from "../../assets/images/Avata1.png";
import Avatar2 from "../../assets/images/Avatar2.png";
import Avatar3 from "../../assets/images/Avatar3.png";

const avatars = [
    Avatar1, Avatar2, Avatar3, 
    Avatar1, Avatar2, Avatar3, 
    Avatar1, Avatar2, Avatar3, 
    Avatar1, Avatar2, Avatar3, 
    Avatar1, Avatar2, Avatar3, 
];

const AvatarSelector = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className=" text-white flex flex-col items-center justify-center px-4 mt-10">
      <h2 className="text-lg sm:text-xl font-bold mb-6 font-bungee">CHOOSE YOUR AVATAR</h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-10 mb-10">
        {avatars.map((src, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(idx)}
            className={`rounded-full border-4 p-1 transition-all duration-300 ${
              selected === idx
                ? "border-pink-500 shadow-lg"
                : "border-transparent hover:border-pink-300"
            }`}
          >
            <img
              src={src}
              alt={`avatar-${idx}`}
              className="w-15 h-15 rounded-full object-cover"
            />
          </button>
        ))}
      </div>

      <button
          type="submit"
          className="w-[30%] py-3 mt-4 font-bold text-white rounded-md bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg shadow-pink-500/40 hover:scale-105 transition-transform duration-200 cursor-pointer font-bungee text-[20px]"
        //   onClick={()=> navigate('/kick-trivia/trivia-cup')}
        >
       START
        </button>
    </div>
  );
};

export default AvatarSelector;
