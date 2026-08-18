'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import Link from 'next/link';
import { Award, ShieldCheck, Heart, Sparkles, ArrowRight } from 'lucide-react';
import { data } from '@/data/data';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-24">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="eyebrow-badge">About Ceylon K9 Academy</span>
            <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight">
              Leading Sri Lanka's <br />
              <span className="gold-gradient-text">Canine Evolution</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-body">
              Founded by Master Trainer Ashen, Ceylon K9 Academy was created with a singular mission: to eliminate traditional abusive intimidation tactics from Sri Lankan dog training and replace them with scientifically proven, ethology-based positive reinforcement methods.
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-body">
              With over a decade of hands-on experience rehabilitating severe reactivity, puppy behavioral imprinting, and handler empowerment, we have transformed over 2,500 dogs into dependable family companions and precision obedience champions.
            </p>
            <div className="pt-2">
              <Link href="/#pricing-section" className="btn-primary-luxury">
                <span>Explore 10-Day Training Plans</span>
                <ArrowRight className="w-3.5 h-3.5 text-black" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="c-bezel max-w-md w-full">
              <div className="c-bezel-inner p-6 sm:p-8 bg-[#0E1015] flex flex-col items-center text-center space-y-4">
                <img
                  src="/media/ashen-portrait.png"
                  alt="Master Trainer Ashen"
                  className="w-64 h-64 rounded-2xl object-cover border border-amber-500/40 shadow-2xl"
                />
                <h3 className="text-2xl font-bold font-heading text-white">Master Trainer Ashen</h3>
                <p className="text-xs text-amber-400 uppercase font-semibold">Founder & Head Canine Behaviorist</p>
              </div>
            </div>
          </div>
        </div>

      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
