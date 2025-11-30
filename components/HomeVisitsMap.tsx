
import React from 'react';
import { MapPinIcon, CalendarIcon, ClockIcon, NavigationIcon, PhoneIcon, MessageSquareIcon } from './icons';
import { getHomeVisits_scheduledData, getHomeVisits_completedData } from './data';
import { useTranslation } from '../i18n/useTranslation';

const HomeVisitsMap: React.FC = () => {
  const { t, dir } = useTranslation();
  const scheduledVisits = getHomeVisits_scheduledData(t);
  const completedVisits = getHomeVisits_completedData(t);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{t('homeVisitsMap.title')}</h1>
      <p className="text-gray-500 mt-2">{t('homeVisitsMap.subtitle')}</p>

      <div className="mt-6 bg-white border border-gray-200 rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">{t('homeVisitsMap.visitLocations')}</h3>
        <div className="relative h-96 w-full bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg overflow-hidden border">
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-10">
            {[...Array(144)].map((_, i) => <div key={i} className="border border-gray-300"></div>)}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Markers */}
            <div className="absolute" style={{ top: '35%', left: dir === 'ltr' ? '25%' : 'auto', right: dir === 'rtl' ? '25%' : 'auto' }}>
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs border-2 border-white shadow-lg">1</div>
            </div>
             <div className="absolute" style={{ top: '55%', left: dir === 'ltr' ? '45%' : 'auto', right: dir === 'rtl' ? '45%' : 'auto' }}>
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs border-2 border-white shadow-lg">2</div>
            </div>
            <div className="absolute" style={{ top: '40%', left: dir === 'ltr' ? '65%' : 'auto', right: dir === 'rtl' ? '65%' : 'auto' }}>
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-xs border-2 border-white shadow-lg">3</div>
            </div>
            <div className="absolute" style={{ top: '30%', left: dir === 'ltr' ? '55%' : 'auto', right: dir === 'rtl' ? '55%' : 'auto' }}>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4 rtl:space-x-reverse mt-2 text-xs text-gray-500">
            <span className="flex items-center"><span className="w-3 h-3 bg-blue-500 rounded-full me-2"></span>{t('homeVisitsMap.confirmed')}</span>
            <span className="flex items-center"><span className="w-3 h-3 bg-yellow-400 rounded-full me-2"></span>{t('homeVisitsMap.pending')}</span>
            <span className="flex items-center"><span className="w-3 h-3 bg-green-500 rounded-full me-2"></span>{t('homeVisitsMap.yourLocation')}</span>
        </div>
      </div>
      
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('homeVisitsMap.scheduled', { count: 3})}</h2>
        <div className="space-y-4">
          {scheduledVisits.map((visit, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <img src={visit.avatar} alt={visit.name} className="w-12 h-12 rounded-full" />
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <p className="font-semibold">{visit.name}</p>
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${visit.status === 'scheduled' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'}`}>{t(`homeVisitsMap.${visit.status}`)}</span>
                    </div>
                    <div className="space-y-1.5 text-sm text-gray-500">
                        <p className="flex items-start"><MapPinIcon className="w-4 h-4 me-2 mt-0.5 flex-shrink-0" />{visit.address}</p>
                        <div className="flex items-center gap-4">
                            <span className="flex items-center"><CalendarIcon className="w-4 h-4 me-2" />{t('homeVisitsMap.today')}</span>
                            <span className="flex items-center"><ClockIcon className="w-4 h-4 me-2" />{visit.time}</span>
                            <span className="flex items-center"><NavigationIcon className="w-4 h-4 me-2" />{visit.distance}</span>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-full md:w-auto">
                    <button className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        <NavigationIcon className="w-4 h-4" />
                        <span>{t('homeVisitsMap.navigate')}</span>
                    </button>
                    <div className="flex gap-2">
                        <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50">
                            <PhoneIcon className="w-4 h-4" />
                            <span>{t('homeVisitsMap.call')}</span>
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50">
                            <MessageSquareIcon className="w-4 h-4" />
                            <span>{t('homeVisitsMap.message')}</span>
                        </button>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('homeVisitsMap.completed')}</h2>
        <div className="space-y-4">
            {completedVisits.map((visit, i) => (
                <div key={i} className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <img src={visit.avatar} alt={visit.name} className="w-12 h-12 rounded-full" />
                            <div>
                                <p className="font-semibold">{visit.name}</p>
                                <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                                    <MapPinIcon className="w-4 h-4"/>
                                    <span>{visit.address}</span>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">Completed {visit.completed}</p>
                            </div>
                        </div>
                        <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">{t('homeVisitsMap.viewReport')}</button>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomeVisitsMap;
