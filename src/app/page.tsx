'use client';
import React from 'react';
import Navbar from '@/components/user/Navbar';
import Footer from '@/components/user/Footer';
import Products from '@/components/user/Products';
import Banner from '@/components/user/Banner';
import Hero from '@/components/user/Hero';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <Hero/>

      {/* Products Section */}
      <Products/>

      {/* Featured Banner */}
      <Banner/>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}