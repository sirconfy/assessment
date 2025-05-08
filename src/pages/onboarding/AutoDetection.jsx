import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AutoDetectionScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/auto-welcome"); 
    }, 1000); 

    return () => clearTimeout(timer); 
  }, [navigate]);

  return (
    <div className="h-screen w-full bg-[#060d1f] flex flex-col justify-center items-center text-white font-sans">
      <div className="w-10 h-10 border-4 border-t-[#d26aa7] border-white/20 rounded-full animate-spin mb-6"></div>
      <p className="text-center text-sm text-gray-300 font-redhat">
        We’re detecting your phone number using your mobile data.<br />
        This will take only a moment
      </p>
    </div>
  );
};

export default AutoDetectionScreen;

