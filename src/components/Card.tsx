'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import "../app/globals.css";

// import { createPageUrl } from '@/utils';

/**
 * Reusable Product Card Component
 * 
 * @param {Object} props
 * @param {string} props.id - Product ID for linking
 * @param {string} props.image - Product image URL
 * @param {string} props.label - Optional label (e.g., "Just In", "Best Seller")
 * @param {string} props.name - Product name
 * @param {string} props.category - Product category (e.g., "Men's Shoes")
 * @param {number} props.colorCount - Number of available colors
 * @param {number} props.price - Product price
 * @param {string} props.currency - Currency symbol (default: "$")
 * @param {string} props.href - Optional custom link
 */
export default function Card({
  id,
  image,
  // label,
  name,
  category,
  colorCount,
  price,
  currency = '$',
  // href,
}) {
  // const linkTo = href || createPageUrl(`Home?product=${id}`);

  return (
    <Link 
      href={'/'}
      className="group block"
    >
      <div className="relative overflow-hidden bg-neutral-100 rounded-lg aspect-square mb-4">
        {/* Product Image */}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Hover overlay with quick actions */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
        
        {/* Quick view button - appears on hover */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <button 
            className="bg-white text-neutral-900 px-6 py-2.5 rounded-full text-sm font-medium shadow-lg hover:bg-neutral-900 hover:text-white transition-colors"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              // Quick view action
            }}
          >
            Quick View
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        {/* Label */}
        {/* {label && (
          <p className="text-sm font-medium text-orange-600">
            {label}
          </p>
        )} */}

        {/* Product Name */}
        <h3 className="text-base font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">
          {name}
        </h3>

        {/* Category */}
        <p className="text-sm text-neutral-500">
          {category}
        </p>

        {/* Color Count */}
        {colorCount && colorCount > 0 && (
          <p className="text-sm text-neutral-500">
            {colorCount} {colorCount === 1 ? 'Colour' : 'Colours'}
          </p>
        )}

        {/* Price */}
        <p className="text-base font-medium text-neutral-900 pt-2">
          {currency}{price?.toLocaleString()}
        </p>
      </div>
    </Link>
  );
}

// Skeleton loader for the card
export function CardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-neutral-200 rounded-lg aspect-square mb-4" />
      <div className="space-y-2">
        <div className="h-3 bg-neutral-200 rounded w-16" />
        <div className="h-4 bg-neutral-200 rounded w-3/4" />
        <div className="h-3 bg-neutral-200 rounded w-1/2" />
        <div className="h-3 bg-neutral-200 rounded w-1/4" />
        <div className="h-4 bg-neutral-200 rounded w-20 mt-2" />
      </div>
    </div>
  );
}