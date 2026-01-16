import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Footer from '../components/Footer';

// Sample product data
const products = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop',
    label: 'Just In',
    name: 'Nike Air Max Plus',
    category: "Men's Shoes",
    colorCount: 1,
    price: 180,
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&h=800&fit=crop',
    label: 'Just In',
    name: 'Nike Air Force 1 \'07',
    category: "Men's Shoes",
    colorCount: 2,
    price: 115,
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=800&h=800&fit=crop',
    label: 'Just In',
    name: 'Nike Dunk Low Retro',
    category: "Men's Shoes",
    colorCount: 1,
    price: 115,
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=800&fit=crop',
    label: 'Just In',
    name: 'Nike Air Max 90',
    category: "Men's Shoes",
    colorCount: 3,
    price: 130,
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=800&fit=crop',
    name: 'Nike Air Jordan 1 Low',
    category: "Women's Shoes",
    colorCount: 5,
    price: 125,
  },
  {
    id: '6',
    image: 'https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&h=800&fit=crop',
    label: 'Best Seller',
    name: 'Nike Blazer Mid \'77',
    category: "Women's Shoes",
    colorCount: 2,
    price: 105,
  },
  {
    id: '7',
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&h=800&fit=crop',
    name: 'Nike React Infinity',
    category: 'Running Shoes',
    colorCount: 4,
    price: 160,
  },
  {
    id: '8',
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&h=800&fit=crop',
    label: 'Sustainable Materials',
    name: 'Nike Air VaporMax 2023',
    category: "Men's Shoes",
    colorCount: 2,
    price: 210,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
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

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
            Trending Now
          </h2>
          <button className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors flex items-center gap-1">
            View All
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {/* {products.map((product) => (
            <Card key={product.id} {...product} />
          ))} */}
        </div>
      </section>

      {/* Featured Banner */}
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
                src="https://images.unsplash.com/photo-1514989940723-e8e51d675571?w=800&h=600&fit=crop"
                alt="Air Max"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}