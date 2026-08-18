const fs = require('fs');
const path = require('path');

// Ensure directories
['app', 'app/programs', 'app/programs/[slug]', 'app/gallery', 'app/equipment', 'app/about', 'app/contact', 'components'].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// 1. components/Navbar.jsx
fs.writeFileSync('components/Navbar.jsx', `'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sun, Moon, ArrowUpRight, Menu, X, MessageCircle, Facebook } from 'lucide-react';
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
      <nav id="main-navbar" className={\`max-w-7xl mx-auto flex items-center justify-between py-2.5 px-4 sm:px-6 rounded-full transition-all duration-300 \${isScrolled ? 'glass-nav-scrolled' : ''}\`}>
        
        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10 text-[11px] xl:text-xs font-semibold tracking-[0.2em] uppercase font-sans text-slate-300">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={\`transition-colors hover:text-amber-400 \${pathname === link.href ? 'text-amber-400 font-bold' : 'text-slate-300'}\`}
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
            <Facebook className="w-4 h-4" />
          </a>
          <a href={data.brand.socials.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-slate-300 hover:text-white transition-colors p-1 hidden sm:inline-flex">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-4.52z"/>
            </svg>
          </a>
          <a href={\`https://wa.me/\${data.brand.whatsapp}\`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-slate-300 hover:text-green-400 transition-colors p-1 hidden sm:inline-flex">
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
              <a href={data.brand.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white"><Facebook className="w-5 h-5" /></a>
              <a href={\`https://wa.me/\${data.brand.whatsapp}\`} target="_blank" rel="noopener noreferrer" className="hover:text-green-400\"><MessageCircle className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
`);

// 2. components/Footer.jsx
fs.writeFileSync('components/Footer.jsx', `'use client';

import Link from 'next/link';
import { Facebook, MessageCircle } from 'lucide-react';
import { data } from '@/data/data';

export default function Footer() {
  return (
    <footer className="relative bg-[#07080A] text-slate-300 border-t border-white/10 pt-20 pb-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        
        {/* Centered Brand Mark with Floating Accent Dot */}
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="flex items-center justify-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-lg shadow-amber-400/60 animate-pulse"></span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-[0.2em] uppercase">
              CEYLON K9
            </h3>
          </div>
          <p className="text-[11px] font-sans font-bold tracking-[0.3em] uppercase text-amber-500/90">
            ACADEMY
          </p>
        </div>

        {/* Centered Social Icons */}
        <div className="flex items-center justify-center gap-4">
          <a href={data.brand.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-amber-400 hover:bg-white/10 transition-all shadow-md">
            <Facebook className="w-4 h-4" />
          </a>
          <a href={data.brand.socials.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-amber-400 hover:bg-white/10 transition-all shadow-md">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-4.52z"/>
            </svg>
          </a>
          <a href={\`https://wa.me/\${data.brand.whatsapp}\`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-green-400 hover:border-green-400 hover:bg-white/10 transition-all shadow-md">
            <MessageCircle className="w-4 h-4" />
          </a>
          <a href={data.brand.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-pink-400 hover:border-pink-400 hover:bg-white/10 transition-all shadow-md">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>

        {/* Centered Main Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-bold uppercase tracking-[0.2em] font-sans text-slate-300">
          <Link href="/" className="hover:text-white transition-colors">HOME</Link>
          <Link href="/#portfolio-section" className="hover:text-white transition-colors">ALBUMS</Link>
          <Link href="/about" className="hover:text-white transition-colors">ABOUT US</Link>
          <Link href="/#pricing-section" className="hover:text-white transition-colors">PLANS</Link>
          <Link href="/#testimonials-section" className="hover:text-white transition-colors">TESTIMONIALS</Link>
          <Link href="/programs" className="hover:text-white transition-colors">SERVICES</Link>
          <Link href="/equipment" className="hover:text-white transition-colors">STORE</Link>
        </div>

        {/* Centered Bulleted Services Line */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] font-semibold text-slate-400 font-body border-t border-b border-white/5 py-4 max-w-4xl mx-auto">
          <span>Puppy Imprinting</span>
          <span>•</span>
          <span>Master Obedience</span>
          <span>•</span>
          <span>Behavior Correction</span>
          <span>•</span>
          <span>Personal Protection K9</span>
          <span>•</span>
          <span>Board & Train</span>
          <span>•</span>
          <span>Family Handler Coaching</span>
        </div>

        {/* Centered GET IN TOUCH & Large Hotline */}
        <div className="space-y-3 pt-2">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-amber-400 font-heading">
            GET IN TOUCH!
          </p>
          <a
            href={\`https://wa.me/\${data.brand.whatsapp}\`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white hover:text-amber-400 transition-colors tracking-wide"
          >
            {data.brand.phone}
          </a>
          <p className="text-xs text-slate-400">
            Headquarters: Western Province • Direct Doorstep Programs Island-Wide, Sri Lanka
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/10 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Ceylon K9 Academy. All rights reserved.</p>
          <p className="text-[11px] text-slate-600">Designed with Pure Canine Dedication</p>
        </div>

      </div>
    </footer>
  );
}
`);

// 3. components/WhatsAppWidget.jsx
fs.writeFileSync('components/WhatsAppWidget.jsx', `'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { data } from '@/data/data';

export default function WhatsAppWidget() {
  const [showPill, setShowPill] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3">
      {showPill && (
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-slate-900 text-xs font-bold font-sans shadow-2xl border border-slate-200">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
          <span>Chat on WhatsApp</span>
          <button
            onClick={() => setShowPill(false)}
            aria-label="Dismiss Tooltip"
            className="text-slate-400 hover:text-slate-700 ml-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <a
        href={\`https://wa.me/\${data.brand.whatsapp}?text=\${encodeURIComponent(data.brand.whatsappDefaultMsg)}\`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300"
      >
        <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>
    </div>
  );
}
`);

// 4. components/BookingModal.jsx
fs.writeFileSync('components/BookingModal.jsx', `'use client';

import { useState, useEffect } from 'react';
import { X, ShieldCheck, Lock, ArrowRight } from 'lucide-react';
import { data } from '@/data/data';

export default function BookingModal({ isOpen, onClose, initialProgram = '' }) {
  const [formData, setFormData] = useState({
    ownerName: '',
    ownerPhone: '',
    dogName: '',
    dogBreed: '',
    dogAge: '',
    program: initialProgram || '',
    location: '',
    notes: ''
  });

  useEffect(() => {
    if (initialProgram) {
      setFormData(prev => ({ ...prev, program: initialProgram }));
    }
  }, [initialProgram]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = \`*NEW CEYLON K9 EVALUATION BOOKING*
👤 *Owner Name:* \${formData.ownerName}
📞 *Phone:* \${formData.ownerPhone}
🐕 *Dog Name:* \${formData.dogName} (\${formData.dogBreed}, \${formData.dogAge})
🎓 *Program:* \${formData.program || 'General Evaluation'}
📍 *Location:* \${formData.location}
📝 *Notes:* \${formData.notes || 'None'}\`;

    const whatsappUrl = \`https://wa.me/\${data.brand.whatsapp}?text=\${encodeURIComponent(msg)}\`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 modal-backdrop flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#0E1015] border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/80 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Evaluation Booking</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading tracking-wide">
            Begin Your Dog's Transformation
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            Fill out your canine's details below to reserve your priority evaluation session with Ceylon K9 Academy.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.ownerName}
                onChange={e => setFormData({ ...formData, ownerName: e.target.value })}
                placeholder="e.g. Sanjeewa Wickramasinghe"
                className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Phone / WhatsApp Number *
              </label>
              <input
                type="tel"
                required
                value={formData.ownerPhone}
                onChange={e => setFormData({ ...formData, ownerPhone: e.target.value })}
                placeholder="e.g. 077 123 4567"
                className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Dog's Name *
              </label>
              <input
                type="text"
                required
                value={formData.dogName}
                onChange={e => setFormData({ ...formData, dogName: e.target.value })}
                placeholder="e.g. Thor"
                className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Breed *
              </label>
              <input
                type="text"
                required
                value={formData.dogBreed}
                onChange={e => setFormData({ ...formData, dogBreed: e.target.value })}
                placeholder="e.g. German Shepherd"
                className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Age *
              </label>
              <input
                type="text"
                required
                value={formData.dogAge}
                onChange={e => setFormData({ ...formData, dogAge: e.target.value })}
                placeholder="e.g. 5 Months"
                className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Desired Training Program *
              </label>
              <select
                required
                value={formData.program}
                onChange={e => setFormData({ ...formData, program: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              >
                <option value="">Select a Program</option>
                {data.programs.map((prog) => (
                  <option key={prog.id} value={prog.title}>{prog.title}</option>
                ))}
                <option value="General Evaluation & Advice">General Evaluation & Advice</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Your City / Area *
              </label>
              <input
                type="text"
                required
                value={formData.location}
                onChange={e => setFormData({ ...formData, location: e.target.value })}
                placeholder="e.g. Colombo, Kandy, Galle"
                className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Behavioral Challenges & Goals (Optional)
            </label>
            <textarea
              rows={2}
              value={formData.notes}
              onChange={e => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Describe any issues (pulling, jumping, aggression, anxiety, puppy training)..."
              className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
          </div>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              <span>100% Privacy Protected. Concierge Response.</span>
            </div>
            <button type="submit" className="btn-primary-luxury w-full sm:w-auto justify-center">
              <span>Confirm & Submit Booking</span>
              <div className="icon-disc !w-5 !h-5">
                <ArrowRight className="w-3.5 h-3.5 text-black" />
              </div>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
`);

// 5. components/LightboxModal.jsx
fs.writeFileSync('components/LightboxModal.jsx', `'use client';

import { X } from 'lucide-react';

export default function LightboxModal({ isOpen, src, caption, onClose }) {
  if (!isOpen || !src) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8"
    >
      <button
        onClick={onClose}
        aria-label="Close Lightbox"
        className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-black/80 border border-white/20 text-white hover:bg-amber-500 hover:text-black transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      <div
        onClick={e => e.stopPropagation()}
        className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
      >
        <img
          src={src}
          alt={caption || 'Graduate Photo'}
          className="max-h-[75vh] w-auto rounded-2xl shadow-2xl object-contain border border-white/10"
        />
        {caption && (
          <p className="mt-4 text-center text-sm font-semibold text-slate-300 font-sans tracking-wide bg-black/70 px-4 py-1.5 rounded-full border border-white/10">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
}
`);

// 6. components/MarqueeRibbon.jsx
fs.writeFileSync('components/MarqueeRibbon.jsx', `'use client';

import { data } from '@/data/data';

export default function MarqueeRibbon({ onOpenLightbox }) {
  return (
    <section className="w-full overflow-hidden border-t border-b border-white/10 bg-[#040507] py-6 sm:py-8">
      <div className="marquee-strip-wrapper">
        <div className="marquee-strip-track flex items-center gap-4 sm:gap-6">
          {[...data.socialStrip, ...data.socialStrip].map((item, idx) => (
            <div
              key={idx}
              onClick={() => onOpenLightbox && onOpenLightbox(item.image, \`\${item.tag} • Ceylon K9 Academy Live\`)}
              className="relative h-60 sm:h-72 md:h-80 w-auto rounded-2xl overflow-hidden group cursor-pointer shrink-0 border border-white/10 shadow-xl bg-black"
            >
              <img
                src={item.image}
                alt={item.tag}
                className="h-full w-auto max-w-none object-contain sm:object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-[10px] font-sans font-bold text-amber-400 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/40 uppercase tracking-widest">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`);

console.log('Core Next.js components generated successfully');
