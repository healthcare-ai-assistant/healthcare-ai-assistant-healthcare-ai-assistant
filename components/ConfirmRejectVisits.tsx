
import React from 'react';
import { CalendarIcon, ClockIcon, MapPinIcon, CircleAlertIcon, CircleCheckBigIcon, CircleXIcon, MessageSquareIcon } from './icons';
import { getConfirmReject_pendingData, getConfirmReject_confirmedData, getConfirmReject_rejectedData } from './data';
import { useTranslation } from '../i18n/useTranslation';

const ConfirmRejectVisits: React.FC = () => {
    const { t } = useTranslation();
    const pendingRequests = getConfirmReject_pendingData(t);
    const confirmedVisits = getConfirmReject_confirmedData(t);
    const rejectedRequests = getConfirmReject_rejectedData(t);

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{t('confirmReject.title')}</h1>
            <p className="text-gray-500 mt-2">{t('confirmReject.subtitle')}</p>

            <div className="mt-6">
                <div className="mb-4">
                    <h2 className="text-2xl font-semibold text-gray-800">{t('confirmReject.pending', {count: 3})}</h2>
                    <p className="text-sm text-gray-500">{t('confirmReject.awaiting')}</p>
                </div>
                <div className="space-y-4">
                    {pendingRequests.map((req, index) => (
                        <div key={index} className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                             <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                                <div className="flex-1 flex items-start gap-4">
                                    <img className="w-12 h-12 rounded-full flex-shrink-0" src={req.avatar} alt={req.name} />
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <p className="font-semibold">{req.name}</p>
                                             <span className="flex items-center text-xs font-semibold px-2.5 py-0.5 bg-yellow-100 text-yellow-800 border border-gray-200 rounded-full">
                                                <CircleAlertIcon className="w-3 h-3 me-1" />
                                                {t('appointments.pending')}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-700 mb-2">{req.reason}</p>
                                        <div className="space-y-1.5 text-sm text-gray-600">
                                            <p className="flex items-center"><CalendarIcon className="w-4 h-4 me-2" />{t('bookingRequests.requested', {time: req.date})}</p>
                                            <p className="flex items-start"><MapPinIcon className="w-4 h-4 me-2 mt-0.5 flex-shrink-0" />{req.address}</p>
                                            <p className="flex items-center"><ClockIcon className="w-4 h-4 me-2" />{t('bookingRequests.sent', {time: req.sent})}</p>
                                        </div>
                                    </div>
                                </div>
                             </div>
                             <div className="mt-4 pt-4 border-t border-yellow-200 flex flex-wrap gap-2">
                                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 min-w-[120px]">
                                    <CircleCheckBigIcon className="w-4 h-4" />
                                    <span>{t('confirmReject.confirm')}</span>
                                </button>
                                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white text-red-600 border border-gray-200 rounded-lg hover:bg-gray-50 min-w-[120px]">
                                    <CircleXIcon className="w-4 h-4" />
                                    <span>{t('confirmReject.reject')}</span>
                                </button>
                                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 min-w-[120px]">
                                    <MessageSquareIcon className="w-4 h-4" />
                                    <span>{t('confirmReject.message')}</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="mt-8">
                 <div className="mb-4">
                    <h2 className="text-2xl font-semibold text-gray-800">{t('confirmReject.confirmed', {count: 2})}</h2>
                </div>
                <div className="space-y-4">
                    {confirmedVisits.map((visit, index) => (
                         <div key={index} className="bg-green-50 p-6 rounded-lg border border-green-200">
                             <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <img className="w-12 h-12 rounded-full" src={visit.avatar} alt={visit.name} />
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <p className="font-semibold">{visit.name}</p>
                                            <span className="flex items-center text-xs font-semibold px-2.5 py-0.5 bg-green-600 text-white rounded-full">
                                                <CircleCheckBigIcon className="w-3 h-3 me-1" />
                                                {t('appointments.confirmed')}
                                            </span>
                                        </div>
                                        <p className="flex items-center text-sm text-gray-600 mt-1"><CalendarIcon className="w-4 h-4 me-2"/>{visit.time}</p>
                                        <p className="flex items-start text-sm text-gray-600 mt-1"><MapPinIcon className="w-4 h-4 me-2 mt-0.5 flex-shrink-0"/>{visit.address}</p>
                                        <p className="text-xs text-gray-500 mt-1">Confirmed {visit.confirmed}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">{t('bookingRequests.reschedule')}</button>
                                    <button className="px-4 py-2 text-sm font-medium text-red-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">{t('bookingRequests.cancel')}</button>
                                </div>
                             </div>
                         </div>
                    ))}
                </div>
            </div>

            <div className="mt-8">
                 <div className="mb-4">
                    <h2 className="text-2xl font-semibold text-gray-800">{t('confirmReject.rejected')}</h2>
                </div>
                <div className="space-y-4">
                    {rejectedRequests.map((req, index) => (
                         <div key={index} className="bg-red-50 p-6 rounded-lg border border-red-200">
                              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <img className="w-12 h-12 rounded-full" src={req.avatar} alt={req.name} />
                                    <div>
                                        <p className="font-semibold">{req.name}</p>
                                        <p className="text-sm text-gray-600">Reason: {req.reason}</p>
                                        <p className="text-xs text-gray-500 mt-1">Rejected on {req.rejectedDate}</p>
                                    </div>
                                </div>
                                <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">{t('confirmReject.viewDetails')}</button>
                             </div>
                         </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-sm font-medium text-gray-600">{t('confirmReject.pendingReviews')}</h3>
                    <p className="text-3xl font-bold mt-2 text-yellow-600">3</p>
                    <p className="text-xs text-gray-500">{t('confirmReject.awaiting')}</p>
                </div>
                 <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-sm font-medium text-gray-600">{t('confirmReject.confirmedVisits')}</h3>
                    <p className="text-3xl font-bold mt-2 text-green-600">2</p>
                    <p className="text-xs text-gray-500">{t('confirmReject.scheduledVisits')}</p>
                </div>
                 <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-sm font-medium text-gray-600">{t('confirmReject.confirmationRate')}</h3>
                    <p className="text-3xl font-bold mt-2 text-blue-600">87%</p>
                    <p className="text-xs text-gray-500">{t('confirmReject.thisMonth')}</p>
                </div>
            </div>

        </div>
    );
};

export default ConfirmRejectVisits;
