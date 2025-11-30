import React, { useState } from "react";
import { ViewState, RoleConfig } from "./types";
import { LayoutDashboardIcon, HeartIcon } from "./components/Icons";
import RoleCard from "./components/RoleCard";
import { AuthScreen } from "./components/AuthScreens";
import UserDashboard from "./components/USER/UserDashboard";
import DoctorDashboard from "./components/DOCTOR/DoctorDashboard";
import AdminDashboard from "./components/ADMIN/AdminDashboard";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";

const AppContent: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(
    ViewState.ROLE_SELECTION
  );
  const { t, toggleLanguage, language } = useLanguage();

  const roles: RoleConfig[] = [
    {
      id: "user",
      title: t("role_user_title"),
      description: t("role_user_desc"),
      colorClass: "bg-blue-500 hover:bg-blue-600",
      gradientClass: "bg-gradient-to-br from-blue-500 to-blue-600",
      iconType: "heart",
      targetRegister: ViewState.USER_REGISTER,
      targetLogin: ViewState.USER_LOGIN,
      targetDashboard: ViewState.USER_DASHBOARD,
    },
    {
      id: "doctor",
      title: t("role_doctor_title"),
      description: t("role_doctor_desc"),
      colorClass: "bg-green-500 hover:bg-green-600",
      gradientClass: "bg-gradient-to-br from-green-500 to-green-600",
      iconType: "stethoscope",
      targetRegister: ViewState.DOCTOR_REGISTER,
      targetLogin: ViewState.DOCTOR_LOGIN,
      targetDashboard: ViewState.DOCTOR_DASHBOARD,
    },
    {
      id: "admin",
      title: t("role_admin_title"),
      description: t("role_admin_desc"),
      colorClass: "bg-purple-500 hover:bg-purple-600",
      gradientClass: "bg-gradient-to-br from-purple-500 to-purple-600",
      iconType: "shield",
      targetRegister: ViewState.ADMIN_REGISTER,
      targetLogin: ViewState.ADMIN_LOGIN,
      targetDashboard: ViewState.ADMIN_DASHBOARD,
    },
  ];

  const handleBackToRoles = () => {
    setCurrentView(ViewState.ROLE_SELECTION);
  };

  const handleLogout = () => {
    setCurrentView(ViewState.ROLE_SELECTION);
  };

  // Render Dashboards
  if (currentView === ViewState.USER_DASHBOARD) {
    return <UserDashboard onLogout={handleLogout} />;
  }

  if (currentView === ViewState.DOCTOR_DASHBOARD) {
    return <DoctorDashboard onLogout={handleLogout} />;
  }

  if (currentView === ViewState.ADMIN_DASHBOARD) {
    return <AdminDashboard onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative text-slate-900 font-sans">
      {/* Dev Nav */}
      <div className="fixed top-5 right-4 z-50 ltr:right-4 rtl:left-4 rtl:right-auto">
        <button
          className="p-2.5 rounded-full hover:bg-slate-200 transition-colors"
          title={t("dev_nav")}
        >
          <LayoutDashboardIcon className="w-5 h-5 text-slate-900/50" />
        </button>
      </div>

      {/* Language Toggle */}
      <div className="absolute top-4 right-4 z-40 ltr:right-4 rtl:left-4 rtl:right-auto">
        <button
          onClick={toggleLanguage}
          className="h-9 px-3 rounded-full border border-slate-200 bg-gray-50 text-sm font-medium flex items-center justify-center hover:bg-slate-100 transition-colors"
        >
          {t("language_btn")}
        </button>
      </div>

      {/* Back Button */}
      {currentView !== ViewState.ROLE_SELECTION && (
        <div className="absolute top-4 left-4 z-40 ltr:left-4 rtl:right-4 rtl:left-auto">
          <button
            onClick={handleBackToRoles}
            className="h-9 px-3 rounded-full border border-slate-200 bg-gray-50 text-sm font-medium flex items-center justify-center hover:bg-slate-100 transition-colors"
          >
            {t("back_to_roles")}
          </button>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center p-4">
        {/* Role Selection */}
        {currentView === ViewState.ROLE_SELECTION && (
          <div className="w-full max-w-6xl">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center">
                  <HeartIcon className="w-9 h-9 text-white" />
                </div>
              </div>
              <h1 className="text-4xl font-bold mt-2">{t("welcome")}</h1>
              <p className="text-slate-500 text-lg mt-2">
                {t("choose_dashboard")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {roles.map((role) => (
                <RoleCard key={role.id} role={role} onSelect={setCurrentView} />
              ))}
            </div>
          </div>
        )}

        {/* Auth Screens */}
        {currentView !== ViewState.ROLE_SELECTION && (
          <AuthScreen view={currentView} onChangeView={setCurrentView} />
        )}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
