import React from 'react';
import { Users, Stethoscope, DollarSign, Bell } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';

interface QuickActionsProps {
  onNavigate: (view: string) => void;
}

const QuickActions: React.FC<QuickActionsProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  const actions = [
    { label: t('addNewUser'), icon: Users, action: () => onNavigate('users') },
    { label: t('addNewDoctor'), icon: Stethoscope, action: () => onNavigate('doctors') },
    { label: t('updatePrices'), icon: DollarSign, action: () => onNavigate('prices') },
    { label: t('sendNotification'), icon: Bell, action: () => onNavigate('notifications') },
  ];

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm h-full">
      <div className="px-6 py-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">{t('quickActions')}</h3>
      </div>
      <div className="p-6 space-y-3">
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={action.action}
            className="flex w-full items-center justify-start gap-3 rounded-xl border border-transparent bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:border-gray-200 hover:bg-white hover:shadow-sm"
          >
            <action.icon className="h-4 w-4 text-gray-700" />
            <span>{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;