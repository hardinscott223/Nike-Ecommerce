'use client';
import React from 'react'

function Banner() {
  return (
    <section className="bg-neutral-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm font-medium text-neutral-500 mb-2">FEATURED</p>
              <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4 leading-tight">
                Air Max: Feel the Difference
              </h2>
              <p className="text-neutral-600 mb-8 text-lg">
                Experience the revolutionary air cushioning technology that changed the game forever.
              </p>
              <button className="bg-neutral-900 text-white px-8 py-3.5 rounded-full font-medium hover:bg-neutral-800 transition-colors">
                Shop Air Max
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=800&fit=crop"
                alt="Air Max"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default Banner