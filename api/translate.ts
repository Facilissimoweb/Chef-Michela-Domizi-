import { GoogleGenAI } from "@google/genai";

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
  }
} catch (error) {
  console.error("Failed to initialize Gemini API:", error);
}

export default async function handler(req: any, res: any) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

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
      } else {
        return res.status(503).json({
          error: "Translation service is currently unavailable. Gemini API key is missing or not configured.",
        });
      }
    }

    const systemInstruction = `You are an expert translator specializing in hospitality, fine-dining, and traditional/contemporary Italian cuisine.
Translate the values in the provided JSON object from Italian into ${targetLanguage}.
CRITICAL INSTRUCTIONS:
1. Translate ONLY the string values. DO NOT translate the keys.
2. Maintain the elegant, poetic, yet professional and artisanal tone of the original Italian culinary text.
3. Keep the exact HTML tags, variables (e.g. +30), quotes, and punctuation unchanged within the translated values.
4. Output ONLY the translated JSON object. No intro, no conversational text, no markdown wrapping other than valid JSON.`;

    const prompt = JSON.stringify(strings);

    let response;
    try {
      response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          systemInstruction,
          responseMimeType: "application/json",
        },
      });
    } catch (primaryErr: any) {
      console.warn("Primary model gemini-2.5-flash failed, trying fallback gemini-1.5-flash...", primaryErr);
      response = await ai.models.generateContent({
        model: "gemini-1.5-flash",
        contents: prompt,
        config: {
          systemInstruction,
          responseMimeType: "application/json",
        },
      });
    }

    let resultText = response.text?.trim() || "{}";
    
    // Clean potential markdown wrap just in case
    if (resultText.startsWith("```")) {
      resultText = resultText
        .replace(/^```json\s*/i, "")
        .replace(/```$/, "")
        .trim();
    }

    const translatedStrings = JSON.parse(resultText);

    return res.json({ translatedStrings });
  } catch (error: any) {
    console.error("Translation API error:", error);
    return res.status(500).json({
      error: "Failed to translate strings via Gemini.",
      details: error.message || error,
    });
  }
}
