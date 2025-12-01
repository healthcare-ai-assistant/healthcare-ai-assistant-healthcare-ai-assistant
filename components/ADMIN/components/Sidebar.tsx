import React from 'react';
import {
  House,
  Users,
  UserCheck,
  Calendar,
  CreditCard,
  DollarSign,
  MessageSquare,
  Bell,
  Lock,
  X
} from './Icons';
import { useLanguage } from '../contexts/LanguageContext';

interface SidebarItem {
  id: string;
  labelKey: string;
  icon: any;
}

const menuItems: SidebarItem[] = [
  { id: 'dashboard', labelKey: 'dashboard', icon: House },
  { id: 'doctors', labelKey: 'manageDoctors', icon: Users },
  { id: 'users', labelKey: 'manageUsers', icon: UserCheck },
  { id: 'appointments', labelKey: 'appointmentsBookings', icon: Calendar },
  { id: 'subscriptions', labelKey: 'subscriptions', icon: CreditCard },
  { id: 'prices', labelKey: 'managePrices', icon: DollarSign },
  { id: 'reviews', labelKey: 'reviewsComplaints', icon: MessageSquare },
  { id: 'notifications', labelKey: 'groupNotifications', icon: Bell },
  { id: 'security', labelKey: 'securityData', icon: Lock },
];

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  currentView: string;
  onNavigate: (view: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen = false, onClose, currentView, onNavigate }) => {
  const { t } = useLanguage();

  const NavLinks = () => (
    <>
      {menuItems.map((item) => {
        const active = item.id === currentView;
        return (
          <button
            key={item.id}
            onClick={() => {
              onNavigate(item.id);
              if (onClose) onClose();
            }}
            className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
              active
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <item.icon className={`h-5 w-5 flex-shrink-0 ${active ? 'text-white' : 'text-gray-500'}`} />
            <span className="truncate">{t(item.labelKey as any)}</span>
          </button>
        );
      })}
    </>
  );

  return (
    <>
      {/* Mobile Sidebar Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Mobile Sidebar */}
      {/* 
          start-0: Anchors to left in LTR, right in RTL.
          ltr:-translate-x-full: Moves left to hide in LTR.
          rtl:translate-x-full: Moves right to hide in RTL.
      */}
      <aside 
        className={`fixed top-0 z-50 h-full w-64 bg-white transform transition-transform duration-200 ease-in-out lg:hidden start-0 ${
          isOpen ? 'translate-x-0' : 'ltr:-translate-x-full rtl:translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
           <span className="text-xl font-bold">Menu</span>
           <button onClick={onClose}>
             <X className="w-6 h-6 text-gray-500" />
           </button>
        </div>
        <nav className="p-4 space-y-2 overflow-y-auto h-full">
            <NavLinks />
        </nav>
      </aside>

      {/* Desktop Sidebar */}
      {/* border-e: border-right in LTR, border-left in RTL */}
      <aside className="fixed top-0 z-30 h-full w-64 border-e border-gray-200 bg-white pt-20 transition-transform lg:translate-x-0 hidden lg:block start-0">
        <nav className="h-full overflow-y-auto p-4 space-y-2">
          <NavLinks />
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;