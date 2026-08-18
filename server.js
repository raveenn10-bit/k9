const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static assets
app.use(express.static(path.join(__dirname, 'public')));
app.use('/Album', express.static(path.join(__dirname, 'Album')));
app.use('/media', express.static(path.join(__dirname, 'public', 'media')));
app.use(express.static(__dirname));

// HTML routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/programs', (req, res) => res.sendFile(path.join(__dirname, 'programs.html')));
app.get('/gallery', (req, res) => res.sendFile(path.join(__dirname, 'gallery.html')));
app.get('/equipment', (req, res) => res.sendFile(path.join(__dirname, 'equipment.html')));
app.get('/about', (req, res) => res.sendFile(path.join(__dirname, 'about.html')));
app.get('/contact', (req, res) => res.sendFile(path.join(__dirname, 'contact.html')));

app.listen(PORT, () => {
  console.log(`?? Ceylon K9 Academy Dev Server active at http://localhost:${PORT}`);
});
