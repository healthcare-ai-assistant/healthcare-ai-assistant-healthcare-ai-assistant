import React, { useState } from 'react';
import { Search, ChevronDown, Plus, Pen, Trash2, Clock } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';
import { User } from '../types';
import { useData } from '../contexts/DataContext';

const ManageUsers: React.FC = () => {
  const { t } = useLanguage();
  const { users, addUser, deleteUser } = useData();

  const [searchTerm, setSearchTerm] = useState('');
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    address: '',
    city: ''
  });

  const handleDelete = (id: string) => {
    if (window.confirm(t('confirm') + '?')) {
        deleteUser(id);
    }
  };

  const handleAdd = () => {
      if(!newUser.name || !newUser.email) return;

      const user: User = {
          id: Date.now().toString(),
          name: newUser.name,
          email: newUser.email,
          phone: newUser.phone || '+1 (555) 000-0000',
          joinedDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric'}),
          appointments: 0,
          lastActive: 'Just now',
          status: 'active',
          avatarSeed: newUser.name.replace(/\s/g, '').toLowerCase() + Math.random(),
          // Fix: Persist form values
          age: newUser.age,
          address: newUser.address,
          city: newUser.city
      };

      addUser(user);
      setNewUser({ name: '', email: '', phone: '', age: '', address: '', city: ''});
  };

  const filteredUsers = users.filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
       {/* Header */}
       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{t('manageUsers')}</h1>
            <p className="mt-2 text-gray-500">{t('viewManageUsers')}</p>
          </div>
          <button 
            onClick={() => document.getElementById('add-user-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600"
          >
            <Plus className="h-4 w-4" />
            <span>{t('addUser')}</span>
          </button>
       </div>

       {/* Filters */}
       <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
         <div className="flex flex-col sm:flex-row gap-4">
           <div className="relative flex-1">
             <Search className="absolute top-2.5 start-3 h-5 w-5 text-gray-400" />
             <input 
               type="text" 
               placeholder={t('searchUser')} 
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2 ps-10 pe-4 text-sm outline-none focus:border-blue-500 transition-colors" 
             />
           </div>
           <div className="flex gap-4">
             <button className="flex items-center justify-between gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
               <span>{t('status')}</span>
               <ChevronDown className="h-4 w-4 text-gray-400" />
             </button>
             <button className="flex items-center justify-between gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
               <span>{t('joinDate')}</span>
               <ChevronDown className="h-4 w-4 text-gray-400" />
             </button>
           </div>
         </div>
       </div>

       {/* List */}
       <div className="space-y-4">
         {filteredUsers.map((user) => (
           <div key={user.id} className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.avatarSeed}`} alt="Avatar" className="h-12 w-12 rounded-full bg-gray-100" />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-gray-900">{user.name}</h3>
                    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${user.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-800'}`}>
                      {t(user.status)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{user.email}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-gray-500">
                    <span>{user.phone}</span>
                    {user.city && <span>{user.city}</span>}
                    <span>{t('joined')} {user.joinedDate}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between gap-8 md:justify-end">
                 <div className="text-right">
                   <p className="text-sm text-gray-500">{t('totalAppointments')}</p>
                   <p className="font-semibold text-gray-900">{user.appointments}</p>
                 </div>
                 <div className="text-right">
                   <div className="flex items-center justify-end gap-1 text-gray-500">
                      <Clock className="h-3 w-3" />
                      <p className="text-sm">{t('lastActive')}</p>
                   </div>
                   <p className="font-semibold text-gray-900">{user.lastActive}</p>
                 </div>
                 <div className="flex gap-2">
                   <button className="rounded-lg p-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                     <Pen className="h-4 w-4" />
                   </button>
                   <button 
                     onClick={() => handleDelete(user.id)}
                     className="rounded-lg p-2 text-red-500 hover:bg-red-50 hover:text-red-600 transition-colors"
                   >
                     <Trash2 className="h-4 w-4" />
                   </button>
                 </div>
              </div>
           </div>
         ))}
         {filteredUsers.length === 0 && (
             <div className="text-center py-6 text-gray-500">No users found.</div>
         )}
       </div>

       {/* Add Form */}
       <div id="add-user-form" className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
         <h3 className="text-lg font-semibold text-gray-900">{t('addUser')}</h3>
         <p className="text-sm text-gray-500 mt-1">{t('registerNewUser')}</p>
         <div className="mt-6 grid gap-6 md:grid-cols-2">
           <div className="space-y-2">
             <label className="text-sm font-medium text-gray-700">{t('fullName')}</label>
             <input 
                type="text" 
                placeholder={t('fullName')} 
                value={newUser.name}
                onChange={(e) => setNewUser({...newUser, name: e.target.value})}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-blue-500 transition-colors" 
             />
           </div>
           <div className="space-y-2">
             <label className="text-sm font-medium text-gray-700">{t('emailAddress')}</label>
             <input 
                type="email" 
                placeholder="email@example.com" 
                value={newUser.email}
                onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-blue-500 transition-colors" 
             />
           </div>
           <div className="space-y-2">
             <label className="text-sm font-medium text-gray-700">{t('phoneNumber')}</label>
             <input 
                type="tel" 
                placeholder="+1 (555) 000-0000" 
                value={newUser.phone}
                onChange={(e) => setNewUser({...newUser, phone: e.target.value})}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-blue-500 transition-colors" 
             />
           </div>
           <div className="space-y-2">
             <label className="text-sm font-medium text-gray-700">{t('age')}</label>
             <input 
                type="number" 
                placeholder={t('age')} 
                value={newUser.age}
                onChange={(e) => setNewUser({...newUser, age: e.target.value})}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-blue-500 transition-colors" 
             />
           </div>
           <div className="space-y-2">
             <label className="text-sm font-medium text-gray-700">{t('address')}</label>
             <input 
                type="text" 
                placeholder={t('address')} 
                value={newUser.address}
                onChange={(e) => setNewUser({...newUser, address: e.target.value})}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-blue-500 transition-colors" 
             />
           </div>
           <div className="space-y-2">
             <label className="text-sm font-medium text-gray-700">{t('city')}</label>
             <input 
                type="text" 
                placeholder={t('city')} 
                value={newUser.city}
                onChange={(e) => setNewUser({...newUser, city: e.target.value})}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-blue-500 transition-colors" 
             />
           </div>
         </div>
         <div className="mt-6">
           <button 
             onClick={handleAdd}
             className="rounded-xl bg-blue-500 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600"
           >
             {t('addUser')}
           </button>
         </div>
       </div>

       {/* Stats */}
       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
             <h3 className="text-sm font-medium text-gray-600">{t('totalUsers')}</h3>
             <div className="mt-2">
               <span className="text-3xl font-bold text-gray-900">{users.length + 2842}</span>
               <p className="mt-1 text-xs text-gray-500">+145 {t('thisMonth')}</p>
             </div>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
             <h3 className="text-sm font-medium text-gray-600">{t('activeUsersToday')}</h3>
             <div className="mt-2">
               <span className="text-3xl font-bold text-green-600">2,721</span>
               <p className="mt-1 text-xs text-gray-500">95.6% {t('activeRate')}</p>
             </div>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
             <h3 className="text-sm font-medium text-gray-600">{t('suspendedUsers')}</h3>
             <div className="mt-2">
               <span className="text-3xl font-bold text-red-600">{users.filter(u => u.status === 'suspended').length + 80}</span>
               <p className="mt-1 text-xs text-gray-500">{t('underReview')}</p>
             </div>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
             <h3 className="text-sm font-medium text-gray-600">{t('thisWeekSignups')}</h3>
             <div className="mt-2">
               <span className="text-3xl font-bold text-blue-600">42</span>
               <p className="mt-1 text-xs text-gray-500">{t('newRegistrations')}</p>
             </div>
          </div>
       </div>
    </div>
  );
}

export default ManageUsers;