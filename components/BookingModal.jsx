'use client';

import { useState, useEffect } from 'react';
import { X, ShieldCheck, Lock, ArrowRight } from 'lucide-react';
import { data } from '@/data/data';

export default function BookingModal({ isOpen, onClose, initialProgram = '' }) {
  const [formData, setFormData] = useState({
    ownerName: '',
    ownerPhone: '',
    dogName: '',
    dogBreed: '',
    dogAge: '',
    program: initialProgram || '',
    location: '',
    notes: ''
  });

  useEffect(() => {
    if (initialProgram) {
      setFormData(prev => ({ ...prev, program: initialProgram }));
    }
  }, [initialProgram]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `*NEW CEYLON K9 EVALUATION BOOKING*
👤 *Owner Name:* ${formData.ownerName}
📞 *Phone:* ${formData.ownerPhone}
🐕 *Dog Name:* ${formData.dogName} (${formData.dogBreed}, ${formData.dogAge})
🎓 *Program:* ${formData.program || 'General Evaluation'}
📍 *Location:* ${formData.location}
📝 *Notes:* ${formData.notes || 'None'}`;

    const whatsappUrl = `https://wa.me/${data.brand.whatsapp}?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 modal-backdrop flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#0E1015] border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/80 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Evaluation Booking</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading tracking-wide">
            Begin Your Dog's Transformation
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            Fill out your canine's details below to reserve your priority evaluation session with Ceylon K9 Academy.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.ownerName}
                onChange={e => setFormData({ ...formData, ownerName: e.target.value })}
                placeholder="e.g. Sanjeewa Wickramasinghe"
                className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Phone / WhatsApp Number *
              </label>
              <input
                type="tel"
                required
                value={formData.ownerPhone}
                onChange={e => setFormData({ ...formData, ownerPhone: e.target.value })}
                placeholder="e.g. 077 123 4567"
                className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Dog's Name *
              </label>
              <input
                type="text"
                required
                value={formData.dogName}
                onChange={e => setFormData({ ...formData, dogName: e.target.value })}
                placeholder="e.g. Thor"
                className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Breed *
              </label>
              <input
                type="text"
                required
                value={formData.dogBreed}
                onChange={e => setFormData({ ...formData, dogBreed: e.target.value })}
                placeholder="e.g. German Shepherd"
                className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Age *
              </label>
              <input
                type="text"
                required
                value={formData.dogAge}
                onChange={e => setFormData({ ...formData, dogAge: e.target.value })}
                placeholder="e.g. 5 Months"
                className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Desired Training Program *
              </label>
              <select
                required
                value={formData.program}
                onChange={e => setFormData({ ...formData, program: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              >
                <option value="">Select a Program</option>
                {data.programs.map((prog) => (
                  <option key={prog.id} value={prog.title}>{prog.title}</option>
                ))}
                <option value="General Evaluation & Advice">General Evaluation & Advice</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Your City / Area *
              </label>
              <input
                type="text"
                required
                value={formData.location}
                onChange={e => setFormData({ ...formData, location: e.target.value })}
                placeholder="e.g. Colombo, Kandy, Galle"
                className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Behavioral Challenges & Goals (Optional)
            </label>
            <textarea
              rows={2}
              value={formData.notes}
              onChange={e => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Describe any issues (pulling, jumping, aggression, anxiety, puppy training)..."
              className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
          </div>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              <span>100% Privacy Protected. Concierge Response.</span>
            </div>
            <button type="submit" className="btn-primary-luxury w-full sm:w-auto justify-center">
              <span>Confirm & Submit Booking</span>
              <div className="icon-disc !w-5 !h-5">
                <ArrowRight className="w-3.5 h-3.5 text-black" />
              </div>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
