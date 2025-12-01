import React, { useState } from 'react';
import { Bell, ChevronDown, Users, CheckCircle, Clock, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useData } from '../contexts/DataContext';

const ManageNotifications: React.FC = () => {
  const { t } = useLanguage();
  const { users } = useData();

  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const [history, setHistory] = useState([
    {
        id: 1,
        title: "System Maintenance Notice",
        message: "Platform maintenance scheduled for Dec 20, 2024 from 2 AM to 4 AM",
        date: "Dec 15, 2024",
        target: "All Users",
        sentCount: 2847,
        readCount: 2345,
        status: "Sent",
        statusColor: "bg-green-100 text-green-700"
    },
    {
        id: 2,
        title: "New Feature: Video Consultations",
        message: "We've launched video consultation feature for online appointments",
        date: "Dec 10, 2024",
        target: "All Doctors",
        sentCount: 324,
        readCount: 298,
        status: "Sent",
        statusColor: "bg-green-100 text-green-700"
    },
    {
        id: 3,
        title: "Payment Method Update",
        message: "Please update your payment method to avoid subscription interruption",
        date: "Dec 20, 2024",
        target: "Doctors with expiring subscriptions",
        sentCount: 0,
        readCount: 0,
        status: "Scheduled",
        statusColor: "bg-blue-100 text-blue-700"
    },
    {
        id: 4,
        title: "New Safety Guidelines",
        message: "Updated health and safety guidelines for clinic visits",
        date: "Not sent",
        target: "All Users & Doctors",
        sentCount: 0,
        readCount: 0,
        status: "Draft",
        statusColor: "bg-gray-100 text-gray-700"
    }
  ]);

  const handleSend = () => {
      if(!title || !message) return;
      const newNotif = {
        id: Date.now(),
        title: title,
        message: message,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric'}),
        target: "All Users",
        // Dynamic sent count based on actual users in system + offset for realism
        sentCount: users.length + 2842, 
        readCount: 0,
        status: "Sent",
        statusColor: "bg-green-100 text-green-700"
      };
      setHistory([newNotif, ...history]);
      setTitle('');
      setMessage('');
      alert("Notification Sent!");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{t('groupNotifications')}</h1>
          <p className="mt-2 text-gray-500">{t('sendAnnouncements')}</p>
        </div>
        <button 
          onClick={() => document.getElementById('compose-area')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center gap-2 rounded-xl bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600"
        >
          <Bell className="h-4 w-4" />
          <span>{t('newNotification')}</span>
        </button>
      </div>

      {/* Compose Notification */}
      <div id="compose-area" className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-900">{t('composeNotification')}</h3>
        <p className="mt-1 text-sm text-gray-500">{t('createSendNotification')}</p>
        
        <div className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">{t('notificationTitle')}</label>
            <input 
              type="text" 
              placeholder="e.g., New Feature Update" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-blue-500 transition-colors" 
            />
          </div>
          
          <div>
            <label className="text-sm font-medium text-gray-700">{t('message')}</label>
            <textarea 
              placeholder="Enter your notification message..." 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-2 min-h-[128px] w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-blue-500 transition-colors"
            ></textarea>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="text-sm font-medium text-gray-700">{t('targetAudience')}</label>
              <button className="mt-2 flex w-full items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                <span>Select audience</span>
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </button>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">{t('notificationType')}</label>
              <button className="mt-2 flex w-full items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                <span>Select type</span>
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </button>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">{t('schedule')}</label>
              <button className="mt-2 flex w-full items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                <span>Select schedule</span>
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </button>
            </div>
          </div>

          <div className="flex gap-2 pt-2">
            <button 
              onClick={handleSend}
              className="flex items-center gap-2 rounded-xl bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600"
            >
              <Send className="h-4 w-4" />
              <span>{t('sendNotification')}</span>
            </button>
            <button className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
              {t('saveDraft')}
            </button>
          </div>
        </div>
      </div>

      {/* Notification History */}
      <div>
        <h2 className="mb-4 text-xl font-semibold text-gray-900">{t('notificationHistory')}</h2>
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
          <div className="divide-y divide-gray-200">
            
            {history.map((item) => (
                <div key={item.id} className="p-6 transition-colors hover:bg-gray-50">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold text-gray-900">{item.title}</p>
                        <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${item.statusColor}`}>
                            {item.status === 'Sent' ? t('sent') : item.status === 'Scheduled' ? t('scheduled') : t('draft')}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">{item.message}</p>
                      <div className="mt-3 flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{t('target')}: {item.target}</span>
                        </div>
                        {item.status === 'Sent' && (
                            <>
                                <div className="flex items-center gap-1">
                                    <Bell className="h-4 w-4" />
                                    <span>{item.sentCount} {t('sent')}</span>
                                </div>
                                <div className="flex items-center gap-1 text-green-600">
                                    <CheckCircle className="h-4 w-4" />
                                    <span>{item.readCount} {t('reads')}</span>
                                </div>
                            </>
                        )}
                      </div>
                      
                      {item.status !== 'Sent' && (
                          <div className="mt-3 flex gap-2">
                            <button className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors border border-gray-200 rounded-lg px-3 py-1 bg-gray-50">
                                {t('edit')}
                            </button>
                            {item.status === 'Draft' && (
                                <button className="flex items-center gap-1 text-sm font-medium text-white hover:bg-blue-600 transition-colors bg-blue-500 rounded-lg px-3 py-1">
                                    <Send className="h-3 w-3" />
                                    <span>{t('sendNow')}</span>
                                </button>
                            )}
                          </div>
                      )}
                    </div>
                    <span className="text-xs text-gray-500 whitespace-nowrap">{item.date}</span>
                  </div>
                </div>
            ))}

          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
          <h3 className="text-sm font-medium text-gray-600">{t('totalSent')}</h3>
          <div className="mt-2">
            <span className="text-3xl font-bold text-gray-900">{history.filter(h => h.status === 'Sent').length + 230}</span>
            <p className="mt-1 text-xs text-gray-500">{t('allTime')}</p>
          </div>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
          <h3 className="text-sm font-medium text-gray-600">{t('thisMonth')}</h3>
          <div className="mt-2">
            <span className="text-3xl font-bold text-gray-900">{history.filter(h => h.status === 'Sent').length}</span>
            <p className="mt-1 text-xs text-gray-500">{t('notificationsSent')}</p>
          </div>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
          <h3 className="text-sm font-medium text-gray-600">{t('avgReadRate')}</h3>
          <div className="mt-2">
            <span className="text-3xl font-bold text-green-600">82%</span>
            <p className="mt-1 text-xs text-gray-500">{t('openRate')}</p>
          </div>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
          <h3 className="text-sm font-medium text-gray-600">{t('scheduled')}</h3>
          <div className="mt-2">
            <span className="text-3xl font-bold text-blue-600">{history.filter(h => h.status === 'Scheduled').length}</span>
            <p className="mt-1 text-xs text-gray-500">{t('pendingSend')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageNotifications;