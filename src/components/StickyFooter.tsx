import React from 'react';
import { Phone, MessageCircle, FileText } from 'lucide-react';

export default function StickyFooter() {
  // ==========================================
  // CONFIGURAZIONE CONTATTI (PERSONALIZZABILE)
  // Sostituisci i valori sottostanti con i tuoi dettagli reali:
  // ==========================================
  
  // 1. IL TUO NUMERO DI TELEFONO (formato internazionale es. +393331234567)
  const PHONE_NUMBER = "+39123456789"; 

  // 2. IL TUO LINK DI CHAT WHATSAPP (sostituisci il numero marchiato dopo wa.me/)
  const WHATSAPP_URL = "https://wa.me/39123456789?text=Ciao%20Michela,%20ti%20contatto%20dal%20sito%20web%20per%20un%20progetto!";

  // 3. L'ANCORA DEL MODULO DI CONTATTO (lascia #modulo-contatti)
  const CONTACT_ANCHOR = "#modulo-contatti";

  // Gestione dello scorrimento fluido verso la sezione contatti
  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector(CONTACT_ANCHOR) || document.getElementById('contact');
    if (targetElement) {
      const headerOffset = 90; // offset in pixel per evitare sovrapposizioni con l'header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div 
      id="custom-sticky-footer" 
      className="fixed bottom-0 left-0 right-0 z-40 px-4 pb-4 md:pb-6 pointer-events-none flex justify-center pt-2"
    >
      <div 
        className="w-full max-w-md bg-white/90 dark:bg-primary-container/95 border border-[#e8e1dc]/50 shadow-2xl backdrop-blur-lg rounded-2xl pointer-events-auto transition-transform duration-300 transform translate-y-0 active:scale-[0.99]"
      >
        <div className="flex items-center justify-around py-3 px-2">
          
          {/* BOTTONE 1: Chiamata telefonica diretta */}
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex flex-col items-center justify-center flex-1 gap-1 text-secondary hover:text-primary transition-colors focus:outline-none py-1 group"
            title="Chiamaci subito"
          >
            <div className="p-2 bg-[#f4ece7]/50 rounded-xl group-hover:bg-[#f4ece7] transition-all duration-200">
              <Phone size={20} className="stroke-[2.2px]" />
            </div>
            <span className="font-label-md text-[10px] uppercase tracking-wider font-semibold">Chiama</span>
          </a>

          {/* Divisore sottile centrale */}
          <div className="h-8 w-px bg-[#e8e1dc]"></div>

          {/* BOTTONE 2: Messaggio WhatsApp */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center flex-1 gap-1 text-secondary hover:text-[#25D366] transition-colors focus:outline-none py-1 group"
            title="Apri chat di WhatsApp"
          >
            <div className="p-2 bg-[#f4ece7]/50 rounded-xl group-hover:bg-[#25D366]/10 transition-all duration-200">
              <MessageCircle size={20} className="stroke-[2.2px]" />
            </div>
            <span className="font-label-md text-[10px] uppercase tracking-wider font-semibold">WhatsApp</span>
          </a>

          {/* Divisore sottile centrale */}
          <div className="h-8 w-px bg-[#e8e1dc]"></div>

          {/* BOTTONE 3: Scorrimento al modulo di consulenza (Chef e Concept) */}
          <button
            onClick={handleScrollToContact}
            className="flex flex-col items-center justify-center flex-1 gap-1 text-secondary hover:text-primary transition-colors focus:outline-none py-1 group cursor-pointer"
            title="Invia richiesta di consulenza"
          >
            <div className="p-2 bg-[#f4ece7]/50 rounded-xl group-hover:bg-[#f4ece7] transition-all duration-200">
              <FileText size={20} className="stroke-[2.2px]" />
            </div>
            <span className="font-label-md text-[10px] uppercase tracking-wider font-semibold">Consulenza</span>
          </button>

        </div>
      </div>
    </div>
  );
}
