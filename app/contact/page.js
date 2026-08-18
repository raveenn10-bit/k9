'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import { Phone, MessageCircle, Mail, MapPin, ArrowRight } from 'lucide-react';
import { data } from '@/data/data';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="eyebrow-badge">Direct Access Concierge</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight">
            Connect with <span className="gold-gradient-text">Our Trainers</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Direct doorstep training programs available island-wide across Sri Lanka.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          <div className="c-bezel">
            <div className="c-bezel-inner p-8 bg-[#0E1015] space-y-6">
              <h3 className="text-2xl font-bold font-heading text-white">Direct Phone & WhatsApp</h3>
              <p className="text-xs text-slate-300">Speak directly with Head Trainer Ashen and our behavioral team.</p>
              
              <div className="space-y-4">
                <a
                  href={`https://wa.me/${data.brand.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-green-500/10 border border-green-500/30 text-green-400 hover:bg-green-500 hover:text-black transition-all"
                >
                  <MessageCircle className="w-6 h-6" />
                  <div>
                    <p className="text-xs font-semibold uppercase">WhatsApp Master Line</p>
                    <p className="text-base font-bold">{data.brand.phone}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 text-white">
                  <MapPin className="w-6 h-6 text-amber-400" />
                  <div>
                    <p className="text-xs font-semibold uppercase text-slate-400">Coverage Area</p>
                    <p className="text-sm font-bold">Western Province & Island-Wide Doorstep</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="c-bezel">
            <div className="c-bezel-inner p-8 bg-[#0E1015] space-y-6">
              <h3 className="text-2xl font-bold font-heading text-white">Training Hours</h3>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex justify-between py-2 border-b border-white/5">
                  <span>Monday - Friday</span>
                  <strong className="text-white">6:00 AM - 7:00 PM</strong>
                </li>
                <li className="flex justify-between py-2 border-b border-white/5">
                  <span>Saturday - Sunday</span>
                  <strong className="text-white">6:00 AM - 6:00 PM</strong>
                </li>
                <li className="flex justify-between py-2 border-b border-white/5">
                  <span>Direct In-Home Evaluations</span>
                  <strong className="text-amber-400">By Prior Booking</strong>
                </li>
              </ul>
              <a
                href={`https://wa.me/${data.brand.whatsapp}?text=${encodeURIComponent(data.brand.whatsappDefaultMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-luxury w-full justify-center py-3.5 text-xs"
              >
                <span>Chat Directly on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5 text-black" />
              </a>
            </div>
          </div>

        </div>

      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
