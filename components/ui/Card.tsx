
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  noPadding?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick, noPadding = false }) => {
  return (
    <div 
      onClick={onClick}
      className={`bg-white rounded-xl border border-slate-200 shadow-sm ${!noPadding ? 'p-6' : ''} ${onClick ? 'cursor-pointer hover:shadow-md transition-all' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
