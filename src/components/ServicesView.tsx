import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, UtensilsCrossed, Briefcase, Award, Sparkles, Check, Flame, MessageSquare, GlassWater } from 'lucide-react';

// Resolve generated image URLs dynamically
const ristorazioneAutoreImage = new URL('../assets/images/ristorazione_autore_1780126804076.png', import.meta.url).href;
const chefDomicilioImage = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1200";

// Existing beautiful image URLs for fallback/additional items
const consultingImage = "https://images.unsplash.com/photo-1574484284002-982da33611f7?auto=format&fit=crop&q=80&w=1200";
const ambassadorImage = "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=1200";

interface ServicesViewProps {
  onBackToHome: () => void;
  onNavigateToContact: () => void;
}

export default function ServicesView({ onBackToHome, onNavigateToContact }: ServicesViewProps) {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background min-h-screen text-on-background pb-24 mt-20">
      {/* Scrollable Editorial breadcrumb banner */}
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
            I MIEI SERVIZI — CHEF &amp; CONSULENTE
          </div>
          <button
            onClick={onNavigateToContact}
            className="bg-primary hover:bg-primary/95 text-surface px-5 py-1.5 rounded-full text-xs font-label-md transition-all duration-300"
          >
            Invia Richiesta
          </button>
        </div>
      </div>

      {/* Services Overview Introductory Hero - Fully Immersive & High-impact */}
      <header className="relative min-h-[50vh] flex items-center justify-center overflow-hidden mb-16">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Servizi gastronomici d'autore" 
            className="w-full h-full object-cover object-center scale-102 filter brightness-[0.55] contrast-[1.05]" 
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1800"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/75"></div>
        </div>
        
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop text-center max-w-4xl mx-auto space-y-4 pt-12 pb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-label-sm text-xs tracking-wider uppercase backdrop-blur-md shadow-sm">
            <Sparkles size={12} className="text-[#eebf6d]" />
            <span>ECCELLENZE GASTRONOMICHE</span>
          </div>
          <h1 className="font-headline-xl text-4xl md:text-6xl text-[#fff8f4] font-bold tracking-tight leading-tight drop-shadow-md">
            I Miei Servizi
          </h1>
          <p className="font-body-lg text-[#e8e1dc] max-w-2xl mx-auto leading-relaxed drop-shadow-sm font-medium">
            Il mio lavoro si fonda sulla valorizzazione della materia prima e sulla creazione di esperienze gastronomiche autentiche. Come chef, offro una serie di servizi pensati per portare la qualità del territorio direttamente sulla tavola, sia in contesti privati che professionali.
          </p>
        </div>
      </header>

      {/* Services detailed presentation with generous margins and large pictures */}
      <div className="space-y-32 py-16">

        {/* Service 1: Consulenza per Nuove Aperture e Start-up */}
        <section className="bg-surface-container py-24 border-y border-outline/10">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Copy Column first on desktop for alternation */}
              <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                    <span className="text-sm font-semibold">1</span>
                  </div>
                  <span className="font-label-lg text-secondary uppercase tracking-widest text-xs">CONSULENZA STRATEGICA</span>
                </div>
                
                <h2 className="font-headline-lg text-headline-sm text-primary">
                  1. Consulenza per Nuove Aperture e Start-up
                </h2>
                
                <p className="font-body-lg text-on-surface-variant leading-relaxed">
                  Metto a disposizione la mia esperienza decennale nel settore per supportare chi desidera aprire o rilanciare un'attività di gastronomia o ristorazione. Ti assisto in ogni fase decisionale per creare una struttura resiliente e competitiva.
                </p>

                {/* Characterizing Points List */}
                <div className="space-y-4 pt-4 border-t border-outline/10">
                  <div className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1 shrink-0">
                      <Check size={12} className="stroke-[3px]" />
                    </div>
                    <div>
                      <h3 className="font-label-md text-sm text-primary font-semibold mb-1">Concept e Identità:</h3>
                      <p className="text-secondary text-sm">Definizione della filosofia culinaria e del posizionamento sul mercato.</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1 shrink-0">
                      <Check size={12} className="stroke-[3px]" />
                    </div>
                    <div>
                      <h3 className="font-label-md text-sm text-primary font-semibold mb-1">Strutturazione Cucina:</h3>
                      <p className="text-secondary text-sm">Organizzazione operativa, dalla selezione dei fornitori (privilegiando il km zero e i piccoli produttori) alla progettazione del layout funzionale della cucina.</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1 shrink-0">
                      <Check size={12} className="stroke-[3px]" />
                    </div>
                    <div>
                      <h3 className="font-label-md text-sm text-primary font-semibold mb-1">Formazione dello Staff:</h3>
                      <p className="text-secondary text-sm">Trasferimento di know-how tecnico, gestione dei processi di lavoro ed efficiente standardizzazione della qualità dei piatti.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Column second on desktop */}
              <div className="lg:col-span-6 lg:order-2">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-outline/10">
                  <img 
                    src={consultingImage} 
                    alt="Consulenza Culinaria Professionale" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service 2: Chef Ambassador e Consulenza Territoriale */}
        <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-6 relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-outline/10 group">
                <img 
                  src={ambassadorImage} 
                  alt="Chef Ambassador Michela Domizi" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-4 bg-primary text-surface p-4 rounded-xl shadow-lg max-w-xs hidden sm:block">
                <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest mb-1">
                  <Award size={16} />
                  <span>Università del Territorio</span>
                </div>
                <p className="text-surface/85 text-xs leading-normal">
                  Promuovere la biodiversità e le radici storiche marchigiane nel mondo.
                </p>
              </div>
            </div>

            {/* Copy Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                  <span className="text-sm font-semibold">2</span>
                </div>
                <span className="font-label-lg text-secondary uppercase tracking-widest text-xs">VALORIZZAZIONE ENOGASTRONOMICA</span>
              </div>
              
              <h2 className="font-headline-lg text-headline-sm text-primary">
                2. Chef Ambassador e Consulenza Territoriale
              </h2>
              
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                Nel mio ruolo di Chef Ambassador per l'Università del Territorio Marchigiano, offro consulenza d'alto livello progettata per la valorizzazione del ricchissimo patrimonio enogastronomico regionale.
              </p>

              {/* Characterizing Points List */}
              <div className="space-y-4 pt-4 border-t border-outline/10">
                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1 shrink-0">
                    <Check size={12} className="stroke-[3px]" />
                  </div>
                  <div>
                    <h3 className="font-label-md text-sm text-primary font-semibold mb-1">Progetti di promozione:</h3>
                    <p className="text-secondary text-sm">Collaborazioni per eventi istituzionali, workshop tematici e attività divulgative legate alla ricca biodiversità marchigiana.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1 shrink-0">
                    <Check size={12} className="stroke-[3px]" />
                  </div>
                  <div>
                    <h3 className="font-label-md text-sm text-primary font-semibold mb-1">Ricerca e Sviluppo:</h3>
                    <p className="text-secondary text-sm">Studio approfondito e recupero di ricette e preparazioni tradizionali, riadattandole in chiave contemporanea senza perderne la genuinità originaria.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service 3: Eventi Privati e "A Quattro Mani" */}
        <section className="bg-surface-container py-24 border-y border-outline/10">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Copy Column first on desktop for alternation */}
              <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                    <span className="text-sm font-semibold">3</span>
                  </div>
                  <span className="font-label-lg text-secondary uppercase tracking-widest text-xs">EVENTI SARTORIALI ED ESCLUSIVI</span>
                </div>
                
                <h2 className="font-headline-lg text-headline-sm text-primary">
                  3. Eventi Privati e "A Quattro Mani"
                </h2>
                
                <p className="font-body-lg text-on-surface-variant leading-relaxed">
                  Porto la mia professionalità ed esperienza in contesti esclusivi, mantenendo intatto l'approccio sartoriale ed etico che caratterizza ogni singola mia preparazione gastronomica.
                </p>

                {/* Characterizing Points List */}
                <div className="space-y-4 pt-4 border-t border-outline/10">
                  <div className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1 shrink-0">
                      <Check size={12} className="stroke-[3px]" />
                    </div>
                    <div>
                      <h3 className="font-label-md text-sm text-primary font-semibold mb-1">Cene Private (Chef a Domicilio):</h3>
                      <p className="text-secondary text-sm">Servizio d'eccellenza e cura ospitante a domicilio o presso location selezionate, con percorsi enogastronomici altamente personalizzati e legati alla stagionalità locale.</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1 shrink-0">
                      <Check size={12} className="stroke-[3px]" />
                    </div>
                    <div>
                      <h3 className="font-label-md text-sm text-primary font-semibold mb-1">Collaborazioni (Cene "a quattro mani"):</h3>
                      <p className="text-secondary text-sm">Eventi speciali e stimolanti serate a tema create in sinergia con illustri colleghi del panorama gastronomico, fondendo filosofie culinarie per offrire stupore ed emozioni uniche ad ogni ospite.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Column second on desktop */}
              <div className="lg:col-span-6 lg:order-2">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-outline/10 group">
                  <img 
                    src={chefDomicilioImage} 
                    alt="Chef a Domicilio ed Eventi Privati" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Dynamic Services Footer Call To Action Card with Spacious Negative Padding */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pt-8">
        <div className="bg-primary text-surface rounded-2xl p-8 md:p-16 text-center space-y-6 shadow-xl relative overflow-hidden">
          {/* Subtle decorative background lights */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/95 to-primary-container/20 pointer-events-none"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h3 className="font-headline-lg text-surface">Progetta la Tua Esperienza su Misura</h3>
            <p className="font-body-lg text-surface/90">
              Che tu voglia ospitare una cena a domicilio indimenticabile o che tu stia gettando le basi per un nuovo concept culinario d'impatto, parliamone.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <button 
                onClick={onNavigateToContact}
                className="bg-surface text-primary font-label-md px-8 py-3.5 rounded-full hover:bg-surface-container transition-all active:scale-95 shadow-md inline-flex items-center gap-2"
              >
                <span>Richiedi un Preventivo</span>
                <ArrowRight size={18} />
              </button>
              <button 
                onClick={onBackToHome}
                className="border border-surface/30 hover:border-surface/80 text-surface font-label-md px-8 py-3.5 rounded-full transition-all active:scale-95 bg-primary-container/10"
              >
                Torna alla Home Page
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
