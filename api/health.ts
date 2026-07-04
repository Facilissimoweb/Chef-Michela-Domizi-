export default async function handler(req: any, res: any) {
  return res.json({ status: "ok", geminiConfigured: !!process.env.GEMINI_API_KEY });
}
