
import React from 'react';
import { BellIcon, LogOutIcon, MenuIcon } from './icons';
import { useTranslation } from '../i18n/useTranslation';

interface HeaderProps {
    setSidebarOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setSidebarOpen }) => {
    const { t, toggleLanguage, language } = useTranslation();

    return (
        <header className="flex items-center justify-between p-4 bg-white border-b h-[65px] flex-shrink-0">
             <button onClick={() => setSidebarOpen(true)} className="text-gray-500 focus:outline-none lg:hidden">
                <MenuIcon className="w-6 h-6" />
            </button>
             {/* This empty div is for spacing on larger screens */}
             <div className="lg:block hidden"></div>
            <div className="flex items-center space-x-4">
                <button className="relative text-gray-600 hover:text-gray-800">
                    <BellIcon className="w-6 h-6" />
                    <span className="absolute top-0 end-0 block h-2 w-2 rounded-full bg-green-500 ring-2 ring-white"></span>
                </button>
                <button onClick={toggleLanguage} className="flex items-center justify-center w-9 h-9 bg-gray-100 border rounded-full text-gray-700 font-semibold">
                    {language === 'en' ? 'ع' : 'En'}
                </button>
                <button className="text-gray-600 hover:text-gray-800">
                    <LogOutIcon className="w-6 h-6" />
                </button>
            </div>
        </header>
    );
};

export default Header;
