import { GoogleGenAI } from "@google/genai";

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
  console.error("Failed to initialize Gemini API in chat:", error);
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
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Missing or invalid messages array." });
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
          error: "GEMINI_API_KEY is not configured.",
          details: "Il server non ha la chiave API configurata nelle variabili d'ambiente (GEMINI_API_KEY).",
        });
      }
    }

    const systemInstruction = `Sei l'Assistente Virtuale di Chef Michela Domizi, esperta di cucina rurale contemporanea marchigiana.
Rispondi in modo elegante, professionale, accogliente e caloroso in lingua italiana (o nella lingua usata dall'utente).
Fornisci informazioni basandoti su questi dettagli:
- Chef Michela Domizi (nata nel 1976 a Civitanova Marche) ha oltre 30 anni di esperienza culinaria. È autodidatta d'autore, Chef Ambassador dell'Università del Territorio Marchigiano.
- Filosofia culinaria: Rifiuto della chimica industriale, focus rigoroso su stagionalità biologica, acquisto da piccoli produttori locali (biodiversità ed etica), valorizzazione della memoria rurale in chiave contemporanea.
- Servizi offerti:
  1. Chef a Domicilio / Fine-Dining privato a casa o in location esclusive, con menu personalizzati e servizio completo.
  2. Consulenza Strategica per Ristoranti: Ottimizzazione del menu, food costing, formazione della brigata, standardizzazione processi, piatti a km zero.
  3. Corsi di Cucina (Cooking Class & Team Building): Sfoglia fatta a mano, pasta fresca marchigiana.
  4. Direzione Gastronomica / Chef Ambassador per eventi istituzionali, cene di gala, showcooking e consorzi.
- Per contatti o prenotazioni: Il form sul sito è disponibile, oppure email ciao@micheladomizi.com, o telefono/WhatsApp.
- Sede operativa: Civitanova Marche / Macerata, Marche, Italia.

Rispondi in modo conciso ma raffinato, mantenendo un tono degno di un'esperienza fine-dining di alto livello. Non inventare servizi che non esistono. Guida gentilmente l'utente a compilare il form sul sito per ricevere un preventivo gratuito.`;

    // Map message format to Gemini API format if needed
    // The simple prompt can also be a chat with history
    const contents = messages.map((msg: any) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }],
    }));

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const reply = response.text || "Spiacente, non ho potuto elaborare la richiesta.";
    return res.json({ reply });
  } catch (error: any) {
    console.error("Chat API error:", error);
    return res.status(500).json({
      error: "Impossibile comunicare con Gemini.",
      details: error.message || error,
    });
  }
}
