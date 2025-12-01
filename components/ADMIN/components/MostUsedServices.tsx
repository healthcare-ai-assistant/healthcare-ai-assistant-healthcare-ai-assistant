import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const MostUsedServices: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      name: t('onlineConsultation'),
      percentage: 38,
      bookings: 3245,
      revenue: '$12,450',
      colorClass: 'bg-blue-500',
    },
    {
      name: t('clinicVisit'),
      percentage: 34,
      bookings: 2890,
      revenue: '$18,320',
      colorClass: 'bg-green-500',
    },
    {
      name: t('homeVisit'),
      percentage: 28,
      bookings: 1652,
      revenue: '$14,460',
      colorClass: 'bg-purple-500',
    },
  ];

  return (
    <div className="mt-8 rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="px-6 py-6">
        <h3 className="text-xl font-semibold text-gray-900">{t('mostUsedServices')}</h3>
        <p className="mt-1 text-sm text-gray-500">{t('servicePerformance')}</p>
      </div>
      <div className="p-6 space-y-6">
        {services.map((service, index) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-gray-900">{service.name}</span>
              <span className="text-sm font-bold text-gray-900">{service.percentage} %</span>
            </div>
            <div className="h-2 w-full rounded-full bg-slate-100">
              <div
                className={`h-2 rounded-full ${service.colorClass}`}
                style={{ width: `${service.percentage}%` }}
              ></div>
            </div>
            <div className="mt-2 flex justify-between text-xs text-gray-500">
              <span>{service.bookings} {t('bookings')}</span>
              <span>{service.revenue}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostUsedServices;