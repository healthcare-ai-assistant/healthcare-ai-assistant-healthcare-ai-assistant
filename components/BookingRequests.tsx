
import React from 'react';
import { UserIcon, CalendarIcon, ClockIcon, CircleCheckBigIcon, XIcon } from './icons';
import { getBookingRequests_pendingData, getBookingRequests_acceptedData } from './data';
import { useTranslation } from '../i18n/useTranslation';

const BookingRequests: React.FC = () => {
    const { t } = useTranslation();
    const pendingRequests = getBookingRequests_pendingData(t);
    const acceptedBookings = getBookingRequests_acceptedData(t);

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{t('bookingRequests.title')}</h1>
            <p className="text-gray-500 mt-2">{t('bookingRequests.subtitle')}</p>

            <div className="mt-6">
                <div className="mb-4">
                    <h2 className="text-2xl font-semibold text-gray-800">{t('bookingRequests.pending', {count: 4})}</h2>
                </div>
                <div className="space-y-4">
                    {pendingRequests.map((req, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                                <div className="flex-1 flex items-start gap-4">
                                    <img className="w-12 h-12 rounded-full flex-shrink-0" src={req.avatar} alt={req.name} />
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <p className="font-semibold">{req.name}</p>
                                            <span className="text-xs font-semibold px-2.5 py-0.5 border rounded-full">{req.type}</span>
                                        </div>
                                        <p className="text-sm text-gray-600 mb-3">{req.reason}</p>
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-x-4 gap-y-2 text-sm text-gray-500">
                                            <span className="flex items-center"><CalendarIcon className="w-4 h-4 me-2" />{req.requested}</span>
                                            <span className="flex items-center"><ClockIcon className="w-4 h-4 me-2" />{req.sent}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex md:flex-col gap-2 w-full md:w-auto">
                                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                                        <CircleCheckBigIcon className="w-4 h-4" />
                                        <span>{t('bookingRequests.accept')}</span>
                                    </button>
                                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white text-red-600 border border-gray-200 rounded-lg hover:bg-gray-50">
                                        <XIcon className="w-4 h-4" />
                                        <span>{t('bookingRequests.decline')}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-8">
                 <div className="mb-4">
                    <h2 className="text-2xl font-semibold text-gray-800">{t('bookingRequests.accepted', {count: 2})}</h2>
                </div>
                <div className="space-y-4">
                    {acceptedBookings.map((booking, index) => (
                         <div key={index} className="bg-green-50 p-6 rounded-lg border border-green-200">
                             <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <img className="w-12 h-12 rounded-full" src={booking.avatar} alt={booking.name} />
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <p className="font-semibold">{booking.name}</p>
                                            <span className="flex items-center text-xs font-semibold px-2.5 py-0.5 bg-green-600 text-white rounded-full">
                                                <CircleCheckBigIcon className="w-3 h-3 me-1" />
                                                {booking.type}
                                            </span>
                                        </div>
                                        <p className="flex items-center text-sm text-gray-600 mt-1"><CalendarIcon className="w-4 h-4 me-2"/>{booking.time}</p>
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

             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-sm font-medium text-gray-600">{t('bookingRequests.pendingRequestsStat')}</h3>
                    <p className="text-3xl font-bold mt-2 text-orange-600">4</p>
                    <p className="text-xs text-gray-500">{t('bookingRequests.awaitingResponse')}</p>
                </div>
                 <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-sm font-medium text-gray-600">{t('bookingRequests.acceptedThisWeek')}</h3>
                    <p className="text-3xl font-bold mt-2 text-green-600">12</p>
                    <p className="text-xs text-gray-500">{t('bookingRequests.confirmedBookings')}</p>
                </div>
                 <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-sm font-medium text-gray-600">{t('bookingRequests.acceptanceRate')}</h3>
                    <p className="text-3xl font-bold mt-2 text-blue-600">94%</p>
                    <p className="text-xs text-gray-500">{t('bookingRequests.thisMonth')}</p>
                </div>
            </div>

        </div>
    );
};

export default BookingRequests;
