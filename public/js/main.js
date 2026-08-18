// Ceylon K9 Academy — Luxury Client Interactions & GSAP Motion
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Tactile Web Audio Click Synth (Subtle high-end haptic sound)
  let audioCtx = null;
  const playTactileClick = (freq = 800, duration = 0.03) => {
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // AudioContext muted/unsupported
    }
  };

  // Add subtle click feedback to luxury buttons
  document.querySelectorAll('.btn-primary-luxury, .btn-secondary-luxury, .btn-whatsapp-luxury, button').forEach(btn => {
    btn.addEventListener('click', () => playTactileClick(600, 0.04));
  });

  // Mobile Navigation Drawer Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
  const mobileMenuClose = document.getElementById('mobile-menu-close');

  if (mobileMenuBtn && mobileMenuOverlay) {
    const toggleMenu = (open) => {
      if (open) {
        mobileMenuOverlay.classList.remove('hidden');
        mobileMenuOverlay.classList.add('flex');
        document.body.style.overflow = 'hidden';
      } else {
        mobileMenuOverlay.classList.add('hidden');
        mobileMenuOverlay.classList.remove('flex');
        document.body.style.overflow = '';
      }
    };

    mobileMenuBtn.addEventListener('click', () => toggleMenu(true));
    if (mobileMenuClose) {
      mobileMenuClose.addEventListener('click', () => toggleMenu(false));
    }
    mobileMenuOverlay.addEventListener('click', (e) => {
      if (e.target === mobileMenuOverlay) toggleMenu(false);
    });
  }

  // Scroll-Adaptive Glassmorphism Navbar
  const mainNav = document.getElementById('main-navbar');
  if (mainNav) {
    const handleNavScroll = () => {
      if (window.scrollY > 30) {
        mainNav.classList.add('glass-nav-scrolled');
      } else {
        mainNav.classList.remove('glass-nav-scrolled');
      }
    };
    window.addEventListener('scroll', handleNavScroll, { passive: true });
    handleNavScroll();
  }

  // Toast Notification System
  window.showToast = (message, icon = 'check-circle') => {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'toast-alert';
    toast.innerHTML = `
      <div class="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/40 shrink-0">
        <i data-lucide="${icon}" class="w-4 h-4"></i>
      </div>
      <span class="font-body text-xs font-semibold text-slate-200">${message}</span>
    `;
    container.appendChild(toast);
    if (window.lucide) window.lucide.createIcons();
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  };

  // Canvas Confetti Particle Burst
  window.triggerConfetti = () => {
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#F59E0B', '#FCD34D', '#EA580C', '#FFFFFF', '#0E1015']
      });
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#F59E0B', '#FCD34D', '#FFFFFF']
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#F59E0B', '#FCD34D', '#FFFFFF']
        });
      }, 250);
    }
  };

  // GSAP Animations & Scroll Reveals
  if (window.gsap) {
    if (window.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Staggered Hero Text Reveal
    gsap.fromTo('.hero-stagger', 
      { opacity: 0, y: 35 }, 
      { opacity: 1, y: 0, duration: 0.9, stagger: 0.2, ease: 'power3.out', delay: 0.15 }
    );

    // Scroll reveal elements
    const revealElements = document.querySelectorAll('.reveal-card, .c-bezel');
    revealElements.forEach((el) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  }

  // 2-Second Auto-Shuffle Subtle Crossfade (Desktop)
  const albumCards = document.querySelectorAll('.gallery-grid-item');
  if (albumCards.length > 0) {
    let activeShuffleIndex = 0;
    setInterval(() => {
      if (document.hidden) return;
      const card = albumCards[activeShuffleIndex % albumCards.length];
      if (card && window.innerWidth > 768) {
        card.classList.add('album-card-fade', 'shuffling');
        setTimeout(() => {
          card.classList.remove('shuffling');
        }, 750);
      }
      activeShuffleIndex++;
    }, 2500);
  }

  // Stats Counter Animation
  const statNumbers = document.querySelectorAll('.stat-counter');
  let animatedStats = false;
  const animateStats = () => {
    if (animatedStats) return;
    statNumbers.forEach(stat => {
      const targetText = stat.getAttribute('data-target') || stat.innerText;
      const target = parseFloat(targetText.replace(/[^0-9.]/g, ''));
      const suffix = targetText.replace(/[0-9.]/g, '');
      let count = 0;
      const duration = 2000;
      const stepTime = 30;
      const steps = duration / stepTime;
      const increment = target / steps;

      const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
          stat.innerText = targetText;
          clearInterval(timer);
        } else {
          stat.innerText = (Number.isInteger(target) ? Math.floor(count) : count.toFixed(1)) + suffix;
        }
      }, stepTime);
    });
    animatedStats = true;
  };

  const statsSection = document.getElementById('stats-section');
  if (statsSection && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateStats();
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });
    observer.observe(statsSection);
  } else {
    animateStats();
  }

  // Booking Modal Logic
  const bookingModal = document.getElementById('booking-modal');
  const openBookingBtns = document.querySelectorAll('[data-open-booking]');
  const closeBookingBtn = document.getElementById('close-booking-modal');
  const bookingProgramSelect = document.getElementById('booking-program-select');

  window.openBookingModal = (programName = '') => {
    if (!bookingModal) return;
    if (bookingProgramSelect && programName) {
      bookingProgramSelect.value = programName;
    }
    bookingModal.classList.remove('hidden');
    bookingModal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    if (window.lucide) window.lucide.createIcons();
  };

  window.closeBookingModal = () => {
    if (!bookingModal) return;
    bookingModal.classList.add('hidden');
    bookingModal.classList.remove('flex');
    document.body.style.overflow = '';
  };

  openBookingBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const prog = btn.getAttribute('data-program') || '';
      window.openBookingModal(prog);
    });
  });

  if (closeBookingBtn) {
    closeBookingBtn.addEventListener('click', window.closeBookingModal);
  }
  if (bookingModal) {
    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) window.closeBookingModal();
    });
  }

  // Handle Booking Form Submit
  const bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = bookingForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-black inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
        Processing Booking...
      `;

      const formData = {
        ownerName: document.getElementById('b-owner-name')?.value || '',
        phone: document.getElementById('b-owner-phone')?.value || '',
        email: document.getElementById('b-owner-email')?.value || '',
        dogName: document.getElementById('b-dog-name')?.value || '',
        dogBreed: document.getElementById('b-dog-breed')?.value || '',
        dogAge: document.getElementById('b-dog-age')?.value || '',
        program: document.getElementById('booking-program-select')?.value || '',
        location: document.getElementById('b-location')?.value || '',
        notes: document.getElementById('b-notes')?.value || ''
      };

      try {
        const res = await fetch('/api/book', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        const data = await res.json();
        
        if (data.success && data.whatsappUrl) {
          window.triggerConfetti();
          window.showToast(`Booking initiated for ${formData.dogName}! Opening WhatsApp...`, 'award');
          bookingForm.innerHTML = `
            <div class="text-center py-8 space-y-4">
              <div class="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto border border-green-500/40">
                <i data-lucide="check" class="w-8 h-8"></i>
              </div>
              <h3 class="text-2xl font-bold text-white font-heading">Booking Application Initiated!</h3>
              <p class="text-slate-300 text-sm max-w-md mx-auto font-body">
                Thank you, <strong class="text-amber-400">${formData.ownerName}</strong>. To fast-track your priority evaluation for <strong class="text-white">${formData.dogName}</strong>, click below to open our Master Trainer WhatsApp Concierge directly.
              </p>
              <div class="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a href="${data.whatsappUrl}" target="_blank" class="btn-whatsapp-luxury justify-center">
                  <i data-lucide="message-circle" class="w-5 h-5"></i>
                  Open WhatsApp Concierge
                </a>
                <button onclick="window.closeBookingModal()" class="btn-secondary-luxury justify-center">
                  Done
                </button>
              </div>
            </div>
          `;
          if (window.lucide) window.lucide.createIcons();
        }
      } catch (err) {
        window.showToast('Network issue. Opening direct WhatsApp hotline...', 'alert-circle');
        alert('There was a problem submitting. You can message us directly on WhatsApp: +94 76 250 2279');
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    });
  }

  // Interactive Quiz / Assessment Tool
  const assessmentForm = document.getElementById('dog-assessment-form');
  const assessmentResult = document.getElementById('assessment-result-box');

  if (assessmentForm && assessmentResult) {
    assessmentForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const ageGroup = document.querySelector('input[name="quiz-age"]:checked')?.value || 'adult';
      const primaryGoal = document.querySelector('input[name="quiz-goal"]:checked')?.value || 'obedience';
      const currentBehavior = document.querySelector('input[name="quiz-behavior"]:checked')?.value || 'calm';

      const res = await fetch('/api/assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ageGroup, primaryGoal, currentBehavior })
      });
      const data = await res.json();

      if (data.success && data.recommendedProgram) {
        window.triggerConfetti();
        window.showToast('Canine match calculated!', 'sparkles');
        const prog = data.recommendedProgram;
        assessmentResult.innerHTML = `
          <div class="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-left space-y-4">
            <div class="flex items-center justify-between">
              <span class="eyebrow-badge">Recommended Match</span>
              <span class="text-xs font-bold text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full">${prog.badge || 'Optimal Program'}</span>
            </div>
            <h4 class="text-2xl font-bold text-white font-heading">${prog.title}</h4>
            <p class="text-slate-300 text-sm">${data.reason}</p>
            <div class="flex flex-wrap gap-2 text-xs text-slate-400 pt-2">
              <span class="bg-black/50 px-2.5 py-1 rounded-lg border border-white/5">⏱️ ${prog.duration}</span>
              <span class="bg-black/50 px-2.5 py-1 rounded-lg border border-white/5">🎯 ${prog.level}</span>
              <span class="bg-black/50 px-2.5 py-1 rounded-lg border border-white/5">🐾 ${prog.ageRange}</span>
            </div>
            <div class="pt-4 flex flex-col sm:flex-row gap-3">
              <a href="/programs/${prog.slug}" class="btn-secondary-luxury text-xs py-2 px-4 justify-center">
                View Curriculum
              </a>
              <button onclick="window.openBookingModal('${prog.title}')" class="btn-primary-luxury text-xs py-2 px-4 justify-center">
                Book This Program
              </button>
            </div>
          </div>
        `;
        assessmentResult.classList.remove('hidden');
        if (window.lucide) window.lucide.createIcons();
      }
    });
  }

  // Image Lightbox Modal
  const imageModal = document.getElementById('image-lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-image-target');
  const lightboxCaption = document.getElementById('lightbox-caption-target');
  const closeLightboxBtn = document.getElementById('close-lightbox');

  window.openImageLightbox = (src, caption = '') => {
    if (!imageModal || !lightboxImg) return;
    lightboxImg.src = src;
    if (lightboxCaption) lightboxCaption.innerText = caption;
    imageModal.classList.remove('hidden');
    imageModal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  };

  window.closeImageLightbox = () => {
    if (!imageModal) return;
    imageModal.classList.add('hidden');
    imageModal.classList.remove('flex');
    document.body.style.overflow = '';
  };

  if (closeLightboxBtn) {
    closeLightboxBtn.addEventListener('click', window.closeImageLightbox);
  }
  if (imageModal) {
    imageModal.addEventListener('click', (e) => {
      if (e.target === imageModal) window.closeImageLightbox();
    });
  }

  document.querySelectorAll('[data-lightbox]').forEach(el => {
    el.addEventListener('click', () => {
      const src = el.getAttribute('data-lightbox-src') || el.querySelector('img')?.src;
      const caption = el.getAttribute('data-lightbox-caption') || '';
      if (src) window.openImageLightbox(src, caption);
    });
  });

  // Gallery Filter Tabs
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-grid-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});
