import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "5mb" }));

// Initialize Gemini client if API key is available
let ai: GoogleGenAI | null = null;
try {
  const apiKey = process.env.GEMINI_API_KEY;
  if (apiKey) {
    ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
    console.log("Gemini API initialized successfully.");
  } else {
    console.warn("GEMINI_API_KEY environment variable is not defined.");
  }
} catch (error) {
  console.error("Failed to initialize Gemini API:", error);
}

// Translate endpoint using Gemini
app.post("/api/translate", async (req, res) => {
  try {
    const { strings, targetLanguage } = req.body;

    if (!strings || typeof strings !== "object" || Object.keys(strings).length === 0) {
      return res.status(400).json({ error: "Missing or invalid strings to translate." });
    }

    if (!targetLanguage || typeof targetLanguage !== "string") {
      return res.status(400).json({ error: "Missing or invalid targetLanguage." });
    }

    // If target language is Italian, return original strings
    if (targetLanguage.toLowerCase() === "it" || targetLanguage.toLowerCase() === "italian" || targetLanguage.toLowerCase() === "italiano") {
      return res.json({ translatedStrings: strings });
    }

    if (!ai) {
      return res.status(503).json({
        error: "Translation service is currently unavailable. Gemini API key is missing or not configured.",
      });
    }

    const systemInstruction = `You are an expert translator specializing in hospitality, fine-dining, and traditional/contemporary Italian cuisine.
Translate the values in the provided JSON object from Italian into ${targetLanguage}.
CRITICAL INSTRUCTIONS:
1. Translate ONLY the string values. DO NOT translate the keys.
2. Maintain the elegant, poetic, yet professional and artisanal tone of the original Italian culinary text.
3. Keep the exact HTML tags, variables (e.g. +30), quotes, and punctuation unchanged within the translated values.
4. Output ONLY the translated JSON object. No intro, no conversational text, no markdown wrapping other than valid JSON.`;

    const prompt = JSON.stringify(strings);

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
      },
    });

    const resultText = response.text?.trim() || "{}";
    const translatedStrings = JSON.parse(resultText);

    return res.json({ translatedStrings });
  } catch (error: any) {
    console.error("Translation API error:", error);
    return res.status(500).json({
      error: "Failed to translate strings via Gemini.",
      details: error.message || error,
    });
  }
});

// Health check route
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", geminiConfigured: !!process.env.GEMINI_API_KEY });
});

// Vite middleware setup
async function setupVite() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in development mode with Vite middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting server in production mode serving static assets...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

setupVite().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
