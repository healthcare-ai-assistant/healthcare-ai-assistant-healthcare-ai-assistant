import React, { useState } from 'react';
import { Search, ChevronDown, Plus, Pen, Trash2 } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';
import { Doctor } from '../types';
import { useData } from '../contexts/DataContext';

const ManageDoctors: React.FC = () => {
  const { t } = useLanguage();
  const { doctors, addDoctor, deleteDoctor } = useData();

  const [searchTerm, setSearchTerm] = useState('');
  const [newDoctorData, setNewDoctorData] = useState({
    name: '',
    email: '',
    specialization: '',
    experience: '',
    clinic: '',
    license: ''
  });

  // Handlers
  const handleDelete = (id: string) => {
    if (window.confirm(t('confirm') + '?')) {
      deleteDoctor(id);
    }
  };

  const handleAdd = () => {
    if (!newDoctorData.name || !newDoctorData.email) return;

    const newDoc: Doctor = {
      id: Date.now().toString(),
      name: newDoctorData.name,
      email: newDoctorData.email,
      specialization: newDoctorData.specialization || 'General',
      experience: newDoctorData.experience || '1',
      joinedDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      patients: 0,
      revenue: '$0',
      status: 'active',
      avatarSeed: newDoctorData.name.split(' ')[0].toLowerCase() + Math.random(),
      // Fix: Persist form values
      clinic: newDoctorData.clinic,
      license: newDoctorData.license
    };

    addDoctor(newDoc);
    setNewDoctorData({ name: '', email: '', specialization: '', experience: '', clinic: '', license: '' });
  };

  const filteredDoctors = doctors.filter(doc => 
    doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
       {/* Header */}
       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{t('manageDoctors')}</h1>
            <p className="mt-2 text-gray-500">{t('addEditRemoveDoctors')}</p>
          </div>
          <button 
            onClick={() => document.getElementById('add-doctor-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600"
          >
            <Plus className="h-4 w-4" />
            <span>{t('addDoctor')}</span>
          </button>
       </div>

       {/* Filters */}
       <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
         <div className="flex flex-col sm:flex-row gap-4">
           <div className="relative flex-1">
             <Search className="absolute top-2.5 start-3 h-5 w-5 text-gray-400" />
             <input 
               type="text" 
               placeholder={t('searchDoctor')} 
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2 ps-10 pe-4 text-sm outline-none focus:border-blue-500 transition-colors" 
             />
           </div>
           <div className="flex gap-4">
             <button className="flex items-center justify-between gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
               <span>{t('specialization')}</span>
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
         {filteredDoctors.map((doctor) => (
           <div key={doctor.id} className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${doctor.avatarSeed}`} alt="Avatar" className="h-12 w-12 rounded-full bg-gray-100" />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-gray-900">{doctor.name}</h3>
                    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${doctor.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-800'}`}>
                      {t(doctor.status)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{doctor.email}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-gray-500">
                    <span>{doctor.specialization}</span>
                    <span>{doctor.experience} {t('years')}</span>
                    {doctor.clinic && <span>• {doctor.clinic}</span>}
                    <span>{t('joined')} {doctor.joinedDate}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between gap-8 md:justify-end">
                 <div className="text-right">
                   <p className="text-sm text-gray-500">{t('patients')}</p>
                   <p className="font-semibold text-gray-900">{doctor.patients}</p>
                 </div>
                 <div className="text-right">
                   <p className="text-sm text-gray-500">{t('revenue')}</p>
                   <p className="font-semibold text-gray-900">{doctor.revenue}</p>
                 </div>
                 <div className="flex gap-2">
                   <button className="rounded-lg p-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                     <Pen className="h-4 w-4" />
                   </button>
                   <button 
                     onClick={() => handleDelete(doctor.id)}
                     className="rounded-lg p-2 text-red-500 hover:bg-red-50 hover:text-red-600 transition-colors"
                   >
                     <Trash2 className="h-4 w-4" />
                   </button>
                 </div>
              </div>
           </div>
         ))}
         {filteredDoctors.length === 0 && (
           <div className="text-center py-8 text-gray-500">No doctors found.</div>
         )}
       </div>

       {/* Add Form */}
       <div id="add-doctor-form" className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
         <h3 className="text-lg font-semibold text-gray-900">{t('addDoctor')}</h3>
         <p className="text-sm text-gray-500 mt-1">{t('registerNewDoctor')}</p>
         <div className="mt-6 grid gap-6 md:grid-cols-2">
           <div className="space-y-2">
             <label className="text-sm font-medium text-gray-700">{t('fullName')}</label>
             <input 
                type="text" 
                placeholder="Dr. Name"
                value={newDoctorData.name}
                onChange={(e) => setNewDoctorData({...newDoctorData, name: e.target.value})}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-blue-500 transition-colors" 
             />
           </div>
           <div className="space-y-2">
             <label className="text-sm font-medium text-gray-700">{t('emailAddress')}</label>
             <input 
                type="email" 
                placeholder="email@example.com"
                value={newDoctorData.email}
                onChange={(e) => setNewDoctorData({...newDoctorData, email: e.target.value})}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-blue-500 transition-colors" 
             />
           </div>
           <div className="space-y-2">
             <label className="text-sm font-medium text-gray-700">{t('specialization')}</label>
             <input 
                type="text" 
                placeholder={t('specialization')} 
                value={newDoctorData.specialization}
                onChange={(e) => setNewDoctorData({...newDoctorData, specialization: e.target.value})}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-blue-500 transition-colors" 
             />
           </div>
           <div className="space-y-2">
             <label className="text-sm font-medium text-gray-700">{t('yearsOfExperience')}</label>
             <input 
                type="number" 
                placeholder={t('years')} 
                value={newDoctorData.experience}
                onChange={(e) => setNewDoctorData({...newDoctorData, experience: e.target.value})}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-blue-500 transition-colors" 
             />
           </div>
           <div className="space-y-2">
             <label className="text-sm font-medium text-gray-700">{t('clinicName')}</label>
             <input 
                type="text" 
                placeholder={t('clinicName')}
                value={newDoctorData.clinic}
                onChange={(e) => setNewDoctorData({...newDoctorData, clinic: e.target.value})}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-blue-500 transition-colors" 
             />
           </div>
           <div className="space-y-2">
             <label className="text-sm font-medium text-gray-700">{t('licenseNumber')}</label>
             <input 
                type="text" 
                placeholder={t('licenseNumber')} 
                value={newDoctorData.license}
                onChange={(e) => setNewDoctorData({...newDoctorData, license: e.target.value})}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-blue-500 transition-colors" 
             />
           </div>
         </div>
         <div className="mt-6">
           <button 
             onClick={handleAdd}
             className="rounded-xl bg-blue-500 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600"
           >
             {t('addDoctor')}
           </button>
         </div>
       </div>

       {/* Stats */}
       <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
             <h3 className="text-sm font-medium text-gray-600">{t('totalDoctors')}</h3>
             <div className="mt-2">
               <span className="text-3xl font-bold text-gray-900">{doctors.length}</span>
               <p className="mt-1 text-xs text-gray-500">+28 {t('thisMonth')}</p>
             </div>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
             <h3 className="text-sm font-medium text-gray-600">{t('activeDoctors')}</h3>
             <div className="mt-2">
               <span className="text-3xl font-bold text-green-600">{doctors.filter(d => d.status === 'active').length}</span>
               <p className="mt-1 text-xs text-gray-500">96% {t('activeRate')}</p>
             </div>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
             <h3 className="text-sm font-medium text-gray-600">{t('pendingVerification')}</h3>
             <div className="mt-2">
               <span className="text-3xl font-bold text-orange-600">8</span>
               <p className="mt-1 text-xs text-gray-500">{t('awaitingApproval')}</p>
             </div>
          </div>
       </div>
    </div>
  );
}

export default ManageDoctors;