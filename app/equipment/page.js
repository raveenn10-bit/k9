'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import { ArrowUpRight } from 'lucide-react';
import { data } from '@/data/data';

export default function EquipmentPage() {
  const handleOrder = (itemTitle) => {
    const msg = `Hello Ceylon K9 Academy, I am interested in purchasing the ${itemTitle} from your equipment store.`;
    window.open(`https://wa.me/${data.brand.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
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
          {(data.gear || []).map((item) => (
            <div
              key={item.id}
              className="c-bezel group"
            >
              <div className="c-bezel-inner p-6 flex flex-col justify-between h-full bg-[#0E1015] space-y-5">
                
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-black border border-white/10">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-amber-500/40 text-amber-400 text-[10px] font-bold uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold font-heading text-white group-hover:text-amber-400 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-base font-black text-amber-400 font-heading">{item.price}</span>
                  <button
                    onClick={() => handleOrder(item.name)}
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
