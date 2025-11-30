
import React, { useState } from 'react';
import { ViewState } from '../types';
import { HeartIcon, StethoscopeIcon, ShieldIcon } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';
import { api } from '../services/api';

interface AuthScreenProps {
  view: ViewState;
  onChangeView: (view: ViewState) => void;
}

interface InputFieldProps {
  label: string;
  type?: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const InputField = ({ label, type = "text", placeholder, name, value, onChange, required = false }: InputFieldProps) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-slate-900 mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full h-11 px-3 py-2 bg-gray-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
    />
  </div>
);

export const AuthScreen: React.FC<AuthScreenProps> = ({ view, onChangeView }) => {
  const { t } = useLanguage();
  const isLogin = view.includes('LOGIN');
  const roleType = view.split('_')[0]; // USER, DOCTOR, ADMIN

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    phone: '',
    specialization: '',
    licenseNumber: '',
    organization: '',
    adminCode: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  let title = isLogin ? t('welcome_back') : t('create_account');
  let subtitle = isLogin ? t('sign_in_subtitle') : t('join_subtitle');
  let buttonText = isLogin ? t('sign_in_btn') : t('create_account_btn');
  let themeColor = "bg-blue-500 hover:bg-blue-600";
  let Icon = HeartIcon;
  let iconBg = "bg-blue-500";

  // Customize based on role
  if (roleType === 'DOCTOR') {
    Icon = StethoscopeIcon;
    iconBg = "bg-green-500";
    themeColor = "bg-green-500 hover:bg-green-600";
    if (!isLogin) {
      title = t('doc_reg_title');
      subtitle = t('doc_reg_subtitle');
      buttonText = t('create_doc_account');
    }
  } else if (roleType === 'ADMIN') {
    Icon = ShieldIcon;
    iconBg = "bg-purple-500";
    themeColor = "bg-purple-500 hover:bg-purple-600";
    if (!isLogin) {
      title = t('admin_reg_title');
      subtitle = t('admin_reg_subtitle');
      buttonText = t('create_admin_account');
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic Validation
    if (isLogin) {
      if (!formData.email || !formData.password) {
        alert(t('error_empty'));
        return;
      }
    } else {
      if (!formData.fullName || !formData.email || !formData.phone || !formData.password) {
        alert(t('error_empty'));
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        alert(t('error_pass_match'));
        return;
      }
    }

    setLoading(true);
    
    // API Integration
    // Attempt to login via real API, fallback to simulation if fails (or if API is not actually implemented on backend)
    try {
      const endpoint = isLogin ? '/Auth/login' : '/Auth/register';
      const response = await api.post<{ token: string }>(endpoint, formData);

      if (response && response.token) {
        localStorage.setItem('auth_token', response.token);
      } else {
        // Fallback for demo if API is unreachable
        console.log("API unavailable, proceeding with simulation.");
        localStorage.setItem('auth_token', 'demo-token');
      }

      // Navigate to the appropriate dashboard based on role
      if (roleType === 'USER') {
        onChangeView(ViewState.USER_DASHBOARD);
      } else if (roleType === 'DOCTOR') {
        onChangeView(ViewState.DOCTOR_DASHBOARD);
      } else if (roleType === 'ADMIN') {
        onChangeView(ViewState.ADMIN_DASHBOARD);
      }

    } catch (err) {
      console.error(err);
      alert('Authentication failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const renderFormFields = () => {
    if (isLogin) {
      return (
        <>
          <InputField 
            label={t('email_label')} 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t('email_label')} 
            required
          />
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-slate-900">{t('password_label')}</label>
              <button type="button" className="text-xs font-medium text-blue-500 hover:text-blue-600">{t('forgot_password')}</button>
            </div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder={t('password_label')}
              required
              className="w-full h-11 px-3 py-2 bg-gray-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
            />
          </div>
        </>
      );
    }

    // Registration Fields
    return (
      <>
        <InputField 
          label={t('full_name_label')} 
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder={t('full_name_label')} 
          required
        />
        <InputField 
          label={t('email_label')} 
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={t('email_label')} 
          required
        />
        <InputField 
          label={t('phone_label')} 
          type="tel" 
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder={t('phone_label')} 
          required
        />
        
        {roleType === 'DOCTOR' && (
          <>
            <InputField 
              label={t('specialization_label')} 
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
              placeholder={t('specialization_label')} 
            />
            <InputField 
              label={t('license_label')} 
              name="licenseNumber"
              value={formData.licenseNumber}
              onChange={handleChange}
              placeholder={t('license_label')} 
            />
          </>
        )}

        {roleType === 'ADMIN' && (
          <>
            <InputField 
              label={t('org_label')} 
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              placeholder={t('org_label')} 
            />
            <InputField 
              label={t('admin_code_label')} 
              name="adminCode"
              value={formData.adminCode}
              onChange={handleChange}
              placeholder={t('admin_code_label')} 
            />
          </>
        )}

        <InputField 
          label={t('password_label')} 
          type="password" 
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder={t('password_label')} 
          required
        />
        <InputField 
          label={t('confirm_password_label')} 
          type="password" 
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder={t('confirm_password_label')} 
          required
        />
      </>
    );
  };

  const switchView = () => {
    const target = isLogin ? `${roleType}_REGISTER` : `${roleType}_LOGIN`;
    onChangeView(target as ViewState);
  };

  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden">
      <div className="p-6 text-center">
        <div className="flex justify-center mb-4">
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${iconBg}`}>
            <Icon className="w-9 h-9 text-white" />
          </div>
        </div>
        <h3 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">{title}</h3>
        <p className="text-slate-500">{subtitle}</p>
      </div>

      <div className="px-6 pb-6">
        <form onSubmit={handleSubmit}>
          {renderFormFields()}

          <button
            type="submit"
            disabled={loading}
            className={`w-full h-11 rounded-xl font-semibold text-white transition-colors mt-4 ${themeColor} ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {loading ? t('loading') : buttonText}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-500">
          {isLogin ? t('dont_have_account') : t('already_account')}{" "}
          <button
            onClick={switchView}
            className="font-semibold text-blue-500 hover:text-blue-600 outline-none"
          >
            {isLogin ? t('create_account_btn') : t('sign_in_btn')}
          </button>
        </div>
      </div>
    </div>
  );
};
