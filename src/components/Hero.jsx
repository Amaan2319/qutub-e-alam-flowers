import React from "react";
import heroBg from "../assets/hero-bg.jpg";

export function Hero() {
  return (
    <section
      className="relative h-[70vh] flex items-center justify-center text-center"
      style={{
        backgroundImage:
          `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-white px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3">
          Qutbe-Alam Flowers
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-100">
          Bringing Freshness, Elegance & Love to Every Occasion
        </p>
      </div>
    </section>
  );
}
