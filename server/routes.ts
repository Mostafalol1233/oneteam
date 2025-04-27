import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Define API routes
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Learnova x One Team landing page is running' });
  });

  // Example route for registration stats (could be used if needed)
  app.get('/api/stats', (req, res) => {
    res.json({
      eligibleAgeRange: "18-30",
      programPartners: ["Learnova", "One Team", "EFE"],
      registrationOpen: true,
      limitedSpots: true
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
