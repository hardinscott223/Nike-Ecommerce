'use client';
import React from 'react'

function Hero() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1920&h=1080&fit=crop"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 md:pb-24 text-white text-center px-4">
          <p className="text-sm md:text-base font-medium mb-2 tracking-wide">NIKE RUNNING</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
            JUST DO IT
          </h1>
          <p className="text-base md:text-lg max-w-xl mb-8 text-white/90">
            Discover the latest innovations in comfort and style
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-neutral-900 px-8 py-3.5 rounded-full font-medium hover:bg-neutral-100 transition-colors">
              Shop Now
            </button>
            <button className="border border-white text-white px-8 py-3.5 rounded-full font-medium hover:bg-white/10 transition-colors">
              Explore
            </button>
          </div>
        </div>
      </section>
  )
}

export default Hero