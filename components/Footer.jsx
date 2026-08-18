'use client';

import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
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
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href={data.brand.socials.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-amber-400 hover:bg-white/10 transition-all shadow-md">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-4.52z"/>
            </svg>
          </a>
          <a href={`https://wa.me/${data.brand.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-green-400 hover:border-green-400 hover:bg-white/10 transition-all shadow-md">
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
            href={`https://wa.me/${data.brand.whatsapp}`}
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
