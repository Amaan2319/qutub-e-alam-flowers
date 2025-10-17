import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // modern icons
import "../index.css"; // make sure .sacramento class is available

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle =
    "block px-3 py-2 text-sm sm:text-base font-medium hover:text-gray-800 transition";

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Brand */}
        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className="text-2xl sm:text-3xl text-black tracking-wide sacramento"
        >
          Qutub-e-Alam <span>Flowers</span>
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkStyle} ${
                isActive
                  ? "text-black font-semibold border-b-2 border-black"
                  : "text-gray-600"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/items"
            className={({ isActive }) =>
              `${linkStyle} ${
                isActive
                  ? "text-black font-semibold border-b-2 border-black"
                  : "text-gray-600"
              }`
            }
          >
            Items
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${linkStyle} ${
                isActive
                  ? "text-black font-semibold border-b-2 border-black"
                  : "text-gray-600"
              }`
            }
          >
            About
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
          <NavLink
            to="/"
            end
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `${linkStyle} ${
                isActive
                  ? "text-black font-semibold bg-gray-50"
                  : "text-gray-600"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/items"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `${linkStyle} ${
                isActive
                  ? "text-black font-semibold bg-gray-50"
                  : "text-gray-600"
              }`
            }
          >
            Items
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `${linkStyle} ${
                isActive
                  ? "text-black font-semibold bg-gray-50"
                  : "text-gray-600"
              }`
            }
          >
            About
          </NavLink>
        </div>
      )}
    </nav>
  );
}
