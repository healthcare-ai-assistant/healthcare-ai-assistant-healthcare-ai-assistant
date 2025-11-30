
import React from 'react';
import { TabItem } from '../../types';

interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (id: any) => void;
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onChange, className = '' }) => {
  return (
    <div className={`flex gap-2 border-b border-slate-200 pb-2 overflow-x-auto ${className}`}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`px-6 py-2 rounded-lg font-medium text-sm transition-all duration-200 whitespace-nowrap flex items-center gap-2 ${
            activeTab === tab.id
              ? 'bg-primary text-white shadow-sm' 
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          {tab.label}
          {tab.count !== undefined && (
            <span className={`text-xs px-2 py-0.5 rounded-full ${activeTab === tab.id ? 'bg-white/20' : 'bg-slate-200'}`}>
              {tab.count}
            </span>
          )}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
