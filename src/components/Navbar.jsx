import React from "react";

const Navbar = () => (
  <nav className="w-full flex items-center justify-between px-8 py-6">
    {/* Logo */}
    <div className="text-2xl tracking-[0.25em] font-bold">HOMELYBITES</div>
    {/* Menu */}
    <div className="flex-1 flex justify-center">
      <div className="flex gap-x-[85px] text-lg font-medium">
        <a href="#" className="hover:text-accent transition">
          Home
        </a>
        <a href="#" className="hover:text-accent transition">
          About
        </a>
        <a href="#" className="hover:text-accent transition">
          Categories
        </a>
        <a href="#" className="hover:text-accent transition">
          Contact
        </a>
      </div>
    </div>
    {/* Login Button */}
    <button className="bg-accent text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-pink-200 hover:text-black transition">
      Login
    </button>
  </nav>
);

export default Navbar;
