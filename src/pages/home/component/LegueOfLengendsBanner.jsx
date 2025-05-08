import Sec from "../../../assets/images/Sec.png";
import Section2 from "../../../assets/images/Section2.png";

const LeagueOfLegendsBanner = ({handleClick }) => {
  return (
    <div className="flex flex-col md:flex-row w-full m-0 p-0">
      {/* First Banner - 60% width */}
      <div className="relative w-full md:w-[60%] flex m-0 p-0">
        <img
          src={Sec}
          alt="League of Legends Banner"
          className="w-full h-auto object-cover"
        />

        {/* Overlay content */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end md:justify-center pl-4 md:pl-8 pb-10 md:pb-0">
          <div className="max-w-sm text-white mt-[14rem]">
            <h1 className="text-4xl font-extrabold mb-3 font-redhat">
              Ruined King
            </h1>
            <p className="text-gray-300 mb-5 text-[10px] pr-20 font-redhat">
              There's a lot to learn about LoL, so we'll start with the
              essentials. Explore the guide below for an overview of the most
              popular game mode.
            </p>

            <div className="flex space-x-3">
              <div>
                <div className="text-sm text-gray-400 mr-3 font-redhat">
                  Reviews 3,4k
                </div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.186 3.674h3.862c.969 0 1.371 1.24.588 1.81l-3.124 2.27 1.186 3.674c.3.921-.755 1.688-1.538 1.118L10 13.347l-3.124 2.27c-.783.57-1.838-.197-1.538-1.118l1.186-3.674-3.124-2.27c-.783-.57-.38-1.81.588-1.81h3.862L9.049 2.927z" />
                    </svg>
                  ))}
                </div>
              </div>
              <button className="bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white px-6 py-2 rounded-full font-bold shadow-xl hover:opacity-90 transition cursor-pointer"
              onClick={handleClick}
              >
                PLAY NOW
              </button>
              <button className="bg-pink-500 text-white px-6 py-2 rounded-xl font-bold text-lg shadow-xl hover:opacity-90 transition">
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Second Banner - 40% width, hidden on mobile */}
      <div className="relative w-full md:w-[40%] hidden md:flex m-0 p-0">
        <img
          src={Section2}
          alt="League of Legends Banner"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default LeagueOfLegendsBanner;
