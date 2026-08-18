const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const htmlFiles = ['index.html', 'programs.html', 'gallery.html', 'equipment.html', 'about.html', 'contact.html'];
const albumFiles = fs.readdirSync(path.join(rootDir, 'Album'));
const mediaFiles = fs.existsSync(path.join(rootDir, 'public', 'media')) ? fs.readdirSync(path.join(rootDir, 'public', 'media')) : [];

console.log('Available Album files:', albumFiles);
console.log('Available Media files:', mediaFiles);

let brokenCount = 0;
let totalChecked = 0;

htmlFiles.forEach(file => {
  const filePath = path.join(rootDir, file);
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Find all src="..." and data-lightbox-src="..."
  const regex = /(?:src|data-lightbox-src|data-src)=["']([^"']+)["']/g;
  let match;
  console.log('\n=== Checking ' + file + ' ===');
  
  while ((match = regex.exec(content)) !== null) {
    const src = match[1];
    if (src.startsWith('http') || src.startsWith('data:') || src.endsWith('.js') || src.endsWith('.css')) continue;
    
    totalChecked++;
    let cleanSrc = src.startsWith('/') ? src.slice(1) : src;
    
    // Check possible local paths
    const candidates = [
      path.join(rootDir, cleanSrc),
      path.join(rootDir, 'public', cleanSrc),
      path.join(rootDir, 'Album', path.basename(cleanSrc)),
      path.join(rootDir, 'public', 'media', path.basename(cleanSrc))
    ];
    
    const found = candidates.some(c => fs.existsSync(c));
    if (!found) {
      console.log('? BROKEN: ' + src);
      brokenCount++;
    } else {
      console.log('? FOUND: ' + src);
    }
  }
});

console.log('\nTotal Checked:', totalChecked, 'Broken Count:', brokenCount);
