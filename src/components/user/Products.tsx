'use client';
import React from 'react'
import Card, { CardSkeleton } from './Card';

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

function Products() {
  return (
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
          {products.map((product) => (
            <Card key={product.id} {...product} />
          ))}
        </div>
      </section>
  )
}

export default Products