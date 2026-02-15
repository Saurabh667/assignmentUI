import { Link,NavLink } from "react-router-dom";
import { Leaf , Menu, X } from "lucide-react";
import { useState } from "react";
import React from 'react'

const NavBar = () => {
     const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <nav className="w-full bg-gray-100 border-b border-gray-200">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

        <div className="flex items-center gap-2">
          <Leaf className="text-green-600 w-7 h-7 sm:w-8 sm:h-8" />
          <h1 className="text-2xl sm:text-3xl font-bold">
            <span className="text-green-700">Ayur</span>
            <span className="text-green-500">DietCare</span>
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-8 lg:gap-12 text-lg lg:text-xl font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-green-700 border-b-4 border-green-700 pb-1"
                : "text-gray-500 hover:text-green-600 transition"
            }
          >
            Home
          </NavLink>

          <NavLink to="/" className="text-gray-500 hover:text-green-600 transition">
            DashBoard
          </NavLink>

          <NavLink to="/" className="text-gray-500 hover:text-green-600 transition">
            About
          </NavLink>

          <NavLink to="/" className="text-gray-500 hover:text-green-600 transition">
            Contact
          </NavLink>
        </div>

        <div className="hidden md:block">
          <button className="px-5 lg:px-6 py-2 text-lg lg:text-xl font-semibold text-green-700 border-2 border-green-700 rounded-xl hover:bg-green-700 hover:text-white transition duration-300">
            Sign In/Up
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="w-7 h-7 text-green-700" />
            ) : (
              <Menu className="w-7 h-7 text-green-700" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-4 text-lg font-semibold shadow-md">
          <NavLink to="/" className="block text-gray-600 hover:text-green-600">
            Home
          </NavLink>
          <NavLink to="/dashboard" className="block text-gray-600 hover:text-green-600">
            DashBoard
          </NavLink>
          <NavLink to="/about" className="block text-gray-600 hover:text-green-600">
            About
          </NavLink>
          <NavLink to="/contact" className="block text-gray-600 hover:text-green-600">
            Contact
          </NavLink>

          <button className="w-full mt-3 py-2 text-green-700 border-2 border-green-700 rounded-lg hover:bg-green-700 hover:text-white transition">
            Sign In/Up
          </button>
        </div>
      )}
    </nav>
    </>
  )
}

export default NavBar
