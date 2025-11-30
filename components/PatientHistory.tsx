
import React from 'react';
import { SearchIcon, HeartIcon, PillIcon, FileTextIcon, CircleAlertIcon } from './icons';
import { getPatientHistoryData } from './data';
import { useTranslation } from '../i18n/useTranslation';

type Patient = ReturnType<typeof getPatientHistoryData>[0];

const PatientRecordCard: React.FC<{ patient: Patient, t: (key: string, params?: any) => string }> = ({ patient, t }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-start pb-4 border-b">
            <div className="flex items-center gap-4">
                <img src={patient.avatar} alt={patient.name} className="w-12 h-12 rounded-full" />
                <div>
                    <p className="font-semibold text-lg">{patient.name}</p>
                    <p className="text-sm text-gray-500">{t('patientHistory.lastVisit', {time: patient.lastVisit})} &bull; {t('patientHistory.totalVisits', { count: patient.totalVisits})}</p>
                </div>
            </div>
            <div className="flex gap-2 mt-4 md:mt-0">
                <button className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700">{t('patientHistory.openRecord')}</button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium border border-gray-200 rounded-lg hover:bg-gray-200">{t('patientHistory.viewFullHistory')}</button>
            </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 pb-4 border-b">
            <div>
                <p className="text-xs text-gray-500 font-medium">{t('patientHistory.age')}</p>
                <p className="font-semibold mt-1">{patient.age} {t('patientHistory.years')}</p>
            </div>
            <div>
                <p className="text-xs text-gray-500 font-medium">{t('patientHistory.bloodType')}</p>
                <p className="font-semibold mt-1">{patient.bloodType}</p>
            </div>
            <div>
                <p className="text-xs text-gray-500 font-medium">{t('patientHistory.allergies')}</p>
                <p className={`font-semibold mt-1 ${patient.allergies === 'None' || patient.allergies === 'لا يوجد' ? 'text-gray-800' : 'text-red-600'}`}>{patient.allergies}</p>
            </div>
            <div>
                <p className="text-xs text-gray-500 font-medium">{t('patientHistory.heightWeight')}</p>
                <p className="font-semibold mt-1">{patient.heightWeight}</p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 pt-4 pb-4 border-b">
            <div>
                <p className="flex items-center text-sm font-semibold mb-2"><HeartIcon className="w-4 h-4 me-2 text-red-500" />{t('patientHistory.medicalConditions')}</p>
                <div className="flex flex-wrap gap-2">
                    {patient.medicalConditions.length > 0 ? patient.medicalConditions.map(c => (
                        <span key={c} className="flex items-center text-xs font-semibold px-2.5 py-0.5 bg-red-100 text-red-800 border border-red-200 rounded-full">
                            <CircleAlertIcon className="w-3 h-3 me-1" />
                            {c}
                        </span>
                    )) : <p className="text-sm text-gray-500">None listed.</p>}
                </div>
            </div>
            <div>
                <p className="flex items-center text-sm font-semibold mb-2"><PillIcon className="w-4 h-4 me-2 text-blue-500" />{t('patientHistory.currentMedications')}</p>
                <div className="flex flex-wrap gap-2">
                     {patient.currentMedications.map(m => (
                        <span key={m} className="text-sm px-2 py-1 bg-blue-100 border border-blue-200 rounded-lg">{m}</span>
                    ))}
                </div>
            </div>
        </div>
        
         <div className="pt-4">
            <p className="flex items-center text-sm font-semibold mb-2"><FileTextIcon className="w-4 h-4 me-2 text-purple-500" />{t('patientHistory.recentDocuments')}</p>
            <div className="space-y-2">
                {patient.recentDocs.map(doc => (
                    <div key={doc.name} className="flex justify-between items-center bg-purple-50 border border-purple-200 p-2.5 rounded-lg">
                         <div className="flex items-center gap-2">
                            <FileTextIcon className="w-4 h-4 text-purple-600" />
                            <span className="text-sm font-medium">{doc.name}</span>
                        </div>
                        <button className="px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">{t('patientHistory.view')}</button>
                    </div>
                ))}
            </div>
        </div>
    </div>
);


const PatientHistory: React.FC = () => {
    const { t, dir } = useTranslation();
    const patientHistoryData = getPatientHistoryData(t);

    const searchIconClass = dir === 'rtl' ? "right-3" : "left-3";
    const searchInputPadding = dir === 'rtl' ? "pr-10 pl-4" : "pl-10 pr-4";

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{t('patientHistory.title')}</h1>
            <p className="text-gray-500 mt-2">{t('patientHistory.subtitle')}</p>
            
            <div className="mt-6 bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                <div className="flex gap-2">
                    <div className="relative flex-grow">
                        <SearchIcon className={`absolute ${searchIconClass} top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400`} />
                        <input
                            type="text"
                            placeholder={t('patientHistory.searchPlaceholder')}
                            className={`w-full h-11 ${searchInputPadding} py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500`}
                        />
                    </div>
                    <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 h-11">
                        {t('patientHistory.search')}
                    </button>
                </div>
            </div>

            <div className="mt-6 space-y-6">
                {patientHistoryData.map(patient => (
                    <PatientRecordCard key={patient.id} patient={patient} t={t} />
                ))}
            </div>
        </div>
    );
};

export default PatientHistory;
