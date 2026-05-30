import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, Sparkles, Check, Calendar, Heart, Award, UtensilsCrossed } from 'lucide-react';
import { FadeIn } from './MotionComponents';

interface EventsViewProps {
  onBackToHome: () => void;
  onNavigateToContact: () => void;
}

export default function EventsView({ onBackToHome, onNavigateToContact }: EventsViewProps) {
  useEffect(() => {
    // Scroll to the absolute top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background min-h-screen text-on-background pb-24 mt-20 animate-fade-in">
      {/* Editorial breadcrumb banner */}
      <div className="border-b border-outline/10 bg-surface-container-lowest/50 py-4 backdrop-blur-md sticky top-20 z-30">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex items-center justify-between">
          <button 
            type="button"
            onClick={onBackToHome}
            className="flex items-center gap-2 group text-secondary hover:text-primary font-label-md transition-colors pointer-events-auto"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Torna alla Home</span>
          </button>
          <div className="text-secondary/60 text-xs font-mono tracking-wider hidden sm:block">
            ESPERIENZE &amp; EVENTI — CHEF MICHELA DOMIZI
          </div>
          <button
            type="button"
            onClick={onNavigateToContact}
            className="bg-primary hover:bg-primary/95 text-surface px-5 py-1.5 rounded-full text-xs font-label-md transition-all duration-300 shadow-sm"
          >
            Raccontami il tuo evento
          </button>
        </div>
      </div>

      {/* Hero Visual Section */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Arte della tavola ed eventi d'autore" 
            className="w-full h-full object-cover object-center scale-102 filter brightness-[0.55] contrast-[1.05]" 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1800"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop text-center max-w-4xl mx-auto space-y-6 pt-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-label-sm text-xs tracking-wider uppercase backdrop-blur-md shadow-sm">
            <Sparkles size={12} className="text-[#eebf6d]" />
            <span>DIREZIONE GASTRONOMICA SARTORIALE</span>
          </div>
          <FadeIn delay={0.15} y={40}>
            <h1 className="font-headline-xl text-4xl md:text-6xl text-[#fff8f4] font-bold tracking-tight leading-[1.12] drop-shadow-md">
              L’Arte della Tavola,<br />
              <span className="italic font-normal text-white">Ovunque Tu Sia</span>
            </h1>
          </FadeIn>
          <div className="w-16 h-0.5 bg-white/25 mx-auto my-4"></div>
          <FadeIn delay={0.35} y={20}>
            <p className="font-body-lg text-[#e8e1dc] max-w-2xl mx-auto leading-relaxed drop-shadow-sm font-medium">
              La cucina non è solo un atto di precisione: è il cuore di un momento da ricordare. Che si tratti di una cena intima nel calore della tua casa, di un evento aziendale che deve lasciare il segno, o di un’occasione speciale in una location che ti sta a cuore, la mia cucina si sposta per te.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Core Approach Section */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="font-label-lg text-secondary uppercase tracking-widest text-xs font-semibold block">Dettaglio Filosofia</span>
            <h2 className="font-headline-lg text-headline-sm text-primary font-bold">
              La tua occasione, il mio approccio
            </h2>
            <p className="font-headline-sm text-lg italic text-[#8B5E3C] leading-snug">
              Non offro catering. Offro una direzione gastronomica sartoriale.
            </p>
            <p className="font-body-lg text-body-md text-on-surface-variant leading-relaxed">
              Dimentica i menu standardizzati e le soluzioni preconfezionate: il mio obiettivo è disegnare, insieme a te, un percorso che parli dell'evento, dei tuoi ospiti e della stagionalità del nostro territorio marchigiano.
            </p>
            <div className="pt-4 border-t border-outline/10">
              <p className="font-body-md text-sm text-secondary italic">
                Sulla base di <strong>Macerata (Marche)</strong>, assecondiamo eventi su tutto il territorio regionale valorizzando gemme paesaggistiche nascoste e residenze d'epoca private.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-6">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-outline/10 group">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200" 
                alt="Tavola apparecchiata d'autore" 
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="bg-surface-container py-24 border-y border-outline/10">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="font-label-sm text-xs text-primary uppercase tracking-widest font-bold">LA GUIDA PRATICA</span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold">Come funziona</h2>
            <p className="font-body-lg text-body-lg text-secondary leading-relaxed">
              La location la scegli tu. Io porto la sostanza, la ricerca e la cura che definiscono la mia identità di chef.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1: Menu su misura */}
            <FadeIn className="bg-background p-8 rounded-xl border border-outline/5 hover:shadow-md transition-all duration-300 flex flex-col justify-between" delay={0.15} y={30}>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                  <UtensilsCrossed size={20} />
                </div>
                <h3 className="font-headline-sm text-lg text-primary font-bold">Menu su misura</h3>
                <p className="font-body-md text-sm text-secondary leading-relaxed">
                  Studiamo insieme una proposta che rispetti i tuoi gusti e il tema dell'evento, valorizzando le materie prime che la terra ci offre in quel preciso momento.
                </p>
              </div>
              <div className="pt-6 text-[11px] font-mono uppercase text-primary/75 tracking-wider font-semibold">01 / Personalizzazione</div>
            </FadeIn>

            {/* Step 2: Approccio etico */}
            <FadeIn className="bg-background p-8 rounded-xl border border-outline/5 hover:shadow-md transition-all duration-300 flex flex-col justify-between" delay={0.3} y={30}>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                  <Heart size={20} />
                </div>
                <h3 className="font-headline-sm text-lg text-primary font-bold">Approccio etico</h3>
                <p className="font-body-md text-sm text-secondary leading-relaxed">
                  Proprio come nel mio ristorante, ogni ingrediente è selezionato da piccoli produttori locali. Non scendo a compromessi sulla qualità.
                </p>
              </div>
              <div className="pt-6 text-[11px] font-mono uppercase text-primary/75 tracking-wider font-semibold">02 / Sostenibilità locale</div>
            </FadeIn>

            {/* Step 3: Esperienza "A Quattro Mani" */}
            <FadeIn className="bg-background p-8 rounded-xl border border-outline/5 hover:shadow-md transition-all duration-300 flex flex-col justify-between" delay={0.45} y={30}>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                  <Award size={20} />
                </div>
                <h3 className="font-headline-sm text-lg text-primary font-bold">Esperienza "A Quattro Mani"</h3>
                <p className="font-body-md text-sm text-secondary leading-relaxed">
                  Per eventi che richiedono un tocco di stupore in più, propongo serate speciali in sinergia con illustri colleghi. Un intreccio di filosofie culinarie per creare qualcosa di inaspettato.
                </p>
              </div>
              <div className="pt-6 text-[11px] font-mono uppercase text-primary/75 tracking-wider font-semibold">03 / Sinergia d'autore</div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Expect on your plate Section */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-lg border border-outline/5">
                  <img 
                    src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800" 
                    alt="Piatto marchigiano rivisitato" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="aspect-square rounded-xl bg-primary/5 flex flex-col justify-center p-6 border border-primary/10">
                  <span className="font-mono text-xs text-primary font-bold tracking-widest uppercase block mb-2">PRODUTTORI</span>
                  <p className="text-xs text-secondary leading-relaxed">Matelica, colline Maceratesi, Monti Sibillini. Solo eccellenze autoctone autentiche.</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-xl bg-[#f4ece7]/50 flex flex-col justify-center p-6 border border-[#e8e1dc]">
                  <span className="font-mono text-xs text-primary font-bold tracking-widest uppercase block mb-2">TRADIZIONE</span>
                  <p className="text-xs text-secondary leading-relaxed">Unione profonda della memoria locale selvaggia e delle tecniche moderne di cottura.</p>
                </div>
                <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-lg border border-outline/5">
                  <img 
                    src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800" 
                    alt="Esperienza culinaria" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <span className="font-label-lg text-secondary uppercase tracking-widest text-xs font-semibold block">Nel Gusto della Storia</span>
            <h2 className="font-headline-lg text-headline-sm text-primary font-bold">Cosa puoi aspettarti nel piatto</h2>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              Ogni mio evento è un ponte tra la memoria del gusto "antico" e la curiosità dell'innovazione. Dai tortellini ripieni di caccia allo zafferano di Matelica alle carni da allevatori etici, fino alle verdure dell'orto che raccontano la biodiversità marchigiana: il mio stile è fatto di sapori autentici, nitidi e profondi.
            </p>
            <div className="pt-4 border-t border-outline/10 space-y-3">
              <div className="flex items-center gap-2.5">
                <Check size={16} className="text-primary shrink-0" />
                <span className="text-sm font-label-md text-secondary">Zafferano di Matelica e Tartufo marchigiano</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check size={16} className="text-primary shrink-0" />
                <span className="text-sm font-label-md text-secondary">Cacciagione e allevamenti allo stato brado</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check size={16} className="text-primary shrink-0" />
                <span className="text-sm font-label-md text-secondary">Erbe selvatiche e microortaggi collinari</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic CTA Banner Section */}
      <section className="bg-primary text-surface py-20 text-center relative overflow-hidden px-margin-mobile">
        <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none scale-150 transform translate-x-12 translate-y-12">
          <Calendar size={400} />
        </div>
        <div className="max-w-2xl mx-auto space-y-6 relative z-10">
          <h2 className="font-headline-lg text-2xl md:text-3xl font-bold italic leading-tight text-white">
            Vuoi trasformare un’occasione in un’esperienza gastronomica indimenticabile?
          </h2>
          <p className="font-body-md text-sm text-surface/80 max-w-lg mx-auto">
            Non serve una struttura complessa. Serve una visione condivisa.
          </p>
          <div className="pt-6">
            <button
              type="button"
              onClick={onNavigateToContact}
              className="bg-white text-primary hover:bg-[#f4ece7] transition-all duration-300 font-label-md text-label-md font-bold px-10 py-4 rounded-full shadow-lg inline-flex items-center gap-2 active:scale-95 cursor-pointer pointer-events-auto"
            >
              <span>Raccontami il tuo evento</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
