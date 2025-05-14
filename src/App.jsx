import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;
