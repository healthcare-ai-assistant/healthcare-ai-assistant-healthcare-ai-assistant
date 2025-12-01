import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
  currentView: string;
  onNavigate: (view: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentView, onNavigate }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-slate-900 font-sans">
      <Header toggleSidebar={toggleSidebar} />
      
      <div className="flex">
        <Sidebar 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)} 
          currentView={currentView} 
          onNavigate={onNavigate} 
        />
        
        <div className="flex-1 lg:ms-64">
          <main className="p-4 md:p-8 pb-12">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;