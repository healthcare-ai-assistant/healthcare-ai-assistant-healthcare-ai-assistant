
import React from 'react';

interface StatCardProps {
    title: string;
    value: string;
    change: string;
    changeColor: string;
    icon: React.ReactNode;
    iconBgColor: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, changeColor, icon, iconBgColor }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex justify-between items-start">
                <h3 className="text-sm font-medium text-gray-600">{title}</h3>
                <div className={`p-2 rounded-lg ${iconBgColor}`}>
                    {icon}
                </div>
            </div>
            <div className="mt-2">
                <p className="text-3xl font-bold">{value}</p>
                <p className={`text-xs mt-1 ${changeColor}`}>{change}</p>
            </div>
        </div>
    );
};

export default StatCard;
