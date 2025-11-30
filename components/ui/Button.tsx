
import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  icon?: React.ElementType;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  isLoading = false, 
  icon: Icon,
  className = '',
  disabled,
  ...props 
}) => {
  const baseStyles = "rounded-lg font-medium transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-1";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-blue-600 shadow-sm focus:ring-primary",
    secondary: "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200 focus:ring-slate-200",
    outline: "bg-transparent border border-slate-200 text-slate-700 hover:bg-slate-50 focus:ring-slate-200",
    ghost: "bg-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900",
    danger: "bg-red-500 text-white hover:bg-red-600 shadow-sm focus:ring-red-500",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${disabled || isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
      {!isLoading && Icon && <Icon className="w-4 h-4" />}
      {children}
    </button>
  );
};

export default Button;
