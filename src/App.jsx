import { BrowserRouter, Routes, Route } from "react-router-dom";

import KickScreen from "./pages/onboarding/KickScreen";
import AutoDetectionScreen from "./pages/onboarding/AutoDetection";
import WelcomeScreen from "./pages/onboarding/Welcome";
import SignupForm from "./pages/autPages/SignUp";
import SignIn from "./pages/autPages/SignIn";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Onboarding from "./pages/autPages/Onboarding";
import KickTrivia from "./pages/trivia/KickTrivia";
import TriviaCup from "./pages/trivia/TriviaCup";
import AvatarSelector from "./pages/trivia/Avatar";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<KickScreen />} />
         <Route path="/auto-detection" element={<AutoDetectionScreen />} />
         <Route path="/auto-welcome" element={<WelcomeScreen />} />
         <Route path="/signup" element={<SignupForm />} /> 
         <Route path="/login" element={<SignIn />} />
         <Route path="/onboarding" element={<Onboarding  />} />
         <Route element={<Layout />}>
         <Route path="/home" element={<Home />} />
          <Route path="/kick-trivia" element={<KickTrivia/>} />
          <Route path="/kick-trivia/trivia-cup" element={<TriviaCup/>} />
          <Route path="/kick-trivia/avatar" element={<AvatarSelector/>} />
          


          
         </Route>
        
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
