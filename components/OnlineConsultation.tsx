
import React from 'react';
import { CalendarIcon, ClockIcon, VideoIcon, PhoneIcon, MicIcon, MessageSquareIcon } from './icons';
import { getOnlineConsultation_upcomingData, getOnlineConsultation_pastData } from './data';
import { useTranslation } from '../i18n/useTranslation';

const OnlineConsultation: React.FC = () => {
    const { t } = useTranslation();
    const upcomingConsultations = getOnlineConsultation_upcomingData(t);
    const pastConsultations = getOnlineConsultation_pastData(t);

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{t('onlineConsultation.title')}</h1>
            <p className="text-gray-500 mt-2">{t('onlineConsultation.subtitle')}</p>

            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('onlineConsultation.active')}</h2>
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="aspect-video bg-gray-900 rounded-lg flex flex-col items-center justify-center text-white relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
                            <div className="relative z-10 text-center">
                                <VideoIcon className="w-12 h-12 mx-auto mb-2 text-white opacity-50" />
                                <p className="text-sm text-gray-400">{t('onlineConsultation.yourCamera')}</p>
                            </div>
                        </div>
                        <div className="aspect-video bg-blue-700 rounded-lg flex flex-col items-center justify-center text-white relative overflow-hidden">
                             <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800"></div>
                             <div className="relative z-10 text-center">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=sophie" alt="Sophie Turner" className="w-16 h-16 rounded-full mx-auto mb-2 border-2 border-white" />
                                <p className="font-semibold">Sophie Turner</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-6">
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="px-3 py-1 text-xs font-semibold bg-green-500 text-white rounded-full">{t('onlineConsultation.activeStatus')}</span>
                                <p className="font-semibold">Sophie Turner</p>
                            </div>
                            <p className="text-sm text-gray-500 mt-2">{t('onlineConsultation.ongoing', {mins: 8})}</p>
                        </div>
                        <div className="flex items-center gap-2 mt-4 md:mt-0">
                             <button className="p-2.5 bg-green-500 text-white rounded-full hover:bg-green-600"><VideoIcon className="w-5 h-5" /></button>
                             <button className="p-2.5 bg-green-500 text-white rounded-full hover:bg-green-600"><MicIcon className="w-5 h-5" /></button>
                             <button className="p-2.5 bg-white border border-gray-200 text-gray-600 rounded-full hover:bg-gray-100"><MessageSquareIcon className="w-5 h-5" /></button>
                             <button className="p-2.5 bg-red-500 text-white rounded-full hover:bg-red-600"><PhoneIcon className="w-5 h-5" /></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('onlineConsultation.upcoming', { count: 3})}</h2>
                 <div className="space-y-4">
                    {upcomingConsultations.map((item, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                             <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full" />
                                    <div>
                                        <p className="font-semibold">{item.name}</p>
                                        <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                                            <CalendarIcon className="w-4 h-4" />
                                            <span>{item.time.split(',')[0]}</span>
                                            <ClockIcon className="w-4 h-4" />
                                            <span>{item.time.split(',')[1]}</span>
                                            {item.type === 'video' ? <VideoIcon className="w-4 h-4" /> : <PhoneIcon className="w-4 h-4" />}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className={`flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700`}>
                                        {item.type === 'video' ? <VideoIcon className="w-4 h-4"/> : <PhoneIcon className="w-4 h-4"/>}
                                        {item.type === 'video' ? t('onlineConsultation.joinVideo') : t('onlineConsultation.joinCall')}
                                    </button>
                                     <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-200 rounded-lg hover:bg-gray-200">{t('onlineConsultation.reschedule')}</button>
                                </div>
                             </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="mt-8">
                 <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('onlineConsultation.past')}</h2>
                 <div className="space-y-4">
                    {pastConsultations.map((item, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                             <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full" />
                                    <div>
                                        <p className="font-semibold">{item.name}</p>
                                        <p className="text-sm text-gray-600">{item.description}</p>
                                        <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                                            <span>{item.time}</span>
                                            <span>{item.duration}</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">{t('onlineConsultation.viewNotes')}</button>
                             </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default OnlineConsultation;
