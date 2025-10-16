import React from "react";
import { ProductCard } from "../components/ProductCard";
import flower1 from "../assets/flowers/flower1.jpg";
import flower2 from "../assets/flowers/flower2.png";
import flower3 from "../assets/flowers/flower3.png";
import flower4 from "../assets/flowers/flower4.png";

export function Items() {
  const categories = [
    {
      title: "Weddings",
      products: [
        { name: "Wedding Roses", price: 799, image: flower1 },
        { name: "Mandap Garland", price: 999, image: flower2 },
      ],
    },
    {
      title: "Birthdays",
      products: [
        { name: "Birthday Blooms", price: 499, image: flower3 },
        { name: "Colorful Bouquet", price: 599, image: flower4 },
      ],
    },
    {
      title: "Anniversaries",
      products: [
        { name: "Romantic Roses", price: 699, image: flower2 },
        { name: "Tulip Delight", price: 749, image: flower1 },
      ],
    },
  ];

  return (
    <main className="p-4 max-w-6xl mx-auto flex flex-col gap-10">
      {categories.map((cat, i) => (
        <section key={i}>
          <h2 className="text-xl font-semibold mb-4 text-center">
            {cat.title}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {cat.products.map((p, j) => (
              <ProductCard key={j} {...p} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
