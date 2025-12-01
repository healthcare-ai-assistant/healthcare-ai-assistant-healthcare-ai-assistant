import React, { useState } from 'react';
import Layout from './components/Layout';
import DashboardStats from './components/DashboardStats';
import SystemMetrics from './components/SystemMetrics';
import QuickActions from './components/QuickActions';
import MostUsedServices from './components/MostUsedServices';
import RecentActivity from './components/RecentActivity';
import ManageDoctors from './components/ManageDoctors';
import ManageUsers from './components/ManageUsers';
import ManageAppointments from './components/ManageAppointments';
import ManageSubscriptions from './components/ManageSubscriptions';
import ManagePrices from './components/ManagePrices';
import ManageReviews from './components/ManageReviews';
import ManageNotifications from './components/ManageNotifications';
import ManageSecurity from './components/ManageSecurity';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { DataProvider } from './contexts/DataContext';

interface DashboardContentProps {
  onNavigate: (view: string) => void;
}

const DashboardContent: React.FC<DashboardContentProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{t('appTitle')} - {t('dashboard')}</h1>
        <p className="mt-2 text-gray-500">{t('systemMetricsToday')}</p>
      </div>

      <div className="mt-8">
        <DashboardStats />
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <SystemMetrics />
        <div>
          <QuickActions onNavigate={onNavigate} />
        </div>
      </div>

      <MostUsedServices />
      <RecentActivity />
    </>
  );
};

const MainApp: React.FC = () => {
  const [currentView, setCurrentView] = useState('dashboard');

  const renderContent = () => {
    switch (currentView) {
      case 'doctors': return <ManageDoctors />;
      case 'users': return <ManageUsers />;
      case 'appointments': return <ManageAppointments />;
      case 'subscriptions': return <ManageSubscriptions />;
      case 'prices': return <ManagePrices />;
      case 'reviews': return <ManageReviews />;
      case 'notifications': return <ManageNotifications />;
      case 'security': return <ManageSecurity />;
      case 'dashboard':
      default: return <DashboardContent onNavigate={setCurrentView} />;
    }
  };

  return (
    <Layout currentView={currentView} onNavigate={setCurrentView}>
      {renderContent()}
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <DataProvider>
        <MainApp />
      </DataProvider>
    </LanguageProvider>
  );
};

export default App;