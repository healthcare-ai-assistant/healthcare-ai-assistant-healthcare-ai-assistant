import React, { createContext, useState, useCallback, ReactNode } from 'react';

import en from './locales/en';
import ar from './locales/ar';


type Language = 'en' | 'ar';
type Direction = 'ltr' | 'rtl';

export type TFunction = (key: string, params?: { [key: string]: string | number }) => string;

interface LanguageContextType {
  language: Language;
  dir: Direction;
  t: TFunction;
  toggleLanguage: () => void;
}

const translations: Record<Language, any> = { en, ar };

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  dir: 'ltr',
  t: () => '',
  toggleLanguage: () => {},
});

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = useCallback(() => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'ar' : 'en'));
  }, []);

  const t = useCallback((key: string, params: { [key: string]: string | number } = {}): string => {
    const keys = key.split('.');
    let result = translations[language];
    for (const k of keys) {
      result = result?.[k];
      if (result === undefined) {
        // Fallback to English if translation is missing
        let fallbackResult = translations.en;
        for (const fk of keys) {
            fallbackResult = fallbackResult?.[fk];
            if(fallbackResult === undefined) return key;
        }
        result = fallbackResult;
        break;
      }
    }

    if (typeof result === 'string') {
        return Object.entries(params).reduce((acc, [paramKey, paramValue]) => {
            return acc.replace(`{${paramKey}}`, String(paramValue));
        }, result);
    }
    
    return result || key;
  }, [language]);

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, dir, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};