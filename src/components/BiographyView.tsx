import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, Quote, Heart, Award, UtensilsCrossed, Sparkles } from 'lucide-react';
import { useTranslation } from '../context/TranslationContext';

const tortelliniImage = "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&q=80&w=1200";
const collineImage = "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&q=80&w=1200";

interface BiographyViewProps {
  onBackToHome: () => void;
  onNavigateToContact: () => void;
}

export default function BiographyView({ onBackToHome, onNavigateToContact }: BiographyViewProps) {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="bg-[#F8F7F4] text-[#1A1A1A] min-h-screen">
      {/* Editorial View Header */}
      <div className="view-header border-b border-[#1A1A1A]/10">
        <span className="label">{t("Biografia / No. 01")}</span>
        <span className="label">{t("Michela Domizi Chef — +30 Anni di Esperienza")}</span>
      </div>

      {/* Hero Split Grid Section */}
      <section className="content-grid border-b border-[#1A1A1A]/10">
        <div className="text-panel flex flex-col justify-center">
          <p className="label mb-6">[ 01 ] LA STORIA</p>
          <h1 className="font-editorial text-5xl md:text-7xl lg:text-8xl leading-[0.85] tracking-tight uppercase mb-8">
            Michela<br/>Domizi
          </h1>
          <p className="quote text-xl md:text-2xl font-editorial italic text-[#8B5E3C] leading-relaxed mb-8">
            “La mia cucina racconta trent'anni di rispetto sacro per la materia prima, per i piccoli agricoltori e per il profumo della terra marchigiana.”
          </p>
          <div className="body-text text-[#1A1A1A]/70 text-sm md:text-base leading-relaxed space-y-6 max-w-xl">
            <p>
              Nata nel 1976 e cresciuta respirando l'autentico senso di ospitalità dell'hotel e ristorante di famiglia a Civitanova Marche, la mia vita è stata indissolubilmente legata ai gesti, ai ritmi e alla dedizione sacra della cucina tradizionale.
            </p>
            <p>
              Da oltre <span className="text-[#1A1A1A] font-semibold">+30 anni</span> coltivo un percorso straordinario come Chef e Consulente Culinaria. Essendo una Chef autodidatta, ho sviluppato una sensibilità unica e priva di dogmi, concentrandomi sulla purezza degli ingredienti e sulla riscoperta di sapori rurali autentici, elevati da tecniche moderne.
            </p>
            <p>
              Oggi, come <span className="text-[#1A1A1A] font-semibold">Chef Ambassador dell'Università del Territorio Marchigiano</span>, guido cene private esclusive e progetti di consulenza strategica per valorizzare la biodiversità e l'eccellenza culinaria regionale.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-10 pt-8 border-t border-[#1A1A1A]/10">
            <button 
              className="inline-block bg-[#1A1A1A] text-[#F8F7F4] px-8 py-4 font-mono-design text-xs uppercase tracking-[0.12em] hover:bg-[#8B5E3C] transition-colors duration-300"
              onClick={onNavigateToContact}
            >
              Prenota Esperienza Privata
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe37KZnkGyDxWoK26y2Qh1JZr9bAx2_kKThn8nL8bWYYKKjYChlnGqweyQjxxMzZNtPJ9oD267mlb7urt0V-Lkp45vvzYPb8pcVILSUpgiG_UN9gTZ2X4paEQGUKjlVcB8wf4aqxbxhLnXqsip8y8YkrY-FG0_pa7M3fyN5GDGep66IaIRWflG8IjYav1xusFGL5QXIpSZHluS8JFevxWx37iVD8Hm7I3JMG4s9t2GH8dwXh5Se38mvLkLcrdrMIj1OSCMdLmGMFPx" 
                alt="Chef Michela Domizi" 
                className="w-full h-full object-cover filter grayscale contrast-[1.05]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-[#1A1A1A] text-[#F8F7F4] px-4 py-2 font-mono-design text-[10px] tracking-widest uppercase flex items-center gap-1.5 shadow-lg">
                <span className="w-2 h-2 bg-[#8B5E3C] animate-pulse"></span>
                <span>AUTODIDATTA D'AUTORE</span>
              </div>
              <div className="absolute bottom-4 right-4 max-w-[240px] bg-[#F8F7F4] p-4 border border-[#1A1A1A] shadow-lg hidden sm:block">
                <p className="font-editorial text-base text-[#1A1A1A] font-semibold leading-tight mb-1">Passione Viscerale</p>
                <p className="font-sans-design text-xs text-[#1A1A1A]/70 leading-normal">
                  "In cucina non esistono segreti, ma solo gesti precisi, pazienza infinita e amore per la propria terra."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar">
        <div className="stat-cell">
          <span className="stat-val">+30 Anni</span>
          <p className="label text-[#F8F7F4]/60">Esperienza Gastronomica Dedicata</p>
        </div>
        <div className="stat-cell">
          <span className="stat-val">Autenticità</span>
          <p className="label text-[#F8F7F4]/60">Materie Prime Etiche Senza Compromessi</p>
        </div>
        <div className="stat-cell">
          <span className="stat-val">100% Rurale</span>
          <p className="label text-[#F8F7F4]/60">Tradizioni Elevate in Chiave Contemporanea</p>
        </div>
      </section>

      {/* Territorio & Paesaggio Section */}
      <section className="py-24 px-6 lg:px-12 border-b border-[#1A1A1A]/10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-[#F8F7F4] border-[1.5px] border-[#1A1A1A] overflow-hidden">
              <img 
                src={collineImage} 
                alt="Colline Marchigiane" 
                className="w-full h-full object-cover filter grayscale contrast-[1.05]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-44 h-44 bg-[#F8F7F4] border-[1.5px] border-[#1A1A1A] flex items-center justify-center p-6 hidden lg:flex">
              <p className="text-center font-mono-design text-[10px] uppercase tracking-wider text-[#1A1A1A] leading-tight">
                Zafferano, Erbe Spontanee, Tartufo Pregiato
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <p className="font-mono-design text-[0.7rem] uppercase tracking-[0.15em] text-[#1A1A1A]/60">[ 02 ] LE RADICI</p>
            <h2 className="font-editorial text-4xl md:text-5xl uppercase tracking-tight text-[#1A1A1A]">Il Legame Profondo con le Marche</h2>
            <p className="font-sans-design text-sm md:text-base text-[#1A1A1A]/70 leading-relaxed">
              Il mio legame con il territorio non si esprime solo nella scelta degli ingredienti, ma in un patto di rispetto reciproco con chi lavora la terra. Rifiuto categoricamente la distribuzione industriale per affidarmi esclusivamente a piccoli allevatori, contadini di fiducia e raccoglitori locali.
            </p>
            <p className="font-sans-design text-sm md:text-base text-[#1A1A1A]/70 leading-relaxed">
              Dalla costa adriatica di Civitanova Marche fino all'entroterra selvaggio delle colline maceratesi, ogni ricetta è concepita come un viaggio geografico e storico, capace di evocare memorie sopite attraverso la purezza del gusto rurale.
            </p>
          </div>
        </div>
      </section>

      {/* Elegant Editorial Timeline */}
      <section className="py-24 border-b border-[#1A1A1A]/10 max-w-5xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <p className="font-mono-design text-[0.7rem] uppercase tracking-[0.15em] text-[#1A1A1A]/60">[ 03 ] IL CAMMINO</p>
          <h2 className="font-editorial text-4xl uppercase text-[#1A1A1A]">Tappe Fondamentali</h2>
          <div className="w-16 h-[1.5px] bg-[#8B5E3C] mx-auto mt-2"></div>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <span className="timeline-year">1976</span>
            <div>
              <h3 className="font-editorial text-lg uppercase font-semibold text-[#1A1A1A] mb-2">Le Origini a Civitanova Marche</h3>
              <p className="font-sans-design text-sm text-[#1A1A1A]/70 leading-relaxed">
                Nasco e cresco all'interno dell'attività alberghiera e di ristorazione di famiglia. Qui apprendo i primi segreti del servizio, l'odore dei sughi domenicali e il valore inestimabile dell'accoglienza calorosa.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <span className="timeline-year">1993-97</span>
            <div>
              <h3 className="font-editorial text-lg uppercase font-semibold text-[#1A1A1A] mb-2">Bar, Marketing e Orizzonti</h3>
              <p className="font-sans-design text-sm text-[#1A1A1A]/70 leading-relaxed">
                Anni trascorsi esplorando la gestione operativa del bar e la comunicazione. Un tassello fondamentale che mi insegna a comprendere il cliente, a curare l'estetica del servizio e l'empatia dell'esperienza complessiva.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <span className="timeline-year">2013</span>
            <div>
              <h3 className="font-editorial text-lg uppercase font-semibold text-[#1A1A1A] mb-2">La Sella di Pitino</h3>
              <p className="font-sans-design text-sm text-[#1A1A1A]/70 leading-relaxed">
                Fondo "La Sella di Pitino", un'esperienza culinaria magica dove affino la mia personale filosofia culinaria rurale contemporanea, sperimentando quotidianamente sul campo l'incontro tra fuoco, terra e memoria marchigiana.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <span className="timeline-year">OGGI</span>
            <div>
              <h3 className="font-editorial text-lg uppercase font-semibold text-[#1A1A1A] mb-2">Chef Ambassador & Consulente</h3>
              <p className="font-sans-design text-sm text-[#1A1A1A]/70 leading-relaxed">
                Attiva su tutto il territorio come Chef a domicilio di lusso, docente e consulente. Promuovo la cucina etica marchigiana attraverso cene esclusive, eventi ed incontri di formazione strategica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dish Section */}
      <section className="py-24 border-b border-[#1A1A1A]/10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="font-mono-design text-[0.7rem] uppercase tracking-[0.15em] text-[#1A1A1A]/60">[ 04 ] PIATTO IDENTITARIO</p>
            <h2 className="font-editorial text-4xl md:text-5xl uppercase tracking-tight text-[#1A1A1A]">Tortellini di Caccia e Tartufo</h2>
            <p className="font-sans-design text-sm md:text-base text-[#1A1A1A]/70 leading-relaxed italic text-[#8B5E3C]">
              “Un piatto che è una dichiarazione d'amore: la caccia boschiva sposa l'oro giallo dello Zafferano di Matelica e le lamelle nobili di Tartufo Nero.”
            </p>
            <p className="font-sans-design text-sm md:text-base text-[#1A1A1A]/70 leading-relaxed">
              I tortellini di caccia rappresentano la sintesi perfetta del mio stile: il rispetto meticoloso per le vecchie ricette e l'eccellenza aromatica locale. La sfoglia è tirata rigorosamente al mattarello come facevano le nonne marchigiane, mentre la farcitura è robusta, profumata e ancestrale.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#1A1A1A]/10">
              <div>
                <span className="font-mono-design text-[10px] uppercase tracking-wider text-[#1A1A1A]/60 block mb-1">Sfoglia</span>
                <span className="text-sm font-semibold">Tirata a Mano</span>
              </div>
              <div>
                <span className="font-mono-design text-[10px] uppercase tracking-wider text-[#1A1A1A]/60 block mb-1">Aroma</span>
                <span className="text-sm font-semibold">Matelica</span>
              </div>
              <div>
                <span className="font-mono-design text-[10px] uppercase tracking-wider text-[#1A1A1A]/60 block mb-1">Prestigio</span>
                <span className="text-sm font-semibold">Tartufo Nero</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-[#F8F7F4] border-[1.5px] border-[#1A1A1A] overflow-hidden">
              <img 
                src={tortelliniImage} 
                alt="Tortellini ripieni di caccia" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Interlude */}
      <section className="py-24 bg-[#1A1A1A] text-[#F8F7F4] text-center px-6 lg:px-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <Quote size={40} className="text-[#8B5E3C] mx-auto opacity-80" />
          <p className="font-editorial text-2xl md:text-4xl italic leading-relaxed text-[#F8F7F4]/90">
            “Seleziono personalmente ogni ingrediente per garantire che il sapore rurale antico risvegli sensazioni profonde, rendendo ogni pasto un’esperienza d’arte indimenticabile.”
          </p>
          <div className="h-[1.5px] bg-[#8B5E3C] w-16 mx-auto"></div>
          <div>
            <p className="font-mono-design text-xs uppercase tracking-widest">Michela Domizi</p>
            <p className="font-mono-design text-[10px] uppercase text-[#F8F7F4]/60 tracking-widest mt-1">Chef Ambassador delle Marche</p>
          </div>
        </div>
      </section>

      {/* Dynamic Call to Action */}
      <section className="py-24 px-6 lg:px-12 max-w-5xl mx-auto text-center space-y-8">
        <h2 className="font-editorial text-3xl md:text-5xl uppercase text-[#1A1A1A]">Sperimenta la Vera Cucina Marchigiana</h2>
        <p className="font-sans-design text-[#1A1A1A]/70 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          Disegna con me un evento personalizzato o una cena a domicilio di lusso, o sviluppa una consulenza gastronomica unica per il tuo brand.
        </p>
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <button 
            onClick={onNavigateToContact}
            className="bg-[#1A1A1A] text-[#F8F7F4] px-8 py-4 font-mono-design text-xs uppercase tracking-[0.12em] hover:bg-[#8B5E3C] transition-colors duration-300"
          >
            Invia un Messaggio
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
