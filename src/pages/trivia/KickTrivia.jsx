import { useNavigate } from "react-router-dom";
import player from "../../assets/images/player.png"; // Replace with actual image path

export default function KickTrivia() {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen ">
      <div className=" flex flex-col items-center justify-center text-white px-6 relative overflow-hidden">
        {/* Decorative background icons (optional) */}
        <div className="absolute left-6 bottom-10 opacity-10">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 blur-xl" />
        </div>
        <div className="absolute right-6 top-10 opacity-10">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 blur-xl" />
        </div>

        {/* Heading */}
        <h1 className="text-center text-xl md:text-2xl font-extrabold uppercase tracking-wide mb-4 font-bungee">
          Welcome to Kick Trivia – Your Ultimate Football Trivia Destination!
        </h1>

        {/* Subtext */}
        <p className="text-center max-w-2xl text-gray-300 mb-10 text-sm md:text-sm leading-relaxed font-redhat ">
          Dive into the world of KICK, the most thrilling football trivia
          experience. Whether you're a newcomer or a seasoned pro, we've got
          everything you need to prove your football expertise.
        </p>

        {/* Image */}
        <img
          src={player}
          alt="Football Kick Illustration"
          className="w-60 md:w-72 mb-12"
        />

        {/* Next Button */}
      </div>

      <div className="flex justify-center items-center md:justify-end md:items-end md:px-10">
        <button
          type="submit"
          className="px-8 py-3 mt-4 font-bold text-white rounded-md bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg shadow-pink-500/40 hover:scale-105 transition-transform duration-200 cursor-pointer font-bungee text-[20px]"
          onClick={()=> navigate('/kick-trivia/trivia-cup')}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
