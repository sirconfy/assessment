import { useState, useEffect } from "react";
import Container from "../../components/layout/Container";
import GameGallery from "./component/Cards";
import LeagueOfLegendsBanner from "./component/LegueOfLengendsBanner";
import Fireman from "../../assets/images/firman.png";
import Biomutan from "../../assets/images/Biomutan.png";

export default function Home() {
  const [count, setCount] = useState(3);
  const [showModal, setShowModal] = useState(false);

  // useEffect(() => {
  //   if (count > 0) {
  //     const timer = setTimeout(() => setCount(count - 1), 1000);
  //     return () => clearTimeout(timer);
  //   } else if (count === 0) {
  //     const timer = setTimeout(() => {
  //       setCount("GO!");
  //       setTimeout(() => {
  //         setShowModal(true);
  //       }, 1000);
  //     }, 1000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [count]);

  return (
    <Container>
      <div className="w-full flex flex-col items-center justify-center min-h-screen relative">
        {/* Countdown Overlay */}

        {count !== null && !showModal && (
          <div className="absolute top-[20%]  text-[80px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 z-50">
            {count}
          </div>
        )}

        {/* Modal */}
        {showModal && (
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center z-50 mr-52">
            <div className="flex space-x-12">
              <div>
                {" "}
                <img
                  src={Fireman}
                  alt="Fireman"
                  className="w-full h-full object-cover rounded-md mb-4"
                />
              </div>

              <div className="relative bg-white w-[500px] p-6 rounded-lg shadow-lg text-black">
                {/* Close Button */}
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 text-xl font-bold text-black hover:text-gray-600"
                >
                  ✕
                </button>

                {/* Game Title and Icon */}
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-2">🎮</span>
                  <h2 className="text-2xl font-extrabold">BIOMUTANT</h2>
                </div>

                {/* Game Image */}
                <img
                  src={Biomutan}
                  alt="Biomutant"
                  className="w-full h-50 object-cover rounded-md mb-4"
                />

                {/* Headline */}
                <h3 className="font-bold text-lg mb-2">
                  GET READY TO FIGHT, MUTATE, AND SURVIVE!
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-700 mb-4">
                  Dive into the post-apocalyptic world of Biomutant — an
                  action-packed arcade game where your skills evolve with every
                  battle.
                </p>

                {/* CTA Button */}
                <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-bold hover:opacity-90">
                  PLAY NOW
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="w-full">
          <LeagueOfLegendsBanner />
        </div>
        <GameGallery />
      </div>
    </Container>
  );
}
