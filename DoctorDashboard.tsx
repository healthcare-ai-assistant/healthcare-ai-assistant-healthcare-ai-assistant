
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ManageProfile from './components/ManageProfile';
import Appointments from './components/Appointments';
import BookingRequests from './components/BookingRequests';
import OnlineConsultation from './components/OnlineConsultation';
import HomeVisitsMap from './components/HomeVisitsMap';
import ConfirmRejectVisits from './components/ConfirmRejectVisits';
import PatientHistory from './components/PatientHistory';
import FollowUpAppointments from './components/FollowUpAppointments';
import Subscription from './components/Subscription';
import { useTranslation } from './i18n/useTranslation';

const pageComponents: { [key: string]: React.FC } = {
  'dashboard': Dashboard,
  'manage-profile': ManageProfile,
  'appointments': Appointments,
  'booking-requests': BookingRequests,
  'online-consultation': OnlineConsultation,
  'home-visits-map': HomeVisitsMap,
  'confirm-reject-visits': ConfirmRejectVisits,
  'patient-history': PatientHistory,
  'follow-up-appointments': FollowUpAppointments,
  'subscription': Subscription,
};

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState('dashboard');
  const { language, dir } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
  }, [language, dir]);

  const ActiveComponent = pageComponents[activePage];

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      <Sidebar 
        isSidebarOpen={isSidebarOpen} 
        setSidebarOpen={setSidebarOpen} 
        activePage={activePage}
        setActivePage={setActivePage}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
          <div className="container mx-auto px-6 py-8">
            {ActiveComponent && <ActiveComponent />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
