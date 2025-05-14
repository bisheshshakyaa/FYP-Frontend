import React from "react";

const accent = "#FC7D7D";
const Footer = () => (
  <footer className="bg-accent text-white text-center py-4 mt-auto" style={{ color: accent }} >
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-base" >
      <span className="text-white">© 2025 HomelyBites</span>
      <span className="hidden md:inline text-white">|</span>
      <a href="#" className="hover:underline text-white">
        Privacy Policy
      </a>
      <span className="hidden md:inline text-white">|</span>
      <a href="#" className="hover:underline text-white">
        Terms & Conditions
      </a>
    </div>
  </footer>
);

export default Footer;
