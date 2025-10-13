import React from "react";

export function ProductCard({ name, price, image }) {
  return (
    <div className="flex flex-col items-center p-3 hover:opacity-90 transition">
      <img
        src={image}
        alt={name}
        className="w-full aspect-square object-cover"
      />
      <h3 className="mt-2 font-medium text-lg text-center">{name}</h3>
      <p className="text-gray-600 text-center">₹{price}</p>
    </div>
  );
}
