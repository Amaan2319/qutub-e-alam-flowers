import React from "react";

export function About() {
  return (
    <section className="p-6 max-w-4xl mx-auto text-center winky-sans">
      <h1 className="text-4xl sm:text-5xl mb-4 wiky-sans ">
        About Us
      </h1>

      <p className="text-gray-700 leading-relaxed mt-4">
        At <strong>Qutub-e-Alam Flowers</strong>, we believe that every flower
        tells a story. With years of experience in floral design, we specialize
        in creating beautiful arrangements for weddings, birthdays,
        anniversaries, and all kinds of special occasions.
      </p>

      <p className="text-gray-700 mt-4 leading-relaxed">
        From elegant bouquets to full-scale event decorations, our mission is to
        bring freshness, fragrance, and joy to every moment. We take pride in
        using the finest blooms and adding personal touches to make your
        occasions truly memorable.
      </p>

      <p className="text-gray-700 mt-4 leading-relaxed">
        Visit our flower studio in Ahmedabad to explore our collection and
        experience the art of floral beauty crafted with love and care.
      </p>

      <h2 className="text-2xl font-serif mt-10 mb-4">Our Location</h2>

      <div className="w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-md">
        <iframe
          title="Qutub-e-Alam Flowers Location"
          src="https://www.google.com/maps?q=22.9565,72.6130&z=15&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <p className="text-gray-600 mt-3 text-sm">
        📍 Coordinates: 22°57'23.4"N 72°36'46.9"E
      </p>
    </section>
  );
}
