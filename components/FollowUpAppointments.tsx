
import React from 'react';
import { CalendarIcon, ClockIcon, PenIcon, Trash2Icon, TagIcon, ChevronDownIcon } from './icons';
import { getFollowUp_scheduledData, getFollowUp_completedData } from './data';
import { useTranslation } from '../i18n/useTranslation';

const FollowUpAppointments: React.FC = () => {
    const { t, dir } = useTranslation();
    const scheduledFollowUps = getFollowUp_scheduledData(t);
    const completedFollowUps = getFollowUp_completedData(t);
    const chevronClass = dir === 'rtl' ? "left-3" : "right-3";

    const getPricingClass = (color: string) => {
        switch (color) {
            case 'green': return 'bg-green-100 text-green-800 border-green-200';
            case 'blue': return 'bg-blue-100 text-blue-800 border-blue-200';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };
    
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{t('followUp.title')}</h1>
            <p className="text-gray-500 mt-2">{t('followUp.subtitle')}</p>

            <div className="mt-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="p-6 border-b">
                    <h3 className="text-xl font-semibold">{t('followUp.scheduleNew')}</h3>
                    <p className="mt-1 text-sm text-gray-500">{t('followUp.scheduleNewSubtitle')}</p>
                </div>
                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative">
                            <label htmlFor="patient" className="block text-sm font-medium text-gray-700 mb-2">{t('followUp.selectPatient')}</label>
                            <select id="patient" className="appearance-none w-full bg-gray-50 border border-gray-200 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500">
                                <option>{t('followUp.choosePatient')}</option>
                            </select>
                             <ChevronDownIcon className={`w-4 h-4 absolute ${chevronClass} top-10 text-gray-400 pointer-events-none`} />
                        </div>
                        <div>
                            <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">{t('followUp.followUpType')}</label>
                            <input type="text" id="type" placeholder={t('followUp.typePlaceholder')} className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2 px-3"/>
                        </div>
                        <div>
                            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">{t('followUp.scheduledDate')}</label>
                            <input type="date" id="date" className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2 px-3"/>
                        </div>
                        <div>
                            <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">{t('followUp.time')}</label>
                            <input type="time" id="time" className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2 px-3"/>
                        </div>
                        <div className="relative">
                            <label htmlFor="pricing" className="block text-sm font-medium text-gray-700 mb-2">{t('followUp.pricingOption')}</label>
                            <select id="pricing" className="appearance-none w-full bg-gray-50 border border-gray-200 rounded-lg py-2 px-3">
                                <option>{t('followUp.selectOption')}</option>
                            </select>
                             <ChevronDownIcon className={`w-4 h-4 absolute ${chevronClass} top-10 text-gray-400 pointer-events-none`} />
                        </div>
                        <div>
                            <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">{t('followUp.notes')}</label>
                            <input type="text" id="notes" placeholder={t('followUp.notesPlaceholder')} className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2 px-3"/>
                        </div>
                    </div>
                    <div className="mt-6">
                        <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">{t('followUp.scheduleFollowUp')}</button>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('followUp.scheduled', {count: 4})}</h2>
                <div className="space-y-4">
                    {scheduledFollowUps.map((item, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                            <div className="flex flex-col sm:flex-row justify-between items-start">
                                <div className="flex items-start gap-4">
                                    <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full" />
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <p className="font-semibold">{item.name}</p>
                                            <span className="text-xs font-semibold px-2.5 py-0.5 border rounded-full">{t('followUp.followUp')}</span>
                                        </div>
                                        <p className="text-sm text-gray-600">{item.reason}</p>
                                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 mt-2">
                                            <span className="flex items-center"><CalendarIcon className="w-4 h-4 me-1.5" />{item.date}</span>
                                            <span className="flex items-center"><ClockIcon className="w-4 h-4 me-1.5" />{item.time}</span>
                                        </div>
                                        <div className="mt-2">
                                            <p className="text-xs text-gray-500 mb-1">{t('followUp.originalVisit', {date: item.originalVisit})}</p>
                                            <div className={`inline-flex items-center text-xs font-semibold px-2.5 py-0.5 rounded-full ${getPricingClass(item.pricingColor)}`}>
                                                <TagIcon className="w-3 h-3 me-1" />
                                                {item.pricing}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2 mt-4 sm:mt-0 self-start">
                                    <button className="p-2.5 bg-gray-100 rounded-md hover:bg-gray-200"><PenIcon className="w-4 h-4 text-gray-600" /></button>
                                    <button className="p-2.5 bg-gray-100 rounded-md hover:bg-gray-200"><Trash2Icon className="w-4 h-4 text-red-600" /></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-8">
                 <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('followUp.completed', {count: 2})}</h2>
                 <div className="space-y-4">
                    {completedFollowUps.map((item, index) => (
                         <div key={index} className="bg-green-50 p-4 rounded-lg border border-green-200">
                            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                                <div className="flex items-center gap-4">
                                    <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full" />
                                    <div>
                                        <p className="font-semibold">{item.name}</p>
                                        <p className="text-sm text-gray-600">{item.reason}</p>
                                        <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                                            <span>{item.date}</span>
                                            <span>{item.time}</span>
                                            <div className={`inline-flex items-center font-semibold px-2.5 py-0.5 rounded-full ${getPricingClass(item.pricingColor)}`}>
                                                <TagIcon className="w-3 h-3 me-1" />
                                                {item.pricing}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 w-full sm:w-auto">{t('followUp.viewNotes')}</button>
                            </div>
                         </div>
                    ))}
                 </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-sm font-medium text-gray-600">{t('followUp.scheduledStat')}</h3>
                    <p className="text-3xl font-bold mt-2">4</p>
                    <p className="text-xs text-gray-500">{t('followUp.upcoming')}</p>
                </div>
                 <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-sm font-medium text-gray-600">{t('followUp.revenue')}</h3>
                    <p className="text-3xl font-bold mt-2">$1,250</p>
                    <p className="text-xs text-gray-500">{t('followUp.fromFollowUps')}</p>
                </div>
                 <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-sm font-medium text-gray-600">{t('followUp.freeFollowUps')}</h3>
                    <p className="text-3xl font-bold mt-2 text-green-600">2</p>
                    <p className="text-xs text-gray-500">{t('followUp.scheduledAsFree')}</p>
                </div>
            </div>
        </div>
    );
};

export default FollowUpAppointments;
