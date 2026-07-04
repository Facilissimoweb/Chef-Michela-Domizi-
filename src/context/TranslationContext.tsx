import React, { createContext, useContext, useState, useEffect } from "react";
import { getCoreStringsObject } from "../lib/translations";

interface TranslationContextType {
  currentLanguage: string;
  isTranslating: boolean;
  translationError: string | null;
  t: (text: string) => string;
  changeLanguage: (langCode: string) => Promise<void>;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

const languageNames: Record<string, string> = {
  it: "Italiano",
  en: "English",
  de: "Deutsch",
  fr: "Français",
  es: "Español",
  nl: "Nederlands",
  pt: "Português",
  ru: "Русский",
  "zh-CN": "Chinese (Simplified)",
  ja: "Japanese",
};

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<string>("it");
  const [isTranslating, setIsTranslating] = useState<boolean>(false);
  const [translationError, setTranslationError] = useState<string | null>(null);
  const [cache, setCache] = useState<Record<string, Record<string, string>>>({
    it: getCoreStringsObject(),
  });

  // Persist language preference in localStorage if available
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("chef_michela_lang");
      if (savedLang && savedLang !== "it") {
        changeLanguage(savedLang).catch(console.error);
      }
    }
  }, []);

  const changeLanguage = async (langCode: string) => {
    if (langCode === "it") {
      setCurrentLanguage("it");
      setTranslationError(null);
      if (typeof window !== "undefined") {
        localStorage.setItem("chef_michela_lang", "it");
      }
      return;
    }

    setCurrentLanguage(langCode);
    setTranslationError(null);

    if (typeof window !== "undefined") {
      localStorage.setItem("chef_michela_lang", langCode);
    }

    // Check if we already have this translation cached
    if (cache[langCode]) {
      return;
    }

    setIsTranslating(true);
    try {
      const coreStrings = getCoreStringsObject();
      const targetLanguageName = languageNames[langCode] || langCode;

      const response = await fetch("/api/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          strings: coreStrings,
          targetLanguage: targetLanguageName,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to translate content.");
      }

      const data = await response.json();
      if (data.translatedStrings) {
        setCache((prev) => ({
          ...prev,
          [langCode]: data.translatedStrings,
        }));
      } else {
        throw new Error("No translated strings returned.");
      }
    } catch (err: any) {
      console.error(`Failed to translate to ${langCode}:`, err);
      setTranslationError(err.message || "Qualcosa è andato storto con la traduzione automatica.");
    } finally {
      setIsTranslating(false);
    }
  };

  const t = (text: string): string => {
    // If language is Italian or string is not in cache, return original Italian text
    if (currentLanguage === "it" || !cache[currentLanguage]) {
      return text;
    }
    // Return translation if found, otherwise fallback to the original Italian text
    return cache[currentLanguage][text] || text;
  };

  return (
    <TranslationContext.Provider
      value={{
        currentLanguage,
        isTranslating,
        translationError,
        t,
        changeLanguage,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};
