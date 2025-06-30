import { Link } from "react-router-dom";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-teal-100 shadow-lg mb-6">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex mx-8 italic">
          <img className="w-6 h-6 mt-2.5" src="https://img.icons8.com/?size=160&id=cwGoWVNMgQZg&format=png" alt="" />
          <div className="mt-2 text-2xl font-serif flex">
            <span className="text-emerald-600 text-shadow-md font-extrabold flex">
              S
              <img className="w-6 h-6 mt-1" src="https://img.icons8.com/?size=96&id=BewN23wCh-il&format=png" alt="" />
              ft-Bite
            </span>
          </div>
        </div>
        {/* Hamburger menu button */}
        <button
          className="md:hidden flex items-center ml-4 text-emerald-700 focus:outline-none md:cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <img
            src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
            alt="Menu"
            className="w-10 h-10"
          />
        </button>
        {/* /* Animated Mobile Menu */ }
          <div
            className={`fixed left-0 right-0 z-40 transition-all duration-300 ease-in-out md:hidden  ${
              isOpen
                ? "opacity-100 cursor-pointer duration-2000"
                : "transform -translate-y-8 opacity-0 pointer-events-none duration-2000"
            } top-[72px]`}
        >
          <div className="bg-teal-100 rounded-b-lg shadow-lg px-4 pb-4 pt-2">
            <div className="flex flex-col space-y-2">
              <Link
                className="hover:text-yellow-300 text-black font-medium transition-colors duration-200"
                to="/home"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                className="hover:text-yellow-300 text-black font-medium transition-colors duration-200"
                to="/about"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                className="hover:text-yellow-300 text-black font-medium transition-colors duration-200"
                to="/menu"
                onClick={() => setIsOpen(false)}
              >
                Menu
              </Link>
              <Link
                className="hover:text-yellow-300 text-black font-medium transition-colors duration-200"
                to="/contact"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                className="hover:bg-white hover:text-blue-500 font-medium bg-blue-500 text-blue-200 px-3 py-1 rounded transition-colors duration-200"
                to="/login"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                className="hover:bg-white hover:text-green-500 font-medium bg-green-300 text-green-900 px-3 py-1 rounded transition-colors duration-200"
                to="/"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link className="hover:text-yellow-300 text-black font-medium transition-colors duration-200" to="/home">Home</Link>
          <Link className="hover:text-yellow-300 text-black font-medium transition-colors duration-200" to="/about">About</Link>
          <Link className="hover:text-yellow-300 text-black font-medium transition-colors duration-200" to="/menu">Menu</Link>
          <Link className="hover:text-yellow-300 text-black font-medium transition-colors duration-200" to="/contact">Contact</Link>
          <Link className="hover:bg-white hover:text-blue-500 font-medium bg-blue-600 text-blue-900 px-3 py-1 rounded transition-colors duration-200 shadow" to="/login">Login</Link>
          <Link className="hover:bg-white hover:text-green-500 font-medium bg-green-300 text-green-900 px-3 py-1 rounded transition-colors duration-200 shadow" to="/">Sign Up</Link>
        </div>
      </div>
     
    </nav>
  );
}
