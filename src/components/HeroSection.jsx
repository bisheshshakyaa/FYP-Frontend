import React from "react";

const HeroSection = () => (
  <main className="flex-1 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto w-full px-8 py-8 relative">
    {/* Left: Text */}
    <div className="max-w-xl pt-8 pb-16 z-20">
      <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-2">
        Fun Meets Flavor
        <br />
        Become a Cooking Pro with
      </h1>
      <span className="block text-5xl md:text-6xl font-extrabold text-pink-400 mb-2 mt-2">
        HomelyBites!
      </span>
      <p className="mt-6 text-gray-700 text-base md:text-lg">
        Discover delicious, personalized recipes based on what you have at home.
        Whether you're a beginner or a home chef, HomelyBites helps you cook
        with ease and confidence.
      </p>
      <button className="mt-8 bg-pink-300 text-white font-medium px-8 py-3 rounded-lg text-lg shadow hover:bg-pink-400 transition">
        Get Started
      </button>
    </div>
    {/* Right: Images & Circles */}
    <div className="relative flex-1 flex items-center justify-center w-full h-[420px] md:h-auto min-w-[350px]">
      {/* Decorative Circles */}
      <div className="absolute top-8 right-32 w-20 h-20 bg-pink-200 rounded-full opacity-80 z-0"></div>
      <div className="absolute top-40 right-64 w-8 h-8 bg-pink-100 rounded-full opacity-80 z-0"></div>
      <div className="absolute bottom-16 right-40 w-16 h-16 bg-pink-200 rounded-full opacity-80 z-0"></div>
      <div className="absolute bottom-4 right-16 w-24 h-24 bg-pink-100 rounded-full opacity-80 z-0"></div>
      {/* Food Images */}
      <img
        src="/food1.png"
        alt="food1"
        className="absolute top-0 right-0 w-64 h-64 object-cover rounded-full shadow-xl border-4 border-white z-10"
      />
      <img
        src="/food2.png"
        alt="food2"
        className="absolute bottom-0 right-40 w-48 h-48 object-cover rounded-full shadow-xl border-4 border-white z-10"
      />
      <img
        src="/food3.png"
        alt="food3"
        className="absolute bottom-8 right-0 w-56 h-56 object-cover rounded-full shadow-xl border-4 border-white z-10"
      />
    </div>
  </main>
);

export default HeroSection;
