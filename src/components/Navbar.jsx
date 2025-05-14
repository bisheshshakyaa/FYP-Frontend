import React from "react";

const Navbar = () => (
  <nav className="w-full flex items-center justify-between px-8 py-6">
    {/* Logo */}
    <div className="text-2xl tracking-[0.25em] font-bold">HOMELYBITES</div>
    {/* Menu */}
    <div className="flex-1 flex justify-center">
      <div className="flex gap-10 text-lg font-medium">
        <a href="#" className="hover:text-pink-400 transition">
          Home
        </a>
        <a href="#" className="hover:text-pink-400 transition">
          About
        </a>
        <a href="#" className="hover:text-pink-400 transition">
          Categories
        </a>
        <a href="#" className="hover:text-pink-400 transition">
          Contact
        </a>
      </div>
    </div>
    {/* Login Button */}
    <button className="bg-pink-300 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-pink-400 transition">
      Login
    </button>
  </nav>
);

export default Navbar;
