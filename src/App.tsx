/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Menu, X, UtensilsCrossed, Briefcase, NotebookPen, Check, MapPin, Mail, ArrowRight, ArrowLeft, Quote, BookOpen, Clock, Share2, Facebook, Linkedin, Instagram } from 'lucide-react';
import BiographyView from './components/BiographyView';
import ServicesView from './components/ServicesView';
import EventsView from './components/EventsView';
import ConversionForm from './components/ConversionForm';
import StickyFooter from './components/StickyFooter';

export default function App() {
  const [activeView, setActiveView] = useState<'home' | 'bio' | 'services' | 'eventi'>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isCookieBannerOpen, setIsCookieBannerOpen] = useState(true);
  const [shareInfo, setShareInfo] = useState({ url: 'https://ais-pre-uxt5g2uxclhimjtes7ujes-205869432441.europe-west2.run.app', text: 'Scopri la cucina rurale contemporanea di Chef Michela Domizi nelle Marche!' });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShareInfo({
        url: window.location.href,
        text: encodeURIComponent("Scopri la cucina rurale contemporanea di Chef Michela Domizi nelle Marche!")
      });
    }
  }, []);

  // Scroll handler for shadow on header
  useEffect(() => {
    const handleScrollEvent = () => {
      if (window.scrollY > 50) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };
    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  // Intersection observer for fade-in animations on scroll
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, [activeView]);

  // Smooth scroll handler adjusting for the fixed header
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (targetId === '#') {
      setActiveView('home');
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    if (activeView !== 'home') {
      setActiveView('home');
      setTimeout(() => {
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 100);
      return;
    }

    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    const headerOffset = 80;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  const navigateToContactSection = () => {
    setIsMobileMenuOpen(false);
    if (activeView !== 'home') {
      setActiveView('home');
      setTimeout(() => {
        const targetElement = document.querySelector('#contact');
        if (!targetElement) return;
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 150);
    } else {
      const targetElement = document.querySelector('#contact');
      if (!targetElement) return;
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };


  return (
    <div className="bg-background text-on-background font-body-md overflow-x-hidden min-h-screen">
      {/* TopNavBar */}
      <nav id="nav-bar" className={`fixed top-0 w-full z-50 bg-primary/95 backdrop-blur-md transition-shadow duration-300 border-b border-surface/10 ${hasShadow ? 'shadow-lg' : ''}`}>
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20 max-w-container-max mx-auto">
          <a className="font-headline-sm text-headline-sm text-surface hover:text-surface-variant transition-colors" href="#" onClick={(e) => handleScroll(e, '#')}>
            Chef Michela Domizi
          </a>
          <div className="hidden md:flex gap-10 items-center">
            <button 
              className={`font-label-md text-label-md hover:text-surface-variant transition-colors duration-300 bg-transparent border-0 p-0 text-left cursor-pointer focus:outline-none ${activeView === 'bio' ? 'text-surface font-semibold border-b border-surface' : 'text-surface/80'}`} 
              onClick={() => {
                setActiveView('bio');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Biografia
            </button>
            <button 
              className={`font-label-md text-label-md hover:text-surface-variant transition-colors duration-300 bg-transparent border-0 p-0 text-left cursor-pointer focus:outline-none ${activeView === 'services' ? 'text-surface font-semibold border-b border-surface' : 'text-surface/80'}`} 
              onClick={() => {
                setActiveView('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Servizi
            </button>
            <button 
              className={`font-label-md text-label-md hover:text-surface-variant transition-colors duration-300 bg-transparent border-0 p-0 text-left cursor-pointer focus:outline-none ${activeView === 'eventi' ? 'text-surface font-semibold border-b border-surface' : 'text-surface/80'}`} 
              onClick={() => {
                setActiveView('eventi');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Eventi
            </button>
            <a 
              className="font-label-md text-label-md text-surface/80 hover:text-surface-variant transition-colors duration-300" 
              href="#contact" 
              onClick={(e) => handleScroll(e, '#contact')}
            >
              Contatti
            </a>
            <a 
              className="bg-surface text-primary px-6 py-2 rounded-full font-label-md text-label-md hover:bg-surface/90 transition-all active:scale-95 shadow-sm font-semibold" 
              href="#contact" 
              onClick={(e) => handleScroll(e, '#contact')}
            >
              Consulenza
            </a>
          </div>
          <button 
            type="button" 
            className="md:hidden text-surface focus:outline-none" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-primary border-b border-surface/10 px-margin-mobile py-6 flex flex-col gap-5 shadow-lg">
            <button 
              className={`font-label-md text-label-md hover:text-surface transition-colors duration-300 bg-transparent border-0 p-0 text-left cursor-pointer focus:outline-none ${activeView === 'bio' ? 'text-surface font-semibold font-bold' : 'text-surface/80'}`} 
              onClick={() => {
                setActiveView('bio');
                setIsMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Biografia
            </button>
            <button 
              className={`font-label-md text-label-md hover:text-surface transition-colors duration-300 bg-transparent border-0 p-0 text-left cursor-pointer focus:outline-none ${activeView === 'services' ? 'text-surface font-semibold font-bold' : 'text-surface/80'}`} 
              onClick={() => {
                setActiveView('services');
                setIsMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Servizi
            </button>
            <button 
              className={`font-label-md text-label-md hover:text-surface transition-colors duration-300 bg-transparent border-0 p-0 text-left cursor-pointer focus:outline-none ${activeView === 'eventi' ? 'text-surface font-semibold font-bold' : 'text-surface/80'}`} 
              onClick={() => {
                setActiveView('eventi');
                setIsMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Eventi
            </button>
            <a 
              className="font-label-md text-label-md text-surface/80 hover:text-surface transition-colors duration-300" 
              href="#contact" 
              onClick={(e) => handleScroll(e, '#contact')}
            >
              Contatti
            </a>
            <a 
              className="bg-surface text-primary px-6 py-2 rounded-full font-label-md text-label-md hover:bg-surface/90 transition-all text-center active:scale-95 font-semibold" 
              href="#contact" 
              onClick={(e) => handleScroll(e, '#contact')}
            >
              Consulenza
            </a>
          </div>
        )}
      </nav>

      <main>
        {activeView === 'home' ? (
          <>
            {/* Hero Section */}
        <section id="hero" className="relative min-h-[95vh] md:min-h-[90vh] flex items-center pt-36 pb-20 md:pt-44 md:pb-24 bg-gradient-to-br from-background via-[#fffbfa] to-[#fff6f1] overflow-hidden">
          {/* Subtle elegant background elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#fcf5ef]/60 pointer-events-none rounded-l-[120px] hidden lg:block z-0"></div>
          
          <div className="relative z-10 px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Text Information Column */}
              <div className="lg:col-span-6 space-y-6 md:space-y-8 text-left z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary font-label-md text-xs tracking-wider uppercase font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#eebf6d] animate-pulse"></span>
                  <span>Chef a Domicilio &amp; Consulente Culinaria</span>
                </div>
                
                <h1 className="font-headline-xl text-5xl sm:text-6xl lg:text-7xl text-primary leading-[1.05] tracking-tight">
                  <span className="block font-medium drop-shadow-sm font-headline-lg">Michela Domizi</span>
                  <span className="block text-2xl sm:text-3xl lg:text-4xl italic font-normal text-[#8b5e3c] mt-2 font-headline-md font-serif">
                    Chef a Domicilio &amp; Consulente Culinaria
                  </span>
                </h1>
                
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
                  Elevare le tradizioni delle Marche attraverso un'esperienza artigianale d'autore e una contemporanea visione culinaria. Un viaggio gastronomico che porta l'acquolina in bocca e il fine-dining direttamente a casa tua o nella tua cucina professionale.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button 
                    className="bg-primary text-surface px-8 py-4 double-rounded rounded-full font-label-md text-label-md hover:bg-primary/95 transition-all duration-300 text-center font-bold active:scale-95 shadow-sm" 
                    onClick={() => {
                      setActiveView('services');
                      window.scrollTo({ top: 0, behavior: 'instant' });
                    }}
                  >
                    Scopri i Servizi
                  </button>
                  <a 
                    className="border border-[#76786f]/30 bg-white/40 backdrop-blur-sm text-primary px-8 py-4 rounded-full font-label-md text-label-md hover:bg-surface-container hover:border-primary/50 transition-all duration-300 text-center font-semibold" 
                    href="#contact"
                    onClick={(e) => handleScroll(e, '#contact')}
                  >
                    Prenota un'Esperienza
                  </a>
                </div>
              </div>

              {/* Spectacular Visual Column */}
              <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[500px] aspect-[4/5] md:aspect-[1/1] lg:aspect-[4/5]">
                  {/* Outer glow aura */}
                  <div className="absolute -inset-4 bg-gradient-to-tr from-[#eebf6d]/10 to-[#8b5e3c]/5 rounded-[40px] blur-2xl opacity-75 z-0"></div>
                  
                  {/* Decorative warm abstract framing card */}
                  <div className="absolute -top-3 -left-3 w-content h-content font-serif italic text-sm text-[#eebf6d]/60 select-none hidden sm:block">
                    ★ Eccellenze Marchigiane
                  </div>

                  {/* Main Spectacular Food Photo Frame with Ambient Video */}
                  <div className="relative w-full h-full rounded-[30px] overflow-hidden shadow-2xl border border-white/40 bg-[#f4ece7] z-10 group">
                    <iframe
                      className="w-full h-full object-cover scale-110"
                      src="https://www.youtube.com/embed/_eMHMj-asaA?autoplay=1&mute=0&loop=1&playlist=_eMHMj-asaA&controls=1&showinfo=0&rel=0&modestbranding=1"
                      title="Chef Michela Domizi Video"
                      allow="autoplay; encrypted-media"
                    ></iframe>
                    <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
                    
                    {/* Floating pill */}
                    <div className="absolute top-4 left-4 bg-black/45 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white font-label-md text-xs tracking-wider uppercase flex items-center gap-1.5 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-[#eebf6d]"></span>
                      <span>Materia Prima Pura</span>
                    </div>

                    {/* Exquisite Plate Overlay */}
                    <div className="absolute bottom-4 right-4 max-w-[240px] bg-[#fff8f4]/95 backdrop-blur-md p-4 rounded-2xl border border-white/40 shadow-xl hidden sm:block animate-fade-in">
                      <p className="font-headline-sm text-base text-primary font-semibold leading-tight mb-1">In collaborazione con</p>
                      <p className="font-body-md text-xs text-secondary leading-normal font-medium">
                        Molinos del Duero (Spagna)
                      </p>
                    </div>
                  </div>

                  {/* Secondary Overlapping Craft Detail Image */}
                  <div className="absolute -bottom-6 -left-10 w-44 h-44 rounded-2xl overflow-hidden shadow-xl border-4 border-[#fff8f4] hidden md:block z-20 group">
                    <img 
                      alt="Preparazione pasta fatta a mano" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=600"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-2 text-center">
                      <p className="font-label-md text-[10px] text-white uppercase tracking-wider font-semibold font-bold">Gesto &amp; Tradizione</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative reveal">
              <div className="aspect-[4/5] bg-surface-container rounded-xl overflow-hidden shadow-lg">
                <img 
                  id="about-portrait"
                  alt="Ritratto di Michela Domizi" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe37KZnkGyDxWoK26y2Qh1JZr9bAx2_kKThn8nL8bWYYKKjYChlnGqweyQjxxMzZNtPJ9oD267mlb7urt0V-Lkp45vvzYPb8pcVILSUpgiG_UN9gTZ2X4paEQGUKjlVcB8wf4aqxbxhLnXqsip8y8YkrY-FG0_pa7M3fyN5GDGep66IaIRWflG8IjYav1xusFGL5QXIpSZHluS8JFevxWx37iVD8Hm7I3JMG4s9t2GH8dwXh5Se38mvLkLcrdrMIj1OSCMdLmGMFPx"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary-container/10 backdrop-blur-xl rounded-full flex items-center justify-center p-8 hidden md:flex border border-white/20">
                <p className="text-center font-label-md text-label-md text-primary leading-tight">Ispirato alla Tradizione Marchigiana</p>
              </div>
            </div>
            <div className="reveal">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-8">La Filosofia del Gusto</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">
                Nata e cresciuta tra le colline della regione Marche, il mio percorso culinario è iniziato nelle cucine della mia infanzia, dove il rispetto per l'ingrediente è stata la prima lezione appresa.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">
                Come chef a domicilio e consulente professionista, unisco la genuinità rurale alle tecniche contemporanee. Il mio approccio è minimalista e mirato: ogni piatto è l'espressione curata di stagione, territorio e maestria artigianale.
              </p>
              <div className="mb-8">
                <button 
                  onClick={() => {
                    setActiveView('bio');
                    window.scrollTo({ top: 0, behavior: 'instant' });
                  }}
                  className="font-label-md text-label-md bg-surface border border-outline text-primary px-6 py-3 rounded-full hover:bg-primary hover:text-surface hover:border-transparent transition-all duration-300 inline-flex items-center gap-2"
                >
                  Leggi la mia storia completa <ArrowRight size={16} />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-8 border-t border-outline/10 pt-8">
                <div>
                  <span className="font-headline-sm text-headline-sm text-primary block mb-1">15+</span>
                  <span className="font-label-md text-label-md text-secondary">Anni di Esperienza</span>
                </div>
                <div>
                  <span className="font-headline-sm text-headline-sm text-primary block mb-1">Marche</span>
                  <span className="font-label-md text-label-md text-secondary">Legame con il Territorio</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image Interlude */}
        <section id="interlude" className="reveal">
          <div className="h-[60vh] w-full relative">
            <img 
              id="interlude-food-image"
              alt="Piatto Artigianale" 
              className="w-full h-full object-cover filter brightness-[0.9] contrast-[1.02]" 
              src="https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&q=80&w=1800"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center max-w-3xl mx-auto mb-20 reveal">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Servizi Culinari Esclusivi</h2>
              <p className="font-body-lg text-body-lg text-secondary">Soluzioni su misura per clienti esigenti e professionisti del settore che desiderano affinare il proprio racconto gastronomico.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-background p-10 rounded-xl hover:shadow-xl transition-all duration-500 reveal group">
                <div className="w-12 h-12 bg-primary-container/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                  <UtensilsCrossed size={22} className="text-primary group-hover:text-surface transition-colors" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Esperienze di Chef Privato</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8 font-body-md">Viaggi gastronomici esclusivi a domicilio, da cene intime a celebrazioni su scala ridotta, incentrati sulla stagionalità.</p>
                <ul className="space-y-3 font-label-md text-label-md text-secondary">
                  <li className="flex items-center gap-2">
                    <Check size={18} className="text-primary" /> Creazione Menu Personalizzati
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={18} className="text-primary" /> Abbinamento Vini Selezionati
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={18} className="text-primary" /> Gestione Completa della Cucina
                  </li>
                </ul>
              </div>
              {/* Service 2 */}
              <div className="bg-primary text-surface p-10 rounded-xl shadow-2xl scale-105 z-10 reveal group">
                <div className="w-12 h-12 bg-surface/20 rounded-full flex items-center justify-center mb-8">
                  <Briefcase size={22} className="text-surface" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-surface mb-4">Consulenza Culinaria</h3>
                <p className="font-body-md text-body-md text-surface/80 mb-8 font-body-md">Sviluppo strategico dei menu e ottimizzazione dei processi operativi per ristoranti e attività di ristorazione.</p>
                <ul className="space-y-3 font-label-md text-label-md text-surface/90">
                  <li className="flex items-center gap-2">
                    <Check size={18} className="text-surface" /> Ottimizzazione del Flusso di Lavoro
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={18} className="text-surface" /> Workshop di Formazione del Personale
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={18} className="text-surface" /> Valorizzazione dell'Identità Regionale
                  </li>
                </ul>
              </div>
              {/* Service 3 */}
              <div className="bg-background p-10 rounded-xl hover:shadow-xl transition-all duration-500 reveal group">
                <div className="w-12 h-12 bg-primary-container/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                  <NotebookPen size={22} className="text-primary group-hover:text-surface transition-colors" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Creazione Menu su Misura</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8 font-body-md">Sviluppo di ricette su misura per brand, pubblicazioni ed eventi privati con un focus su ingredienti artigianali.</p>
                <ul className="space-y-3 font-label-md text-label-md text-secondary">
                  <li className="flex items-center gap-2">
                    <Check size={18} className="text-primary" /> Standardizzazione delle Ricette
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={18} className="text-primary" /> Guide all'Approvvigionamento Stagionale
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={18} className="text-primary" /> Supporto per Food Styling
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Supporting Visuals Section (Bento Style) */}
        <section id="bento-gallery" className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px] md:h-[600px]">
            <div className="md:col-span-2 md:row-span-2 overflow-hidden rounded-xl reveal">
              <img 
                id="gallery-image-1"
                alt="Supporto Culinario" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuANeIy77AFOCzh8pRR8u9wPrJxOBPxew3AEF8ZewTVfsTCyWwVlB6704mu6BtPrdn_ewt3N4Z53oBzew8Ame7f9-TwLoAIOj3mDK8xkMaRdU6aBvVvyO6LqjnPurAqIeM2pk5f3_ywquyqZqEQS7LxQyot4lzI_gqqHa58R3_7tZ9DiP2edN20x7QVcENVIpVkRB3LOt3iAQzrQLrsRypwyV1GHcNxu-3LfPWb5ab8Ro_3KKYXYqPDoyeeG9l8YwTuTXsVE4Bonoo_q"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:col-span-2 overflow-hidden rounded-xl reveal">
              <img 
                id="gallery-image-2"
                alt="Pasta Fatta a Mano" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAORt5fup2uAqqbSUIZ1Hfd7hvlxqAlWAODxHnl3sT2-_eziGyLn78I8iFAYytBZN9vFgYF1ljJrGlBPF8lZzRzGSuwndwVg1xiuChlWOGWEYJTQ3qA4u1K0ihCRA26ci1RxWN-mS90N1B50lFXGV60dQNejtOJrhWWvw-m4Pl0kuePympR4_riRFWWFtrz_NaWA-jfawx8mUI_xuIGBB5czF-26jqxCTfIw6KhysalpSUcf-4YhE611WS70O_joCAT749hgKhX2_yW"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="overflow-hidden rounded-xl reveal">
              <img 
                id="gallery-image-3"
                alt="Ingredienti Freschi" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_bkDH4IqIJOlqjyVbQ_N81W7zDSLonb7e4idM2DkVBP2Fr02ah6S7J9FP2rK0VMFV0T1AMwSfpqfjdlnTuU_7UFt0h-h1bi4V7UuWM7ZDg0CkLqVmpc2b-cxAb7byXHr7tNz3HbL22SQCSiyL_iVCdNpIuZ2Or3MA_COXmU-OeOBFVyH4NH_NGNHElxxjT01Lg6z7blStSvILqFGkgdPd-StYtAtPubeWthfvfEet04xz_e9WpoUqHTsbtWVTRQajzlUEDUIeXEDR"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="overflow-hidden rounded-xl reveal">
              <img 
                id="gallery-image-4"
                alt="Ambiente Cucina" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrug30wPRvQ7urNiCDGQjKniS6LIn06scHAguKUdNLvu3gCG6-JxNBAee7Vl33XFBrlCCUTE3YmxDSZJb9Q97_-RgPjRmwVs7XPstoQRg7Mhfnii_fDV0GRX-nj-EyXstHxZqXOLNVqPJkBggs66njBVqa_WeM-hzUlWpyYXtgM3j0FbqFNtUryV3voGeHlOXbuISV-ByoJVSzzfnaJbgfgigDoCYl1jqtLnfpDgKWCkxHLO6ZTVMBIMTWZZhEMFeR_hpZVxHKX4kw"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section id="testimonial" className="py-32 bg-primary text-surface overflow-hidden relative">
          <div className="absolute top-0 left-0 opacity-5 pointer-events-none">
            <span className="text-[300px] font-headline-lg leading-none">"</span>
          </div>
          <div className="max-w-4xl mx-auto px-margin-mobile text-center relative z-10 reveal">
            <h2 className="font-headline-md text-headline-md italic mb-12 leading-relaxed">
              "L'approccio di Michela non riguarda semplicemente la cucina; riguarda lo storytelling. Cattura la vera essenza del nostro territorio e la traduce in un linguaggio che è allo tempo stesso antico e straordinariamente fresco."
            </h2>
            <div className="flex flex-col items-center">
              <div className="w-16 h-px bg-on-tertiary-container/30 mb-6"></div>
              <p className="font-label-md text-label-md tracking-widest uppercase">Gourmet Quarterly Review</p>
            </div>
          </div>
        </section>

              {/* Contact Section */}
        <section id="contact" className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div id="modulo-contatti" className="scroll-mt-24"></div>
          <div className="grid md:grid-cols-2 gap-20">
            <div className="reveal">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Creiamo Insieme</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
                Che tu stia cercando uno chef privato per un evento esclusivo o una consulenza per la tua attività culinaria, sarò felice di valutare come portare la tua visione in tavola.
              </p>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary w-6 h-6 mt-0.5" />
                  <div>
                    <p className="font-label-md text-label-md text-primary">Sede</p>
                    <p className="font-body-md text-body-md text-secondary">Macerata, Marche, Italia</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-primary w-6 h-6 mt-0.5" />
                  <div>
                    <p className="font-label-md text-label-md text-primary">Richieste</p>
                    <p className="font-body-md text-body-md text-secondary">ciao@micheladomizi.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal">
              <ConversionForm />
            </div>
          </div>
        </section>
      </>
    ) : activeView === 'bio' ? (
      <BiographyView 
        onBackToHome={() => {
          setActiveView('home');
          window.scrollTo({ top: 0, behavior: 'instant' });
        }} 
        onNavigateToContact={() => {
          setActiveView('home');
          setTimeout(() => {
            const element = document.getElementById('contact');
            if (element) {
              const offset = 80;
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.scrollY - offset;
              window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
          }, 100);
        }} 
      />
    ) : activeView === 'services' ? (
      <ServicesView 
        onBackToHome={() => {
          setActiveView('home');
          window.scrollTo({ top: 0, behavior: 'instant' });
        }} 
        onNavigateToContact={() => {
          setActiveView('home');
          setTimeout(() => {
            const element = document.getElementById('contact');
            if (element) {
              const offset = 80;
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.scrollY - offset;
              window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
          }, 100);
        }} 
      />
    ) : (
      <EventsView 
        onBackToHome={() => {
          setActiveView('home');
          window.scrollTo({ top: 0, behavior: 'instant' });
        }} 
        onNavigateToContact={() => {
          setActiveView('home');
          setTimeout(() => {
            const element = document.getElementById('contact');
            if (element) {
              const offset = 80;
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.scrollY - offset;
              window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
          }, 100);
        }} 
      />
    )}
      </main>

      {/* Footer */}
      <footer id="footer" className="bg-primary text-surface w-full border-t border-surface/10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
          
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-8 pb-12 border-b border-surface/10 text-left">
            
            {/* Col 1: Brand & Motto (lg:col-span-4) */}
            <div className="lg:col-span-4 space-y-6">
              <a 
                className="font-headline-md text-headline-md text-surface hover:text-surface-variant transition-colors block" 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  setActiveView('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Michela Domizi
              </a>
              <p className="font-headline-sm italic text-surface-variant text-body-lg font-light leading-relaxed">
                "Il sapore dell'entroterra marchigiano ed il rispetto della materia prima, elevati alla massima espressione contemporanea."
              </p>
              <p className="font-body-md text-sm text-surface/60 leading-relaxed">
                Un viaggio sensoriale autentico guidato dalla passione per la terra, la stagionalità e l'artigianato culinario d'eccellenza nelle Marche.
              </p>
            </div>

            {/* Col 2: Navigazione Rapida (lg:col-span-2) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="font-label-md text-sm font-semibold text-surface-variant uppercase tracking-widest border-b border-surface/10 pb-2">
                Navigazione
              </h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => {
                      setActiveView('home');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`font-label-md text-sm text-left hover:text-surface-variant transition-colors bg-transparent border-0 p-0 text-surface/80 cursor-pointer focus:outline-none ${activeView === 'home' ? 'font-semibold text-surface' : ''}`}
                  >
                    Home Page
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      setActiveView('bio');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`font-label-md text-sm text-left hover:text-surface-variant transition-colors bg-transparent border-0 p-0 text-surface/80 cursor-pointer focus:outline-none ${activeView === 'bio' ? 'font-semibold text-surface' : ''}`}
                  >
                    Biografia
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      setActiveView('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`font-label-md text-sm text-left hover:text-surface-variant transition-colors bg-transparent border-0 p-0 text-surface/80 cursor-pointer focus:outline-none ${activeView === 'services' ? 'font-semibold text-surface' : ''}`}
                  >
                    Servizi
                  </button>
                </li>
                <li>
                  <button 
                    onClick={navigateToContactSection}
                    className="font-label-md text-sm text-left hover:text-surface-variant transition-colors bg-transparent border-0 p-0 text-surface/80 cursor-pointer focus:outline-none"
                  >
                    Contatti
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: CTA sulla Consulenza (lg:col-span-3) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-label-md text-sm font-semibold text-surface-variant uppercase tracking-widest border-b border-surface/10 pb-2">
                Consulenza &amp; Eventi
              </h4>
              <p className="font-body-md text-sm text-surface/75 leading-relaxed">
                Vuoi lanciare una start-up culinaria, ridefinire il menu della tua attività o realizzare una cena privata indimenticabile?
              </p>
              <button 
                onClick={navigateToContactSection}
                className="bg-surface text-primary px-5 py-2.5 rounded-full font-label-md text-xs hover:bg-surface-variant hover:text-primary transition-all active:scale-95 shadow-sm font-bold flex items-center gap-1.5 mt-2"
              >
                Inizia ora la Consulenza &rarr;
              </button>
            </div>

            {/* Col 4: Condivisione Social delle Pagine (lg:col-span-3) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-label-md text-sm font-semibold text-surface-variant uppercase tracking-widest border-b border-surface/10 pb-2">
                Condividi il Sito
              </h4>
              <p className="font-body-md text-sm text-surface/75 leading-relaxed mb-3">
                Fai conoscere l'eccellenza culinaria rurale marchigiana ai tuoi contatti.
              </p>
              
              <div className="flex flex-col gap-2">
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareInfo.url)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-xs font-label-md text-surface/80 hover:text-surface-variant transition-colors py-1"
                >
                  <Facebook size={14} className="shrink-0" />
                  <span>Condividi su Facebook</span>
                </a>
                <a 
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareInfo.url)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-xs font-label-md text-surface/80 hover:text-surface-variant transition-colors py-1"
                >
                  <Linkedin size={14} className="shrink-0" />
                  <span>Condividi su LinkedIn</span>
                </a>
                <a 
                  href={`https://api.whatsapp.com/send?text=${shareInfo.text}%20${encodeURIComponent(shareInfo.url)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-xs font-label-md text-surface/80 hover:text-surface-variant transition-colors py-1"
                >
                  <Share2 size={14} className="shrink-0" />
                  <span>Condividi su WhatsApp</span>
                </a>
              </div>
              
              <div className="pt-4 flex gap-4 border-t border-surface/10">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-surface/80 hover:text-surface-variant transition-colors"
                  aria-label="Instagram Profile"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-surface/80 hover:text-surface-variant transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="mailto:ciao@micheladomizi.com" 
                  className="text-surface/80 hover:text-surface-variant transition-colors"
                  aria-label="Invia un'Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

          </div>

          {/* Bottom copyright barrier */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-xs text-surface/50 gap-4">
            <p>© 2026 Chef Michela Domizi. Tutti i diritti riservati. Ideato e Sviluppato nelle Marche.</p>
            <div className="flex gap-6">
              <button 
                onClick={() => setIsPrivacyModalOpen(true)}
                className="hover:text-surface transition-colors bg-transparent border-0 p-0 cursor-pointer focus:outline-none"
              >
                Informativa sulla Privacy
              </button>
              <span>|</span>
              <span>P.IVA 01234567890</span>
            </div>
          </div>

        </div>
      </footer>

      {/* Cookie Consent Banner */}
      {isCookieBannerOpen && (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:max-w-md z-40 bg-surface-container p-6 rounded-xl border border-outline/20 shadow-xl flex flex-col gap-3 transition-all duration-300">
          <div className="flex justify-between items-start">
            <span className="font-headline-sm text-sm text-primary uppercase tracking-wider block">Informativa sui Cookie</span>
            <button 
              onClick={() => setIsCookieBannerOpen(false)} 
              className="text-secondary hover:text-primary transition-colors focus:outline-none"
              aria-label="Chiudi"
            >
              <X size={18} />
            </button>
          </div>
          <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
            Questo sito utilizza solo cookie tecnici temporanei ed essenziali. Non raccogliamo dati di profilazione o tracciamento commerciale. I cookie sono attivi solo per questa sessione.
          </p>
          <div className="flex justify-end gap-3 mt-1">
            <button 
              onClick={() => setIsPrivacyModalOpen(true)}
              className="text-xs font-label-md text-secondary hover:text-primary transition-colors bg-transparent px-3 py-1.5 rounded-full"
            >
              Leggi Policy
            </button>
            <button 
              onClick={() => setIsCookieBannerOpen(false)}
              className="text-xs font-label-md bg-primary text-surface px-4 py-1.5 rounded-full hover:bg-primary/90 transition-colors"
            >
              Accetta
            </button>
          </div>
        </div>
      )}

      {/* Privacy Policy Modal */}
      {isPrivacyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-background/60 backdrop-blur-md" 
            onClick={() => setIsPrivacyModalOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-surface border border-outline/20 p-8 md:p-10 max-w-lg w-full rounded-xl shadow-2xl overflow-y-auto max-h-[85vh] z-10 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center border-b border-outline/10 pb-4 mb-6">
                <h3 className="font-headline-sm text-headline-sm text-primary">Informativa sulla Privacy</h3>
                <button 
                  onClick={() => setIsPrivacyModalOpen(false)} 
                  className="text-secondary hover:text-primary transition-colors focus:outline-none"
                  aria-label="Chiudi"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="font-body-md text-on-surface-variant text-sm space-y-4 overflow-y-auto pr-2 max-h-[50vh]">
                <p className="font-bold text-primary">1. Titolare del Trattamento</p>
                <p>Il titolare del trattamento dei dati personali è Chef Michela Domizi, con sede a Macerata, Marche, Italia (Email: ciao@micheladomizi.com).</p>
                
                <p className="font-bold text-primary">2. Tipologia di Dati Raccolti</p>
                <p>Raccogliamo esclusivamente i dati personali inseriti volontariamente da parte degli utenti nel modulo di contatto ("Creiamo Insieme"), come nome, indirizzo email ed eventuale testo del messaggio.</p>
                
                <p className="font-bold text-primary">3. Finalità del Trattamento</p>
                <p>I dati forniti verranno utilizzati unicamente per rispondere alle vostre richieste di preventivo relative alle cene a domicilio, eventi privati o per informazioni sui servizi di consulenza culinaria.</p>
                
                <p className="font-bold text-primary">4. Nessuna Profilazione o Cessione a Terzi</p>
                <p>Nessun dato raccolto viene profilato, venduto, noleggiato o ceduto a terze parti per finalità promozionali o commerciali.</p>
                
                <p className="font-bold text-primary">5. Cookie</p>
                <p>Questo sito non utilizza cookie statistici, di marketing o di profilazione pubblicitaria esterni. Gli unici cookie presenti sono strettamente tecnici ed essenziali, necessari per il corretto funzionamento, la stabilità e la sicurezza della sessione corrente di navigazione.</p>
                
                <p className="font-bold text-primary">6. I Tuoi Diritti</p>
                <p>In base al regolamento europeo GDPR, hai il diritto in qualsiasi momento di richiedere l'accesso, la rettifica, l'aggiornamento o la cancellazione definitiva dei tuoi contatti inviando un'email diretta a ciao@micheladomizi.com.</p>
              </div>
            </div>
            
            <div className="border-t border-outline/10 pt-6 mt-6 flex justify-end">
              <button 
                onClick={() => setIsPrivacyModalOpen(false)}
                className="bg-primary text-surface px-6 py-2.5 rounded-full font-label-md text-label-md hover:bg-primary/95 transition-all focus:outline-none"
              >
                Chiudi
              </button>
            </div>
          </div>
        </div>
      )}
      <StickyFooter />
    </div>
  );
}
