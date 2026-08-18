'use client';

import { X } from 'lucide-react';

export default function LightboxModal({ isOpen, src, caption, onClose }) {
  if (!isOpen || !src) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8"
    >
      <button
        onClick={onClose}
        aria-label="Close Lightbox"
        className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-black/80 border border-white/20 text-white hover:bg-amber-500 hover:text-black transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      <div
        onClick={e => e.stopPropagation()}
        className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
      >
        <img
          src={src}
          alt={caption || 'Graduate Photo'}
          className="max-h-[75vh] w-auto rounded-2xl shadow-2xl object-contain border border-white/10"
        />
        {caption && (
          <p className="mt-4 text-center text-sm font-semibold text-slate-300 font-sans tracking-wide bg-black/70 px-4 py-1.5 rounded-full border border-white/10">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
}
