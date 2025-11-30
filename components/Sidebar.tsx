import React, { useMemo } from 'react';
import { 
  LayoutDashboard, 
  Stethoscope, 
  Calendar, 
  MessageSquare, 
  FileText, 
  CreditCard, 
  Store, 
  Beaker, 
  User, 
  AlertCircle, 
  Watch, 
  Home, 
  Navigation 
} from 'lucide-react';
import { Page, MenuItem } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface SidebarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, onNavigate }) => {
  const { t } = useLanguage();

  const menuItems: MenuItem[] = useMemo(() => [
    { id: Page.DASHBOARD, label: t('sidebar.dashboard'), icon: LayoutDashboard },
    { id: Page.FIND_DOCTORS, label: t('sidebar.findDoctors'), icon: Stethoscope },
    { id: Page.APPOINTMENTS, label: t('sidebar.appointments'), icon: Calendar },
    { id: Page.CONSULTATIONS, label: t('sidebar.consultations'), icon: MessageSquare },
    { id: Page.HEALTH_RECORDS, label: t('sidebar.healthRecords'), icon: FileText },
    { id: Page.PRESCRIPTIONS, label: t('sidebar.prescriptions'), icon: FileText },
    { id: Page.PAYMENTS, label: t('sidebar.payments'), icon: CreditCard },
    { id: Page.PHARMACIES, label: t('sidebar.pharmacies'), icon: Store },
    { id: Page.LABS, label: t('sidebar.labs'), icon: Beaker },
    { id: Page.REVIEWS, label: t('sidebar.reviews'), icon: User },
    { id: Page.EMERGENCY, label: t('sidebar.emergency'), icon: AlertCircle },
    { id: Page.WEARABLES, label: t('sidebar.wearables'), icon: Watch },
    { id: Page.HOME_VISIT, label: t('sidebar.homeVisit'), icon: Home },
    { id: Page.TRACK_DOCTOR, label: t('sidebar.trackDoctor'), icon: Navigation },
    { id: Page.PROFILE, label: t('sidebar.profile'), icon: User },
  ], [t]);

  return (
    <aside className="w-64 bg-white border-r border-slate-200 h-screen sticky top-0 overflow-y-auto z-30 hidden lg:block">
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium text-sm
                ${isActive 
                  ? 'bg-primary text-white shadow-md shadow-blue-500/20' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                }`}
            >
              <item.icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-white' : 'text-slate-500'}`} />
              <span className="truncate">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;