'use client';

import { data } from '@/data/data';

export default function MarqueeRibbon({ onOpenLightbox }) {
  return (
    <section className="w-full overflow-hidden border-t border-b border-white/10 bg-[#040507] py-6 sm:py-8">
      <div className="marquee-strip-wrapper">
        <div className="marquee-strip-track flex items-center gap-4 sm:gap-6">
          {[...data.socialStrip, ...data.socialStrip].map((item, idx) => (
            <div
              key={idx}
              onClick={() => onOpenLightbox && onOpenLightbox(item.image, `${item.tag} • Ceylon K9 Academy Live`)}
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
