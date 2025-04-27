// vercel-dev-server.js - This file is useful for local testing and to confirm server can run
import express from 'express';
import path from 'path';
import fs from 'fs';

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files
app.use(express.static('dist/public'));

// Define API routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Learnova x One Team landing page is running' });
});

app.get('/api/stats', (req, res) => {
  res.json({
    eligibleAgeRange: "18-30",
    programPartners: ["Learnova", "One Team"],
    registrationOpen: true,
    limitedSpots: true
  });
});

// Serve SPA for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'dist/public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});