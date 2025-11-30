import React from 'react';
import { Bell, Menu, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
      <div className="px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="lg:hidden p-2 -ml-2 text-slate-500 hover:bg-slate-100 rounded-lg">
            <Menu className="w-5 h-5" />
          </button>
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-sm">
            <Heart className="w-6 h-6 text-white fill-current" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900">{t('common.appName')}</h1>
        </div>

        <div className="flex items-center gap-3">
          <button className="relative p-2 text-slate-500 hover:bg-slate-50 rounded-lg transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full border-2 border-white"></span>
          </button>
          
          <button 
            onClick={toggleLanguage}
            className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center font-medium text-sm text-slate-700 hover:bg-slate-100 transition-colors font-arabic"
          >
            {language === 'en' ? 'ع' : 'En'}
          </button>
          
          <a href="#" className="p-2 text-slate-500 hover:bg-slate-50 rounded-lg transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="m16 17 5-5-5-5"></path>
              <path d="M21 12H9"></path>
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;