'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sun, Moon, ArrowUpRight, Menu, X, MessageCircle } from 'lucide-react';
import { data } from '@/data/data';

export default function Navbar({ onOpenBooking }) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Check initial theme
    const savedTheme = localStorage.getItem('k9_theme');
    if (savedTheme === 'light' || (!savedTheme && window.matchMedia('(prefers-color-scheme: light)').matches)) {
      setIsLightMode(true);
      document.documentElement.classList.add('light-mode');
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextLight = !isLightMode;
    setIsLightMode(nextLight);
    if (nextLight) {
      document.documentElement.classList.add('light-mode');
      localStorage.setItem('k9_theme', 'light');
    } else {
      document.documentElement.classList.remove('light-mode');
      localStorage.setItem('k9_theme', 'dark');
    }
  };

  const navLinks = [
    { label: 'HOME', href: '/' },
    { label: 'ALBUMS', href: '/#portfolio-section' },
    { label: 'ABOUT', href: '/about' },
    { label: 'SERVICES', href: '/programs' },
    { label: 'TESTIMONIALS', href: '/#testimonials-section' },
    { label: 'PLANS', href: '/#pricing-section' },
    { label: 'STORE', href: '/equipment' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-12 pt-5 pb-3">
      <nav id="main-navbar" className={`max-w-7xl mx-auto flex items-center justify-between py-2.5 px-4 sm:px-6 rounded-full transition-all duration-300 ${isScrolled ? 'glass-nav-scrolled' : ''}`}>
        
        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10 text-[11px] xl:text-xs font-semibold tracking-[0.2em] uppercase font-sans text-slate-300">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`transition-colors hover:text-amber-400 ${pathname === link.href ? 'text-amber-400 font-bold' : 'text-slate-300'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Left Brand */}
        <Link href="/" className="flex lg:hidden items-center gap-3">
          <img src="/media/logo.jpg" alt="Ceylon K9 Logo" className="w-8 h-8 rounded-full border border-amber-500/40 object-cover" />
          <span className="font-heading font-extrabold text-sm text-white tracking-wider">CEYLON K9</span>
        </Link>

        {/* Right Side: Theme, Social & LET'S TALK Button */}
        <div className="flex items-center gap-3.5 sm:gap-4">
          
          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Dark/Light Mode"
            className="p-1.5 text-slate-400 hover:text-amber-400 transition-colors"
            title={isLightMode ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          >
            {isLightMode ? <Moon className="w-4 h-4 text-orange-500" /> : <Sun className="w-4 h-4 text-amber-400" />}
          </button>

          {/* Social Icons */}
          <a href={data.brand.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-slate-300 hover:text-white transition-colors p-1 hidden sm:inline-flex">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href={data.brand.socials.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-slate-300 hover:text-white transition-colors p-1 hidden sm:inline-flex">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-4.52z"/>
            </svg>
          </a>
          <a href={`https://wa.me/${data.brand.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-slate-300 hover:text-green-400 transition-colors p-1 hidden sm:inline-flex">
            <MessageCircle className="w-4 h-4" />
          </a>

          {/* LET'S TALK Pill Button */}
          <button
            onClick={() => onOpenBooking && onOpenBooking()}
            className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-black text-white border border-white/20 hover:border-amber-400 hover:bg-amber-500 hover:text-black transition-all duration-300 text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg group cursor-pointer"
          >
            <span>LET'S TALK</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            className="lg:hidden p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Slide-Out Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] z-40 bg-black/95 backdrop-blur-2xl p-6 flex flex-col justify-between border-t border-white/10 lg:hidden">
          <div className="space-y-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-lg font-bold font-heading text-white hover:text-amber-400 py-2 border-b border-white/5"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 space-y-4">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                if (onOpenBooking) onOpenBooking();
              }}
              className="btn-primary-luxury w-full justify-center py-3.5"
            >
              <span>Book Training Evaluation</span>
              <ArrowUpRight className="w-4 h-4 text-black" />
            </button>
            <div className="flex items-center justify-center gap-6 text-slate-400 pt-2">
              <a href={data.brand.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href={`https://wa.me/${data.brand.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-green-400"><MessageCircle className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
