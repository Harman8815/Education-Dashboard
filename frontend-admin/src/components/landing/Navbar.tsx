'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/common';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Analytics', href: '#analytics' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
  ];

  const dropdownItems = {
    'Solutions': [
      { label: 'Teacher Management', href: '#teacher-management' },
      { label: 'Student Analytics', href: '#student-analytics' },
      { label: 'Institute Dashboard', href: '#institute-dashboard' },
    ],
    'Resources': [
      { label: 'Documentation', href: '#docs' },
      { label: 'API Reference', href: '#api' },
      { label: 'Support', href: '#support' },
    ],
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md',
        isScrolled 
          ? 'bg-background-main/90 border-b border-background-secondary/50 shadow-lg' 
          : 'bg-background-main/70'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                EduAdmin
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-text-secondary hover:text-text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
            
            {/* Dropdown Items */}
            {Object.entries(dropdownItems).map(([category, items]) => (
              <div key={category} className="relative group">
                <button className="flex items-center text-text-secondary hover:text-text-primary transition-colors duration-200 font-medium">
                  {category}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                <div className="absolute top-full left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                  <div className="bg-background-card border border-background-secondary/50 rounded-xl shadow-2xl overflow-hidden">
                    {items.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block px-6 py-3 text-text-secondary hover:text-text-primary hover:bg-background-secondary/50 transition-colors duration-200"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="primary" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text-secondary hover:text-text-primary p-2 rounded-lg hover:bg-background-card/50 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'lg:hidden transition-all duration-300 overflow-hidden',
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="py-4 space-y-2 border-t border-background-secondary/50">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-background-card/50 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            
            {Object.entries(dropdownItems).map(([category, items]) => (
              <div key={category} className="px-4 py-2">
                <div className="font-medium text-text-primary mb-2">{category}</div>
                {items.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block pl-4 py-2 text-text-secondary hover:text-text-primary hover:bg-background-card/50 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            ))}
            
            <div className="px-4 py-3 space-y-3 border-t border-background-secondary/50 mt-4">
              <Button variant="ghost" size="sm" fullWidth>
                Sign In
              </Button>
              <Button variant="primary" size="sm" fullWidth>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
