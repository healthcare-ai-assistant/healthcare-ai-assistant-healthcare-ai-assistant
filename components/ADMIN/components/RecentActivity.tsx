import React from 'react';
import {
  Users,
  Stethoscope,
  Calendar,
  CircleAlert,
  CircleCheckBig,
} from './Icons';
import { useLanguage } from '../contexts/LanguageContext';

const RecentActivity: React.FC = () => {
  const { t } = useLanguage();

  const activities = [
    {
      type: 'signup',
      title: t('userSignup'),
      description: `${t('newUserRegistered')}: Sarah Johnson`,
      timeAgo: '2 mins ago',
    },
    {
      type: 'doctor',
      title: t('doctorSignup'),
      description: `${t('newDoctorRegistered')}: Dr. Emily Davis`,
      timeAgo: '15 mins ago',
    },
    {
      type: 'booking',
      title: t('booking'),
      description: `${t('appointmentBooked')}: Emma Wilson → Dr. Michael Brown`,
      timeAgo: '28 mins ago',
    },
    {
      type: 'complaint',
      title: t('complaint'),
      description: `${t('newComplaint')}: Quality of service`,
      timeAgo: '1 hour ago',
    },
    {
      type: 'subscription',
      title: t('subscription'),
      description: `Dr. John Smith ${t('subscriptionRenewed')}`,
      timeAgo: '2 hours ago',
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'signup':
        return { icon: Users, bg: 'bg-blue-50', color: 'text-blue-500' };
      case 'doctor':
        return { icon: Stethoscope, bg: 'bg-green-50', color: 'text-green-500' };
      case 'booking':
        return { icon: Calendar, bg: 'bg-purple-50', color: 'text-purple-500' };
      case 'complaint':
        return { icon: CircleAlert, bg: 'bg-red-50', color: 'text-red-500' };
      case 'subscription':
        return { icon: CircleCheckBig, bg: 'bg-yellow-50', color: 'text-yellow-600' };
      default:
        return { icon: Users, bg: 'bg-gray-50', color: 'text-gray-500' };
    }
  };

  return (
    <div className="mt-8 rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="px-6 py-6 border-b border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900">{t('recentActivity')}</h3>
        <p className="mt-1 text-sm text-gray-500">{t('latestEvents')}</p>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {activities.map((activity, index) => {
            const { icon: Icon, bg, color } = getIcon(activity.type);
            return (
              <div
                key={index}
                className={`flex items-start gap-4 rounded-xl p-3 ${bg}`}
              >
                <Icon className={`mt-0.5 h-5 w-5 ${color} flex-shrink-0`} />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">
                    {activity.title}
                  </p>
                  <p className="text-sm text-gray-500">
                    {activity.description}
                  </p>
                </div>
                <span className="text-xs text-gray-500 whitespace-nowrap">
                  {activity.timeAgo}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;