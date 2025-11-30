
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  action?: React.ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, className = '', action }) => {
  return (
    <div className={`flex justify-between items-end ${className}`}>
      <div>
        <h1 className="text-4xl font-bold text-slate-900">{title}</h1>
        {subtitle && <p className="mt-2 text-lg text-slate-500">{subtitle}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
};

export default SectionHeader;
