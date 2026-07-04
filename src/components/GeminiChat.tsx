import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Sparkles, AlertCircle, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "../context/TranslationContext";

interface Message {
  role: "user" | "assistant";
  content: string;
  isError?: boolean;
}

export default function GeminiChat() {
  const { t, currentLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [diagnosticMsg, setDiagnosticMsg] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize with greeting based on translation
  useEffect(() => {
    setMessages([
      {
        role: "assistant",
        content: t(
          "Benvenuto. Sono l'Assistente Culinario di Chef Michela Domizi. Posso raccontarti la sua filosofia, i suoi menu signature o guidarti nella pianificazione di un evento esclusivo. Come posso aiutarti oggi?"
        ),
      },
    ]);
  }, [currentLanguage, t]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput("");
    setHasError(false);
    setDiagnosticMsg(null);

    const updatedMessages = [...messages, { role: "user" as const, content: userText }];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || errorData.details || "Si è verificato un errore nel server.");
      }

      const data = await response.json();
      if (data.reply) {
        setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
      } else {
        throw new Error("Il server non ha restituito alcuna risposta valida.");
      }
    } catch (err: any) {
      console.error("Chat message error:", err);
      setHasError(true);
      const errMsg = err.message || "Errore sconosciuto.";
      setDiagnosticMsg(errMsg);
      
      // Append a helpful error message directly in the chat dialogue for the user
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: t("⚠️ Errore di connessione con il servizio AI.") + `\nDettaglio: ${errMsg}\n\n` + 
            t("Se l'errore è dovuto alla chiave API mancante, assicurati di configurare GEMINI_API_KEY nei Secret o nel file .env dell'applicazione."),
          isError: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-24 right-6 z-40 md:bottom-28">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 bg-[#8B5E3C] hover:bg-[#724C2E] text-[#F8F7F4] p-3.5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 group border border-[#F8F7F4]/10 cursor-pointer"
          title={t("Chiedi alla Chef")}
          id="chef-chat-toggle"
        >
          <MessageSquare size={20} className="group-hover:rotate-6 transition-transform" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out font-mono-design uppercase tracking-wider text-[11px] font-bold">
            {t("Chiedi alla Chef")}
          </span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F8F7F4] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F8F7F4]"></span>
          </span>
        </button>
      </div>

      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-36 right-6 z-50 w-[90vw] sm:w-[420px] h-[550px] bg-[#F8F7F4] border border-[#1A1A1A]/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col font-sans text-[#1A1A1A]"
            id="chef-chat-panel"
          >
            {/* Header */}
            <div className="bg-[#1A1A1A] text-[#F8F7F4] p-4 flex items-center justify-between border-b border-[#1A1A1A]/10">
              <div className="flex items-center gap-2.5">
                <div className="bg-[#8B5E3C] p-2 rounded-full flex items-center justify-center">
                  <Sparkles size={14} className="text-[#F8F7F4]" />
                </div>
                <div>
                  <h4 className="font-mono-design uppercase tracking-wider text-xs font-bold text-[#F8F7F4]">
                    Michela Domizi AI
                  </h4>
                  <p className="text-[10px] text-[#F8F7F4]/60 font-mono-design tracking-wider uppercase flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    {t("Assistente Culinario")}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#F8F7F4]/60 hover:text-[#F8F7F4] transition-colors p-1 hover:bg-[#F8F7F4]/5 rounded-md cursor-pointer"
                aria-label={t("Chiudi")}
              >
                <X size={18} />
              </button>
            </div>

            {/* Diagnostic Alert if Key is Missing / Errored */}
            {hasError && (
              <div className="bg-red-500/5 border-b border-red-500/10 p-3 text-xs text-red-800 flex items-start gap-2 animate-fadeIn">
                <AlertCircle size={16} className="text-red-700 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-bold uppercase font-mono-design tracking-wider text-[10px]">
                    {t("DIAGNOSTICA API GEMINI")}
                  </p>
                  <p className="text-[11px] leading-relaxed">
                    {diagnosticMsg?.includes("API_KEY") 
                      ? t("Errore: GEMINI_API_KEY non definita o non valida. Aggiungi la variabile d'ambiente per abilitare la chat.")
                      : `${t("Errore durante la chiamata API:")} ${diagnosticMsg}`}
                  </p>
                </div>
              </div>
            )}

            {/* Conversation Window */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gradient-to-b from-[#F8F7F4] to-[#F1EFEB]">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed shadow-sm ${
                      msg.role === "user"
                        ? "bg-[#1A1A1A] text-[#F8F7F4] rounded-tr-none"
                        : msg.isError
                        ? "bg-red-500/5 border border-red-500/10 text-red-950 rounded-tl-none whitespace-pre-wrap font-mono text-[11px]"
                        : "bg-[#F8F7F4] border border-[#1A1A1A]/5 text-[#1A1A1A] rounded-tl-none"
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-[#F8F7F4] border border-[#1A1A1A]/5 rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 bg-[#8B5E3C] rounded-full animate-bounce duration-300 delay-75"></span>
                    <span className="w-1.5 h-1.5 bg-[#8B5E3C] rounded-full animate-bounce duration-300 delay-150"></span>
                    <span className="w-1.5 h-1.5 bg-[#8B5E3C] rounded-full animate-bounce duration-300 delay-225"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Form Input */}
            <form
              onSubmit={handleSend}
              className="p-3 bg-[#F8F7F4] border-t border-[#1A1A1A]/10 flex gap-2 items-center"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t("Fai una domanda alla Chef...")}
                disabled={isLoading}
                className="flex-1 bg-[#1A1A1A]/5 focus:bg-[#1A1A1A]/10 text-xs px-4 py-2.5 rounded-full border border-transparent focus:border-[#1A1A1A]/10 outline-none transition-all placeholder:text-[#1A1A1A]/40 text-[#1A1A1A]"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className={`p-2.5 rounded-full flex items-center justify-center transition-all ${
                  input.trim() && !isLoading
                    ? "bg-[#8B5E3C] hover:bg-[#724C2E] text-[#F8F7F4] cursor-pointer"
                    : "bg-[#1A1A1A]/5 text-[#1A1A1A]/20 cursor-not-allowed"
                }`}
                aria-label={t("Invia")}
              >
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
