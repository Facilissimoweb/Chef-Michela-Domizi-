import React, { useEffect } from 'react';
import { ArrowRight, UtensilsCrossed, Award, Check, Sparkles } from 'lucide-react';

const chefDomicilioImage = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1200";
const consultingImage = "https://images.unsplash.com/photo-1574484284002-982da33611f7?auto=format&fit=crop&q=80&w=1200";
const ambassadorImage = "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=1200";

interface ServicesViewProps {
  onBackToHome: () => void;
  onNavigateToContact: () => void;
}

export default function ServicesView({ onBackToHome, onNavigateToContact }: ServicesViewProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="bg-[#F8F7F4] text-[#1A1A1A] min-h-screen">
      {/* Editorial View Header */}
      <div className="view-header border-b border-[#1A1A1A]/10">
        <span className="label">Servizi / No. 02</span>
        <span className="label">Michela Domizi Chef — +30 Anni di Esperienza Culinaria</span>
      </div>

      {/* Intro Hero Split Section */}
      <section className="content-grid border-b border-[#1A1A1A]/10">
        <div className="text-panel flex flex-col justify-center">
          <p className="label mb-6">[ 01 ] SERVIZI D'AUTORE</p>
          <h1 className="font-editorial text-5xl md:text-7xl lg:text-8xl leading-[0.85] tracking-tight uppercase mb-8">
            Esperienze<br/>Su Misura
          </h1>
          <p className="quote text-xl md:text-2xl font-editorial italic text-[#8B5E3C] leading-relaxed mb-8">
            “Ogni piatto è una promessa: portare la straordinaria eccellenza enogastronomica delle Marche sulla tavola con sartoriale precisione.”
          </p>
          <div className="body-text text-[#1A1A1A]/70 text-sm md:text-base leading-relaxed space-y-6 max-w-xl">
            <p>
              Progetto percorsi gastronomici capaci di dialogare con i sensi. Con oltre <span className="text-[#1A1A1A] font-semibold">+30 anni di esperienza</span> ai massimi livelli della ristorazione e dell'artigianato culinario, offro soluzioni mirate e personalizzate per contesti privati d'élite o consulenze strategiche commerciali.
            </p>
            <p>
              L'approccio è sempre lo stesso: rifiuto assoluto della chimica industriale, focus rigoroso sulla stagionalità biologica, valorizzazione del lavoro dei piccoli produttori locali e totale integrità dei sapori del territorio.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-10 pt-8 border-t border-[#1A1A1A]/10">
            <button 
              className="inline-block bg-[#1A1A1A] text-[#F8F7F4] px-8 py-4 font-mono-design text-xs uppercase tracking-[0.12em] hover:bg-[#8B5E3C] transition-colors duration-300"
              onClick={onNavigateToContact}
            >
              Richiedi Preventivo Gratuito
            </button>
            <button 
              className="inline-block border-[1.5px] border-[#1A1A1A] text-[#1A1A1A] px-8 py-4 font-mono-design text-xs uppercase tracking-[0.12em] hover:bg-[#1A1A1A] hover:text-[#F8F7F4] transition-all duration-300"
              onClick={onBackToHome}
            >
              Torna alla Home Page
            </button>
          </div>
        </div>

        <div className="media-panel flex items-center justify-center p-8 bg-[#1A1A1A]/5 border-l border-[#1A1A1A]/10">
          <div className="w-full max-w-[500px] aspect-[4/5] relative">
            <div className="relative w-full h-full border border-[#1A1A1A] bg-[#f4ece7] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1200" 
                alt="Esperienza culinaria di lusso" 
                className="w-full h-full object-cover filter grayscale contrast-[1.03]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-[#1A1A1A] text-[#F8F7F4] px-4 py-2 font-mono-design text-[10px] tracking-widest uppercase flex items-center gap-1.5 shadow-lg">
                <span className="w-2 h-2 bg-[#8B5E3C] animate-pulse"></span>
                <span>FINE-DINING RURALE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services presentation with minimalist layouts */}
      <section className="py-24 border-b border-[#1A1A1A]/10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <p className="font-mono-design text-[0.7rem] uppercase tracking-[0.15em] text-[#1A1A1A]/60">[ 02 ] CATALOGO SERVIZI</p>
          <h2 className="font-editorial text-4xl md:text-5xl uppercase text-[#1A1A1A]">Le mie competenze al tuo servizio</h2>
          <div className="w-16 h-[1.5px] bg-[#8B5E3C] mx-auto"></div>
        </div>

        <div className="space-y-24">
          {/* Service 1: Chef a Domicilio di Lusso */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="aspect-[4/3] border-[1.5px] border-[#1A1A1A] overflow-hidden bg-[#F4ECE7]">
              <img 
                src={chefDomicilioImage} 
                alt="Chef a domicilio Michela Domizi" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-6">
              <span className="font-mono-design text-[10px] uppercase tracking-wider text-[#8B5E3C] font-semibold">01 / ESPERIENZA ESCLUSIVA</span>
              <h3 className="font-editorial text-2xl md:text-3xl uppercase text-[#1A1A1A] leading-tight">Chef a Domicilio ed Eventi Privati</h3>
              <p className="font-sans-design text-sm text-[#1A1A1A]/70 leading-relaxed">
                Porto l’alta cucina rurale direttamente nel cuore della tua casa. Che si tratti di una cena romantica, di un pranzo di famiglia intimo o di una ricorrenza speciale, mi occupo di ogni fase: ideazione del menu personalizzato su base stagionale, spesa etica presso produttori marchigiani, preparazione sul posto e servizio impeccabile.
              </p>
              <ul className="space-y-2.5 pt-4 border-t border-[#1A1A1A]/10 font-mono-design text-[10px] uppercase tracking-wider text-[#1A1A1A]/70">
                <li className="flex items-center gap-2"><Check size={14} className="text-[#8B5E3C]" /> Menu abbinati a vini marchigiani biologici</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-[#8B5E3C]" /> Gestione completa e pulizia impeccabile</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-[#8B5E3C]" /> Materia prima biologica e a filiera etica</li>
              </ul>
            </div>
          </div>

          {/* Service 2: Consulenza per Aperture e Rilancio */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <span className="font-mono-design text-[10px] uppercase tracking-wider text-[#8B5E3C] font-semibold">02 / START-UP & CONSULENZA</span>
              <h3 className="font-editorial text-2xl md:text-3xl uppercase text-[#1A1A1A] leading-tight">Consulenza per Gastronomie e Ristorazione</h3>
              <p className="font-sans-design text-sm text-[#1A1A1A]/70 leading-relaxed">
                Grazie a oltre 30 anni di operatività nel settore, accompagno imprenditori e ristoratori nella definizione di concept di successo, riorganizzazione dei menu, standardizzazione delle ricette e nell'organizzazione efficiente della brigata di cucina. Un approccio concreto orientato alla redditività e alla sostenibilità.
              </p>
              <ul className="space-y-2.5 pt-4 border-t border-[#1A1A1A]/10 font-mono-design text-[10px] uppercase tracking-wider text-[#1A1A1A]/70">
                <li className="flex items-center gap-2"><Check size={14} className="text-[#8B5E3C]" /> Progettazione del layout funzionale delle cucine</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-[#8B5E3C]" /> Selezione fornitori d'eccellenza e km zero</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-[#8B5E3C]" /> Formazione dello staff e manualistica dei piatti</li>
              </ul>
            </div>
            <div className="order-1 md:order-2 aspect-[4/3] border-[1.5px] border-[#1A1A1A] overflow-hidden bg-[#F4ECE7]">
              <img 
                src={consultingImage} 
                alt="Consulenza culinaria strategica" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Service 3: Chef Ambassador e Valorizzazione */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="aspect-[4/3] border-[1.5px] border-[#1A1A1A] overflow-hidden bg-[#F4ECE7]">
              <img 
                src={ambassadorImage} 
                alt="Chef Ambassador Università del Territorio" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-6">
              <span className="font-mono-design text-[10px] uppercase tracking-wider text-[#8B5E3C] font-semibold">03 / ISTITUZIONALE & DIVULGAZIONE</span>
              <h3 className="font-editorial text-2xl md:text-3xl uppercase text-[#1A1A1A] leading-tight">Chef Ambassador e Valorizzazione Territoriale</h3>
              <p className="font-sans-design text-sm text-[#1A1A1A]/70 leading-relaxed">
                In qualità di Chef Ambassador dell'Università del Territorio Marchigiano, collaboro attivamente con enti pubblici, consorzi e istituzioni per promuovere le ricchezze culinarie locali. Svolgo conferenze, show-cooking educativi e progetti di ricerca gastronomica per preservare la biodiversità.
              </p>
              <ul className="space-y-2.5 pt-4 border-t border-[#1A1A1A]/10 font-mono-design text-[10px] uppercase tracking-wider text-[#1A1A1A]/70">
                <li className="flex items-center gap-2"><Check size={14} className="text-[#8B5E3C]" /> Show cooking e laboratori di pasta fresca</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-[#8B5E3C]" /> Studi storici sulle tradizioni contadine</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-[#8B5E3C]" /> Eventi culturali e di promozione turistica</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Callout Card */}
      <section className="py-24 bg-[#1A1A1A] text-[#F8F7F4] text-center px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="font-mono-design text-xs uppercase tracking-[0.2em] text-[#8B5E3C]">L'ETICA DEL GUSTO</p>
          <h3 className="font-editorial text-3xl md:text-5xl uppercase leading-tight">Un Patto d'Onore con i Produttori Marchigiani</h3>
          <p className="font-sans-design text-sm md:text-base text-[#F8F7F4]/80 leading-relaxed max-w-2xl mx-auto">
            Rifiuto qualsiasi ingrediente proveniente da allevamenti intensivi o da colture sature di fitofarmaci industriali. Seleziono personalmente i produttori uno ad uno: è l'unico modo per preservare la salute dei miei ospiti e l'anima delle nostre colline.
          </p>
          <div className="h-[1.5px] bg-[#8B5E3C] w-16 mx-auto"></div>
        </div>
      </section>

      {/* Call to action at bottom */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto text-center space-y-8">
        <h2 className="font-editorial text-3xl md:text-5xl uppercase text-[#1A1A1A]">Vuoi Collaborare a un Progetto Gastronomico?</h2>
        <p className="font-sans-design text-[#1A1A1A]/70 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          Discutiamo insieme l'evento privato dei tuoi sogni o studiamo un menu vincente per la tua attività commerciale di ristorazione.
        </p>
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <button 
            onClick={onNavigateToContact}
            className="bg-[#1A1A1A] text-[#F8F7F4] px-8 py-4 font-mono-design text-xs uppercase tracking-[0.12em] hover:bg-[#8B5E3C] transition-colors duration-300"
          >
            Mettiti in Contatto
          </button>
          <button 
            onClick={onBackToHome}
            className="border-[1.5px] border-[#1A1A1A] text-[#1A1A1A] px-8 py-4 font-mono-design text-xs uppercase tracking-[0.12em] hover:bg-[#1A1A1A] hover:text-[#F8F7F4] transition-all duration-300"
          >
            Torna alla Home Page
          </button>
        </div>
      </section>
    </div>
  );
}
