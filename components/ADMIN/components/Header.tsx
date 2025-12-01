import React from 'react';
import { Shield, Bell, LogOut, Menu } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  toggleSidebar?: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const { t, language, toggleLanguage } = useLanguage();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between px-4 py-4 md:px-8">
        <div className="flex items-center gap-3">
          {/* Mobile menu button */}
          <button 
            onClick={toggleSidebar}
            className="me-2 rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
          
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600 shadow-sm">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-xl font-bold text-gray-900">{t('appTitle')}</h1>
        </div>

        <div className="flex items-center gap-3">
          <button className="relative flex h-10 w-10 items-center justify-center rounded-xl text-gray-500 hover:bg-gray-50 transition-colors">
            <Bell className="h-5 w-5" />
            <span className="absolute top-2 right-2.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
          </button>

          <button 
            onClick={toggleLanguage}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <span>{language === 'en' ? 'ع' : 'En'}</span>
          </button>

          <button className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-500 hover:bg-gray-50 transition-colors">
            <LogOut className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;