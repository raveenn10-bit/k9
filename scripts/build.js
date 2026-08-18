const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const data = require('../data/data.js');

const rootDir = path.join(__dirname, '..');

const pages = [
  { view: 'index', output: 'index.html', title: 'Ceylon K9 Academy — Smart Training For Happy Dogs', path: '/' },
  { view: 'programs', output: 'programs.html', title: 'Training Programs — Ceylon K9 Academy', path: '/programs' },
  { view: 'gallery', output: 'gallery.html', title: 'Graduates & Hall of Fame — Ceylon K9 Academy', path: '/gallery' },
  { view: 'equipment', output: 'equipment.html', title: 'K9 Gear & Equipment Store — Ceylon K9 Academy', path: '/equipment' },
  { view: 'about', output: 'about.html', title: 'About Master Trainer & Academy — Ceylon K9 Academy', path: '/about' },
  { view: 'contact', output: 'contact.html', title: 'Contact & Book Evaluation — Ceylon K9 Academy', path: '/contact' }
];

pages.forEach(p => {
  const filePath = path.join(rootDir, 'views', p.view + '.ejs');
  ejs.renderFile(filePath, {
    data: data,
    academy: data,
    pageTitle: p.title,
    currentPath: p.path,
    graduates: data.graduates,
    programs: data.programs,
    products: data.products,
    equipment: data.products,
    testimonials: data.testimonials,
    reels: data.reels || []
  }, (err, html) => {
    if (err) {
      console.error('Error rendering ' + p.view + ':', err);
    } else {
      let staticHtml = html
        .split('href="/"').join('href="index.html"')
        .split('href="/programs"').join('href="programs.html"')
        .split('href="/gallery"').join('href="gallery.html"')
        .split('href="/equipment"').join('href="equipment.html"')
        .split('href="/about"').join('href="about.html"')
        .split('href="/contact"').join('href="contact.html"')
        .split('href="/#portfolio-section"').join('href="index.html#portfolio-section"')
        .split('href="/#about-section"').join('href="index.html#about-section"')
        .split('href="/#testimonials-section"').join('href="index.html#testimonials-section"')
        .split('href="/#pricing-section"').join('href="index.html#pricing-section"')
        .split('href="/programs/').join('href="programs.html#');

      const outPath = path.join(rootDir, p.output);
      fs.writeFileSync(outPath, staticHtml, 'utf8');
      console.log('? Generated ' + p.output + ' (' + fs.statSync(outPath).size + ' bytes)');
    }
  });
});
