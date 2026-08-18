'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check, ShieldCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import BookingModal from '@/components/BookingModal';
import { data } from '@/data/data';

export default function ProgramDetailPage({ params }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const program = data.programs.find(p => p.slug === params.slug) || data.programs[0];

  return (
    <>
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />
      <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full space-y-12">
        <Link href="/programs" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Programs</span>
        </Link>

        <div className="space-y-4">
          <span className="eyebrow-badge">{program.category}</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">{program.title}</h1>
          <p className="text-slate-300 text-sm sm:text-base">{program.description}</p>
        </div>

        <div className="c-bezel">
          <div className="c-bezel-inner p-8 bg-[#0E1015] space-y-6">
            <h3 className="text-xl font-bold font-heading text-white">Full Curriculum Syllabus</h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              {(program.curriculum || []).map((step, idx) => (
                <li key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 uppercase font-semibold">Tuition</span>
                <p className="text-2xl font-black text-amber-400 font-heading">{program.priceLKR}</p>
              </div>
              <button
                onClick={() => setIsBookingOpen(true)}
                className="btn-primary-luxury"
              >
                <span>Book This Program</span>
                <ArrowRight className="w-3.5 h-3.5 text-black" />
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppWidget />
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialProgram={program.title}
      />
    </>
  );
}
