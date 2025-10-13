import React from "react";
import { ProductCard } from "../components/ProductCard";
import flower1 from "../assets/flowers/flower1.jpg";
import flower2 from "../assets/flowers/flower2.png";
import flower3 from "../assets/flowers/flower3.png";
import flower4 from "../assets/flowers/flower4.png";

export function Home() {
  const products = [
    { name: "Red Roses", price: 499, image: flower1 },
    { name: "White Lilies", price: 599, image: flower2 },
    { name: "Sunflowers", price: 399, image: flower3 },
    { name: "Tulip Mix", price: 699, image: flower4 },
  ];

  const services = [
    {
      name: "Car Decoration",
      desc: "Elegant floral car setups for weddings & events.",
    },
    {
      name: "Wedding Decoration",
      desc: "Complete venue floral design & mandap setup.",
    },
    {
      name: "Birthday Decoration",
      desc: "Colorful flower arrangements for birthdays.",
    },
    {
      name: "Anniversary Decoration",
      desc: "Romantic themes to celebrate your special day.",
    },
  ];

  return (
    <main className="p-4 max-w-6xl mx-auto flex flex-col gap-10">
      {/* Products Section */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-center">Our Flowers</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {products.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-center">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-gray-50 p-5 text-center shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg mb-2">{s.name}</h3>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
