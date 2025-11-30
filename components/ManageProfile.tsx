
import React from 'react';
import { CameraIcon, AwardIcon, BookOpenIcon } from './icons';
import { useTranslation } from '../i18n/useTranslation';

const FormInput: React.FC<any> = ({ label, id, ...props }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
        <input id={id} className="mt-2 block w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500" {...props} />
    </div>
);

const FormTextarea: React.FC<any> = ({ label, id, ...props }) => (
     <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
        <textarea id={id} rows={4} className="mt-2 block w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500" {...props}></textarea>
    </div>
);


const ManageProfile: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{t('manageProfile.title')}</h1>
            <p className="text-gray-500 mt-2">{t('manageProfile.subtitle')}</p>
            
            <div className="mt-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="p-6 border-b">
                    <h3 className="text-xl font-semibold">{t('manageProfile.profileInfo')}</h3>
                    <p className="mt-1 text-sm text-gray-500">{t('manageProfile.profileInfoSubtitle')}</p>
                </div>
                <div className="p-6">
                    <div className="flex flex-col md:flex-row items-start gap-8">
                        <div className="flex flex-col items-center flex-shrink-0">
                             <div className="relative">
                                <img className="h-32 w-32 rounded-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=doctor" alt="Doctor profile picture" />
                                <button className="absolute bottom-0 end-0 bg-green-500 text-white p-2 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                    <CameraIcon className="w-5 h-5" />
                                </button>
                            </div>
                            <button className="mt-4 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-200 rounded-lg hover:bg-gray-200">
                                {t('manageProfile.changePhoto')}
                            </button>
                        </div>
                        <div className="w-full">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormInput label={t('manageProfile.fullName')} id="full-name" type="text" defaultValue="Dr. Michael Johnson" />
                                <FormInput label={t('manageProfile.specialization')} id="specialization" type="text" defaultValue="Cardiologist" />
                                <FormInput label={t('manageProfile.emailAddress')} id="email" type="email" defaultValue="dr.johnson@medsync.com" />
                                <FormInput label={t('manageProfile.phoneNumber')} id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                                <FormInput label={t('manageProfile.experience')} id="experience" type="text" defaultValue="12 Years" />
                                <FormInput label={t('manageProfile.clinicName')} id="clinic-name" type="text" defaultValue="Johnson Heart Clinic" />
                            </div>
                            <div className="mt-6">
                                <FormInput label={t('manageProfile.clinicLocation')} id="clinic-location" type="text" defaultValue="123 Medical Street, NYC" />
                            </div>
                             <div className="mt-6">
                                <FormTextarea label={t('manageProfile.professionalBio')} id="bio" defaultValue="Experienced cardiologist specializing in heart disease treatment and prevention." />
                            </div>
                            <div className="mt-6">
                                <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
                                    {t('manageProfile.saveChanges')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

             <div className="mt-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="p-6 border-b">
                    <h3 className="text-xl font-semibold">{t('manageProfile.pricing')}</h3>
                    <p className="mt-1 text-sm text-gray-500">{t('manageProfile.pricingSubtitle')}</p>
                </div>
                <div className="p-6">
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <FormInput label={t('manageProfile.clinicVisit')} id="clinic-price" type="text" defaultValue="$150" />
                        <FormInput label={t('manageProfile.onlineConsultation')} id="online-price" type="text" defaultValue="$100" />
                        <FormInput label={t('manageProfile.homeVisit')} id="home-price" type="text" defaultValue="$200" />
                    </div>
                    <div className="mt-6">
                        <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
                            {t('manageProfile.updatePricing')}
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-sm font-medium text-gray-600 flex items-center"><AwardIcon className="w-4 h-4 me-2" />{t('manageProfile.rating')}</h3>
                    <p className="text-3xl font-bold mt-2">4.8</p>
                    <p className="text-xs text-gray-500">285 {t('manageProfile.reviews')}</p>
                </div>
                 <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-sm font-medium text-gray-600 flex items-center"><BookOpenIcon className="w-4 h-4 me-2" />{t('manageProfile.languages')}</h3>
                    <p className="text-lg font-medium mt-2">English, Spanish, Arabic</p>
                    <button className="mt-3 px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-200 rounded-lg hover:bg-gray-200">{t('manageProfile.edit')}</button>
                </div>
                 <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-sm font-medium text-gray-600 flex items-center"><AwardIcon className="w-4 h-4 me-2" />{t('manageProfile.certifications')}</h3>
                    <p className="text-lg font-medium mt-2">MD, Board Certified</p>
                    <button className="mt-3 px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-200 rounded-lg hover:bg-gray-200">{t('manageProfile.manage')}</button>
                </div>
            </div>

        </div>
    );
};

export default ManageProfile;
