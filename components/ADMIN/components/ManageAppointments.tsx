import React, { useState } from 'react';
import { Search, ChevronDown, CircleCheckBig, X, Calendar, Clock } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';
import { useData } from '../contexts/DataContext';

const ManageAppointments: React.FC = () => {
  const { t } = useLanguage();
  const { appointments, updateAppointmentStatus } = useData();

  const [searchTerm, setSearchTerm] = useState('');

  const filteredAppointments = appointments.filter(apt => 
      apt.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      apt.doctorName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
       {/* Header */}
       <div>
          <h1 className="text-3xl font-bold text-gray-900">{t('appointmentsBookings')}</h1>
          <p className="mt-2 text-gray-500">{t('overseeAppointments')}</p>
       </div>

       {/* Filters */}
       <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
         <div className="flex flex-col sm:flex-row gap-4">
           <div className="relative flex-1">
             <Search className="absolute top-2.5 start-3 h-5 w-5 text-gray-400" />
             <input 
               type="text" 
               placeholder={t('searchPatientDoctor')} 
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2 ps-10 pe-4 text-sm outline-none focus:border-blue-500 transition-colors" 
             />
           </div>
           <div className="flex gap-4">
             <button className="flex items-center justify-between gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
               <span>{t('type')}</span>
               <ChevronDown className="h-4 w-4 text-gray-400" />
             </button>
             <button className="flex items-center justify-between gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
               <span>{t('status')}</span>
               <ChevronDown className="h-4 w-4 text-gray-400" />
             </button>
           </div>
         </div>
       </div>

       {/* List */}
       <div className="space-y-4">
         {filteredAppointments.map((apt) => (
           <div key={apt.id} className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                 <div className="flex items-center gap-2">
                    <div className={`flex items-center gap-2 rounded-full px-2.5 py-0.5 text-xs font-semibold ${apt.typeColorClass}`}>
                      <span>{t(apt.type === 'Online Consultation' ? 'onlineConsultation' : apt.type === 'Clinic Visit' ? 'clinicVisit' : 'homeVisit')}</span>
                    </div>
                    <div className={`flex items-center gap-2 rounded-full px-2.5 py-0.5 text-xs font-semibold ${apt.statusColorClass}`}>
                      <span>{t(apt.status)}</span>
                    </div>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                 <div>
                    <p className="text-xs font-medium text-gray-500 mb-1">{t('patient')}</p>
                    <div className="flex items-center gap-2">
                       <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${apt.patientSeed}`} alt="Avatar" className="h-8 w-8 rounded-full bg-gray-100" />
                       <span className="font-medium text-gray-900">{apt.patientName}</span>
                    </div>
                 </div>
                 <div>
                    <p className="text-xs font-medium text-gray-500 mb-1">{t('doctor')}</p>
                    <div className="flex items-center gap-2">
                       <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${apt.doctorSeed}`} alt="Avatar" className="h-8 w-8 rounded-full bg-gray-100" />
                       <span className="font-medium text-gray-900">{apt.doctorName}</span>
                    </div>
                 </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-3 pt-4 border-t border-gray-100">
                 <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                       <Calendar className="h-4 w-4" />
                       <span>{apt.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                       <Clock className="h-4 w-4" />
                       <span>{apt.time}</span>
                    </div>
                 </div>
                 
                 {apt.status === 'pending' && (
                     <div className="flex gap-2">
                        <button 
                            onClick={() => updateAppointmentStatus(apt.id, 'confirmed')}
                            className="flex items-center justify-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                            <CircleCheckBig className="h-4 w-4" />
                            <span>{t('confirm')}</span>
                        </button>
                        <button 
                            onClick={() => updateAppointmentStatus(apt.id, 'cancelled')}
                            className="flex items-center justify-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
                        >
                            <X className="h-4 w-4" />
                            <span>{t('cancel')}</span>
                        </button>
                    </div>
                 )}
                 {apt.status !== 'pending' && (
                     <div className="text-sm text-gray-400 italic">
                         {t(apt.status)}
                     </div>
                 )}
              </div>
           </div>
         ))}
       </div>

       {/* Stats */}
       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
             <h3 className="text-sm font-medium text-gray-600">{t('totalAppointments')}</h3>
             <div className="mt-2">
               <span className="text-3xl font-bold text-gray-900">{8532 + appointments.length - 4}</span>
               <p className="mt-1 text-xs text-gray-500">+892 {t('thisMonth')}</p>
             </div>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
             <h3 className="text-sm font-medium text-gray-600">{t('confirmed')}</h3>
             <div className="mt-2">
               <span className="text-3xl font-bold text-green-600">{7945 + appointments.filter(a => a.status === 'confirmed').length}</span>
               <p className="mt-1 text-xs text-gray-500">93% rate</p>
             </div>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
             <h3 className="text-sm font-medium text-gray-600">{t('pending')}</h3>
             <div className="mt-2">
               <span className="text-3xl font-bold text-yellow-600">{342 + appointments.filter(a => a.status === 'pending').length}</span>
               <p className="mt-1 text-xs text-gray-500">{t('awaitingConfirmation')}</p>
             </div>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
             <h3 className="text-sm font-medium text-gray-600">{t('cancelled')}</h3>
             <div className="mt-2">
               <span className="text-3xl font-bold text-red-600">{245 + appointments.filter(a => a.status === 'cancelled').length}</span>
               <p className="mt-1 text-xs text-gray-500">2.8% rate</p>
             </div>
          </div>
       </div>
    </div>
  );
}

export default ManageAppointments;