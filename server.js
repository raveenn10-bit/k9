const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Security header
app.disable('x-powered-by');

// Serve static assets
app.use(express.static(path.join(__dirname, 'public'), { maxAge: '1d' }));
app.use('/Album', express.static(path.join(__dirname, 'Album'), { maxAge: '7d' }));
app.use('/media', express.static(path.join(__dirname, 'public', 'media'), { maxAge: '7d' }));
app.use(express.static(__dirname));

// HTML routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/programs', (req, res) => res.sendFile(path.join(__dirname, 'programs.html')));
app.get('/gallery', (req, res) => res.sendFile(path.join(__dirname, 'gallery.html')));
app.get('/equipment', (req, res) => res.sendFile(path.join(__dirname, 'equipment.html')));
app.get('/about', (req, res) => res.sendFile(path.join(__dirname, 'about.html')));
app.get('/contact', (req, res) => res.sendFile(path.join(__dirname, 'contact.html')));

// Dynamic subroutes
app.get('/programs/:slug', (req, res) => res.sendFile(path.join(__dirname, 'programs.html')));

// 404 fallback
app.use((req, res) => res.status(404).sendFile(path.join(__dirname, 'index.html')));

if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`🐾 Ceylon K9 Academy server running at http://localhost:${PORT}`);
  });
}

module.exports = app;
