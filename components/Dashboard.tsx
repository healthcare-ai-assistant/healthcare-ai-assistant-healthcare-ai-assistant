
import React from 'react';
import StatCard from './StatCard';
import UpcomingAppointments from './UpcomingAppointments';
import RevenueOverview from './RevenueOverview';
import RecentActivity from './RecentActivity';
import { UsersIcon, DollarSignIcon, CalendarIcon, ClockIcon } from './icons';
import { useTranslation } from '../i18n/useTranslation';

const Dashboard: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{t('dashboard.title')}</h1>
            <p className="text-gray-500 mt-2">{t('dashboard.welcome')}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
                <StatCard 
                    title={t('dashboard.totalPatients')} 
                    value="248" 
                    change="+12%" 
                    changeColor="text-green-500"
                    icon={<UsersIcon className="w-5 h-5 text-white" />}
                    iconBgColor="bg-blue-500"
                />
                <StatCard 
                    title={t('dashboard.revenue')}
                    value="$8,450" 
                    change="+8%" 
                    changeColor="text-green-500"
                    icon={<DollarSignIcon className="w-5 h-5 text-white" />}
                    iconBgColor="bg-green-500"
                />
                <StatCard 
                    title={t('dashboard.appointmentsToday')}
                    value="6" 
                    change={`2 ${t('dashboard.pending')}`} 
                    changeColor="text-orange-500"
                    icon={<CalendarIcon className="w-5 h-5 text-white" />}
                    iconBgColor="bg-purple-500"
                />
                <StatCard 
                    title={t('dashboard.consultationHours')}
                    value="32" 
                    change={t('dashboard.thisMonth')} 
                    changeColor="text-green-500"
                    icon={<ClockIcon className="w-5 h-5 text-white" />}
                    iconBgColor="bg-orange-500"
                />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                <div className="lg:col-span-2">
                    <UpcomingAppointments />
                </div>
                <div>
                    <RevenueOverview />
                </div>
            </div>

            <div className="mt-8">
                <RecentActivity />
            </div>
        </div>
    );
};

export default Dashboard;
