
import React from 'react';
import { getRevenueData } from './data';
import { useTranslation } from '../i18n/useTranslation';

const RevenueOverview: React.FC = () => {
    const { t } = useTranslation();
    const revenueData = getRevenueData(t);

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 h-full">
            <h3 className="text-xl font-semibold">{t('dashboard.revenueOverview')}</h3>
            <p className="text-sm text-gray-500 mt-1">{t('dashboard.monthlyPerformance')}</p>
            <div className="mt-6 space-y-6">
                {revenueData.map((item, index) => (
                    <div key={index}>
                        <div className="flex justify-between items-center text-sm mb-2">
                            <span className="text-gray-600">{item.source}</span>
                            <span className="font-semibold">{item.amount}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                                className={`${item.color} h-2 rounded-full`} 
                                style={{ width: `${item.percentage}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RevenueOverview;
