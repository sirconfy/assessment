import Text from "../../assets/images/text.png";
import Ball from "../../assets/images/ball.png";
import "../../index.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Onboarding() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const navigate = useNavigate();

  const inputFields = [
    { name: "firstName", placeholder: "Enter your first name", type: "text" },
    { name: "lastName", placeholder: "Enter your last name", type: "text" },
    { name: "email", placeholder: "Enter your email address", type: "email" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    navigate("/signup");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#060d1f] text-white px-4 red-hat-display">
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

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md text-center space-y-6"
      >
        {/* Logo */}

        {/* Logo */}
        <div className="flex items-center justify-center">
          <img src={Text} alt="Kick Logo" className="w-[30%] h-auto" />
        </div>

        {/* Heading */}
        <div>
          <h2 className="text-xl font-600 text-[20px] red-hat-display">Set Up Your KICK Account</h2>
          <p className="text-sm text-gray-300 mt-2 text-[18px] font-400 red-hat-display">
          We’ll use your email to keep your account secure and send updates
          </p>
        </div>

        {/* Mapped Inputs */}
        <div className="space-y-4 text-left">
          {inputFields.map((field) => (
            <input
              key={field.name}
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              className="w-full bg-[#0d0f1a] border border-pink-300 rounded-md px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          ))}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 mt-4 font-bold text-white rounded-md bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg shadow-pink-500/40 hover:scale-105 transition-transform duration-200 cursor-pointer font-bungee text-[20px]"
        >
          CONTINUE
        </button>
      </form>
    </div>
  );
}
