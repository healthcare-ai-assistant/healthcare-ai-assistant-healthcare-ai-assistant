import React from 'react';
import { Lock, Shield, Database, Eye, CircleCheckBig, Download, CircleAlert } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';

const ManageSecurity: React.FC = () => {
  const { t } = useLanguage();

  const handleBackup = () => {
      alert("Starting database backup...");
      setTimeout(() => alert("Backup completed successfully!"), 1500);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{t('securityData')}</h1>
        <p className="mt-2 text-gray-500">{t('monitorSecurity')}</p>
      </div>

      {/* Top Status Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Data Encryption */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{t('dataEncryption')}</h3>
              <p className="mt-1 text-sm text-gray-500">All user data is encrypted with AES-256</p>
            </div>
            <Lock className="h-5 w-5 text-green-600" />
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
            <div className="flex items-center gap-1 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700">
              <CircleCheckBig className="h-3 w-3" />
              <span>{t('active')}</span>
            </div>
            <span className="text-xs text-gray-500">{t('lastChecked')}: Dec 19, 2024</span>
          </div>
        </div>

        {/* SSL/TLS Certificate */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{t('sslCertificate')}</h3>
              <p className="mt-1 text-sm text-gray-500">Valid through December 2025</p>
            </div>
            <Shield className="h-5 w-5 text-green-600" />
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
            <div className="flex items-center gap-1 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700">
              <CircleCheckBig className="h-3 w-3" />
              <span>{t('active')}</span>
            </div>
            <span className="text-xs text-gray-500">{t('lastChecked')}: Dec 19, 2024</span>
          </div>
        </div>

        {/* Database Backup */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{t('databaseBackup')}</h3>
              <p className="mt-1 text-sm text-gray-500">Daily automated backups to secure cloud storage</p>
            </div>
            <Database className="h-5 w-5 text-green-600" />
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
            <div className="flex items-center gap-1 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700">
              <CircleCheckBig className="h-3 w-3" />
              <span>{t('active')}</span>
            </div>
            <span className="text-xs text-gray-500">{t('lastChecked')}: Dec 19, 2024 at 2:30 AM</span>
          </div>
        </div>

        {/* Access Logs */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{t('accessLogs')}</h3>
              <p className="mt-1 text-sm text-gray-500">All admin access monitored and logged</p>
            </div>
            <Eye className="h-5 w-5 text-green-600" />
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
            <div className="flex items-center gap-1 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700">
              <CircleCheckBig className="h-3 w-3" />
              <span>{t('active')}</span>
            </div>
            <span className="text-xs text-gray-500">{t('lastChecked')}: Real-time monitoring</span>
          </div>
        </div>
      </div>

      {/* Compliance Status */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-900">{t('complianceStatus')}</h3>
        <p className="mt-1 text-sm text-gray-500">{t('regulatoryCompliance')}</p>
        
        <div className="mt-6 space-y-6">
          {/* GDPR */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-900">{t('gdprCompliance')}</p>
                <p className="text-xs text-gray-500">General Data Protection Regulation</p>
              </div>
              <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700">{t('compliant')}</span>
            </div>
            <div className="h-2 w-full rounded-full bg-slate-100">
              <div className="h-2 w-full rounded-full bg-green-500"></div>
            </div>
          </div>

          {/* HIPAA */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-900">{t('hipaaCompliance')}</p>
                <p className="text-xs text-gray-500">Health Insurance Portability and Accountability Act</p>
              </div>
              <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700">{t('compliant')}</span>
            </div>
            <div className="h-2 w-full rounded-full bg-slate-100">
              <div className="h-2 w-full rounded-full bg-green-500"></div>
            </div>
          </div>

          {/* Data Privacy */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-900">{t('dataPrivacyPolicy')}</p>
                <p className="text-xs text-gray-500">Updated regularly</p>
              </div>
              <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700">{t('compliant')}</span>
            </div>
            <div className="h-2 w-full rounded-full bg-slate-100">
              <div className="h-2 w-full rounded-full bg-green-500"></div>
            </div>
          </div>

          {/* Security Audit */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-900">{t('securityAudit')}</p>
                <p className="text-xs text-gray-500">Last audit: Nov 2024</p>
              </div>
              <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700">{t('compliant')}</span>
            </div>
            <div className="h-2 w-full rounded-full bg-slate-100">
              <div className="h-2 w-[95%] rounded-full bg-green-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Database Backup List */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{t('databaseBackup')}</h3>
            <p className="mt-1 text-sm text-gray-500">Automated daily backups with redundancy</p>
          </div>
          <button 
            onClick={handleBackup}
            className="flex items-center gap-2 rounded-xl bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600"
          >
            <Download className="h-4 w-4" />
            <span>{t('backupNow')}</span>
          </button>
        </div>

        <div className="space-y-4">
          {/* Backup Item 1 */}
          <div className="flex items-center justify-between rounded-xl border border-gray-200 p-4">
            <div className="flex items-center gap-4">
              <Database className="h-5 w-5 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900">Dec 19, 2024</p>
                <p className="text-sm text-gray-500">{t('cloudStorage')}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end gap-1 mb-1">
                <CircleCheckBig className="h-3 w-3 text-green-700" />
                <span className="text-xs font-semibold text-green-700">{t('completed')}</span>
              </div>
              <p className="text-xs text-gray-500">2.4 GB</p>
            </div>
          </div>

          {/* Backup Item 2 */}
          <div className="flex items-center justify-between rounded-xl border border-gray-200 p-4">
            <div className="flex items-center gap-4">
              <Database className="h-5 w-5 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900">Dec 18, 2024</p>
                <p className="text-sm text-gray-500">{t('cloudStorage')}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end gap-1 mb-1">
                <CircleCheckBig className="h-3 w-3 text-green-700" />
                <span className="text-xs font-semibold text-green-700">{t('completed')}</span>
              </div>
              <p className="text-xs text-gray-500">2.3 GB</p>
            </div>
          </div>

          {/* Backup Item 3 */}
          <div className="flex items-center justify-between rounded-xl border border-gray-200 p-4">
            <div className="flex items-center gap-4">
              <Database className="h-5 w-5 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900">Dec 17, 2024</p>
                <p className="text-sm text-gray-500">{t('cloudStorage')}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end gap-1 mb-1">
                <CircleCheckBig className="h-3 w-3 text-green-700" />
                <span className="text-xs font-semibold text-green-700">{t('completed')}</span>
              </div>
              <p className="text-xs text-gray-500">2.2 GB</p>
            </div>
          </div>

          {/* Backup Item 4 */}
          <div className="flex items-center justify-between rounded-xl border border-gray-200 p-4">
            <div className="flex items-center gap-4">
              <Database className="h-5 w-5 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900">Dec 16, 2024</p>
                <p className="text-sm text-gray-500">{t('cloudStorage')}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end gap-1 mb-1">
                <CircleCheckBig className="h-3 w-3 text-green-700" />
                <span className="text-xs font-semibold text-green-700">{t('completed')}</span>
              </div>
              <p className="text-xs text-gray-500">2.3 GB</p>
            </div>
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-900">{t('securitySettings')}</h3>
        <p className="mt-1 text-sm text-gray-500">{t('configureSecurity')}</p>
        
        <div className="mt-6 divide-y divide-gray-200">
          <div className="flex items-center justify-between py-4 first:pt-0">
            <div>
              <p className="font-medium text-gray-900">{t('twoFactorAuth')}</p>
              <p className="text-sm text-gray-500">{t('requiredAdmin')}</p>
            </div>
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">{t('enabled')}</span>
          </div>

          <div className="flex items-center justify-between py-4">
            <div>
              <p className="font-medium text-gray-900">{t('ipWhitelisting')}</p>
              <p className="text-sm text-gray-500">{t('restrictIp')}</p>
            </div>
            <button className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
              {t('configure')}
            </button>
          </div>

          <div className="flex items-center justify-between py-4">
            <div>
              <p className="font-medium text-gray-900">{t('sessionTimeout')}</p>
              <p className="text-sm text-gray-500">{t('autoLogout')}</p>
            </div>
            <button className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
              {t('edit')}
            </button>
          </div>

          <div className="flex items-center justify-between py-4 last:pb-0">
            <div>
              <p className="font-medium text-gray-900">{t('dataRetention')}</p>
              <p className="text-sm text-gray-500">{t('userDataRetained')}</p>
            </div>
            <button className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
              {t('viewPolicy')}
            </button>
          </div>
        </div>
      </div>

      {/* Recent Activity Log */}
      <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <CircleAlert className="h-5 w-5 text-blue-600" />
          <h3 className="font-semibold text-gray-900">{t('recentSecurityActivity')}</h3>
        </div>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-blue-900">✓ {t('securityAuditCompleted')}</p>
            <p className="text-xs text-blue-700">Nov 15, 2024 - {t('systemsPassed')}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-blue-900">✓ {t('sslRenewed')}</p>
            <p className="text-xs text-blue-700">Dec 1, 2024 - {t('validThrough')} December 2025</p>
          </div>
          <div>
            <p className="text-sm font-medium text-blue-900">✓ {t('backupTested')}</p>
            <p className="text-xs text-blue-700">Dec 18, 2024 - {t('restorationSuccessful')}</p>
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
          <h3 className="text-sm font-medium text-gray-600">{t('overallScore')}</h3>
          <div className="mt-2">
            <span className="text-3xl font-bold text-green-600">98</span>
            <span className="text-xs text-gray-500">/100</span>
            <p className="mt-1 text-xs text-gray-500">{t('excellentPosture')}</p>
          </div>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
          <h3 className="text-sm font-medium text-gray-600">{t('dataBackups')}</h3>
          <div className="mt-2">
            <span className="text-3xl font-bold text-gray-900">1,247</span>
            <p className="mt-1 text-xs text-gray-500">{t('totalBackups')}</p>
          </div>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
          <h3 className="text-sm font-medium text-gray-600">{t('securityIncidents')}</h3>
          <div className="mt-2">
            <span className="text-3xl font-bold text-green-600">0</span>
            <p className="mt-1 text-xs text-gray-500">{t('thisMonth')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageSecurity;