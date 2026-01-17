'use client'; 

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'New & Featured', href: '#' },
  { label: 'Men', href: '#' },
  { label: 'Women', href: '#' },
  { label: 'Kids', href: '#' },
  { label: 'Sale', href: '#' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-neutral-100 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.49 10.19l-1-.42a7.63 7.63 0 00-.58-1.4l.44-.96a.5.5 0 00-.1-.56l-1.1-1.1a.5.5 0 00-.56-.1l-.96.44a7.63 7.63 0 00-1.4-.58l-.42-1a.5.5 0 00-.46-.31h-1.56a.5.5 0 00-.46.31l-.42 1c-.48.14-.95.34-1.4.58l-.96-.44a.5.5 0 00-.56.1l-1.1 1.1a.5.5 0 00-.1.56l.44.96c-.24.45-.44.92-.58 1.4l-1 .42a.5.5 0 00-.31.46v1.56c0 .21.13.39.31.46l1 .42c.14.48.34.95.58 1.4l-.44.96a.5.5 0 00.1.56l1.1 1.1a.5.5 0 00.56.1l.96-.44c.45.24.92.44 1.4.58l.42 1a.5.5 0 00.46.31h1.56a.5.5 0 00.46-.31l.42-1c.48-.14.95-.34 1.4-.58l.96.44a.5.5 0 00.56-.1l1.1-1.1a.5.5 0 00.1-.56l-.44-.96c.24-.45.44-.92.58-1.4l1-.42a.5.5 0 00.31-.46v-1.56a.5.5 0 00-.31-.46zM12 15a3 3 0 110-6 3 3 0 010 6z"/>
            </svg>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="hover:text-neutral-500 cursor-pointer transition-colors">Find a Store</span>
            <span className="text-neutral-300">|</span>
            <span className="hover:text-neutral-500 cursor-pointer transition-colors">Help</span>
            <span className="text-neutral-300">|</span>
            <span className="hover:text-neutral-500 cursor-pointer transition-colors">Join Us</span>
            <span className="text-neutral-300">|</span>
            <span className="hover:text-neutral-500 cursor-pointer transition-colors">Sign In</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={'#'} className="flex-shrink-0">
            <svg className="w-16 h-16" viewBox="0 0 69 32" fill="currentColor">
              <path d="M68.56 4.06c-.89-.39-1.82-.59-2.73-.59-2.05 0-4.04.83-5.49 2.29l-20.1 20.16c-.32.32-.84.32-1.16 0L25.64 12.48c-1.45-1.46-3.43-2.29-5.48-2.29-.91 0-1.84.2-2.73.59-2.43 1.06-4.01 3.45-4.01 6.08v.09c0 2.11.83 4.1 2.32 5.59l17.67 17.71c.32.32.32.84 0 1.16L16.03 58.67c-1.49 1.49-2.32 3.48-2.32 5.59v.09c0 2.63 1.58 5.02 4.01 6.08.89.39 1.82.59 2.73.59 2.05 0 4.03-.83 5.48-2.29l27.63-27.69c.32-.32.84-.32 1.16 0l7.36 7.38c1.45 1.46 3.43 2.29 5.48 2.29.91 0 1.84-.2 2.73-.59 2.43-1.06 4.01-3.45 4.01-6.08v-.09c0-2.11-.83-4.1-2.32-5.59L54.31 20.65c-.32-.32-.32-.84 0-1.16l9.93-9.96c1.49-1.49 2.32-3.48 2.32-5.59v-.09c0-2.63-1.58-5.02-4.01-6.08z" transform="scale(0.4) translate(0, 10)"/>
              <path d="M66.96 4.15C59.96.96 39.96 13.28 24.96 27.28c-2 1.87-5.87 6.12-7.87 8.12 15-2 35.5-20.62 49.87-31.25z"/>
            </svg>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-base font-medium text-neutral-900 hover:text-neutral-500 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neutral-900 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right side icons */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="hidden md:flex items-center bg-neutral-100 rounded-full px-4 py-2.5 gap-2 hover:bg-neutral-200 transition-colors cursor-pointer">
              <Search className="w-5 h-5 text-neutral-600" />
              <span className="text-sm text-neutral-500">Search</span>
            </div>

            {/* Mobile search icon */}
            <button className="md:hidden p-2 hover:bg-neutral-100 rounded-full transition-colors">
              <Search className="w-6 h-6" />
            </button>

            {/* Favorites */}
            <button className="p-2 hover:bg-neutral-100 rounded-full transition-colors relative">
              <Heart className="w-6 h-6" />
            </button>

            {/* Cart */}
            <button className="p-2 hover:bg-neutral-100 rounded-full transition-colors relative">
              <ShoppingBag className="w-6 h-6" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-neutral-900 text-white text-xs rounded-full flex items-center justify-center">
                2
              </span>
            </button>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 hover:bg-neutral-100 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 border-t border-neutral-100">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block py-3 text-xl font-medium text-neutral-900 hover:text-neutral-500 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-neutral-100 space-y-3 text-neutral-500">
              <p className="text-sm">Find a Store</p>
              <p className="text-sm">Help</p>
              <p className="text-sm">Join Us</p>
              <p className="text-sm">Sign In</p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}