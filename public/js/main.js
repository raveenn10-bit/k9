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

  // Theme Switcher (Dark / Luxury Silver & Orange Light Mode)
  const themeToggleBtns = [
    document.getElementById('theme-toggle-btn'),
    document.getElementById('theme-toggle-btn-mobile'),
    document.getElementById('theme-toggle-btn-drawer')
  ].filter(Boolean);

  const toggleTheme = () => {
    const isLight = document.documentElement.classList.toggle('light-mode');
    localStorage.setItem('k9_theme', isLight ? 'light' : 'dark');
    if (window.showToast) {
      window.showToast(isLight ? 'Platinum Silver & Sunset Orange Mode ☀️' : 'Obsidian OLED Dark Mode 🌙', isLight ? 'sun' : 'moon');
    }
    if (window.lucide) window.lucide.createIcons();
  };

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleTheme();
    });
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
        ownerName: document.getElementById('b-owner-name')?.value || 'Dog Owner',
        phone: document.getElementById('b-owner-phone')?.value || '',
        email: document.getElementById('b-owner-email')?.value || 'Not provided',
        dogName: document.getElementById('b-dog-name')?.value || 'My Dog',
        dogBreed: document.getElementById('b-dog-breed')?.value || 'Not specified',
        dogAge: document.getElementById('b-dog-age')?.value || 'Not specified',
        program: document.getElementById('booking-program-select')?.value || '10-Day Continuous Intensive Training Program (Rs. 50,000)',
        location: document.getElementById('b-location')?.value || 'Sri Lanka',
        notes: document.getElementById('b-notes')?.value || 'None'
      };

      // Construct Formatted WhatsApp Direct Message (100% Pure Client-Side)
      const waMsg = `🐾 *CEYLON K9 ACADEMY — ENROLMENT ENQUIRY*\n` +
        `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
        `👤 *Owner Name:* ${formData.ownerName}\n` +
        `📞 *Phone:* ${formData.phone}\n` +
        `📧 *Email:* ${formData.email}\n` +
        `🐕 *Dog Name:* ${formData.dogName}\n` +
        `🏷️ *Breed:* ${formData.dogBreed}\n` +
        `🎂 *Age:* ${formData.dogAge}\n` +
        `🎓 *Selected Program:* ${formData.program}\n` +
        `📍 *Location:* ${formData.location}\n` +
        `📝 *Special Notes:* ${formData.notes}\n` +
        `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
        `_Sent via Ceylon K9 Academy Official Portal_`;

      const whatsappUrl = `https://wa.me/94762502279?text=${encodeURIComponent(waMsg)}`;

      window.triggerConfetti();
      window.showToast(`Booking initiated for ${formData.dogName}! Opening WhatsApp...`, 'award');

      bookingForm.innerHTML = `
        <div class="text-center py-8 space-y-4">
          <div class="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto border border-green-500/40 shadow-lg shadow-green-500/20">
            <i data-lucide="check" class="w-8 h-8"></i>
          </div>
          <h3 class="text-2xl font-bold text-white font-heading">Enrolment Application Ready!</h3>
          <p class="text-slate-300 text-sm max-w-md mx-auto font-body">
            Thank you, <strong class="text-amber-400">${formData.ownerName}</strong>. Click below to connect directly with Master Trainer Ashen on WhatsApp to schedule your priority evaluation.
          </p>
          <div class="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="${whatsappUrl}" target="_blank" class="btn-whatsapp-luxury justify-center font-sans text-xs">
              <svg class="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>Connect on WhatsApp</span>
            </a>
            <button onclick="window.closeBookingModal()" class="btn-secondary-luxury justify-center font-sans text-xs">
              Done
            </button>
          </div>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
    });
  }

  // Interactive Quiz / Assessment Tool (100% Client-Side)
  const assessmentForm = document.getElementById('dog-assessment-form');
  const assessmentResult = document.getElementById('assessment-result-box');

  if (assessmentForm && assessmentResult) {
    assessmentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const ageGroup = document.querySelector('input[name="quiz-age"]:checked')?.value || 'adult';
      const primaryGoal = document.querySelector('input[name="quiz-goal"]:checked')?.value || 'obedience';
      const currentBehavior = document.querySelector('input[name="quiz-behavior"]:checked')?.value || 'calm';

      let recommendedTitle = "10-Day Continuous Intensive Training Program 🚀";
      let recommendedReason = "Our 10-day intensive program provides rapid, lasting behavioral correction and master on-leash obedience across Sri Lanka.";
      let recommendedDuration = "10 Days (50 Mins/Day)";
      let recommendedLevel = "Comprehensive Transformation";
      let recommendedPrice = "Rs. 50,000/=";

      if (ageGroup === 'puppy') {
        recommendedTitle = "Puppy Foundation & Socialization";
        recommendedReason = "During the 2 to 6 month imprinting window, early socialization and house manners prevent 95% of future behavioral problems.";
        recommendedDuration = "4 - 6 Weeks";
        recommendedLevel = "Beginner Imprinting";
        recommendedPrice = "Rs. 35,000/=";
      } else if (currentBehavior === 'reactive' || currentBehavior === 'fearful' || primaryGoal === 'behavior') {
        recommendedTitle = "Behavior Modification & Aggression Rehab";
        recommendedReason = "Specialized clinical counter-conditioning to address root neurological triggers of reactivity, resource guarding, or anxiety.";
        recommendedDuration = "Custom Blueprint";
        recommendedLevel = "Specialist Clinical";
        recommendedPrice = "Custom Assessment";
      }

      window.triggerConfetti();
      window.showToast('Canine match calculated!', 'sparkles');

      assessmentResult.innerHTML = `
        <div class="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-left space-y-4 shadow-xl">
          <div class="flex items-center justify-between">
            <span class="eyebrow-badge">Recommended Match</span>
            <span class="text-xs font-bold text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full">${recommendedPrice}</span>
          </div>
          <h4 class="text-2xl font-bold text-white font-heading">${recommendedTitle}</h4>
          <p class="text-slate-300 text-sm font-body leading-relaxed">${recommendedReason}</p>
          <div class="flex flex-wrap gap-2 text-xs text-slate-300 pt-2 font-sans">
            <span class="bg-black/60 px-3 py-1 rounded-lg border border-white/10">⏱️ ${recommendedDuration}</span>
            <span class="bg-black/60 px-3 py-1 rounded-lg border border-white/10">🎯 ${recommendedLevel}</span>
          </div>
          <div class="pt-4 flex flex-col sm:flex-row gap-3">
            <a href="programs.html" class="btn-secondary-luxury text-xs py-2 px-4 justify-center font-sans">
              View All Programs
            </a>
            <button onclick="window.openBookingModal('${recommendedTitle}')" class="btn-primary-luxury text-xs py-2 px-4 justify-center font-sans">
              Book This Program
            </button>
          </div>
        </div>
      `;
      assessmentResult.classList.remove('hidden');
      if (window.lucide) window.lucide.createIcons();
    });
  }
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
