'use client';

import { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import LightboxModal from '@/components/LightboxModal';
import { data } from '@/data/data';

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightbox, setLightbox] = useState({ isOpen: false, src: '', caption: '' });

  const filteredGraduates = activeFilter === 'all'
    ? data.graduates
    : data.graduates.filter(g => g.category === activeFilter);

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="eyebrow-badge">Hall of Distinction</span>
          <h1 className="text-4xl sm:text-6xl font-serif text-white tracking-[0.25em] uppercase font-normal">
            GRADUATES ALBUM
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Over 2,500 canines successfully rehabilitated and graduated across Sri Lanka.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
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
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  activeFilter === f.id
                    ? 'bg-black border border-amber-500/60 text-amber-400 shadow-md'
                    : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGraduates.map((grad) => (
            <div
              key={grad.id}
              onClick={() => setLightbox({ isOpen: true, src: grad.image, caption: `${grad.name} (${grad.breed}) — ${grad.certificate}` })}
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
                    <h4 className="text-sm font-bold font-heading text-white">{grad.name}</h4>
                    <p className="text-[10px] text-amber-400/90 font-medium uppercase tracking-wider">{grad.breed}</p>
                  </div>
                  <span className="text-[9px] text-slate-400 uppercase tracking-widest hidden sm:inline">© Ceylon K9</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>
      <Footer />
      <WhatsAppWidget />
      <LightboxModal
        isOpen={lightbox.isOpen}
        src={lightbox.src}
        caption={lightbox.caption}
        onClose={() => setLightbox({ isOpen: false, src: '', caption: '' })}
      />
    </>
  );
}
