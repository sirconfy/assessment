import { useNavigate } from "react-router-dom";
import KickstartPg from "../../assets/images/kickstartPg.png";
import Player from "../../assets/images/player.png";
import Text from "../../assets/images/text.png";

export default function KickScreen() {
  const navigate = useNavigate();

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center  font-redhat"
      style={{
        backgroundImage: `url(${KickstartPg})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* KICK text */}
      <div
        className="  relative z-10 cursor-pointer"
        onClick={() => navigate("/auto-detection")}
      >
        {/* Button text */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <img src={Text} alt="Button" className="w-[100%] h-auto" />
        </div>

        {/* Button image */}

        <img src={Text} alt="Button" className=" w-[100%] h-auto" />
      </div>

      {/* Mobile-only Player image */}
      <div className="flex sm:hidden z-10">
        <img
          src={Player}
          alt="Kickstart"
          className="absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-auto"
        />
      </div>
    </div>
  );
}
