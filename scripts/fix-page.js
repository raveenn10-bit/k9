const fs = require('fs');

const pageContent = `'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Check, Maximize2, ShieldCheck, Heart, Sparkles, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import BookingModal from '@/components/BookingModal';
import LightboxModal from '@/components/LightboxModal';
import MarqueeRibbon from '@/components/MarqueeRibbon';
import { data } from '@/data/data';

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('');
  const [lightbox, setLightbox] = useState({ isOpen: false, src: '', caption: '' });
  const [activeCategory, setActiveCategory] = useState('all');

  const openBooking = (programTitle = '') => {
    setSelectedProgram(programTitle);
    setIsBookingOpen(true);
  };

  const openLightbox = (src, caption = '') => {
    setLightbox({ isOpen: true, src, caption });
  };

  const filteredGraduates = activeCategory === 'all'
    ? data.graduates
    : data.graduates.filter(g => g.category === activeCategory);

  return (
    <>
      <Navbar onOpenBooking={() => openBooking()} />

      <main className="relative bg-[#07080A] text-slate-100 selection:bg-amber-500 selection:text-black">
        
        {/* 1. FULL-BLEED EDITORIAL HERO (With Staggered Spring Animation) */}
        <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-end pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          
          {/* Hero Image with Feathered Overlay (No hard vertical seam) */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src="/media/hero.jpg"
              alt="Ceylon K9 Academy — Master Trainer Ashen"
              className="w-full h-full object-cover object-[70%_center] sm:object-[75%_center] kenburns-hero transform"
            />
            <div className="hero-overlay-horizontal absolute inset-0 w-full"></div>
            <div className="hero-overlay-vertical absolute inset-0 w-full"></div>
          </div>

          {/* Hero Content with Framer Motion Springs */}
          <div className="relative z-10 max-w-7xl mx-auto w-full space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="hero-stagger max-w-4xl space-y-3"
            >
              <h1 className="text-4xl sm:text-7xl lg:text-8xl font-serif tracking-[0.22em] leading-[1.08] text-white uppercase font-normal">
                SMART TRAINING <br />
                <span className="gold-gradient-text">FOR HAPPY DOGS</span>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs sm:text-base text-slate-300 font-normal font-body max-w-2xl leading-relaxed"
              >
                Transforming canine behavior through ethology-based positive reinforcement, handler mastery, and proven real-world distraction proofing across Sri Lanka.
              </motion.p>
            </motion.div>

            {/* Main Action Button with Magnetic Pull & Spring Tap */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="pt-2 flex items-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={() => openBooking('General Evaluation')}
                className="btn-primary-luxury"
              >
                <span>Book Training Evaluation</span>
                <div className="icon-disc">
                  <ArrowUpRight className="w-3.5 h-3.5 text-black" />
                </div>
              </motion.button>
            </motion.div>
          </div>

        </section>

        {/* 2. CEYLON K9 ACADEMY OVERVIEW & CAPABILITIES */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          id="about-section"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-white/5"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Master Trainer Ashen & Puppy Card (Centered) */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="c-bezel max-w-md w-full"
              >
                <div className="c-bezel-inner p-6 sm:p-8 flex flex-col items-center text-center space-y-5 bg-[#0E1015]">
                  <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl bg-black flex items-center justify-center">
                    <img
                      src="/media/ashen-portrait.png"
                      alt="Head Trainer Ashen"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3 text-center">
                      <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-amber-500/40 text-amber-400 text-[10px] font-bold uppercase tracking-wider">
                        Master Trainer & Ethologist
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-white tracking-wide">
                      Ashen & Team
                    </h3>
                    <p className="text-xs text-amber-400 font-semibold tracking-wider uppercase">
                      Ceylon K9 Academy Founders
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 font-body leading-relaxed max-w-xs">
                    Over a decade of dedicated professional dog training, behavioral rehabilitation, and companion happiness across Sri Lanka.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right: Core Capability Capsules (2x3 Grid) */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="eyebrow-badge">Pioneering Sri Lanka's Modern Canine Movement</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
                  Ethology-Based Methods. <br />
                  <span className="gold-gradient-text">Permanent Lifelong Results.</span>
                </h2>
                <p className="text-slate-300 text-sm sm:text-base font-body leading-relaxed">
                  Traditional force-based intimidation creates fear. Our scientific methodology leverages motivation, canine psychology, and handler clarity so your dog obeys with genuine enthusiasm.
                </p>
              </div>

              {/* 2x3 Capsules with Glowing Emojis & Spring Hover */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: '✨', title: 'Positive Reinforcement', desc: 'Reward-based motivation eliminating fear and aggression.' },
                  { icon: '🛡️', title: 'Reactivity & Barking Rehab', desc: 'Proven systematic desensitization for reactive dogs.' },
                  { icon: '🧠', title: 'Puppy Social Imprinting', desc: 'Critical 8-16 week foundational neurological development.' },
                  { icon: '⚡', title: 'Distraction Proofing', desc: 'High-reliability focus around traffic, animals, and strangers.' },
                  { icon: '🏡', title: 'Doorstep In-Home Training', desc: 'We come directly to your home environment across Sri Lanka.' },
                  { icon: '🤝', title: 'Family Handler Coaching', desc: 'Empowering your family to maintain reliable leadership forever.' },
                ].map((cap, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02, y: -3 }}
                    transition={{ type: "spring", stiffness: 350, damping: 22 }}
                    className="p-4 rounded-2xl bg-[#0E1015] border border-white/10 hover:border-amber-500/40 transition-colors flex items-start gap-3.5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-lg">
                      {cap.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white font-heading">{cap.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{cap.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => openBooking('10-Day Intensive Program')}
                  className="btn-primary-luxury"
                >
                  <span>Book 10-Day Intensive Course</span>
                  <div className="icon-disc">
                    <ArrowRight className="w-3.5 h-3.5 text-black" />
                  </div>
                </motion.button>
                <Link
                  href="/programs"
                  className="btn-secondary-luxury"
                >
                  <span>View All 6 Programs</span>
                </Link>
              </div>
            </div>

          </div>
        </motion.section>

        {/* 3. ALBUMS SECTION (Auto-Scrolling on Mobile, 3 Cols Desktop) */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          id="portfolio-section"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-white/5 overflow-hidden"
        >
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-[0.35em] uppercase font-normal">
              A L B U M S
            </h2>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {[
                { id: 'all', label: 'ALL WORKS' },
                { id: 'rottweiler', label: 'ROTTWEILER' },
                { id: 'gsd', label: 'GERMAN SHEPHERD' },
                { id: 'malinois', label: 'BELGIAN MALINOIS' },
                { id: 'boxer', label: 'BOXER & FAMILY' },
                { id: 'puppy', label: 'PUPPIES' },
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setActiveCategory(f.id)}
                  className={'px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-widest transition-all ' + (
                    activeCategory === f.id
                      ? 'bg-black border border-amber-500/60 text-amber-400 shadow-md'
                      : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/30'
                  )}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Mobile Auto-Scroll Notice */}
            <div className="flex sm:hidden items-center justify-center gap-1.5 text-[11px] font-semibold text-amber-400/90 pt-1">
              <span>⚡ Continuous Auto-Scrolling • Tap any album to zoom</span>
            </div>
          </div>

          {/* Desktop 3x3 Portrait Grid (hidden on mobile) */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {filteredGraduates.map((grad) => (
              <motion.div
                key={grad.id}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => openLightbox(grad.image, grad.name + ' (' + grad.breed + ') — ' + grad.certificate)}
                className="gallery-grid-item group relative rounded-2xl overflow-hidden bg-[#0E1015] border border-white/10 hover:border-amber-500/50 transition-all duration-500 cursor-pointer shadow-lg"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-black">
                  <img
                    src={grad.image}
                    alt={grad.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute top-3.5 left-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-amber-500/40 text-amber-400 text-[10px] font-bold uppercase tracking-wider">
                      {grad.certificate}
                    </span>
                  </div>

                  <div className="absolute top-3.5 right-3.5 p-2 rounded-full bg-black/80 text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white/80 opacity-60 group-hover:opacity-100 transition-opacity">
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold font-heading text-white">{grad.name}</h4>
                      <p className="text-[10px] text-amber-400/90 font-medium uppercase tracking-wider">{grad.breed}</p>
                    </div>
                    <span className="text-[9px] text-slate-400 uppercase tracking-widest hidden sm:inline">© Ceylon K9</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Auto-Scrolling Marquee Track (visible only on mobile) */}
          <div className="block sm:hidden mobile-album-wrapper overflow-hidden py-2 -mx-4">
            <div className="mobile-album-track flex gap-4">
              {[...filteredGraduates, ...filteredGraduates].map((grad, idx) => (
                <div
                  key={idx}
                  onClick={() => openLightbox(grad.image, grad.name + ' (' + grad.breed + ') — ' + grad.certificate)}
                  className="w-[72vw] shrink-0 rounded-2xl overflow-hidden bg-[#0E1015] border border-white/10 shadow-lg cursor-pointer"
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-black">
                    <img
                      src={grad.image}
                      alt={grad.name}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-amber-500/40 text-amber-400 text-[10px] font-bold uppercase tracking-wider">
                        {grad.certificate}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <div>
                        <h4 className="text-xs font-bold font-heading">{grad.name}</h4>
                        <p className="text-[10px] text-amber-400 font-medium uppercase tracking-wider">{grad.breed}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-[#1E222D] hover:bg-amber-500 hover:text-black border border-white/10 text-xs font-bold uppercase tracking-widest text-white transition-all shadow-md"
            >
              VIEW FULL GRADUATE ALBUM
            </Link>
          </div>
        </motion.section>

        {/* 4. TESTIMONIALS SECTION (Horizontal Swipe on Mobile, Alternating Staggered on Desktop) */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          id="testimonials-section"
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-white/5"
        >
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl sm:text-5xl font-bold font-brand text-white tracking-widest uppercase">
              TESTIMONIALS
            </h2>
            <p className="text-slate-400 text-sm font-body">Real stories from our graduated canine families across Sri Lanka.</p>
            <div className="flex sm:hidden items-center justify-center gap-1.5 text-[11px] font-semibold text-amber-400/90 pt-1">
              <span>👈 Swipe horizontally for more stories 👉</span>
            </div>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 sm:block sm:space-y-16">
            
            {/* Story 1 */}
            <motion.div
              whileHover={{ y: -4 }}
              className="w-[88vw] sm:w-full shrink-0 snap-center p-6 sm:p-0 rounded-3xl sm:rounded-none bg-[#0E1015] sm:bg-transparent border border-white/10 sm:border-0 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center"
            >
              <div className="md:col-span-7 space-y-4">
                <div className="flex text-amber-400 text-sm">★★★★★</div>
                <p className="text-slate-200 text-sm sm:text-lg italic font-serif leading-relaxed">
                  "Ceylon K9 Academy is miles ahead of traditional dog trainers in Sri Lanka. Their modern, science-based approach made Thor so obedient that he walks beside me through Colombo traffic with zero tension. Truly luxury standard!"
                </p>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white font-heading">Dr. Sanjeewa Wickramasinghe</h4>
                  <p className="text-xs text-amber-400 font-medium">Colombo 07 • Thor (German Shepherd)</p>
                </div>
              </div>
              <div className="md:col-span-5">
                <div
                  onClick={() => openLightbox('/Album/500237257_122131567916787892_3281965166062166311_n.jpg', 'Thor (German Shepherd Graduate) with Master Trainer Ashen')}
                  className="rounded-2xl overflow-hidden border border-white/10 aspect-[4/5] bg-[#0E1015] shadow-2xl group cursor-pointer"
                >
                  <img
                    src="/Album/500237257_122131567916787892_3281965166062166311_n.jpg"
                    alt="Thor GSD Graduate"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>

            {/* Story 2 */}
            <motion.div
              whileHover={{ y: -4 }}
              className="w-[88vw] sm:w-full shrink-0 snap-center p-6 sm:p-0 rounded-3xl sm:rounded-none bg-[#0E1015] sm:bg-transparent border border-white/10 sm:border-0 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center"
            >
              <div className="md:col-span-5 order-2 md:order-1">
                <div
                  onClick={() => openLightbox('/Album/555549741_122154654404787892_5315441370469195461_n.jpg', 'Buri & Bura (Boxer & Dogo Siblings) Obedience Mastery')}
                  className="rounded-2xl overflow-hidden border border-white/10 aspect-[4/5] bg-[#0E1015] shadow-2xl group cursor-pointer"
                >
                  <img
                    src="/Album/555549741_122154654404787892_5315441370469195461_n.jpg"
                    alt="Buri & Bura Boxers"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="md:col-span-7 order-1 md:order-2 space-y-4">
                <div className="flex text-amber-400 text-sm">★★★★★</div>
                <p className="text-slate-200 text-sm sm:text-lg italic font-serif leading-relaxed">
                  "Managing two high-energy Boxers pulling on leashes was a daily struggle. Following the structured obedience program, both now walk in unison side-by-side with loose leashes without chaos. Unbelievable expertise!"
                </p>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white font-heading">Kavinda & Shiroma Perera</h4>
                  <p className="text-xs text-amber-400 font-medium">Negombo • Buri & Bura (Boxer Siblings)</p>
                </div>
              </div>
            </motion.div>

            {/* Story 3 */}
            <motion.div
              whileHover={{ y: -4 }}
              className="w-[88vw] sm:w-full shrink-0 snap-center p-6 sm:p-0 rounded-3xl sm:rounded-none bg-[#0E1015] sm:bg-transparent border border-white/10 sm:border-0 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center"
            >
              <div className="md:col-span-7 space-y-4">
                <div className="flex text-amber-400 text-sm">★★★★★</div>
                <p className="text-slate-200 text-sm sm:text-lg italic font-serif leading-relaxed">
                  "I was worried about Zeus's reactive barking toward strangers. The behavioral team at Ceylon K9 Academy diagnosed the root-cause and rehabilitated him completely. Worth every single rupee."
                </p>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white font-heading">Dinesh Ratnayake</h4>
                  <p className="text-xs text-amber-400 font-medium">Mount Lavinia • Zeus (Rottweiler)</p>
                </div>
              </div>
              <div className="md:col-span-5">
                <div
                  onClick={() => openLightbox('/Album/495901457_122128226996787892_5118561498875172140_n.jpg', 'Zeus (Rottweiler Behavioral Rehab Graduate)')}
                  className="rounded-2xl overflow-hidden border border-white/10 aspect-[4/5] bg-[#0E1015] shadow-2xl group cursor-pointer"
                >
                  <img
                    src="/Album/495901457_122128226996787892_5118561498875172140_n.jpg"
                    alt="Zeus Rottweiler"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </motion.section>

        {/* 5. PLANS & INVESTMENT SECTION (Horizontal Swipe on Mobile, 2 Cols Desktop) */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          id="pricing-section"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-white/5"
        >
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="eyebrow-badge">Transparent Tuition & Official Fees</span>
            <h2 className="text-3xl sm:text-5xl font-bold font-brand text-white tracking-widest uppercase">
              PLANS & INVESTMENT
            </h2>
            <p className="text-slate-400 text-sm sm:text-base font-body">
              Our official 10-day intensive training program designed for rapid, permanent behavioral correction and complete obedience.
            </p>
            <div className="flex sm:hidden items-center justify-center gap-1.5 text-[11px] font-semibold text-amber-400/90 pt-1">
              <span>👈 Swipe to compare plans 👉</span>
            </div>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 sm:gap-8 items-stretch max-w-4xl mx-auto">
            
            {/* Plan 1: 10-Day Continuous Intensive Training Program */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="c-bezel w-[86vw] sm:w-auto shrink-0 snap-center border-amber-500/60 pricing-card-highlight"
            >
              <div className="c-bezel-inner p-6 sm:p-10 flex flex-col justify-between h-full bg-[#07080A] space-y-6">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase text-amber-400 font-bold tracking-wider">Most Popular Choice</span>
                    <span className="px-3 py-0.5 rounded-full bg-amber-500 text-black text-[10px] font-extrabold uppercase">Full Package 🚀</span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mt-2">
                    10-Day Intensive Program
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">10 Continuous Days • 50 Minutes per day</p>
                  
                  <div className="my-6 p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black text-amber-400 font-heading">Rs. 50,000/=</span>
                      <span className="text-xs text-slate-300 font-semibold uppercase">Total Cost</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1 space-y-0.5">
                      <p>• Training Fee (10 Days): <strong className="text-white">Rs. 45,000/=</strong></p>
                      <p>• Transportation Fee (All 10 Days): <strong className="text-white">Rs. 5,000/=</strong></p>
                    </div>
                  </div>

                  <div className="space-y-4 text-xs text-slate-200 border-t border-white/10 pt-4">
                    <div>
                      <h4 className="font-bold text-amber-400 uppercase text-[11px] mb-2">✔️ Behavior Correction Content:</h4>
                      <ul className="space-y-1.5 text-slate-300 pl-2">
                        <li className="flex items-center gap-2">✓ Fix Jumping & Hyperactivity</li>
                        <li className="flex items-center gap-2">✓ Eliminate Leash Pulling & Dragging</li>
                        <li className="flex items-center gap-2">✓ Aggression & Reactivity Remediation</li>
                        <li className="flex items-center gap-2">✓ Stop Excessive Barking & Destructive Habits</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-amber-400 uppercase text-[11px] mb-2">✔️ Full Obedience Training:</h4>
                      <ul className="space-y-1.5 text-slate-300 pl-2">
                        <li className="flex items-center gap-2">✓ Sit, Stay, Down & Extended Stay</li>
                        <li className="flex items-center gap-2">✓ Emergency Recall (Come When Called)</li>
                        <li className="flex items-center gap-2">✓ Perfect Heel & Loose Leash Control</li>
                        <li className="flex items-center gap-2">✓ Basic Control Commands & House Manners</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openBooking('10-Day Continuous Intensive Training Program (Rs. 50,000)')}
                  className="btn-primary-luxury w-full justify-center text-xs py-3.5 mt-4"
                >
                  <span>Book 10-Day Intensive Program</span>
                  <div className="icon-disc !w-5 !h-5">
                    <ArrowRight className="w-3.5 h-3.5 text-black" />
                  </div>
                </motion.button>
              </div>
            </motion.div>

            {/* Plan 2: Payment Flexibility Option */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="c-bezel w-[86vw] sm:w-auto shrink-0 snap-center"
            >
              <div className="c-bezel-inner p-6 sm:p-10 flex flex-col justify-between h-full bg-[#0E1015] space-y-6">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase text-slate-400 font-bold tracking-wider">Pay-As-You-Train</span>
                    <span className="px-3 py-0.5 rounded-full bg-white/10 text-white text-[10px] font-bold uppercase">Flexible 📌</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mt-2">
                    Daily Flexible Payment
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">No need to pay the full amount at once</p>
                  
                  <div className="my-6 p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black text-white font-heading">Rs. 5,000/=</span>
                      <span className="text-xs text-slate-400 font-semibold uppercase">/ per day</span>
                    </div>
                    <div className="text-[11px] text-amber-400 mt-1">
                      <p>📌 Payment flexibility available — daily payments accepted!</p>
                    </div>
                  </div>

                  <div className="space-y-4 text-xs text-slate-300 border-t border-white/10 pt-4">
                    <div>
                      <h4 className="font-bold text-white uppercase text-[11px] mb-2">📌 Key Payment & Program Benefits:</h4>
                      <ul className="space-y-2 text-slate-300 pl-2">
                        <li className="flex items-center gap-2">✓ <strong>No upfront stress:</strong> Pay daily after each training session</li>
                        <li className="flex items-center gap-2">✓ <strong>50 minutes</strong> daily focused 1-on-1 master instruction</li>
                        <li className="flex items-center gap-2">✓ <strong>Full 10-day syllabus</strong> (Behavior Correction + Obedience)</li>
                        <li className="flex items-center gap-2">✓ <strong>Direct handler coaching</strong> to maintain results forever</li>
                        <li className="flex items-center gap-2">✓ <strong>Island-wide doorstep service</strong> at your convenience</li>
                      </ul>
                    </div>

                    <div className="p-3.5 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs text-slate-300">
                      <p className="italic text-[11px]">
                        "Experience measurable behavioral improvements from day one, with total financial convenience."
                      </p>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openBooking('Daily Flexible Payment Plan (Rs. 5,000/day)')}
                  className="btn-secondary-luxury w-full justify-center text-xs py-3.5 mt-4"
                >
                  <span>Inquire for Daily Plan</span>
                </motion.button>
              </div>
            </motion.div>

          </div>
        </motion.section>

        {/* 6. INFINITE LOOPING PHOTO RIBBON */}
        <MarqueeRibbon onOpenLightbox={openLightbox} />

      </main>

      <Footer />
      <WhatsAppWidget />
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialProgram={selectedProgram}
      />
      <LightboxModal
        isOpen={lightbox.isOpen}
        src={lightbox.src}
        caption={lightbox.caption}
        onClose={() => setLightbox({ isOpen: false, src: '', caption: '' })}
      />
    </>
  );
}
`;

fs.writeFileSync('app/page.js', pageContent);
console.log('app/page.js successfully generated with mobile auto-scroll and Framer Motion');
