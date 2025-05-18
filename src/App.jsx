import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import UserQuestions from "./pages/UserQuestion";

// Placeholder components for new pages
const About = () => <div className="flex-1 p-8">About Page</div>;
const Categories = () => <div className="flex-1 p-8">Categories Page</div>;
const Contact = () => <div className="flex-1 p-8">Contact Page</div>;

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/user-questions" element={<UserQuestions />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
