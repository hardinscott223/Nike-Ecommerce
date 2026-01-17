'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

const footerSections = [
  {
    title: 'Resources',
    links: [
      { label: 'Gift Cards', href: 'Home' },
      { label: 'Find a Store', href: 'Home' },
      { label: 'Membership', href: 'Home' },
      { label: 'Nike Journal', href: 'Home' },
      { label: 'Site Feedback', href: 'Home' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Get Help', href: 'Home' },
      { label: 'Order Status', href: 'Home' },
      { label: 'Shipping and Delivery', href: 'Home' },
      { label: 'Returns', href: 'Home' },
      { label: 'Order Cancellation', href: 'Home' },
      { label: 'Payment Options', href: 'Home' },
      { label: 'Gift Card Balance', href: 'Home' },
      { label: 'Contact Us', href: 'Home' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Nike', href: 'Home' },
      { label: 'News', href: 'Home' },
      { label: 'Careers', href: 'Home' },
      { label: 'Investors', href: 'Home' },
      { label: 'Purpose', href: 'Home' },
      { label: 'Sustainability', href: 'Home' },
    ],
  },
];

const socialLinks = [
  {
    name: 'Twitter',
    href: '#',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const [expandedSection, setExpandedSection] = React.useState(null);

  const toggleSection = (title) => {
    setExpandedSection(expandedSection === title ? null : title);
  };

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Navigation sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              {/* Mobile accordion header */}
              <button
                className="md:hidden w-full flex items-center justify-between py-3 border-b border-neutral-700"
                onClick={() => toggleSection(section.title)}
                aria-expanded={expandedSection === section.title}
              >
                <span className="text-sm font-medium uppercase tracking-wider">
                  {section.title}
                </span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    expandedSection === section.title ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Desktop title */}
              <h3 className="hidden md:block text-sm font-medium uppercase tracking-wider mb-6">
                {section.title}
              </h3>

              {/* Links */}
              <ul
                className={`space-y-3 overflow-hidden transition-all duration-300 md:max-h-none ${
                  expandedSection === section.title ? 'max-h-96 py-4' : 'max-h-0 md:max-h-none'
                }`}
              >
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social links section */}
          <div className="lg:flex lg:justify-end">
            <div className="flex gap-4 mt-6 md:mt-0">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-neutral-700 rounded-full flex items-center justify-center hover:bg-neutral-600 transition-colors"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-10 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Location */}
            <div className="flex items-center gap-2 text-neutral-400">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">United States</span>
            </div>

            {/* Copyright and legal links */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <p className="text-xs text-neutral-400">
                © {new Date().getFullYear()} Nike, Inc. All Rights Reserved
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-neutral-400">
                <Link href={'Home'} className="hover:text-white transition-colors">
                  Guides
                </Link>
                <Link href={'Home'} className="hover:text-white transition-colors">
                  Terms of Sale
                </Link>
                <Link href={'Home'} className="hover:text-white transition-colors">
                  Terms of Use
                </Link>
                <Link href={'Home'} className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}