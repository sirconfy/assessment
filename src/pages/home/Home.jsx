import { useState, useEffect } from "react";
import Container from "../../components/layout/Container";
import GameGallery from "./component/Cards";
import LeagueOfLegendsBanner from "./component/LegueOfLengendsBanner";
import Fireman from "../../assets/images/firman.png";
import Biomutan from "../../assets/images/Biomutan.png";

export default function Home() {
  const [count, setCount] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(false); 
    setCount(3);         
  };
  

  useEffect(() => {
    if (typeof count !== "number") return;
  
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    } else if (count === 0) {
      const timer = setTimeout(() => {
        setCount("GO!");
        setTimeout(() => {
          setShowModal(true);
          setCount(null); // reset
        }, 1000);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [count]);
  
  return (
    // <Container>
      <div className="w-full flex flex-col items-center justify-center min-h-screen relative">
        {/* Countdown Overlay */}

        {count !== null && !showModal && (
          <div className="absolute top-[20%]  left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[425px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 z-50 font-tradewinds">
            {count}
          </div>
        )}

        {/* Modal */}
        {showModal && (
  <div className="fixed inset-0 z-50 backdrop-blur-md flex items-center justify-center p-6">
    <img
      src={Fireman}
      alt="Blue alien character"
      className="hidden lg:block w-80 h-auto -mt-16"
    />
    <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-lg relative">
      <button
        onClick={() => setShowModal(false)} 
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        aria-label="Close modal"
      >
        ×
      </button>
      <h2 className="flex items-center text-2xl font-bold tracking-wider uppercase mb-4">
        <span role="img" aria-label="controller" className="text-2xl mr-2">
          🎮
        </span>
        BIOMUTANT
      </h2>
      <img
        src={Biomutan}
        alt="Biomutant Game Cover"
        className="w-full h-auto rounded-md mb-4"
      />
      <h3 className="text-xl font-extrabold uppercase mb-2">
        GET READY TO FIGHT, MUTATE, AND SURVIVE!
      </h3>
      <p className="text-gray-700 mb-6">
        Dive into the post-apocalyptic world of Biomutant — an action-packed arcade game where your skills evolve with every battle.
      </p>
      <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-2 px-6 rounded-full shadow-lg transform transition duration-200 hover:scale-105 hover:from-pink-400 hover:to-purple-400">
        PLAY NOW
      </button>
    </div>
  </div>
)}


        <div className="w-full">
          <LeagueOfLegendsBanner handleClick ={handleClick } />
        </div>
        <GameGallery />
      </div>
    // </Container>
  );
}
