const express = require('express');
const path = require('path');
const academyData = require('./data/data');

const app = express();
const PORT = process.env.PORT || 3000;

// Setup View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static assets from public/
app.use(express.static(path.join(__dirname, 'public')));

// Serve root media files and Album folder directly
app.use('/media', express.static(path.join(__dirname, '.')));
app.use('/Album', express.static(path.join(__dirname, 'Album')));

// Global locals for all EJS templates
app.use((req, res, next) => {
  res.locals.data = academyData;
  res.locals.currentPath = req.path;
  next();
});

// Routes
app.get('/', (req, res) => {
  res.render('index', {
    pageTitle: "Ceylon K9 Academy — Smart Training For Happy Dogs | Sri Lanka's Premier K9 Training",
    metaDescription: "Sri Lanka's elite dog training academy. 130K+ followers, 2,500+ successful graduates. Puppy training, obedience, behavior modification, personal protection.",
    featuredPrograms: academyData.programs.slice(0, 4),
    featuredGraduates: academyData.graduates.slice(0, 4),
    featuredProducts: academyData.products.slice(0, 3)
  });
});

app.get('/programs', (req, res) => {
  res.render('programs', {
    pageTitle: "Training Programs & Academy Curriculum — Ceylon K9 Academy",
    metaDescription: "Explore our specialized canine training programs in Sri Lanka. From puppy foundation to executive protection and severe behavior rehabilitation.",
    programs: academyData.programs
  });
});

app.get('/programs/:slug', (req, res) => {
  const program = academyData.programs.find(p => p.slug === req.params.slug);
  if (!program) {
    return res.redirect('/programs');
  }
  const relatedPrograms = academyData.programs.filter(p => p.slug !== program.slug).slice(0, 3);
  res.render('program-detail', {
    pageTitle: `${program.title} — Ceylon K9 Academy`,
    metaDescription: program.description,
    program,
    relatedPrograms
  });
});

app.get('/gallery', (req, res) => {
  res.render('gallery', {
    pageTitle: "Hall of Champions & Certified Graduates — Ceylon K9 Academy",
    metaDescription: "Browse our hall of certified graduates, obedience champions, and real behavioral transformations across Sri Lanka.",
    graduates: academyData.graduates
  });
});

app.get('/equipment', (req, res) => {
  res.render('equipment', {
    pageTitle: "Elite K9 Tactical Equipment & Products — Ceylon K9 Academy",
    metaDescription: "Heavy-duty tactical K9 harnesses, BioThane working leashes, Herm Sprenger collars, and training toys trusted by professional trainers.",
    products: academyData.products
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    pageTitle: "About Ceylon K9 Academy — Master Ethology & Science-Based Training",
    metaDescription: "Discover the story, mission, and philosophy behind Ceylon K9 Academy. Combining modern canine psychology, positive drive, and clear communication.",
    academy: academyData
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    pageTitle: "Contact & Book Consultation — Ceylon K9 Academy",
    metaDescription: "Book your dog training evaluation session or contact our Master Trainer team via WhatsApp or phone. Colombo & Island-wide Sri Lanka.",
    academy: academyData
  });
});

// API Routes
app.post('/api/book', (req, res) => {
  const { ownerName, phone, email, dogName, dogBreed, dogAge, program, location, notes } = req.body;
  
  const textMsg = `*NEW BOOKING REQUEST - CEYLON K9 ACADEMY*%0A%0A` +
    `👤 *Owner:* ${encodeURIComponent(ownerName || 'N/A')}%0A` +
    `📞 *Phone:* ${encodeURIComponent(phone || 'N/A')}%0A` +
    `🐕 *Dog:* ${encodeURIComponent(dogName || 'N/A')} (${encodeURIComponent(dogBreed || 'Unknown Breed')}, ${encodeURIComponent(dogAge || 'Age N/A')})%0A` +
    `🎯 *Program:* ${encodeURIComponent(program || 'General Consultation')}%0A` +
    `📍 *Location:* ${encodeURIComponent(location || 'Sri Lanka')}%0A` +
    `📝 *Notes:* ${encodeURIComponent(notes || 'None')}`;

  const whatsappUrl = `https://wa.me/${academyData.brand.whatsapp}?text=${textMsg}`;

  res.json({
    success: true,
    message: "Booking request received successfully! Redirecting to WhatsApp concierge...",
    whatsappUrl
  });
});

app.post('/api/assessment', (req, res) => {
  const { ageGroup, primaryGoal, currentBehavior } = req.body;
  
  let recommended = "master-obedience";
  let reason = "Our Master Obedience program gives you total leash control and reliable recall.";

  if (ageGroup === "puppy") {
    recommended = "puppy-foundation";
    reason = "Your puppy is in the golden imprinting window. Foundation socialization will set them up for a lifetime of confidence.";
  } else if (currentBehavior === "aggressive" || currentBehavior === "reactive") {
    recommended = "behavior-rehab";
    reason = "Your canine will benefit most from our specialized Behavioral Rehabilitation & Desensitization protocol.";
  } else if (primaryGoal === "protection") {
    recommended = "personal-protection";
    reason = "Our Executive Protection program channels natural working drives with strict verbal control.";
  } else if (primaryGoal === "bootcamp") {
    recommended = "vip-residence-bootcamp";
    reason = "Our VIP Board & Train residence delivers the fastest, all-inclusive canine transformation.";
  }

  const prog = academyData.programs.find(p => p.id === recommended) || academyData.programs[1];

  res.json({
    success: true,
    recommendedProgram: prog,
    reason
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).render('404', {
    pageTitle: "404 - Page Not Found | Ceylon K9 Academy",
    metaDescription: "The page you are looking for does not exist."
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`🐕 CEYLON K9 ACADEMY PREMIUM SERVER RUNNING`);
  console.log(`🌐 Local URL: http://localhost:${PORT}`);
  console.log(`🐾 Slogan: ${academyData.brand.slogan}`);
  console.log(`=======================================================`);
});
