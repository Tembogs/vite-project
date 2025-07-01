import {  NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
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
          {isOpen ?<FaTimes className="size-6"/> :  <FaBars className="size-6" /> }
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
              <NavLink
                className={({isActive}) => isActive ? "text-red-700 font-extrabold bg-stone-300 shadow-md py-2 px-3" : "hover:text-yellow-300 text-black font-medium transition-colors duration-200"}
                to="/home"
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                className={({isActive}) => isActive ? "text-red-700 font-extrabold bg-stone-300 shadow-md py-2 px-3" : "hover:text-yellow-300 text-black font-medium transition-colors duration-200"} 
                to="/about"
                onClick={() => setIsOpen(false)}
              >
                About
              </NavLink>
              <NavLink
               className={({isActive}) => isActive ? "text-red-700 font-extrabold bg-stone-300 shadow-md py-2 px-3" : "hover:text-yellow-300 text-black font-medium transition-colors duration-200"} 
                to="/menu"
                onClick={() => setIsOpen(false)}
              >
                Menu
              </NavLink>
              <NavLink
                className={({isActive}) => isActive ? "text-red-700 font-extrabold bg-stone-300 shadow-md py-2 px-3" : "hover:text-yellow-300 text-black font-medium transition-colors duration-200"} 
                to="/contact"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
              {/* <NavLink
                className={({isActive}) => isActive ? "text-red-700 font-extrabold" : "hover:text-yellow-300 text-black font-medium transition-colors duration-200"} 
                to="/login"
                onClick={() => setIsOpen(false)}
              >
                Login
              </NavLink> */}
              <NavLink
                className={({isActive}) => isActive ? "text-red-700 font-extrabold bg-stone-300 shadow-md py-2 px-3" : "hover:text-yellow-300 text-black font-medium transition-colors duration-200"} 
                to="/"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </NavLink>
            </div>
          </div>
        </div>
        <div className="hidden md:flex space-x-4">
          <NavLink className={({isActive}) => isActive ? "text-red-700 font-extrabold" : "hover:text-yellow-300 text-black font-medium transition-colors duration-200"} to="/home">Home</NavLink>
          <NavLink className={({isActive}) => isActive ? "text-red-700 font-extrabold" : "hover:text-yellow-300 text-black font-medium transition-colors duration-200"}to="/about">About</NavLink>
          <NavLink className={({isActive}) => isActive ? "text-red-700 font-extrabold" : "hover:text-yellow-300 text-black font-medium transition-colors duration-200"} to="/menu">Menu</NavLink>
          <NavLink className={({isActive}) => isActive ? "text-red-700 font-extrabold" : "hover:text-yellow-300 text-black font-medium transition-colors duration-200"} to="/contact">Contact</NavLink>
          {/* <NavLink className={({isActive}) => isActive ? "text-red-700 font-extrabold" : "hover:text-yellow-300 text-black font-medium transition-colors duration-200"} to="/login">Login</NavLink> */}
          <NavLink className={({isActive}) => isActive ? "text-red-700 font-extrabold" : "hover:text-yellow-300 text-black font-medium transition-colors duration-200"} to="/">Get Started</NavLink>
        </div>
      </div>
     
    </nav>
  );
}
