import React from "react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-white text-black py-6 border-t border-gray-200">
      <div className="flex flex-col items-center gap-2">
        <p>© 2025 Qutbe-Alam Flowers</p>
        <div className="flex gap-4 text-xl">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70"
          >
            <FaFacebook />
          </a>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}
