
import React from 'react';
import { CalendarIcon, CircleCheckBigIcon, DollarSignIcon } from './icons';
import { getRecentActivityData } from './data';
import { useTranslation } from '../i18n/useTranslation';

const iconMap: { [key: string]: React.FC<{className: string}> } = {
    CalendarIcon,
    CircleCheckBigIcon,
    DollarSignIcon
};

const RecentActivity: React.FC = () => {
    const { t, dir } = useTranslation();
    const recentActivityData = getRecentActivityData(t);

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold">{t('dashboard.recentActivity')}</h3>
            <p className="text-sm text-gray-500 mt-1">{t('dashboard.latestUpdates')}</p>
            <div className="mt-6">
                <ul className="space-y-4">
                    {recentActivityData.map((activity, index) => {
                        const Icon = iconMap[activity.icon];
                        return (
                            <li key={index} className={`flex items-start space-x-4 rtl:space-x-reverse ${index !== recentActivityData.length - 1 ? 'pb-4 border-b' : ''}`}>
                                <div className="bg-gray-100 p-2.5 rounded-lg flex-shrink-0">
                                    {Icon && <Icon className="w-5 h-5 text-gray-500" />}
                                </div>
                                <div className="flex-grow">
                                    <p className="font-semibold">{activity.name}</p>
                                    <p className="text-sm text-gray-500">{activity.action}</p>
                                </div>
                                <span className="text-xs text-gray-400 flex-shrink-0 whitespace-nowrap">{activity.time}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default RecentActivity;
