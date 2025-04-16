import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import i18n from '../i18n';

type LanguageContextType = {
  language: string;
  setLanguage: (language: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState(i18n.language || 'CZ');

  const setLanguage = (newLanguage: string) => {
    i18n.changeLanguage(newLanguage);
    setLanguageState(newLanguage);
    localStorage.setItem('i18nextLng', newLanguage);
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem('i18nextLng');
    if (storedLanguage) {
      setLanguageState(storedLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage musí být použit uvnitř LanguageProvider');
  }
  return context;
}; 