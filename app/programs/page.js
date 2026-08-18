'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Check, ShieldCheck, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import BookingModal from '@/components/BookingModal';
import { data } from '@/data/data';

export default function ProgramsPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('');

  const openBooking = (title) => {
    setSelectedProgram(title);
    setIsBookingOpen(true);
  };

  return (
    <>
      <Navbar onOpenBooking={() => openBooking()} />
      <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="eyebrow-badge">Elite Canine Curriculums</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight">
            Master Canine <span className="gold-gradient-text">Programs</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            From foundational 8-week puppy imprinting to advanced behavioral rehabilitation, explore our proven syllabus designed for permanent results.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.programs.map((program) => (
            <div
              key={program.id}
              className={`c-bezel flex flex-col justify-between h-full ${program.popular ? 'border-amber-500/60 shadow-amber-500/10' : ''}`}
            >
              <div className="c-bezel-inner p-6 sm:p-8 flex flex-col justify-between h-full bg-[#0E1015] space-y-6">
                <div className="space-y-4">
                  
                  {/* Image */}
                  <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black border border-white/10">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-amber-500/40 text-amber-400 text-[10px] font-bold uppercase tracking-wider">
                        {program.badge}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold font-heading text-white">
                      {program.title}
                    </h3>
                    <p className="text-xs text-amber-400 font-semibold mt-1">
                      {program.duration} • {program.ageRange}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Core Highlights:</h4>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {(program.outcomes || []).slice(0, 4).map((hl, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 uppercase font-semibold">Tuition</span>
                    <p className="text-lg font-black text-amber-400 font-heading">{program.priceLKR}</p>
                  </div>
                  <button
                    onClick={() => openBooking(program.title)}
                    className="btn-primary-luxury !px-4 !py-2 text-xs"
                  >
                    <span>Book Program</span>
                    <ArrowRight className="w-3 h-3 text-black" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </main>
      <Footer />
      <WhatsAppWidget />
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialProgram={selectedProgram}
      />
    </>
  );
}
