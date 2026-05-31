import React, { useState } from 'react';
import { MessageCircle, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ConversionForm() {
  const WHATSAPP_NUMBER = "393460920621";
  const [message, setMessage] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedMessage = encodeURIComponent(
      message.trim()
        ? `Ciao Michela, ti contatto dal sito.\n\nRichiesta:\n${message}`
        : "Ciao Michela, ti contatto dal sito per avere maggiori informazioni sui tuoi servizi."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div id="dynamic-conversion-form" className="bg-surface-container rounded-2xl max-w-2xl mx-auto shadow-2xl border border-outline/10 relative overflow-hidden transition-all duration-500">
      <div className="bg-primary h-1.5 w-full"></div>

      <div className="p-8 md:p-12 space-y-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-label-md text-xs font-semibold tracking-widest text-primary uppercase inline-flex items-center gap-1.5">
              <Sparkles size={12} />
              Contatto Diretto
            </span>
          </div>

          <h3 className="font-headline-md text-2xl text-primary font-bold leading-tight">
            Inizia il tuo viaggio gastronomico
          </h3>
          <p className="font-body-lg text-secondary leading-relaxed italic">
            "Raccontami la tua idea o il tuo evento. Ti risponderò personalmente su WhatsApp per definire ogni dettaglio."
          </p>
        </div>

        <form onSubmit={handleWhatsAppRedirect} className="space-y-6">
          <div className="space-y-3">
            <label htmlFor="wa-message" className="font-label-md text-sm text-primary font-semibold uppercase tracking-wider block">
              Il tuo messaggio (opzionale)
            </label>
            <textarea
              id="wa-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Esempio: Vorrei organizzare una cena privata per 6 persone a Macerata..."
              className="w-full bg-surface border border-outline/20 rounded-xl p-5 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all leading-relaxed placeholder:text-secondary/40 min-h-[120px]"
            />
          </div>

          <button
            type="submit"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="w-full bg-[#25D366] text-white py-5 rounded-full font-label-md text-lg font-bold hover:bg-[#20ba5a] transition-all active:scale-95 flex items-center justify-center gap-3 shadow-lg shadow-green-500/20"
          >
            <MessageCircle size={24} className={isHovered ? 'animate-bounce' : ''} />
            <span>Invia su WhatsApp</span>
            <ArrowRight size={20} />
          </button>
        </form>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-outline/10">
          <div className="flex items-center gap-2 text-secondary text-xs font-medium">
            <CheckCircle2 size={14} className="text-primary" />
            <span>Risposta rapida garantita</span>
          </div>
          <div className="flex items-center gap-2 text-secondary text-xs font-medium">
            <CheckCircle2 size={14} className="text-primary" />
            <span>Consulenza personalizzata</span>
          </div>
        </div>
      </div>
    </div>
  );
}
