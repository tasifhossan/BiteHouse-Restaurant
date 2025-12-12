import React from "react";

export default function Hero() {
  return (
    <section className="rounded-lg overflow-hidden shadow-sm">
      <div className="relative">
        <img src="/img/hero.jpg" alt="hero" className="w-full h-72 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-display">Welcome to Our Restaurant</h1>
            <p className="mt-2">Fresh ingredients • Friendly service • Cozy vibes</p>
          </div>
        </div>
      </div>
    </section>
  );
}
