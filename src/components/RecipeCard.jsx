import React from "react";

const RecipeCard = ({ image, title, description }) => (
  <div className="bg-white rounded-2xl shadow-md p-3 flex flex-col relative w-full max-w-[220px] mx-auto">
    <img
      src={image}
      alt={title}
      className="rounded-xl w-full h-36 object-cover mb-3"
    />
    <div className="font-bold text-base mb-1">{title}</div>
    <div className="text-xs text-gray-500 mb-8">{description}</div>
    <button className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-accent flex items-center justify-center shadow hover:brightness-110 transition">
      <span className="text-white text-lg">&rarr;</span>
    </button>
  </div>
);

export default RecipeCard;
