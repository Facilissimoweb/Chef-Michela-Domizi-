import React, { useEffect } from 'react';
import { ArrowRight, Check, Calendar, Heart, Award, UtensilsCrossed } from 'lucide-react';
import { useTranslation } from '../context/TranslationContext';

interface EventsViewProps {
  onBackToHome: () => void;
  onNavigateToContact: () => void;
}

export default function EventsView({ onBackToHome, onNavigateToContact }: EventsViewProps) {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="bg-[#F8F7F4] text-[#1A1A1A] min-h-screen">
      {/* Editorial View Header */}
      <div className="view-header border-b border-[#1A1A1A]/10">
        <span className="label">{t("Eventi / No. 03")}</span>
        <span className="label">{t("Michela Domizi Chef — +30 Anni di Esperienza Culinaria")}</span>
      </div>

      {/* Intro Hero Split Section */}
      <section className="content-grid border-b border-[#1A1A1A]/10">
        <div className="text-panel flex flex-col justify-center">
          <p className="label mb-6">[ 01 ] DIREZIONE GASTRONOMICA</p>
          <h1 className="font-editorial text-5xl md:text-7xl lg:text-8xl leading-[0.85] tracking-tight uppercase mb-8">
            L'Arte della<br/>Tavola
          </h1>
          <p className="quote text-xl md:text-2xl font-editorial italic text-[#8B5E3C] leading-relaxed mb-8">
            “Non cucino per riempire piatti, ma per tessere ricordi preziosi. L'esperienza dell'alta ristorazione marchigiana, ovunque tu desideri.”
          </p>
          <div className="body-text text-[#1A1A1A]/70 text-sm md:text-base leading-relaxed space-y-6 max-w-xl">
            <p>
              Gli eventi firmati da me sono concepiti come autentici progetti di sartoria enogastronomica. Con oltre <span className="text-[#1A1A1A] font-semibold">+30 anni di esperienza</span>, rifiuto le formule standardizzate del catering industriale per dare vita a incontri esclusivi basati sull'unicità della proposta e sulla freschezza assoluta delle materie prime locali.
            </p>
            <p>
              Porto la mia cucina e la mia brigata ovunque tu sia: in una dimora storica dell'entroterra maceratese, in un giardino sul mare a Civitanova Marche, o nell'intimità raffinata della tua veranda.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-10 pt-8 border-t border-[#1A1A1A]/10">
            <button 
              className="inline-block bg-[#1A1A1A] text-[#F8F7F4] px-8 py-4 font-mono-design text-xs uppercase tracking-[0.12em] hover:bg-[#8B5E3C] transition-colors duration-300"
              onClick={onNavigateToContact}
            >
              Progetta il Tuo Evento
            </button>
            <button 
              className="inline-block border-[1.5px] border-[#1A1A1A] text-[#1A1A1A] px-8 py-4 font-mono-design text-xs uppercase tracking-[0.12em] hover:bg-[#1A1A1A] hover:text-[#F8F7F4] transition-all duration-300"
              onClick={onBackToHome}
            >
              Torna alla Home
            </button>
          </div>
        </div>

        <div className="media-panel flex items-center justify-center p-8 bg-[#1A1A1A]/5 border-l border-[#1A1A1A]/10">
          <div className="w-full max-w-[500px] aspect-[4/5] relative">
            <div className="relative w-full h-full border border-[#1A1A1A] bg-[#f4ece7] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1200" 
                alt="Tavola ed eventi d'autore" 
                className="w-full h-full object-cover filter grayscale contrast-[1.03]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-[#1A1A1A] text-[#F8F7F4] px-4 py-2 font-mono-design text-[10px] tracking-widest uppercase flex items-center gap-1.5 shadow-lg">
                <span className="w-2 h-2 bg-[#8B5E3C] animate-pulse"></span>
                <span>ESTETICA E MEMORIA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 lg:px-12 border-b border-[#1A1A1A]/10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/3] border-[1.5px] border-[#1A1A1A] overflow-hidden bg-[#F4ECE7]">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200" 
                alt="Catering e design d'autore" 
                className="w-full h-full object-cover filter grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-44 h-44 bg-[#F8F7F4] border-[1.5px] border-[#1A1A1A] flex items-center justify-center p-6 hidden lg:flex">
              <p className="text-center font-mono-design text-[10px] uppercase tracking-wider text-[#1A1A1A] leading-tight">
                Direzione Gastronomica Sartoriale
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <p className="font-mono-design text-[0.7rem] uppercase tracking-[0.15em] text-[#1A1A1A]/60">[ 02 ] STRATEGIA</p>
            <h2 className="font-editorial text-4xl lg:text-5xl uppercase tracking-tight text-[#1A1A1A]">La Sostanza nel Servizio</h2>
            <p className="font-sans-design text-sm md:text-base text-[#1A1A1A]/70 leading-relaxed">
              Il mio obiettivo è disegnare un'atmosfera coerente. Ogni dettaglio della tavola, l'abbinamento dei vini autoctoni e la successione dei piatti sono coordinati con rigore millimetrico per rispettare la solennità del momento.
            </p>
            <p className="font-sans-design text-sm md:text-base text-[#1A1A1A]/70 leading-relaxed">
              Dalla scelta del pane artigianale a lievitazione naturale fino alle decorazioni composte da erbe aromatiche fresche delle colline, nulla è lasciato al caso. L'eccellenza rurale contemporanea si esprime nella semplicità più curata.
            </p>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-24 border-b border-[#1A1A1A]/10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <p className="font-mono-design text-[0.7rem] uppercase tracking-[0.15em] text-[#1A1A1A]/60">[ 03 ] COME FUNZIONA</p>
          <h2 className="font-editorial text-4xl lg:text-5xl uppercase text-[#1A1A1A]">Il Nostro Metodo Operativo</h2>
          <div className="w-16 h-[1.5px] bg-[#8B5E3C] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="border-[1.5px] border-[#1A1A1A] p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-[#1A1A1A]/5 border border-[#1A1A1A] flex items-center justify-center mb-6">
                <UtensilsCrossed size={20} className="text-[#1A1A1A]" />
              </div>
              <h3 className="font-editorial text-xl uppercase font-semibold mb-3">Menu Personalizzato</h3>
              <p className="font-sans-design text-sm text-[#1A1A1A]/70 mb-6 leading-relaxed">
                Nessun catalogo precompilato. Definiamo insieme un percorso enogastronomico unico che rispetti le tue preferenze e celebri la ricchezza del periodo stagionale.
              </p>
            </div>
            <span className="font-mono-design text-[9px] uppercase tracking-wider text-[#1A1A1A]/50 border-t border-[#1A1A1A]/10 pt-4">01 / CONCEPT</span>
          </div>

          {/* Step 2 */}
          <div className="border-[1.5px] border-[#1A1A1A] p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-[#1A1A1A]/5 border border-[#1A1A1A] flex items-center justify-center mb-6">
                <Heart size={20} className="text-[#1A1A1A]" />
              </div>
              <h3 className="font-editorial text-xl uppercase font-semibold mb-3">Ingredienti Etici</h3>
              <p className="font-sans-design text-sm text-[#1A1A1A]/70 mb-6 leading-relaxed">
                Selezioniamo materie prime freschissime fornite direttamente da piccoli contadini, pescatori ed allevatori delle Marche che tutelano la biodiversità locale.
              </p>
            </div>
            <span className="font-mono-design text-[9px] uppercase tracking-wider text-[#1A1A1A]/50 border-t border-[#1A1A1A]/10 pt-4">02 / LA SPESA</span>
          </div>

          {/* Step 3 */}
          <div className="border-[1.5px] border-[#1A1A1A] p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-[#1A1A1A]/5 border border-[#1A1A1A] flex items-center justify-center mb-6">
                <Award size={20} className="text-[#1A1A1A]" />
              </div>
              <h3 className="font-editorial text-xl uppercase font-semibold mb-3">Esperienza Unica</h3>
              <p className="font-sans-design text-sm text-[#1A1A1A]/70 mb-6 leading-relaxed">
                Per appuntamenti esclusivi proponiamo anche cene "a quattro mani", in cui la mia cucina si unisce a quella di illustri interpreti del gusto regionale.
              </p>
            </div>
            <span className="font-mono-design text-[9px] uppercase tracking-wider text-[#1A1A1A]/50 border-t border-[#1A1A1A]/10 pt-4">03 / LA CENA</span>
          </div>
        </div>
      </section>

      {/* Expectations Section */}
      <section className="py-24 border-b border-[#1A1A1A]/10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="font-mono-design text-[0.7rem] uppercase tracking-[0.15em] text-[#1A1A1A]/60">[ 04 ] MATERIE PRIME</p>
            <h2 className="font-editorial text-4xl lg:text-5xl uppercase tracking-tight text-[#1A1A1A]">Cosa Aspettarsi Sulla Tavola</h2>
            <p className="font-sans-design text-sm md:text-base text-[#1A1A1A]/70 leading-relaxed">
              Il sapore pulito del biologico, la morbidezza delle carni allevate allo stato semibrado, l'eleganza di un olio d'oliva extravergine monocultivar spremuto a freddo nelle colline maceratesi.
            </p>
            <div className="space-y-4 pt-6 border-t border-[#1A1A1A]/10 font-mono-design text-[10px] uppercase tracking-wider text-[#1A1A1A]/70">
              <div className="flex items-center gap-3">
                <Check size={16} className="text-[#8B5E3C]" />
                <span className="tracking-widest text-[#1A1A1A]/70">Zafferano Puro di Matelica e Tartufo Nero</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={16} className="text-[#8B5E3C]" />
                <span className="tracking-widest text-[#1A1A1A]/70">Verdure selvatiche ed erbe aromatiche colte all'alba</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={16} className="text-[#8B5E3C]" />
                <span className="tracking-widest text-[#1A1A1A]/70">Cacciagione dell'entroterra ed eccellenze ittiche dell'Adriatico</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] border-[1.5px] border-[#1A1A1A] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800" 
                alt="Dettaglio piatto d'autore" 
                className="w-full h-full object-cover filter grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="aspect-[3/4] border-[1.5px] border-[#1A1A1A] overflow-hidden mt-8">
              <img 
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800" 
                alt="Piatto marchigiano servito" 
                className="w-full h-full object-cover filter grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to action at bottom */}
      <section className="py-24 px-6 lg:px-12 max-w-5xl mx-auto text-center space-y-8">
        <h2 className="font-editorial text-3xl lg:text-5xl uppercase text-[#1A1A1A]">Pronto a Creare un Ricordo Meraviglioso?</h2>
        <p className="font-sans-design text-[#1A1A1A]/70 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          Pianifichiamo ogni dettaglio del tuo prossimo evento esclusivo nelle Marche. Richiedi subito una disponibilità o un preventivo personalizzato.
        </p>
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <button 
            onClick={onNavigateToContact}
            className="bg-[#1A1A1A] text-[#F8F7F4] px-8 py-4 font-mono-design text-xs uppercase tracking-[0.12em] hover:bg-[#8B5E3C] transition-colors duration-300"
          >
            Inizia il Progetto
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
