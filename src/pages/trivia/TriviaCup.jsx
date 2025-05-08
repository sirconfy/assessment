import { useNavigate } from "react-router-dom";
import cup from "../../assets/images/cup.png"; // Replace with actual image path

export default function TriviaCup() {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen  mt-14">
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
        PLAY. WIN. EARN WITH KICK!
        </h1>

        {/* Subtext */}
        <p className="text-center max-w-2xl text-gray-300 mb-16 text-sm md:text-sm leading-relaxed font-redhat">
        Answer questions to earn points. The faster you answer, the more points you'll score.
        </p>

        {/* Image */}
        <img
          src={cup}
          alt="Football Kick Illustration"
          className="w-60 md:w-[90% ] mb-12"
        />

        {/* Next Button */}
      </div>

      <div className="flex justify-center items-center md:justify-end md:items-end md:px-10">
        <button
          type="submit"
          className="px-8 py-3 mt-4 font-bold text-white rounded-md bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg shadow-pink-500/40 hover:scale-105 transition-transform duration-200 cursor-pointer font-bungee text-[20px]"
          onClick={()=> navigate('/kick-trivia/avatar')}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
