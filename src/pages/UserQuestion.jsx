import React from "react";
import Navbar from "../components/Navbar.jsx";

const dietaryOptions = ["Vegetarian", "Keto", "Gluten-free", "Vegan"];
const allergyOptions = [
  "Lactose Intolerance",
  "Nut Allergy",
  "Gluten Intolerance",
  "Shellfish Allergy",
];
const dislikeOptions = [
  "Lactose Intolerance",
  "Nut Allergy",
  "Gluten Intolerance",
  "Shellfish Allergy",
];

const UserQuestions = () => {
  return (
    <div className="min-h-screen bg-[#faf9f7]">
      <Navbar />
      <div className="flex justify-center items-center min-h-[80vh] px-2 md:px-0">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl w-full mt-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-serif font-semibold underline mb-8 text-center md:text-left">
            Help us get to know your taste
          </h1>
          <form className="space-y-8">
            {/* Q1 */}
            <div>
              <div className="mb-2 font-serif text-lg">
                1. Select your Dietary Preferences ?
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2">
                {dietaryOptions.map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-2 text-lg font-serif"
                  >
                    <input type="checkbox" className="accent-accent w-5 h-5" />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
            {/* Q2 */}
            <div>
              <div className="mb-2 font-serif text-lg">
                2. Do you have any food allergies or intolerances ?
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2">
                {allergyOptions.map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-2 text-lg font-serif"
                  >
                    <input type="checkbox" className="accent-accent w-5 h-5" />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
            {/* Q3 */}
            <div>
              <div className="mb-2 font-serif text-lg">
                3. Are there any ingredients you dislike or want to avoid ?
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2">
                {dislikeOptions.map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-2 text-lg font-serif"
                  >
                    <input type="checkbox" className="accent-accent w-5 h-5" />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="bg-accent text-white px-8 py-2 rounded-lg text-lg font-serif shadow hover:brightness-110 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserQuestions;
