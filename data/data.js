const academyData = {
  brand: {
    name: "Ceylon K9 Academy",
    shortName: "CKA",
    slogan: "Smart Training For Happy Dogs",
    tagline: "Smart training methods for every dog. Better behaviour. Stronger bond. Happier life.",
    phone: "076 250 2279",
    phoneDisplay: "+94 76 250 2279",
    whatsapp: "94762502279",
    whatsappDefaultMsg: "Hello Ceylon K9 Academy, I would like to enquire about dog training programs for my dog.",
    email: "ceylonk9academy@yahoo.com",
    location: "Western Province & Island-wide, Sri Lanka",
    address: "Ceylon K9 Academy Headquarters, Western Province, Sri Lanka",
    socials: {
      facebook: "https://facebook.com/ceylonk9academy",
      messenger: "https://m.me/ceylonk9academy",
      instagram: "https://instagram.com/ceylonk9academy",
      twitter: "https://twitter.com/ceylonk9academy",
      tiktok: "https://www.tiktok.com/@www.ashen8",
      tiktokHandle: "@www.ashen8",
      youtube: "https://youtube.com/@ceylonk9academy"
    },
    stats: [
      { label: "Community Followers", value: "130K+", icon: "users" },
      { label: "Graduated Canines", value: "2,500+", icon: "award" },
      { label: "Success Rate", value: "99.4%", icon: "shield-check" },
      { label: "Master Experience", value: "10+ Yrs", icon: "badge-check" }
    ],
    badges: [
      "All Breeds Welcome",
      "All Ages Supported",
      "Positive & Balanced Techniques",
      "Lifetime Support Guarantee",
      "Certified Canine Behaviorists",
      "Free Initial Evaluation"
    ]
  },

  programs: [
    {
      id: "10-day-intensive",
      slug: "10-day-intensive",
      title: "10-Day Continuous Intensive Training Program 🚀",
      category: "Flagship In-Home",
      ageRange: "All Ages (Puppy to Adult)",
      duration: "10 Continuous Days (50 Mins/Day)",
      level: "Comprehensive Transformation",
      badge: "Official Flagship 🚀",
      popular: true,
      priceLKR: "Rs. 50,000/=",
      image: "/Album/500237257_122131567916787892_3281965166062166311_n.jpg",
      description: "Our premier in-home daily training program combining full behavioral correction and rock-solid obedience under real-world distractions across Sri Lanka.",
      outcomes: [
        "Behavior Correction: Stop jumping, leash pulling, aggression, excessive barking & hyperactivity",
        "Obedience Training: Sit, Stay, Down, Come, Heel & basic control commands",
        "Training Fee (10 Days): Rs. 45,000/= + Transportation Fee (All 10 Days): Rs. 5,000/=",
        "Total All-Inclusive Cost: Rs. 50,000/=",
        "Payment flexibility available — daily payments accepted (Rs. 5,000/day)",
        "No need to pay the full amount at once"
      ],
      curriculum: [
        "Days 1-3: Drive building, focus, elimination of jumping & leash pulling",
        "Days 4-6: Rock-solid Sit, Down, Extended Stay & House Manners",
        "Days 7-8: Emergency Recall, distance obedience & real-world distractions",
        "Days 9-10: Handler synchronization, transfer coaching & graduation certification"
      ],
      suitableFor: "All breeds and ages facing behavioral issues or needing fast, guaranteed obedience"
    },
    {
      id: "puppy-foundation",
      slug: "puppy-foundation",
      title: "Puppy Foundation & Socialization",
      category: "Early Development",
      ageRange: "2 to 6 Months",
      duration: "4 - 6 Weeks",
      level: "Beginner",
      badge: "Crucial Stage",
      popular: false,
      priceLKR: "Rs. 35,000",
      image: "/Album/494728895_122128227044787892_7708380751026631015_n.jpg",
      description: "Build an unbreakable foundation during the critical imprinting window. Prevent future anxiety, fear, reactivity, and destructive habits while nurturing confidence.",
      outcomes: [
        "Potty and crate training blueprint",
        "Bite inhibition & mouthiness control",
        "Environmental desensitization (sounds, surfaces, traffic)",
        "Socialization with dogs, adults, children, and livestock",
        "Basic lure-and-reward engagement (Sit, Down, Recall)",
        "Leash introduction without pulling"
      ],
      curriculum: [
        "Week 1: Focus, Name Recognition & Crate Harmony",
        "Week 2: Positive Socialization & Tactile Confidence",
        "Week 3: Loose Leash Walking & Impulse Restraint",
        "Week 4: Reliable Recall & Veterinary Handling Prep"
      ],
      suitableFor: "All puppy breeds (Rottweiler, GSD, Golden Retriever, Doberman, Beagle, Frenchie, etc.)"
    },
    {
      id: "master-obedience",
      slug: "master-obedience",
      title: "Master Obedience & Leash Control",
      category: "Core Training",
      ageRange: "6+ Months",
      duration: "6 - 8 Weeks",
      level: "Intermediate",
      badge: "Most Popular",
      popular: true,
      priceLKR: "Rs. 55,000",
      image: "/Album/499422200_122129296526787892_3931657032319304879_n.jpg",
      description: "Turn your energetic or stubborn dog into a calm, laser-focused companion. Flawless on-leash and introductory off-leash command execution under high real-world distractions.",
      outcomes: [
        "Rock-solid Sit, Down, and Extended Stay under distractions",
        "Perfect Heel walking with zero leash pulling",
        "Emergency Long-Distance Recall (Come When Called)",
        "Place command / Calm house manners when guests arrive",
        "Leave-it & Drop-it for high-value food and items",
        "Hand signal execution & voice modulation commands"
      ],
      curriculum: [
        "Phase 1: Drive Building & Command Clarity",
        "Phase 2: Distance, Duration & High Distraction Layering",
        "Phase 3: Real-world Urban & Park Conditioning",
        "Phase 4: Handler Certification & Transfer Sessions"
      ],
      suitableFor: "Family pets, working breeds, dogs with pulling/jumping habits"
    },
    {
      id: "behavior-rehab",
      slug: "behavior-rehab",
      title: "Behavior Modification & Aggression Rehab",
      category: "Specialized Clinical",
      ageRange: "All Ages",
      duration: "Custom (4 - 12 Weeks)",
      level: "Advanced / Clinical",
      badge: "Specialist Certified",
      popular: false,
      priceLKR: "Custom Assessment",
      image: "/Album/497454896_122129296610787892_5684493621398952729_n.jpg",
      description: "Compassionate, scientific rehabilitation for complex behavioral disorders. We diagnose the neurological and emotional root causes of aggression, fear, and panic.",
      outcomes: [
        "Dog-on-dog and dog-to-human reactivity remediation",
        "Resource guarding (food, toys, territory) dissolution",
        "Separation anxiety alleviation & calm state conditioning",
        "Elimination of excessive barking, destructive chewing & bolting",
        "Building emotional resilience and threshold tolerance",
        "Custom long-term handler safety protocols"
      ],
      curriculum: [
        "Step 1: Clinical Behavioral Assessment & Trigger Mapping",
        "Step 2: Counter-Conditioning & Desensitization Protocols",
        "Step 3: State of Mind Shift & Impulse Control Work",
        "Step 4: Real-life Neutrality in Public Environments"
      ],
      suitableFor: "Reactive dogs, rescue dogs with trauma, territorial or anxious canines"
    },
    {
      id: "vip-residence-bootcamp",
      slug: "vip-residence-bootcamp",
      title: "VIP Executive Board & Train Bootcamp",
      category: "All-Inclusive Residence",
      ageRange: "5+ Months",
      duration: "3 - 4 Weeks",
      level: "Complete Transformation",
      badge: "Luxury VIP Service",
      popular: false,
      priceLKR: "Rs. 120,000+",
      image: "/Album/500237257_122131567916787892_3281965166062166311_n.jpg",
      description: "The gold standard canine boarding academy. Your dog resides in our state-of-the-art climate-controlled facility receiving daily multi-session intensive instruction by Master Trainers.",
      outcomes: [
        "Complete behavioral overhaul and rapid obedience mastery",
        "3 to 4 dedicated 1-on-1 daily training sessions",
        "Daily HD video updates and progress reports sent to owner",
        "Socialization in supervised canine pack dynamics",
        "Complete grooming, organic nutrition & exercise regimen",
        "3 Comprehensive in-home transition sessions with the family upon graduation"
      ],
      curriculum: [
        "Week 1: Immersive Bonding, Assessment & Habit Breaking",
        "Week 2: Intensive Obedience & Environmental Stress Inoculation",
        "Week 3: Off-Leash Reliability & Urban Proofing",
        "Week 4: Final Polish, Video Exam & Handler Handover"
      ],
      suitableFor: "Busy professionals, families traveling, dogs needing rapid transformation"
    },
    {
      id: "personal-protection",
      slug: "personal-protection",
      title: "Personal & Family Protection K9",
      category: "Elite Working K9",
      ageRange: "Evaluation Required",
      duration: "Custom Modular",
      level: "Elite Level",
      badge: "Working Drive Only",
      popular: false,
      priceLKR: "Subject to Evaluation",
      image: "/Album/499709297_122130336914787892_162451422758202101_n.jpg",
      description: "Developing dogs with steady nerve, high genetic courage, and controlled defense instincts into loyal family protectors capable of discerning genuine threats from peaceful visitors.",
      outcomes: [
        "Clear threat identification without spontaneous aggression",
        "Immediate 'Bark on Command' deterrent mode",
        "Full bite development with clean targeting on decoy sleeve",
        "Instant release / out on verbal command ('Aus')",
        "Handler defense and perimeter security obedience",
        "Complete peace of mind for luxury estates and executives"
      ],
      curriculum: [
        "Evaluation: Prey/Defense drive balance & nerve stability testing",
        "Module 1: Targeted Grip Development & Decoy Conditioning",
        "Module 2: Controlled Threat Recognition & Release Commands",
        "Module 3: Vehicle & Home Tactical Defense Scenarios"
      ],
      suitableFor: "German Shepherds, Rottweilers, Belgian Malinois, Dobermans with verified drive"
    },
    {
      id: "in-home-coaching",
      slug: "in-home-coaching",
      title: "Private In-Home Coaching & Family Mentorship",
      category: "Personalized Concierge",
      ageRange: "All Ages",
      duration: "Per Session / Packages",
      level: "Customized",
      badge: "Island-Wide Service",
      popular: false,
      priceLKR: "Rs. 15,000 / Session",
      image: "/Album/502621370_122132875100787892_2104062153873135068_n.jpg",
      description: "Personalized coaching inside your home environment. Master trainers observe the exact family dynamic, territorial triggers, and layout to coach the entire household into consistent dog leadership.",
      outcomes: [
        "Immediate fix for doorbell reactivity, counter surfing, and couch guarding",
        "Household consistency: training kids, domestic staff & adults",
        "Customized walking routes around your neighborhood",
        "Zero stress travel for reactive or elderly dogs",
        "Personalized digital action plan after each session",
        "Direct 24/7 WhatsApp support between appointments"
      ],
      curriculum: [
        "Session 1: Household Audit & Leadership Restructuring",
        "Session 2: Threshold Management & Guest Greeting Routine",
        "Session 3: Neighborhood Street Walk & Neutrality",
        "Session 4: Real World Distractions & Long-term Maintenance"
      ],
      suitableFor: "Multi-dog homes, busy families, territorial dogs, apartment dwellers"
    }
  ],

  graduates: [
    {
      id: "grad-1",
      name: "Arnold",
      breed: "German Shepherd (Long Coat)",
      category: "gsd",
      age: "18 Months",
      program: "Master Obedience & Advanced Distractions",
      image: "/Album/554761127_122154654236787892_5296319287022271715_n.jpg",
      certificate: "Obedience Training Honors",
      story: "Arnold was energetic and reactive to passing motorcycles. After 6 weeks at Ceylon K9 Academy, he walks calmly off-leash, ignores distractions, and earned his formal graduation certificate.",
      ownerQuote: "The transformation is unbelievable. Ceylon K9 Academy completely changed Arnold's focus and boosted our daily joy together!"
    },
    {
      id: "grad-2",
      name: "Buri & Bura",
      breed: "Boxer Siblings",
      category: "boxer",
      age: "2 Years",
      program: "Sibling Harmony & Urban Leash Control",
      image: "/Album/555549741_122154654404787892_5315441370469195461_n.jpg",
      certificate: "Dual Certification in Obedience",
      story: "Managing two muscular Boxers pulling on leashes was a daily struggle for the owners. Following our structured program, both now walk in unison side-by-side with loose leashes.",
      ownerQuote: "We can finally enjoy serene family walks without chaos. Truly Sri Lanka's finest trainers!"
    },
    {
      id: "grad-3",
      name: "Rex",
      breed: "Belgian Malinois (Working Line)",
      category: "malinois",
      age: "2 Years",
      program: "Working Drive & Agility Protocol",
      image: "/Album/500237257_122131567916787892_3281965166062166311_n.jpg",
      certificate: "Advanced K9 Agility Pass",
      story: "Trained under Master Trainer Ashen for rapid impulse control, obstacle jumping, and laser precision marker obedience under extreme physical stamina.",
      ownerQuote: "Master Trainer Ashen understands high-drive working dogs at a world-class level."
    },
    {
      id: "grad-4",
      name: "Rocky & Bruno",
      breed: "Rottweiler Champion Line",
      category: "rottweiler",
      age: "14 Months",
      program: "Protection Drive & Clear Obedience",
      image: "/Album/499422200_122129296526787892_3931657032319304879_n.jpg",
      certificate: "Advanced K9 Handler Pass",
      story: "Showcasing immaculate head posture, muscle definition, and instant response to verbal commands. A prime example of high-drive Rottweiler balance.",
      ownerQuote: "Supreme confidence, rock solid discipline, and total gentleness with our children at home."
    },
    {
      id: "grad-5",
      name: "Simba",
      breed: "Golden Labrador Retriever",
      category: "family",
      age: "1 Year",
      program: "Behavioral Manners & Food Impulse Control",
      image: "/Album/601018502_122165542862787892_2507724484870478693_n.jpg",
      certificate: "Canine Good Citizen Certified",
      story: "Simba went from jumping on guests and stealing food to a poised, gentle ambassador who stays calmly on his place mat during family dinners.",
      ownerQuote: "Ceylon K9 Academy uses smart, gentle, highly effective methods. Simba loved every minute of his training."
    },
    {
      id: "grad-6",
      name: "Teddy",
      breed: "Pomeranian Fluff",
      category: "family",
      age: "9 Months",
      program: "Small Dog Socialization & Confidence",
      image: "/Album/499709297_122130336914787892_162451422758202101_n.jpg",
      certificate: "Junior Companion Honors",
      story: "Helped overcome excessive fear barking and trembling around strangers. Now a confident, sociable little champion.",
      ownerQuote: "They treat small dogs with the same high level of professional care and respect as giant breeds."
    },
    {
      id: "grad-7",
      name: "Shadow",
      breed: "European Rottweiler",
      category: "puppy",
      age: "8 Months",
      program: "Puppy Foundation & Heavy Nerve Building",
      image: "/Album/494728895_122128227044787892_7708380751026631015_n.jpg",
      certificate: "Junior Graduate",
      story: "Started training at 10 weeks old. Grew up with zero behavioral flaws, fearless confidence around loud noises, and flawless manners.",
      ownerQuote: "Starting early with Ceylon K9 Academy was the best investment we made for our puppy."
    },
    {
      id: "grad-8",
      name: "Max & Leo",
      breed: "Rottweiler Twin Pups",
      category: "puppy",
      age: "4 Months",
      program: "Early Imprinting & House Manners",
      image: "/Album/502621370_122132875100787892_2104062153873135068_n.jpg",
      certificate: "Puppy Star Certified",
      story: "Mastered name response, crate peacefulness, bite restraint, and loose leash walk before teething completion.",
      ownerQuote: "Having two puppies was daunting until Ceylon K9 Academy stepped in. Total lifesavers!"
    },
    {
      id: "grad-9",
      name: "Kaiser",
      breed: "Working Line Rottweiler",
      category: "rottweiler",
      age: "2.5 Years",
      program: "Executive Protection & Deterrence",
      image: "/Album/497454896_122129296610787892_5684493621398952729_n.jpg",
      certificate: "Level II Protection Protocol",
      story: "Disciplined estate guardian with instant verbal release and laser sharp focus under extreme pressure.",
      ownerQuote: "Unmatched expertise. They understand the working dog psychology like no other academy."
    }
  ],

  products: [
    {
      id: "k9-pro-harness",
      name: "CKA Tactical Spec-Ops K9 Harness",
      category: "Tactical Gear",
      price: "Rs. 18,500",
      rating: 5.0,
      reviewsCount: 84,
      image: "/Album/499422200_122129296526787892_3931657032319304879_n.jpg",
      description: "Military-grade 1000D Nylon harness with aerospace aluminum buckles, dual control handles, and MOLLE modular compatibility. Designed for supreme chest pressure distribution.",
      features: ["Heavy-duty metal hardware", "Zero-choke chest plate", "Reflective 3M threading", "Custom velcro patch area"]
    },
    {
      id: "biothane-leash",
      name: "Ultra-Grip BioThane Working Leash (6ft / 15ft)",
      category: "Leashes & Lines",
      price: "Rs. 8,500",
      rating: 4.9,
      reviewsCount: 120,
      image: "/Album/554761127_122154654236787892_5296319287022271715_n.jpg",
      description: "100% waterproof, odor-proof, and anti-slip BioThane material. Remains supple in all weather conditions with an ultra-strong 1000lb breaking strength brass snap.",
      features: ["Weather & mud proof", "Supple leather feel without maintenance", "360° solid brass swivel", "Zero rope burn on hands"]
    },
    {
      id: "training-collar",
      name: "Herm Sprenger Stainless Steel Ultra-Plus Prong",
      category: "Precision Tools",
      price: "Rs. 14,500",
      rating: 5.0,
      reviewsCount: 62,
      image: "/Album/495901457_122128226996787892_5118561498875172140_n.jpg",
      description: "Authentic German engineered training collar designed for gentle, even pinch communication mimicking mother canine corrections. Smooth rounded blunt tips.",
      features: ["German stainless steel", "Even pressure distribution", "Custom size links included", "Recommended by top behavioral specialists"]
    },
    {
      id: "reward-tug",
      name: "French Linen High-Drive Training Tug",
      category: "Motivation & Drive",
      price: "Rs. 4,500",
      rating: 4.9,
      reviewsCount: 95,
      image: "/Album/601018502_122165542862787892_2507724484870478693_n.jpg",
      description: "Durable bite reward toy engineered from authentic French Linen. Dual heavy-duty stitched handles for engaging games of tug that build ultimate handler drive.",
      features: ["Tear-resistant French Linen", "Soft on canine dentition", "Dual reinforced webbed handles", "Ultimate reward for obedience"]
    },
    {
      id: "k9-place-cot",
      name: "Elevated Orthopedic K9 Place Cot",
      category: "House Manners",
      price: "Rs. 16,000",
      rating: 4.8,
      reviewsCount: 48,
      image: "/Album/555549741_122154654404787892_5315441370469195461_n.jpg",
      description: "Heavy powder-coated steel frame with breathable, scratch-resistant mesh. Essential for teaching the Place command, keeping dogs cool in tropical Sri Lankan climate.",
      features: ["Breathable airflow cooling", "Orthopedic joint support", "Non-skid rubber feet", "Easy hose-down cleaning"]
    },
    {
      id: "supplement-pack",
      name: "CKA Elite Joint & Coat Vitality Formula",
      category: "Nutrition & Health",
      price: "Rs. 12,000",
      rating: 5.0,
      reviewsCount: 110,
      image: "/Album/494728895_122128227044787892_7708380751026631015_n.jpg",
      description: "Veterinarian formulated supplement with Glucosamine, Chondroitin, MSM, and Omega-3 fatty acids for working dog agility, vibrant skin, and dense shiny coat.",
      features: ["Pharmaceutical grade purity", "Delicious natural roast flavor", "Enhances stamina and recovery", "Crucial for active & large breeds"]
    }
  ],

  methodology: [
    {
      step: "01",
      title: "Scientific Drive & Temperament Assessment",
      description: "We analyze your dog's unique genetic drive balance (food drive, prey drive, pack drive, defense drive) and environmental thresholds before touching a leash.",
      icon: "activity"
    },
    {
      step: "02",
      title: "Marker Clarity & Positive Motivation",
      description: "We establish razor-sharp communication markers (Yes/Good/No) so your dog understands exactly what behavior unlocks reward, eliminating confusion and frustration.",
      icon: "sparkles"
    },
    {
      step: "03",
      title: "Distraction Layering & Real-World Proofing",
      description: "Training in quiet rooms isn't enough. We systematically expose your dog to traffic, other animals, children, loud noises, and diverse Sri Lankan environments.",
      icon: "layers"
    },
    {
      step: "04",
      title: "Handler Empowerment & Lifelong Support",
      description: "We coach you and your family with hands-on mechanics, body language, and voice mastery. You receive our lifetime post-graduation guidance.",
      icon: "award"
    }
  ],

  testimonials: [
    {
      author: "Dr. Sanjeewa Wickramasinghe",
      location: "Colombo 07",
      dog: "Thor (German Shepherd)",
      rating: 5,
      text: "Ceylon K9 Academy is miles ahead of traditional dog trainers in Sri Lanka. Their modern, science-based approach made Thor so obedient that he walks beside me through Colombo traffic with zero tension. True luxury standard!",
      date: "2 weeks ago"
    },
    {
      author: "Ananya Fernando",
      location: "Kandy",
      dog: "Milo (Golden Retriever)",
      rating: 5,
      text: "Milo used to jump all over visitors and pull my shoulder out on walks. Within 3 weeks of their Master Obedience program, he is the calmest, best-mannered gentleman in the neighborhood.",
      date: "1 month ago"
    },
    {
      author: "Dinesh Ratnayake",
      location: "Mount Lavinia",
      dog: "Zeus (Rottweiler)",
      rating: 5,
      text: "I was worried about Zeus's reactive barking toward strangers. The behavioral team at Ceylon K9 Academy diagnosed the fear root-cause and rehabilitated him completely. Worth every single rupee.",
      date: "3 weeks ago"
    },
    {
      author: "Kavinda & Shiroma Perera",
      location: "Negombo",
      dog: "Bella & Max (Boxer & Doberman)",
      rating: 5,
      text: "Enrolling our two high-energy dogs in the VIP Bootcamp was life-changing. Daily video updates kept us informed, and the handover sessions gave us full command confidence. Highly recommended!",
      date: "2 months ago"
    }
  ],

  faqs: [
    {
      q: "What age is best to begin dog training at Ceylon K9 Academy?",
      a: "Puppies can begin our Puppy Foundation program as early as 8-10 weeks old once they have their initial vaccinations. Adult and senior dogs can also be trained and rehabilitated at any age—there is no truth to the myth that old dogs cannot learn new habits!"
    },
    {
      q: "What training methods does Ceylon K9 Academy use?",
      a: "We practice modern, balanced, reward-centered dog training grounded in canine ethology. We build strong motivation using food, play, and praise, while establishing clear boundaries and accountability so your dog understands what is expected in every scenario."
    },
    {
      q: "Do you offer training across all areas of Sri Lanka?",
      a: "Yes! We operate our primary academy center in the Western Province, provide in-home private sessions throughout Colombo, Gampaha, Kalutara, and surrounding districts, and offer residential Board & Train options for clients island-wide including Kandy, Galle, Kurunegala, and beyond."
    },
    {
      q: "How long does a typical training program take?",
      a: "Depending on your dog's age and goals, our programs range from 4 weeks (Puppy Foundation) to 6-8 weeks (Master Obedience) or 3-4 weeks (Intensive Board & Train Bootcamp). We guarantee your results with handler transfer sessions."
    },
    {
      q: "Can you fix severe aggression or biting behavior?",
      a: "Yes. Our behavior modification team specializes in severe aggression, dog reactivity, resource guarding, and trauma recovery. Every dog undergoes a comprehensive behavioral evaluation to construct a bespoke rehab blueprint."
    },
    {
      q: "How do I book an initial consultation or evaluation?",
      a: "You can book directly via our online booking form on this website or reach our Master Trainer team immediately on WhatsApp at +94 76 250 2279. We will assess your dog and recommend the ideal pathway."
    }
  ],

  reels: [
    {
      id: "reel-1",
      title: "Rottweiler Puppy Focus & Recall Mastery",
      category: "Puppy Imprinting",
      views: "850K Views",
      likes: "92K",
      duration: "0:45",
      image: "/Album/494728895_122128227044787892_7708380751026631015_n.jpg",
      link: "https://www.tiktok.com/@www.ashen8"
    },
    {
      id: "reel-2",
      title: "Belgian Malinois High-Drive Agility & Control",
      category: "Working K9 Drive",
      views: "1.4M Views",
      likes: "185K",
      duration: "1:12",
      image: "/Album/500237257_122131567916787892_3281965166062166311_n.jpg",
      link: "https://www.tiktok.com/@www.ashen8"
    },
    {
      id: "reel-3",
      title: "Small Breed Confidence & Desensitization",
      category: "Pomeranian Socialization",
      views: "620K Views",
      likes: "74K",
      duration: "0:38",
      image: "/Album/499709297_122130336914787892_162451422758202101_n.jpg",
      link: "https://www.tiktok.com/@www.ashen8"
    }
  ],

  socialStrip: [
    { image: "/Album/494728895_122128227044787892_7708380751026631015_n.jpg", tag: "@www.ashen8" },
    { image: "/Album/500237257_122131567916787892_3281965166062166311_n.jpg", tag: "@ceylonk9academy" },
    { image: "/Album/499709297_122130336914787892_162451422758202101_n.jpg", tag: "@www.ashen8" },
    { image: "/Album/502621370_122132875100787892_2104062153873135068_n.jpg", tag: "@ceylonk9academy" },
    { image: "/Album/554761127_122154654236787892_5296319287022271715_n.jpg", tag: "@www.ashen8" },
    { image: "/Album/555549741_122154654404787892_5315441370469195461_n.jpg", tag: "@ceylonk9academy" },
    { image: "/Album/601018502_122165542862787892_2507724484870478693_n.jpg", tag: "@www.ashen8" }
  ]
};

module.exports = academyData;
module.exports.data = academyData;
module.exports.default = academyData;
