import React, { useState } from 'react';
import { Search, ChevronDown, Clock, DollarSign } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';
import { useData } from '../contexts/DataContext';

const ManageSubscriptions: React.FC = () => {
  const { t } = useLanguage();
  const { subscriptions, extendSubscription, cancelSubscription } = useData();

  const [searchTerm, setSearchTerm] = useState('');

  const handleCancel = (id: string) => {
    if (window.confirm('Are you sure you want to cancel this subscription?')) {
      cancelSubscription(id);
    }
  };

  const filteredSubs = subscriptions.filter(sub => 
    sub.doctorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sub.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
       {/* Header */}
       <div>
          <h1 className="text-3xl font-bold text-gray-900">{t('subscriptions')}</h1>
          <p className="mt-2 text-gray-500">{t('trackSubscriptions')}</p>
       </div>

       {/* Filters */}
       <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
         <div className="flex flex-col sm:flex-row gap-4">
           <div className="relative flex-1">
             <Search className="absolute top-2.5 start-3 h-5 w-5 text-gray-400" />
             <input 
               type="text" 
               placeholder={t('searchDoctorEmail')} 
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2 ps-10 pe-4 text-sm outline-none focus:border-blue-500 transition-colors" 
             />
           </div>
           <div className="flex gap-4">
             <button className="flex items-center justify-between gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
               <span>{t('plan')}</span>
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
         {filteredSubs.map((sub) => {
           // Helper to determine border color based on status for specific visual flair in original design
           let borderClass = 'border-gray-200 bg-white';
           if (sub.status === 'Expiring Soon') borderClass = 'border-yellow-200 bg-yellow-50/30';
           if (sub.status === 'Expired') borderClass = 'border-red-200 bg-red-50/30';

           return (
             <div key={sub.id} className={`flex flex-col gap-4 rounded-xl border ${borderClass} p-6 shadow-sm hover:shadow-md transition-shadow`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                   <div className="flex items-start gap-4">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${sub.avatarSeed}`} alt="Avatar" className="h-12 w-12 rounded-full bg-gray-100" />
                      <div>
                         <div className="flex items-center flex-wrap gap-2">
                            <h3 className="font-semibold text-gray-900">{sub.doctorName}</h3>
                            <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${sub.planColorClass}`}>
                              {t(sub.plan.toLowerCase() as any) || sub.plan}
                            </span>
                            <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${sub.statusColorClass}`}>
                              {t(sub.status === 'active' ? 'active' : sub.status === 'Expired' ? 'expired' : 'expiringSoon')}
                            </span>
                         </div>
                         <p className="text-sm text-gray-500 mt-0.5">{sub.email}</p>
                         <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                            <span>{t('started')}: {sub.startDate}</span>
                            <span>{t('renews')}: {sub.renewDate}</span>
                         </div>
                      </div>
                   </div>

                   <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                      <div className="text-right sm:text-right">
                         <div className="flex items-center justify-end gap-1 text-gray-500">
                            <DollarSign className="h-3 w-3" />
                            <span className="text-sm">{t('price')}</span>
                         </div>
                         <p className="font-semibold text-gray-900">{sub.price}<span className="text-xs font-normal text-gray-500">{t('month')}</span></p>
                      </div>
                      <div className="text-right sm:text-right">
                         <div className="flex items-center justify-end gap-1 text-gray-500">
                            <Clock className="h-3 w-3" />
                            <span className="text-sm">{t('daysLeft')}</span>
                         </div>
                         <p className={`font-semibold ${sub.daysLeftColorClass}`}>
                           {sub.daysLeft === 'Expired' ? t('expired') : sub.daysLeft}
                         </p>
                      </div>
                      <div className="flex gap-2">
                         <button 
                            onClick={() => extendSubscription(sub.id)}
                            className={`px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors ${sub.status === 'active' ? 'bg-gray-50' : 'bg-white border border-gray-200 shadow-sm hover:bg-gray-50'}`}
                         >
                            {t('extend')}
                         </button>
                         {sub.status !== 'Expired' && (
                             <button 
                                onClick={() => handleCancel(sub.id)}
                                className={`px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors ${sub.status === 'active' ? 'bg-gray-50' : 'bg-white border border-gray-200 shadow-sm hover:bg-red-50'}`}
                             >
                                {t('cancel')}
                             </button>
                         )}
                      </div>
                   </div>
                </div>
             </div>
           );
         })}
       </div>

       {/* Stats */}
       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
             <h3 className="text-sm font-medium text-gray-600">{t('activeSubscriptions')}</h3>
             <div className="mt-2">
               <span className="text-3xl font-bold text-green-600">{subscriptions.filter(s => s.status === 'active').length + 310}</span>
               <p className="mt-1 text-xs text-gray-500">96% of doctors</p>
             </div>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
             <h3 className="text-sm font-medium text-gray-600">{t('monthlyRevenue')}</h3>
             <div className="mt-2">
               <span className="text-3xl font-bold text-gray-900">$24,500</span>
               <p className="mt-1 text-xs text-gray-500">{t('fromSubscriptions')}</p>
             </div>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
             <h3 className="text-sm font-medium text-gray-600">{t('expiringSoon')}</h3>
             <div className="mt-2">
               <span className="text-3xl font-bold text-yellow-600">{subscriptions.filter(s => s.status === 'Expiring Soon').length + 7}</span>
               <p className="mt-1 text-xs text-gray-500">{t('next7Days')}</p>
             </div>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
             <h3 className="text-sm font-medium text-gray-600">{t('expired')}</h3>
             <div className="mt-2">
               <span className="text-3xl font-bold text-red-600">{subscriptions.filter(s => s.status === 'Expired').length + 3}</span>
               <p className="mt-1 text-xs text-gray-500">{t('actionNeeded')}</p>
             </div>
          </div>
       </div>
    </div>
  );
}

export default ManageSubscriptions;