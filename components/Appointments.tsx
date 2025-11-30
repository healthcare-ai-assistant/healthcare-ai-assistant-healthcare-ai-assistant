
import React from 'react';
import { CalendarIcon, ClockIcon, MapPinIcon, UserIcon, PenIcon, XIcon, ChevronDownIcon } from './icons';
import { getManageAppointmentsData } from './data';
import { useTranslation } from '../i18n/useTranslation';

interface Appointment {
    name: string;
    type: string;
    date: string;
    time: string;
    duration: string;
    location: string;
    status: string;
}

interface AppointmentItemProps {
    data: Appointment;
}

const AppointmentItem: React.FC<AppointmentItemProps> = ({ data }) => (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div className="flex-1">
                <div className="flex items-center gap-3">
                    <div className="bg-gray-100 p-2 rounded-full">
                        <UserIcon className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800">{data.name}</p>
                        <p className="text-sm text-gray-500">{data.type}</p>
                    </div>
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
                    <span className="flex items-center"><CalendarIcon className="w-4 h-4 me-1.5" />{data.date}</span>
                    <span className="flex items-center"><ClockIcon className="w-4 h-4 me-1.5" />{data.time}</span>
                    <span className="flex items-center"><ClockIcon className="w-4 h-4 me-1.5" />{data.duration}</span>
                    <span className="flex items-center"><MapPinIcon className="w-4 h-4 me-1.5" />{data.location}</span>
                </div>
            </div>
            <div className="flex items-center gap-3 mt-4 sm:mt-0">
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    data.status === 'Confirmed' || data.status === 'مؤكد' ? 'bg-green-100 text-green-800' :
                    data.status === 'Pending' || data.status === 'قيد الانتظار' ? 'bg-yellow-100 text-yellow-800' : ''
                }`}>
                    {data.status}
                </span>
                <button className="p-2 rounded-md bg-gray-100 hover:bg-gray-200">
                    <PenIcon className="w-4 h-4 text-gray-600" />
                </button>
                <button className="p-2 rounded-md bg-gray-100 hover:bg-gray-200">
                    <XIcon className="w-4 h-4 text-red-600" />
                </button>
            </div>
        </div>
    </div>
);

const Appointments: React.FC = () => {
    const { t, dir } = useTranslation();
    const appointments = getManageAppointmentsData(t);
    
    const chevronClass = dir === 'rtl' ? "left-3" : "right-3";

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{t('appointments.title')}</h1>
            <p className="text-gray-500 mt-2">{t('appointments.subtitle')}</p>

            <div className="mt-6 bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">{t('appointments.filter')}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
                    <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700">{t('appointments.date')}</label>
                        <input type="date" id="date" className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm" />
                    </div>
                    <div>
                        <label htmlFor="type" className="block text-sm font-medium text-gray-700">{t('appointments.type')}</label>
                        <div className="relative mt-1">
                            <select id="type" className="appearance-none block w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm">
                                <option>{t('appointments.allTypes')}</option>
                            </select>
                             <ChevronDownIcon className={`w-4 h-4 absolute ${chevronClass} top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none`} />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="status" className="block text-sm font-medium text-gray-700">{t('appointments.status')}</label>
                         <div className="relative mt-1">
                            <select id="status" className="appearance-none block w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm">
                                <option>{t('appointments.allStatus')}</option>
                            </select>
                            <ChevronDownIcon className={`w-4 h-4 absolute ${chevronClass} top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none`} />
                        </div>
                    </div>
                    <button className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 h-10">{t('appointments.search')}</button>
                </div>
            </div>

            <div className="mt-6 space-y-4">
                {appointments.map((app, index) => (
                    <AppointmentItem key={index} data={app} />
                ))}
            </div>

            <div className="mt-8 bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                 <h3 className="text-xl font-semibold">{t('appointments.addNew')}</h3>
                 <p className="mt-1 text-sm text-gray-500">{t('appointments.addNewSubtitle')}</p>
                 <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                        <label htmlFor="patient-name" className="block text-sm font-medium text-gray-700">{t('appointments.patientName')}</label>
                        <input type="text" id="patient-name" placeholder={t('appointments.patientNamePlaceholder')} className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm" />
                     </div>
                     <div>
                        <label htmlFor="appointment-date" className="block text-sm font-medium text-gray-700">{t('appointments.appointmentDate')}</label>
                        <input type="date" id="appointment-date" className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm" />
                     </div>
                     <div>
                        <label htmlFor="appointment-time" className="block text-sm font-medium text-gray-700">{t('appointments.appointmentTime')}</label>
                        <input type="time" id="appointment-time" className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm" />
                     </div>
                     <div>
                        <label htmlFor="appointment-type" className="block text-sm font-medium text-gray-700">{t('appointments.appointmentType')}</label>
                         <div className="relative mt-1">
                            <select id="appointment-type" className="appearance-none block w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm">
                                <option>{t('appointments.selectType')}</option>
                            </select>
                            <ChevronDownIcon className={`w-4 h-4 absolute ${chevronClass} top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none`} />
                        </div>
                     </div>
                 </div>
                 <div className="mt-6">
                    <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">{t('appointments.createAppointment')}</button>
                 </div>
            </div>

        </div>
    );
};

export default Appointments;
