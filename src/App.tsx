/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Menu, X, UtensilsCrossed, Briefcase, NotebookPen, Check, MapPin, Mail, ArrowRight, ArrowLeft, Quote, BookOpen, Clock, Share2, Facebook, Linkedin, Instagram, Languages, ChevronDown } from 'lucide-react';
import BiographyView from './components/BiographyView';
import ServicesView from './components/ServicesView';
import EventsView from './components/EventsView';
import ConversionForm from './components/ConversionForm';
import StickyFooter from './components/StickyFooter';
import GeminiChat from './components/GeminiChat';
import { useTranslation } from './context/TranslationContext';

const languages = [
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'zh-CN', name: '简体中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
];

export default function App() {
  const { currentLanguage, changeLanguage, t, isTranslating, translationError } = useTranslation();
  const [activeView, setActiveView] = useState<'home' | 'bio' | 'services' | 'eventi'>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const handleTranslate = (lang: string) => {
    if (lang === 'it') {
      changeLanguage('it');
      return;
    }
    if (typeof window !== 'undefined') {
      const currentUrl = window.location.href;
      const translateUrl = `https://translate.google.com/translate?sl=it&tl=${lang}&u=${encodeURIComponent(currentUrl)}`;
      window.open(translateUrl, '_blank');
    }
  };

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: 'Cena Privata',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isCookiePolicyModalOpen, setIsCookiePolicyModalOpen] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset form after a small delay
    setTimeout(() => {
      setFormState({
        name: '',
        email: '',
        service: 'Cena Privata',
        message: ''
      });
    }, 1000);
  };

  return (
    <div className="bg-[#F8F7F4] text-[#1A1A1A] font-body-md overflow-x-clip min-h-screen">
      <div className="flex flex-col min-h-screen">
        
        {/* Classic Horizontal Sticky Navigation Bar */}
        <nav id="header-nav" className="sticky top-0 w-full bg-[#F8F7F4]/95 backdrop-blur-md border-b-[1.5px] border-[#1A1A1A] px-6 lg:px-12 py-5 flex justify-between items-center z-50">
          <div 
            className="font-editorial text-lg lg:text-2xl font-semibold tracking-tight uppercase cursor-pointer text-[#1A1A1A] hover:text-[#8B5E3C] transition-colors" 
            onClick={() => { setActiveView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            CHEF MICHELA DOMIZI
          </div>

          {/* Desktop Navigation & Translation Container */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              <li>
                <button 
                  className={`font-mono-design text-[0.7rem] uppercase tracking-[0.15em] border-none bg-transparent p-0 cursor-pointer transition-colors duration-200 text-left ${activeView === 'home' ? 'text-[#1A1A1A] font-bold border-b border-[#1A1A1A]' : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'}`}
                  onClick={() => { setActiveView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                >
                  {t("Home Page")}
                </button>
              </li>
              <li>
                <button 
                  className={`font-mono-design text-[0.7rem] uppercase tracking-[0.15em] border-none bg-transparent p-0 cursor-pointer transition-colors duration-200 text-left ${activeView === 'bio' ? 'text-[#1A1A1A] font-bold border-b border-[#1A1A1A]' : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'}`}
                  onClick={() => { setActiveView('bio'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                >
                  {t("Biografia")}
                </button>
              </li>
              <li>
                <button 
                  className={`font-mono-design text-[0.7rem] uppercase tracking-[0.15em] border-none bg-transparent p-0 cursor-pointer transition-colors duration-200 text-left ${activeView === 'services' ? 'text-[#1A1A1A] font-bold border-b border-[#1A1A1A]' : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'}`}
                  onClick={() => { setActiveView('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                >
                  {t("Servizi")}
                </button>
              </li>
              <li>
                <button 
                  className={`font-mono-design text-[0.7rem] uppercase tracking-[0.15em] border-none bg-transparent p-0 cursor-pointer transition-colors duration-200 text-left ${activeView === 'eventi' ? 'text-[#1A1A1A] font-bold border-b border-[#1A1A1A]' : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'}`}
                  onClick={() => { setActiveView('eventi'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                >
                  {t("Eventi")}
                </button>
              </li>
              <li>
                <button 
                  className="font-mono-design text-[0.7rem] uppercase tracking-[0.15em] border-none bg-transparent p-0 cursor-pointer text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors duration-200 text-left"
                  onClick={navigateToContactSection}
                >
                  {t("Contatti")}
                </button>
              </li>
            </ul>

            {/* Divider */}
            <div className="h-5 w-[1.5px] bg-[#1A1A1A]/20"></div>
            
            {/* Translation Widget (Desktop) */}
            <div className="relative" id="translation-widget-desktop">
              <button 
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-1.5 bg-[#1A1A1A]/5 hover:bg-[#1A1A1A]/10 px-3 py-1.5 rounded-full border border-[#1A1A1A]/10 text-xs text-[#1A1A1A] font-mono-design uppercase tracking-wider transition-all cursor-pointer"
                title={t("Traduci")}
              >
                <Languages size={14} className={`text-[#1A1A1A] ${isTranslating ? 'animate-spin text-[#8B5E3C]' : ''}`} />
                <span>{isTranslating ? `${t("Traduci")}...` : t("Traduci")}</span>
                <ChevronDown size={11} className={`transition-transform duration-200 ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isLangDropdownOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setIsLangDropdownOpen(false)}></div>
                  <div className="absolute right-0 mt-2 w-48 bg-[#F8F7F4] border-[1.5px] border-[#1A1A1A] rounded-none shadow-[4px_4px_0px_0px_#1A1A1A] py-1.5 z-50 max-h-80 overflow-y-auto">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          handleTranslate(lang.code);
                          setIsLangDropdownOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-2 text-left text-xs font-mono-design uppercase tracking-wider hover:bg-[#1A1A1A]/5 transition-colors cursor-pointer ${currentLanguage === lang.code ? 'bg-[#1A1A1A]/10 font-bold' : 'text-[#1A1A1A]'}`}
                      >
                        <span className="text-lg leading-none">{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Mobile Right Container */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Translation Widget (Mobile) */}
            <div className="relative" id="translation-widget-mobile">
              <button 
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className={`flex items-center justify-center bg-[#1A1A1A]/5 hover:bg-[#1A1A1A]/10 w-9 h-9 rounded-full border border-[#1A1A1A]/10 text-[#1A1A1A] transition-all cursor-pointer ${isTranslating ? 'animate-pulse border-[#8B5E3C]' : ''}`}
                title={t("Traduci")}
              >
                <Languages size={16} className={isTranslating ? 'animate-spin text-[#8B5E3C]' : ''} />
              </button>
              {isLangDropdownOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setIsLangDropdownOpen(false)}></div>
                  <div className="absolute right-0 mt-2 w-44 bg-[#F8F7F4] border-[1.5px] border-[#1A1A1A] rounded-none shadow-[3px_3px_0px_0px_#1A1A1A] py-1 z-50 max-h-60 overflow-y-auto">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          handleTranslate(lang.code);
                          setIsLangDropdownOpen(false);
                        }}
                        className={`w-full flex items-center gap-2.5 px-3 py-2 text-left text-[11px] font-mono-design uppercase tracking-wider hover:bg-[#1A1A1A]/5 transition-colors cursor-pointer ${currentLanguage === lang.code ? 'bg-[#1A1A1A]/10 font-bold' : 'text-[#1A1A1A]'}`}
                      >
                        <span className="text-base leading-none">{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Mobile Menu Toggle Button */}
            <button 
              className="text-[#1A1A1A] p-1 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed top-[67px] left-0 w-full bg-[#F8F7F4] border-b border-[#1A1A1A] px-6 py-6 flex flex-col gap-4 shadow-xl z-50">
            <button 
              className={`font-mono-design text-[0.7rem] uppercase tracking-[0.15em] border-none bg-transparent p-0 cursor-pointer text-left ${activeView === 'home' ? 'text-[#1A1A1A] font-semibold' : 'text-[#1A1A1A]/60'}`}
              onClick={() => { setActiveView('home'); setIsMobileMenuOpen(false); }}
            >
              {t("Home Page")}
            </button>
            <button 
              className={`font-mono-design text-[0.7rem] uppercase tracking-[0.15em] border-none bg-transparent p-0 cursor-pointer text-left ${activeView === 'bio' ? 'text-[#1A1A1A] font-semibold' : 'text-[#1A1A1A]/60'}`}
              onClick={() => { setActiveView('bio'); setIsMobileMenuOpen(false); }}
            >
              {t("Biografia")}
            </button>
            <button 
              className={`font-mono-design text-[0.7rem] uppercase tracking-[0.15em] border-none bg-transparent p-0 cursor-pointer text-left ${activeView === 'services' ? 'text-[#1A1A1A] font-semibold' : 'text-[#1A1A1A]/60'}`}
              onClick={() => { setActiveView('services'); setIsMobileMenuOpen(false); }}
            >
              {t("Servizi")}
            </button>
            <button 
              className={`font-mono-design text-[0.7rem] uppercase tracking-[0.15em] border-none bg-transparent p-0 cursor-pointer text-left ${activeView === 'eventi' ? 'text-[#1A1A1A] font-semibold' : 'text-[#1A1A1A]/60'}`}
              onClick={() => { setActiveView('eventi'); setIsMobileMenuOpen(false); }}
            >
              {t("Eventi")}
            </button>
            <button 
              className="font-mono-design text-[0.7rem] uppercase tracking-[0.15em] border-none bg-transparent p-0 cursor-pointer text-left text-[#1A1A1A]/60"
              onClick={() => { navigateToContactSection(); setIsMobileMenuOpen(false); }}
            >
              {t("Contatti")}
            </button>

            {/* Translation block in mobile drawer */}
            <div className="mt-4 pt-4 border-t border-[#1A1A1A]/10 flex flex-col gap-2">
              <span className="font-mono-design text-[10px] uppercase tracking-wider text-[#1A1A1A]/50 flex items-center gap-1.5">
                <Languages size={12} className={isTranslating ? 'animate-spin text-[#8B5E3C]' : ''} /> {t("Traduci")} / GEMINI AI
              </span>
              <div className="grid grid-cols-2 gap-2 mt-1">
                {languages.map((lang) => (
                  <button 
                    key={lang.code}
                    onClick={() => { handleTranslate(lang.code); setIsMobileMenuOpen(false); }} 
                    className={`flex items-center gap-2 font-mono-design text-[10px] uppercase tracking-wider border px-2.5 py-1.5 rounded-md cursor-pointer justify-start ${currentLanguage === lang.code ? 'bg-[#1A1A1A] border-[#1A1A1A] text-[#F8F7F4]' : 'bg-[#1A1A1A]/5 border-[#1A1A1A]/15 text-[#1A1A1A] hover:bg-[#1A1A1A]/10'}`}
                  >
                    <span className="text-base leading-none">{lang.flag}</span>
                    <span className="truncate">{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Main Content Pane */}
        <main className="flex-1 min-w-0 flex flex-col">
          {activeView === 'home' ? (
            <>
              {/* Header inside scrollable pane */}
              <div className="view-header">
                <span className="label">Home Discoveries / No. 00</span>
                <span className="label">Chef Ambassador - Territorio Marchigiano</span>
              </div>

              {/* Spectacular split content grid */}
              <section className="content-grid border-b border-[#1A1A1A]/10">
                <div className="text-panel flex flex-col justify-center">
                  <p className="label mb-6">[ 00 ] BENVENUTI</p>
                  <h1 className="font-editorial text-5xl md:text-7xl lg:text-8xl leading-[0.85] tracking-tight uppercase mb-8">
                    <span className="italic normal-case font-editorial block text-[#8B5E3C] tracking-wide mb-3" style={{ fontSize: "49px" }}>Chef</span> Michela<br/>Domizi
                  </h1>
                  <p className="quote text-xl md:text-2xl font-editorial italic text-[#8B5E3C] leading-relaxed mb-8">
                    “La ristorazione per me non è mai un punto di arrivo, ma un esercizio quotidiano di crescita.”
                  </p>
                  <div className="body-text text-[#1A1A1A]/70 text-sm md:text-base leading-relaxed space-y-4 max-w-xl">
                    <p>
                      Elevare le tradizioni delle Marche attraverso un'esperienza artigianale d'autore e una contemporanea visione culinaria. Un viaggio gastronomico d'eccellenza che porta l'essenza pura del territorio e il fine-dining direttamente a casa tua o nella tua cucina professionale.
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-[#1A1A1A]/10">
                    <button 
                      className="inline-block bg-[#1A1A1A] text-[#F8F7F4] px-8 py-4 font-mono-design text-xs uppercase tracking-[0.12em] hover:bg-[#8B5E3C] transition-colors duration-300"
                      onClick={() => { setActiveView('services'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                    >
                      Scopri i Servizi
                    </button>
                    <a 
                      className="inline-block border-[1.5px] border-[#1A1A1A] text-[#1A1A1A] px-8 py-4 font-mono-design text-xs uppercase tracking-[0.12em] hover:bg-[#1A1A1A] hover:text-[#F8F7F4] transition-all duration-300"
                      href="#contact"
                      onClick={(e) => handleScroll(e, '#contact')}
                    >
                      Prenota un'Esperienza
                    </a>
                  </div>
                </div>

                <div className="media-panel flex items-center justify-center p-8 bg-[#1A1A1A]/5 border-l border-[#1A1A1A]/10">
                  <div className="w-full max-w-[500px] aspect-[4/5] relative">
                    {/* Main Spectacular Video Frame with Ambient Video */}
                    <div className="relative w-full h-full border border-[#1A1A1A] bg-[#f4ece7] overflow-hidden">
                      <video 
                        id="hero-bg-video"
                        className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.02]" 
                        src="https://assets.mixkit.co/videos/preview/mixkit-cooking-in-a-professional-kitchen-40011-large.mp4"
                        poster="./assets/img/anteprima-video.jpg"
                        controls
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                      
                      {/* Floating pill */}
                      <div className="absolute top-4 left-4 bg-[#1A1A1A] text-[#F8F7F4] px-4 py-2 font-mono-design text-[10px] tracking-widest uppercase flex items-center gap-1.5 shadow-lg">
                        <span className="w-2 h-2 bg-[#8B5E3C] animate-pulse"></span>
                        <span>MATERIA PRIMA PURA</span>
                      </div>

                      {/* Exquisite Plate Overlay */}
                      <div className="absolute bottom-4 right-4 max-w-[240px] bg-[#F8F7F4] p-4 border border-[#1A1A1A] shadow-lg hidden sm:block">
                        <p className="font-editorial text-base text-[#1A1A1A] font-semibold leading-tight mb-1">Passione Artigianale</p>
                        <p className="font-sans-design text-xs text-[#1A1A1A]/70 leading-normal">
                          Ravioli fatti a mano ripieni di ricotta biologica locale e zafferano selvatico.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Stats Bar */}
              <section className="stats-bar">
                <div className="stat-cell">
                  <span className="stat-val">Tortellini</span>
                  <p className="label text-[#F8F7F4]/60">Piatto Identitario: Caccia, Zafferano e Tartufo</p>
                </div>
                <div className="stat-cell">
                  <span className="stat-val">Etico</span>
                  <p className="label text-[#F8F7F4]/60">Biodiversità e fornitori locali</p>
                </div>
                <div className="stat-cell">
                  <span className="stat-val">Rurale</span>
                  <p className="label text-[#F8F7F4]/60">Ispirazione rurale e contemporanea</p>
                </div>
              </section>

              {/* About Section */}
              <section id="about" className="py-24 px-6 lg:px-12 border-b border-[#1A1A1A]/10 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="relative reveal">
                    <div className="aspect-[4/5] bg-[#F8F7F4] border-[1.5px] border-[#1A1A1A] overflow-hidden">
                      <img 
                        id="about-portrait"
                        alt="Ritratto di Michela Domizi" 
                        className="w-full h-full object-cover filter grayscale contrast-105" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe37KZnkGyDxWoK26y2Qh1JZr9bAx2_kKThn8nL8bWYYKKjYChlnGqweyQjxxMzZNtPJ9oD267mlb7urt0V-Lkp45vvzYPb8pcVILSUpgiG_UN9gTZ2X4paEQGUKjlVcB8wf4aqxbxhLnXqsip8y8YkrY-FG0_pa7M3fyN5GDGep66IaIRWflG8IjYav1xusFGL5QXIpSZHluS8JFevxWx37iVD8Hm7I3JMG4s9t2GH8dwXh5Se38mvLkLcrdrMIj1OSCMdLmGMFPx"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-44 h-44 bg-[#F8F7F4] border-[1.5px] border-[#1A1A1A] flex items-center justify-center p-6 hidden lg:flex">
                      <p className="text-center font-mono-design text-[10px] uppercase tracking-wider text-[#1A1A1A] leading-tight">
                        Ispirato alla Tradizione Marchigiana
                      </p>
                    </div>
                  </div>
                  <div className="reveal space-y-6">
                    <p className="font-mono-design text-[0.7rem] uppercase tracking-[0.15em] text-[#1A1A1A]/60">[ 01 ] FILOSOFIA</p>
                    <h2 className="font-editorial text-4xl md:text-5xl uppercase tracking-tight text-[#1A1A1A]">La Filosofia del Gusto</h2>
                    <p className="font-sans-design text-sm md:text-base text-[#1A1A1A]/70 leading-relaxed">
                      Nata e cresciuta tra le colline della regione Marche, il mio percorso culinario è iniziato nelle cucine della mia infanzia, dove il rispetto per l'ingrediente è stata la prima lezione appresa.
                    </p>
                    <p className="font-sans-design text-sm md:text-base text-[#1A1A1A]/70 leading-relaxed">
                      Come chef a domicilio e consulente professionista, unisco la genuinità rurale alle tecniche contemporanee. Il mio approccio è minimalista e mirato: ogni piatto è l'espressione curata di stagione, territorio e maestria artigianale.
                    </p>
                    <div className="pt-4">
                      <button 
                        onClick={() => {
                          setActiveView('bio');
                          window.scrollTo({ top: 0, behavior: 'instant' });
                        }}
                        className="font-mono-design text-xs uppercase tracking-[0.12em] border-[1.5px] border-[#1A1A1A] text-[#1A1A1A] px-6 py-3 hover:bg-[#1A1A1A] hover:text-[#F8F7F4] transition-all duration-300 inline-flex items-center gap-2"
                      >
                        Leggi la mia storia completa <ArrowRight size={14} />
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-8 border-t border-[#1A1A1A]/10 pt-8 mt-8">
                      <div>
                        <span className="font-editorial text-3xl text-[#1A1A1A] block mb-1">15+</span>
                        <span className="font-mono-design text-[10px] uppercase tracking-wider text-[#1A1A1A]/60">Anni di Esperienza</span>
                      </div>
                      <div>
                        <span className="font-editorial text-3xl text-[#1A1A1A] block mb-1">Marche</span>
                        <span className="font-mono-design text-[10px] uppercase tracking-wider text-[#1A1A1A]/60">Legame con il Territorio</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Featured Image Interlude */}
              <section id="interlude" className="reveal border-b border-[#1A1A1A]/10">
                <div className="h-[50vh] w-full relative">
                  <img 
                    id="interlude-food-image"
                    alt="Piatto Artigianale" 
                    className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.02]" 
                    src="https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&q=80&w=1800"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </section>

              {/* Services Section */}
              <section id="services" className="py-24 border-b border-[#1A1A1A]/10 max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16 reveal space-y-4">
                  <p className="font-mono-design text-[0.7rem] uppercase tracking-[0.15em] text-[#1A1A1A]/60">[ 02 ] SERVIZI ESCLUSIVI</p>
                  <h2 className="font-editorial text-4xl md:text-5xl uppercase text-[#1A1A1A]">Esperienze Gastronomiche</h2>
                  <p className="font-sans-design text-sm md:text-base text-[#1A1A1A]/70 leading-relaxed">
                    Soluzioni su misura per clienti esigenti e professionisti del settore che desiderano affinare il proprio racconto gastronomico.
                  </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full justify-items-center">
                  {/* Service 1 */}
                  <div className="bg-[#F8F7F4] border-[1.5px] border-[#1A1A1A] p-6 sm:p-8 reveal flex flex-col justify-between w-full max-w-md md:max-w-none mx-auto text-center md:text-left">
                    <div>
                      <div className="w-12 h-12 bg-[#1A1A1A]/5 border border-[#1A1A1A] flex items-center justify-center mb-6 mx-auto md:mx-0">
                        <UtensilsCrossed size={20} className="text-[#1A1A1A]" />
                      </div>
                      <h3 className="font-editorial text-xl uppercase font-semibold mb-3">Chef Privato</h3>
                      <p className="font-sans-design text-sm text-[#1A1A1A]/70 mb-6 leading-relaxed">
                        Viaggi gastronomici esclusivi a domicilio, da cene intime a celebrazioni speciali, incentrati sulla stagionalità.
                      </p>
                    </div>
                    <ul className="space-y-2 border-t border-[#1A1A1A]/10 pt-4 font-mono-design text-[10px] uppercase tracking-wider text-[#1A1A1A]/70 flex flex-col items-center md:items-start w-full">
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-[#8B5E3C]" /> Menu Personalizzati
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-[#8B5E3C]" /> Abbinamento Vini
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-[#8B5E3C]" /> Gestione Completa
                      </li>
                    </ul>
                  </div>
                  {/* Service 2 */}
                  <div className="bg-[#1A1A1A] text-[#F8F7F4] p-6 sm:p-8 border-[1.5px] border-[#1A1A1A] reveal flex flex-col justify-between w-full max-w-md md:max-w-none mx-auto text-center md:text-left">
                    <div>
                      <div className="w-12 h-12 bg-[#F8F7F4]/10 border border-[#F8F7F4]/20 flex items-center justify-center mb-6 mx-auto md:mx-0">
                        <Briefcase size={20} className="text-[#F8F7F4]" />
                      </div>
                      <h3 className="font-editorial text-xl uppercase font-semibold mb-3 text-[#F8F7F4]">Consulenza Food</h3>
                      <p className="font-sans-design text-sm text-[#F8F7F4]/80 mb-6 leading-relaxed">
                        Sviluppo strategico dei menu e ottimizzazione dei processi operativi per ristoranti e nuove attività culinarie.
                      </p>
                    </div>
                    <ul className="space-y-2 border-t border-[#F8F7F4]/10 pt-4 font-mono-design text-[10px] uppercase tracking-wider text-[#F8F7F4]/70 flex flex-col items-center md:items-start w-full">
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-[#8B5E3C]" /> Flusso di Lavoro
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-[#8B5E3C]" /> Training Personale
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-[#8B5E3C]" /> Identità Marchigiana
                      </li>
                    </ul>
                  </div>
                  {/* Service 3 */}
                  <div className="bg-[#F8F7F4] border-[1.5px] border-[#1A1A1A] p-6 sm:p-8 reveal flex flex-col justify-between w-full max-w-md md:max-w-none mx-auto text-center md:text-left">
                    <div>
                      <div className="w-12 h-12 bg-[#1A1A1A]/5 border border-[#1A1A1A] flex items-center justify-center mb-6 mx-auto md:mx-0">
                        <NotebookPen size={20} className="text-[#1A1A1A]" />
                      </div>
                      <h3 className="font-editorial text-xl uppercase font-semibold mb-3">Menu su Misura</h3>
                      <p className="font-sans-design text-sm text-[#1A1A1A]/70 mb-6 leading-relaxed">
                        Sviluppo di ricette esclusive per brand, eventi privati e food styling incentrato su ingredienti d'eccellenza.
                      </p>
                    </div>
                    <ul className="space-y-2 border-t border-[#1A1A1A]/10 pt-4 font-mono-design text-[10px] uppercase tracking-wider text-[#1A1A1A]/70 flex flex-col items-center md:items-start w-full">
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-[#8B5E3C]" /> Standardizzazione Ricette
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-[#8B5E3C]" /> Approvvigionamento Locali
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-[#8B5E3C]" /> Supporto Culinario
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Supporting Visuals Section (Bento Style) */}
              <section id="bento-gallery" className="py-24 max-w-7xl mx-auto px-6 lg:px-12 border-b border-[#1A1A1A]/10">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-[1200px] lg:h-[500px]">
                  <div className="lg:col-span-2 lg:row-span-2 overflow-hidden border border-[#1A1A1A] reveal">
                    <img 
                      id="gallery-image-1"
                      alt="Supporto Culinario" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-[750ms] filter grayscale contrast-105" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuANeIy77AFOCzh8pRR8u9wPrJxOBPxew3AEF8ZewTVfsTCyWwVlB6704mu6BtPrdn_ewt3N4Z53oBzew8Ame7f9-TwLoAIOj3mDK8xkMaRdU6aBvVvyO6LqjnPurAqIeM2pk5f3_ywquyqZqEQS7LxQyot4lzI_gqqHa58R3_7tZ9DiP2edN20x7QVcENVIpVkRB3LOt3iAQzrQLrsRypwyV1GHcNxu-3LfPWb5ab8Ro_3KKYXYqPDoyeeG9l8YwTuTXsVE4Bonoo_q"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="lg:col-span-2 overflow-hidden border border-[#1A1A1A] reveal">
                    <img 
                      id="gallery-image-2"
                      alt="Pasta Fatta a Mano" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-[750ms]" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAORt5fup2uAqqbSUIZ1Hfd7hvlxqAlWAODxHnl3sT2-_eziGyLn78I8iFAYytBZN9vFgYF1ljJrGlBPF8lZzRzGSuwndwVg1xiuChlWOGWEYJTQ3qA4u1K0ihCRA26ci1RxWN-mS90N1B50lFXGV60dQNejtOJrhWWvw-m4Pl0kuePympR4_riRFWWFtrz_NaWA-jfawx8mUI_xuIGBB5czF-26jqxCTfIw6KhysalpSUcf-4YhE611WS70O_joCAT749hgKhX2_yW"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="overflow-hidden border border-[#1A1A1A] reveal">
                    <img 
                      id="gallery-image-3"
                      alt="Ingredienti Freschi" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-[750ms]" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_bkDH4IqIJOlqjyVbQ_N81W7zDSLonb7e4idM2DkVBP2Fr02ah6S7J9FP2rK0VMFV0T1AMwSfpqfjdlnTuU_7UFt0h-h1bi4V7UuWM7ZDg0CkLqVmpc2b-cxAb7byXHr7tNz3HbL22SQCSiyL_iVCdNpIuZ2Or3MA_COXmU-OeOBFVyH4NH_NGNHElxxjT01Lg6z7blStSvILqFGkgdPd-StYtAtPubeWthfvfEet04xz_e9WpoUqHTsbtWVTRQajzlUEDUIeXEDR"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="overflow-hidden border border-[#1A1A1A] reveal">
                    <img 
                      id="gallery-image-4"
                      alt="Ambiente Cucina" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-[750ms]" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrug30wPRvQ7urNiCDGQjKniS6LIn06scHAguKUdNLvu3gCG6-JxNBAee7Vl33XFBrlCCUTE3YmxDSZJb9Q97_-RgPjRmwVs7XPstoQRg7Mhfnii_fDV0GRX-nj-EyXstHxZqXOLNVqPJkBggs66njBVqa_WeM-hzUlWpyYXtgM3j0FbqFNtUryV3voGeHlOXbuISV-ByoJVSzzfnaJbgfgigDoCYl1jqtLnfpDgKWCkxHLO6ZTVMBIMTWZZhEMFeR_hpZVxHKX4kw"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </section>

              {/* Testimonial Section */}
              <section id="testimonial" className="py-24 bg-[#1A1A1A] text-[#F8F7F4] overflow-hidden relative">
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal space-y-6">
                  <p className="font-mono-design text-[0.7rem] uppercase tracking-[0.15em] text-[#F8F7F4]/60">REVIEW</p>
                  <h2 className="font-editorial text-2xl md:text-3xl italic leading-relaxed text-[#F8F7F4]/90">
                    "L'approccio di Michela non riguarda semplicemente la cucina; riguarda lo storytelling. Cattura la vera essenza del nostro territorio e la traduce in un linguaggio che è allo tempo stesso antico e straordinariamente fresco."
                  </h2>
                  <div className="flex flex-col items-center pt-4">
                    <div className="w-12 h-px bg-[#8B5E3C] mb-4"></div>
                    <p className="font-mono-design text-[10px] tracking-widest uppercase text-[#F8F7F4]/60">Gourmet Quarterly Review</p>
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <section id="contact" className="py-24 max-w-7xl mx-auto px-6 lg:px-12 scroll-mt-12">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                  <div className="reveal space-y-6">
                    <p className="font-mono-design text-[0.7rem] uppercase tracking-[0.15em] text-[#1A1A1A]/60">[ 03 ] CONTATTI</p>
                    <h2 className="font-editorial text-4xl md:text-5xl uppercase tracking-tight text-[#1A1A1A]">Creiamo Insieme</h2>
                    <p className="font-sans-design text-sm md:text-base text-[#1A1A1A]/70 leading-relaxed">
                      Che tu stia cercando uno chef privato per un evento esclusivo o una consulenza per la tua attività culinaria, sarò felice di valutare come portare la tua visione in tavola.
                    </p>
                    <div className="space-y-6 border-t border-[#1A1A1A]/10 pt-8 mt-8">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-[#1A1A1A]/5 border border-[#1A1A1A] flex items-center justify-center mt-0.5">
                          <MapPin className="text-[#1A1A1A] w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-mono-design text-[10px] uppercase tracking-wider text-[#1A1A1A]/60">Sede</p>
                          <p className="font-sans-design text-sm text-[#1A1A1A]/80">Macerata, Marche, Italia</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-[#1A1A1A]/5 border border-[#1A1A1A] flex items-center justify-center mt-0.5">
                          <Mail className="text-[#1A1A1A] w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-mono-design text-[10px] uppercase tracking-wider text-[#1A1A1A]/60">Richieste</p>
                          <p className="font-sans-design text-sm text-[#1A1A1A]/80">ciao@micheladomizi.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="reveal border border-[#1A1A1A] bg-[#F8F7F4]">
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
            <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center md:justify-end items-center">
              <button 
                onClick={() => setIsPrivacyModalOpen(true)}
                className="hover:text-surface transition-colors bg-transparent border-0 p-0 cursor-pointer focus:outline-none"
              >
                Informativa sulla Privacy
              </button>
              <span className="text-surface/30">|</span>
              <button 
                onClick={() => setIsCookiePolicyModalOpen(true)}
                className="hover:text-surface transition-colors bg-transparent border-0 p-0 cursor-pointer focus:outline-none"
              >
                Informativa sui Cookie
              </button>
              <span className="text-surface/30">|</span>
              <span>P.IVA 01234567890</span>
            </div>
          </div>

        </div>
      </footer>
    </main>
  </div>

      {/* Cookie Consent Banner */}
      {isCookieBannerOpen && (
        <div className="fixed bottom-[100px] left-4 right-4 md:left-auto md:right-8 md:max-w-md md:bottom-[115px] z-45 bg-surface-container p-6 rounded-xl border border-outline/20 shadow-xl flex flex-col gap-3 transition-all duration-300">
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
              onClick={() => setIsCookiePolicyModalOpen(true)}
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

      {/* Cookie Policy Modal */}
      {isCookiePolicyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-background/60 backdrop-blur-md" 
            onClick={() => setIsCookiePolicyModalOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-surface border border-outline/20 p-8 md:p-10 max-w-lg w-full rounded-xl shadow-2xl overflow-y-auto max-h-[85vh] z-10 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center border-b border-outline/10 pb-4 mb-6">
                <h3 className="font-headline-sm text-headline-sm text-primary">Informativa sui Cookie</h3>
                <button 
                  onClick={() => setIsCookiePolicyModalOpen(false)} 
                  className="text-secondary hover:text-primary transition-colors focus:outline-none"
                  aria-label="Chiudi"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="font-body-md text-on-surface-variant text-sm space-y-4 overflow-y-auto pr-2 max-h-[50vh]">
                <p className="font-bold text-primary">1. Cosa sono i Cookie</p>
                <p>I cookie sono stringhe di testo di piccole dimensioni che i siti visitati dall'utente inviano al suo terminale, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla successiva visita del medesimo utente.</p>
                
                <p className="font-bold text-primary">2. Tipologie di Cookie utilizzate da questo sito</p>
                <p>Questo sito utilizza esclusivamente <strong>cookie tecnici ed essenziali</strong>. Non vengono utilizzati cookie di terze parti, cookie di marketing o cookie di profilazione pubblicitaria.</p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li><strong>Cookie di sessione</strong>: Necessari per garantire la normale navigazione e fruizione del sito (es. mantenere attiva la lingua o lo stato della sessione).</li>
                  <li><strong>Cookie di preferenza</strong>: Memorizzano le selezioni dell'utente per migliorare l'esperienza (es. la scelta di accettare questa informativa).</li>
                </ul>
                
                <p className="font-bold text-primary">3. Base Giuridica del Trattamento</p>
                <p>L'uso di questi cookie tecnici è strettamente necessario al corretto funzionamento del sito e, ai sensi della direttiva europea ePrivacy e del Regolamento GDPR, non richiede il preventivo consenso esplicito dell'utente.</p>
                
                <p className="font-bold text-primary">4. Come disattivare i cookie dal browser</p>
                <p>È possibile configurare il proprio browser per bloccare o rimuovere i cookie. Attenzione: la disattivazione totale dei cookie tecnici potrebbe compromettere alcune funzionalità essenziali del sito.</p>
                
                <p className="font-bold text-primary">5. Contatti</p>
                <p>Per maggiori informazioni, chiarimenti o richieste relative alla gestione dei dati e dei cookie, vi invitiamo a contattare il Titolare all'indirizzo email: ciao@micheladomizi.com.</p>
              </div>
            </div>
            
            <div className="border-t border-outline/10 pt-6 mt-6 flex justify-end">
              <button 
                onClick={() => setIsCookiePolicyModalOpen(false)}
                className="bg-primary text-surface px-6 py-2.5 rounded-full font-label-md text-label-md hover:bg-primary/95 transition-all focus:outline-none"
              >
                Chiudi
              </button>
            </div>
          </div>
        </div>
      )}
      <StickyFooter />
      <GeminiChat />
    </div>
  );
}
