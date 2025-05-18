import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="w-full flex items-center justify-between px-8 py-6">
    {/* Logo */}
    <div className="text-2xl tracking-[0.25em] font-bold">HOMELYBITES</div>
    {/* Menu */}
    <div className="flex-1 flex justify-center">
      <div className="flex gap-10 text-lg font-medium">
        <Link to="/" className="hover:text-accent transition">
          Home
        </Link>
        <Link to="/about" className="hover:text-accent transition">
          About
        </Link>
        <Link to="/categories" className="hover:text-accent transition">
          Categories
        </Link>
        <Link to="/contact" className="hover:text-accent transition">
          Contact
        </Link>
      </div>
    </div>
    {/* Login Button */}
    <button className="bg-accent text-white font-semibold px-6 py-2 rounded-lg shadow hover:brightness-110 transition">
      Login
    </button>
  </nav>
);

export default Navbar;
