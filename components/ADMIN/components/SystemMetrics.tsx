import React from 'react';
import { Users, Calendar, CircleAlert, Stethoscope } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';
import { useData } from '../contexts/DataContext';

const SystemMetrics: React.FC = () => {
  const { t } = useLanguage();
  const { reviews } = useData();

  const pendingReviewsCount = reviews.filter(r => r.type === 'Complaint').length; // Mock logic for 'pending'

  const metrics = [
    {
      title: t('activeUsersToday'),
      value: '1,245',
      trend: '-8%',
      trendType: 'negative',
      icon: Users,
    },
    {
      title: t('bookingsToday'),
      value: '342',
      trend: '+12%',
      trendType: 'positive',
      icon: Calendar,
    },
    {
      title: t('pendingReviews'),
      value: (24 + pendingReviewsCount).toString(),
      trend: '+4',
      trendType: 'positive',
      icon: CircleAlert,
    },
    {
      title: t('doctorSignups'),
      value: '12',
      trend: '+3',
      trendType: 'positive',
      icon: Stethoscope,
    },
  ];

  return (
    <div className="col-span-2 rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="border-b border-gray-200 px-6 py-6">
        <h3 className="text-xl font-semibold text-gray-900">{t('systemMetricsToday')}</h3>
        <p className="mt-1 text-sm text-gray-500">{t('realTimeActivity')}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 p-4 transition-colors hover:bg-gray-50"
          >
            <div className="mb-2 flex items-center justify-between">
              <metric.icon className="h-5 w-5 text-gray-400" />
              <span
                className={`text-xs font-medium ${
                  metric.trendType === 'positive' ? 'text-orange-600' : 'text-orange-600'
                }`}
              >
                {metric.trend}
              </span>
            </div>
            <p className="mb-1 text-sm text-gray-500">{metric.title}</p>
            <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SystemMetrics;