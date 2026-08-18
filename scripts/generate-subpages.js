const fs = require('fs');

// 1. app/programs/page.js
fs.writeFileSync('app/programs/page.js', `'use client';

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
              className={\`c-bezel flex flex-col justify-between h-full \${program.popular ? 'border-amber-500/60 shadow-amber-500/10' : ''}\`}
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
                      {program.highlights.slice(0, 4).map((hl, i) => (
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
`);

// 2. app/gallery/page.js
fs.writeFileSync('app/gallery/page.js', `'use client';

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
                className={\`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all \${
                  activeFilter === f.id
                    ? 'bg-black border border-amber-500/60 text-amber-400 shadow-md'
                    : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white'
                }\`}
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
              onClick={() => setLightbox({ isOpen: true, src: grad.image, caption: \`\${grad.name} (\${grad.breed}) — \${grad.certificate}\` })}
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
`);

// 3. app/equipment/page.js
fs.writeFileSync('app/equipment/page.js', `'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import { ArrowUpRight } from 'lucide-react';
import { data } from '@/data/data';

export default function EquipmentPage() {
  const handleOrder = (itemTitle) => {
    const msg = \`Hello Ceylon K9 Academy, I am interested in purchasing the \${itemTitle} from your equipment store.\`;
    window.open(\`https://wa.me/\${data.brand.whatsapp}?text=\${encodeURIComponent(msg)}\`, '_blank');
  };

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="eyebrow-badge">Field-Tested Canine Hardware</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight">
            K9 Professional <span className="gold-gradient-text">Equipment</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Heavy-duty, ergonomic training gear trusted by our master handlers for safety, longevity, and optimal control.
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.equipment.map((item) => (
            <div
              key={item.id}
              className="c-bezel group"
            >
              <div className="c-bezel-inner p-6 flex flex-col justify-between h-full bg-[#0E1015] space-y-5">
                
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-black border border-white/10">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-amber-500/40 text-amber-400 text-[10px] font-bold uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold font-heading text-white group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-base font-black text-amber-400 font-heading">{item.priceLKR}</span>
                  <button
                    onClick={() => handleOrder(item.title)}
                    className="btn-secondary-luxury !px-4 !py-2 text-xs"
                  >
                    <span>Order via WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
`);

// 4. app/about/page.js
fs.writeFileSync('app/about/page.js', `'use client';

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
`);

// 5. app/contact/page.js
fs.writeFileSync('app/contact/page.js', `'use client';

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
                  href={\`https://wa.me/\${data.brand.whatsapp}\`}
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
                href={\`https://wa.me/\${data.brand.whatsapp}?text=\${encodeURIComponent(data.brand.whatsappDefaultMsg)}\`}
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
`);

console.log('Subpages generated successfully');
