
import React from 'react';
import { ClockIcon } from './icons';
import { getUpcomingAppointmentsData } from './data';
import { useTranslation } from '../i18n/useTranslation';

const UpcomingAppointments: React.FC = () => {
    const { t } = useTranslation();
    const upcomingAppointmentsData = getUpcomingAppointmentsData(t);

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 h-full">
            <h3 className="text-xl font-semibold">{t('dashboard.upcomingAppointments')}</h3>
            <p className="text-sm text-gray-500 mt-1">{t('dashboard.appointmentsScheduled', { count: '6' })}</p>
            <div className="mt-6 space-y-4">
                {upcomingAppointmentsData.map((appointment, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                        <div>
                            <p className="font-semibold">{appointment.name}</p>
                            <div className="flex items-center text-sm text-gray-500 mt-1 space-x-4 rtl:space-x-reverse">
                                <span className="flex items-center">
                                    <ClockIcon className="w-4 h-4 me-1.5" />
                                    {appointment.time}
                                </span>
                                <span>{appointment.type}</span>
                            </div>
                        </div>
                        <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-200 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                            {t('dashboard.start')}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpcomingAppointments;
