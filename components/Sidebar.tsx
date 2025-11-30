
import React from 'react';
import { StethoscopeIcon, HouseIcon, UserIcon, CalendarIcon, UsersIcon, MessageSquareIcon, MapPinIcon, CircleCheckBigIcon, FileTextIcon, CreditCardIcon } from './icons';
import { useTranslation } from '../i18n/useTranslation';

interface NavItemProps {
  icon: React.ReactElement;
  label: string;
  active?: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, onClick }) => (
  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
    className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-200 ${
      active
        ? 'bg-green-500 text-white'
        : 'text-gray-700 hover:bg-gray-100'
    }`}
  >
    {React.cloneElement(icon as React.ReactElement<any>, { className: `w-5 h-5 ${active ? 'text-white' : 'text-gray-700'}` })}
    <span className="mx-4 font-medium">{label}</span>
  </a>
);

interface SidebarProps {
    isSidebarOpen: boolean;
    setSidebarOpen: (isOpen: boolean) => void;
    activePage: string;
    setActivePage: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, setSidebarOpen, activePage, setActivePage }) => {
    const { t } = useTranslation();

    const navItems = [
        { id: 'dashboard', icon: <HouseIcon />, label: t('sidebar.dashboard') },
        { id: 'manage-profile', icon: <UserIcon />, label: t('sidebar.manageProfile') },
        { id: 'appointments', icon: <CalendarIcon />, label: t('sidebar.appointments') },
        { id: 'booking-requests', icon: <UsersIcon />, label: t('sidebar.bookingRequests') },
        { id: 'online-consultation', icon: <MessageSquareIcon />, label: t('sidebar.onlineConsultation') },
        { id: 'home-visits-map', icon: <MapPinIcon />, label: t('sidebar.homeVisitsMap') },
        { id: 'confirm-reject-visits', icon: <CircleCheckBigIcon />, label: t('sidebar.confirmRejectVisits') },
        { id: 'patient-history', icon: <FileTextIcon />, label: t('sidebar.patientHistory') },
        { id: 'follow-up-appointments', icon: <StethoscopeIcon />, label: t('sidebar.followUpAppointments') },
        { id: 'subscription', icon: <CreditCardIcon />, label: t('sidebar.subscription') },
    ];

    return (
        <>
            <div className={`fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity lg:hidden ${isSidebarOpen ? 'block' : 'hidden'}`} onClick={() => setSidebarOpen(false)}></div>
            <aside className={`flex-shrink-0 w-64 bg-white border-e transform transition-transform duration-300 lg:transform-none lg:static lg:block ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed lg:relative z-30 h-full`}>
                <div className="flex items-center justify-center p-4 border-b h-[65px]">
                    <div className="flex items-center gap-3">
                        <div className="bg-green-500 p-2 rounded-lg">
                            <StethoscopeIcon className="w-6 h-6 text-white" />
                        </div>
                        <h1 className="text-xl font-bold">MedSync Doctor</h1>
                    </div>
                </div>
                <nav className="p-4 space-y-2">
                    {navItems.map((item) => (
                        <NavItem 
                            key={item.id} 
                            icon={item.icon} 
                            label={item.label} 
                            active={activePage === item.id}
                            onClick={() => setActivePage(item.id)}
                        />
                    ))}
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;
