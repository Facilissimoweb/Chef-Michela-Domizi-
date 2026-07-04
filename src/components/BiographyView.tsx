import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, Quote, Clock, Award, BookOpen, Heart, ShieldAlert, Sparkles } from 'lucide-react';

// Resolve image URLs dynamically using Vite & ESModules standards
const tortelliniImage = "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&q=80&w=1200";
const collineImage = "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&q=80&w=1200";

interface BiographyViewProps {
  onBackToHome: () => void;
  onNavigateToContact: () => void;
}

export default function BiographyView({ onBackToHome, onNavigateToContact }: BiographyViewProps) {
  useEffect(() => {
    // Scroll to the very top upon view mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background min-h-screen text-on-background pb-24 mt-20">
      {/* Editorial Navigation breadcrumb */}
      <div className="border-b border-outline/10 bg-surface-container-lowest/50 py-4 backdrop-blur-md sticky top-20 z-30">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex items-center justify-between">
          <button 
            onClick={onBackToHome}
            className="flex items-center gap-2 group text-secondary hover:text-primary font-label-md transition-colors"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Torna alla Home</span>
          </button>
          <div className="text-secondary/60 text-xs font-mono tracking-wider hidden sm:block">
            BIOGRAFIA — CHEF MICHELA DOMIZI
          </div>
          <button
            onClick={onNavigateToContact}
            className="bg-primary/5 text-primary hover:bg-primary hover:text-surface px-5 py-1.5 rounded-full text-xs font-label-md transition-all duration-300"
          >
            Prenota Esperienza
          </button>
        </div>
      </div>

      {/* Immersive Editorial Photo Banner */}
      <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1800" 
          alt="L'anima e l'artigianalità della cucina di Michela Domizi" 
          className="w-full h-full object-cover filter brightness-[0.70] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-transparent"></div>
        <div className="absolute bottom-6 left-0 right-0 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-container/10 border border-white/20 text-white font-label-sm text-xs tracking-wider uppercase backdrop-blur-md">
            <Sparkles size={12} className="text-primary-container" />
            <span>LA MIA STORIA, LA MIA TERRA</span>
          </div>
        </div>
      </div>

      {/* Hero Header Section */}
      <header className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pt-12 md:pt-20 pb-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary font-label-sm text-xs tracking-wider uppercase">
              <Sparkles size={12} />
              <span>La Cucina come Ponte tra Territorio e Memoria</span>
            </div>
            
            <h1 className="font-headline-xl text-headline-xl text-primary leading-[1.1] tracking-tight">
              Michela Domizi
            </h1>
            <p className="font-headline-sm text-lg italic text-secondary leading-normal">
              “La ristorazione per me non è mai un punto di arrivo, ma un esercizio quotidiano di crescita.”
            </p>
            
            <div className="font-body-lg text-body-lg text-on-surface-variant space-y-6 leading-relaxed">
              <p>
                La mia storia in cucina è un viaggio che ha radici profonde nella terra marchigiana. Nata nel 1976, sono cresciuta respirando il mondo dell’accoglienza all'interno dell'attività di famiglia a Civitanova Marche. È lì che ho imparato il valore dell’ospitalità e il linguaggio autentico del cibo.
              </p>
              <p>
                Oggi, come <span className="text-primary font-medium">Chef Ambassador dell'Università del Territorio Marchigiano</span>, continuo a promuovere il valore della nostra terra. La mia visione è quella di un ritorno alle radici, a un gusto antico e autentico, che però sappia guardare al futuro con curiosità.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border border-outline/10">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe37KZnkGyDxWoK26y2Qh1JZr9bAx2_kKThn8nL8bWYYKKjYChlnGqweyQjxxMzZNtPJ9oD267mlb7urt0V-Lkp45vvzYPb8pcVILSUpgiG_UN9gTZ2X4paEQGUKjlVcB8wf4aqxbxhLnXqsip8y8YkrY-FG0_pa7M3fyN5GDGep66IaIRWflG8IjYav1xusFGL5QXIpSZHluS8JFevxWx37iVD8Hm7I3JMG4s9t2GH8dwXh5Se38mvLkLcrdrMIj1OSCMdLmGMFPx" 
                alt="Michela Domizi" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
            </div>
            
            {/* Soft badge overlay */}
            <div className="absolute -bottom-6 -left-6 bg-surface-container border border-outline/20 p-5 rounded-lg shadow-xl max-w-xs hidden sm:block">
              <p className="font-label-md text-xs tracking-widest text-primary uppercase mb-1">Nascita & Crescita</p>
              <p className="font-body-md text-sm text-secondary">
                Classe 1976, cresciuta nell'attività alberghiera di famiglia a Civitanova Marche.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Territorio & Paesaggio banner */}
      <section className="py-16 bg-surface-container-lowest border-y border-outline/10">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 order-2 md:order-1">
              <div className="aspect-[16/10] md:aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-outline/10">
                <img 
                  src={collineImage} 
                  alt="Le splendide colline marchigiane" 
                  className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="md:col-span-7 space-y-6 order-1 md:order-2">
              <h2 className="font-headline-lg text-headline-md text-primary">Un Legame Profondo con le Marche</h2>
              <p className="font-body-lg text-secondary leading-relaxed">
                Il mio cammino professionale è iniziato lontano dai fornelli, nel mondo del bar e del marketing (1993-1997), un’esperienza che mi ha dato una visione a 360 gradi dell'esperienza del cliente. Ma la cucina mi ha richiamata presto: sono una chef autodidatta, una scelta che ha plasmato il mio metodo di lavoro, basato sulla ricerca continua, sulla pratica sul campo e sull'osservazione diretta.
              </p>
              <p className="font-body-lg text-secondary leading-relaxed">
                La mia cucina è un ponte tra la tradizione e l’innovazione del gusto. Non cerco di stravolgere la materia prima, ma di elevarla, restando sempre ancorata all'autenticità dei sapori regionali marchigiani.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chronological Timeline Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-label-md text-label-md tracking-widest text-primary uppercase block mb-3">La mia evoluzione</span>
          <h2 className="font-headline-lg text-headline-lg text-primary">Le Tappe del Mio Cammino</h2>
          <div className="w-16 h-0.5 bg-primary/30 mx-auto mt-4"></div>
        </div>

        <div className="relative max-w-4xl mx-auto pl-6 md:pl-0">
          {/* Vertical axis line on desktop, offset left on mobile */}
          <div className="absolute left-0.5 md:left-1/2 top-0 bottom-0 w-0.5 bg-outline/20"></div>

          {/* Milestone 1 */}
          <div className="relative grid md:grid-cols-2 gap-8 md:gap-16 items-start mb-16">
            <div className="md:text-right md:pr-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-container/10 border border-primary/20 text-primary font-mono text-sm font-semibold mb-3">
                1976 — Le Origini
              </span>
              <h3 className="font-headline-sm text-lg text-primary font-semibold mb-2">L'inizio dell'Accoglienza</h3>
              <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                Nascere a Civitanova Marche in una famiglia di albergatori e ristoratori mi ha introdotto sin da piccolissima alla vita di cucina, alimentando un rispetto innato per le dinamiche della tavola.
              </p>
            </div>
            {/* Timeline node */}
            <div className="absolute left-[-23px] md:left-[50%] md:translate-x-[-11px] top-1.5 w-6 h-6 rounded-full bg-background border-4 border-primary flex items-center justify-center"></div>
            <div className="hidden md:block"></div>
          </div>

          {/* Milestone 2 */}
          <div className="relative grid md:grid-cols-2 gap-8 md:gap-16 items-start mb-16">
            <div className="hidden md:block"></div>
            {/* Timeline node */}
            <div className="absolute left-[-23px] md:left-[50%] md:translate-x-[-11px] top-1.5 w-6 h-6 rounded-full bg-background border-4 border-primary flex items-center justify-center"></div>
            <div className="md:pl-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-container/10 border border-primary/20 text-primary font-mono text-sm font-semibold mb-3">
                1993 - 1997
              </span>
              <h3 className="font-headline-sm text-lg text-primary font-semibold mb-2">Bar, Marketing e l'Ospitalità a 360°</h3>
              <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                Anni vissuti fuori dalla cucina, dedicati alla gestione del bar e alle dinamiche del marketing. Una fase cruciale che mi ha trasmesso una profonda comprensione del cliente e delle relazioni umane.
              </p>
            </div>
          </div>

          {/* Milestone 3 */}
          <div className="relative grid md:grid-cols-2 gap-8 md:gap-16 items-start mb-16">
            <div className="md:text-right md:pr-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-container/10 border border-primary/20 text-primary font-mono text-sm font-semibold mb-3">
                2013 — La Sella di Pitino
              </span>
              <h3 className="font-headline-sm text-lg text-primary font-semibold mb-2">Una Filosofia che Trova Casa</h3>
              <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                L'apertura della mia attività "La Sella di Pitino" rappresenta il momento in cui, come chef autodidatta guidata da pura sperimentazione quotidiana e sul campo, porto in tavola una filosofia d'ispirazione rurale e contemporanea.
              </p>
            </div>
            {/* Timeline node */}
            <div className="absolute left-[-23px] md:left-[50%] md:translate-x-[-11px] top-1.5 w-6 h-6 rounded-full bg-background border-4 border-primary flex items-center justify-center"></div>
            <div className="hidden md:block"></div>
          </div>

          {/* Milestone 4 */}
          <div className="relative grid md:grid-cols-2 gap-8 md:gap-16 items-start">
            <div className="hidden md:block"></div>
            {/* Timeline node */}
            <div className="absolute left-[-23px] md:left-[50%] md:translate-x-[-11px] top-1.5 w-6 h-6 rounded-full bg-background border-4 border-primary flex items-center justify-center"></div>
            <div className="md:pl-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-container/10 border border-primary/20 text-primary font-mono text-sm font-semibold mb-3">
                Collaborazioni Prestiogiose
              </span>
              <h3 className="font-headline-sm text-lg text-primary font-semibold mb-2">Gli Scambi e le Cene "a Quattro Mani"</h3>
              <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                Gli anni successivi sono arricchiti da incontri formidabili con illustri interpreti del gusto regionale e nazionale: Massimo Garofoli, Enrico di Andrea e lo straordinario staff del Marchese del Grillo. Esperienze collettive che hanno spinto il mio livello tecnico oltre nuovi vertici.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dish Highlight */}
      <section className="bg-surface-container py-24 border-y border-outline/10">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <p className="font-label-md text-xs tracking-widest text-primary uppercase mb-4 block lg:hidden">IL PLATTO DELLA MEMORIA</p>
              <div className="aspect-square max-w-md mx-auto xl:max-w-none rounded-xl overflow-hidden shadow-2xl border border-outline/20">
                <img 
                  src={tortelliniImage} 
                  alt="I famosi tortellini ripieni di caccia allo zafferano e tartufo nero" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            <div className="lg:col-span-7 space-y-6">
              <span className="font-label-md text-xs tracking-widest text-primary uppercase mb-2 hidden lg:block">IL PIATTO IDENTITARIO</span>
              <h3 className="font-headline-md text-headline-md text-primary leading-tight">
                I Tortellini Ripieni di Caccia, Zafferano di Matelica e Tartufo Nero.
              </h3>
              
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                “Il piatto che mi definisce sono i tortellini ripieni di caccia, mantecati allo zafferano di Matelica e tartufo nero. È la sintesi perfetta del mio stile: il rispetto per la tradizione, l'utilizzo di eccellenze territoriali e una tecnica che gioca con l'equilibrio dei sapori.”
              </p>
              
              <div className="border-t border-outline/10 pt-6 mt-8 grid sm:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-label-md text-xs tracking-wider text-primary uppercase mb-1">Caccia Locale</h4>
                  <p className="text-secondary text-sm">Richiamo ancestrale e boschivo dell'entroterra marchigiano.</p>
                </div>
                <div>
                  <h4 className="font-label-md text-xs tracking-wider text-primary uppercase mb-1">Zafferano di Matelica</h4>
                  <p className="text-secondary text-sm">L'oro delle colline matelicesi, speziato, profumato e puro.</p>
                </div>
                <div>
                  <h4 className="font-label-md text-xs tracking-wider text-primary uppercase mb-1">Tartufo Nero</h4>
                  <p className="text-secondary text-sm">Eleganti sfoglie per avvolgere di complessità la ricetta.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Ethics Box & Quotation */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary">
              <Heart size={24} className="fill-current" />
            </div>
            <h3 className="font-headline-md text-headline-md text-primary">Scelte Etiche e Biodiversità</h3>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              Il mio approccio è strettamente etico: <span className="text-primary font-medium">non utilizzo fornitori industriali</span>. Seleziono personalmente ogni ingrediente, rivolgendomi a piccoli agricoltori e produttori locali, custodi di una biodiversità che porto ogni giorno nel piatto.
            </p>
            <p className="font-body-md text-secondary leading-relaxed">
              Ogni ingrediente racconta il lavoro di mani sapienti e rispettose della terra, consentendo al sapore rurale antico di risvegliare sensazioni profonde nei commensali.
            </p>
          </div>
          
          <div className="bg-primary text-surface p-10 md:p-14 rounded-2xl relative shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-surface/10 pointer-events-none">
              <Quote size={150} className="stroke-[1px]" />
            </div>
            
            <div className="relative z-10 space-y-6">
              <p className="font-headline-sm text-xl md:text-2xl italic leading-relaxed text-surface/90">
                “Insieme al mio staff, lavoro ogni giorno per offrire ai nostri ospiti non solo un pasto, ma un’esperienza che racconti, boccone dopo boccone, l'anima più vera delle Marche.”
              </p>
              <div className="h-px bg-surface/20 w-16"></div>
              <div>
                <p className="font-label-md text-sm uppercase tracking-widest text-surface">Michela Domizi</p>
                <p className="text-xs text-surface/70 font-mono">Chef &amp; Consulente Culinaria</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic CTA */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-12">
        <div className="bg-surface-container rounded-2xl p-8 md:p-16 text-center space-y-6 border border-outline/10">
          <h3 className="font-headline-lg text-primary">Porta queste storie sulla tua Tavola</h3>
          <p className="font-body-lg text-secondary max-w-2xl mx-auto">
            Disegna insieme a me la cena privata perfetta per la tua casa o progetta un ripensamento strategico della cucina del tuo locale.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <button 
              onClick={onNavigateToContact}
              className="bg-primary text-surface font-label-md px-8 py-3.5 rounded-full hover:bg-primary/90 transition-all active:scale-95 shadow-lg shadow-primary/10 inline-flex items-center gap-2"
            >
              <span>Contattami ora</span>
              <ArrowRight size={18} />
            </button>
            <button 
              onClick={onBackToHome}
              className="border border-outline text-primary font-label-md px-8 py-3.5 rounded-full hover:bg-surface-container transition-all active:scale-95"
            >
              Torna alla Pagina Iniziale
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
