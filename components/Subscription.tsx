
import React from 'react';
import { CreditCardIcon, CalendarIcon, CircleAlertIcon, CheckIcon, RefreshCwIcon } from './icons';
import { getSubscriptionPlans } from './data';
import { useTranslation } from '../i18n/useTranslation';

const PlanFeature: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="flex items-start gap-2">
        <CheckIcon className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
        <span className="text-sm">{children}</span>
    </div>
);

interface PlanCardProps {
    title: string;
    description: string;
    price: number;
    features: string[];
    isCurrent?: boolean;
    isFeatured?: boolean;
    t: (key: string, params?: any) => string;
}

const PlanCard: React.FC<PlanCardProps> = ({ title, description, price, features, isCurrent, isFeatured, t }) => {
    const borderColor = isFeatured ? 'border-blue-600' : 'border-gray-200';
    const shadow = isFeatured ? 'shadow-lg' : 'shadow-sm';

    return (
        <div className={`bg-white border ${borderColor} ${shadow} rounded-lg flex flex-col h-full`}>
            <div className="p-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-xl font-semibold">{title}</h3>
                        <p className="text-sm text-gray-500">{description}</p>
                    </div>
                    {isCurrent && (
                        <span className="text-xs font-semibold px-2.5 py-0.5 bg-blue-600 text-white rounded-full">{t('subscription.current')}</span>
                    )}
                </div>
            </div>
            <div className="p-6 flex-grow">
                <p className="text-4xl font-bold">${price}<span className="text-sm font-normal text-gray-500">/{t('subscription.perMonth')}</span></p>
                <div className="space-y-3 mt-6">
                    {features.map((feature, index) => (
                        <PlanFeature key={index}>{feature}</PlanFeature>
                    ))}
                </div>
            </div>
            <div className="p-6">
                {isCurrent ? (
                    <button className="w-full px-4 py-2 bg-gray-200 text-gray-500 font-semibold rounded-lg cursor-not-allowed">{t('subscription.currentPlan')}</button>
                ) : (
                    <button className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">{t('subscription.switchTo', { plan: title })}</button>
                )}
            </div>
        </div>
    );
};


const Subscription: React.FC = () => {
    const { t } = useTranslation();
    const subscriptionPlans = getSubscriptionPlans(t);

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{t('subscription.title')}</h1>
            <p className="text-gray-500 mt-2">{t('subscription.subtitle')}</p>

            <div className="mt-6 bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200 shadow-sm">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-2xl font-semibold">{t('subscription.premiumPlan')}</h3>
                        <p className="text-sm text-gray-500">{t('subscription.currentSubscription')}</p>
                    </div>
                    <div className="flex items-center text-xs font-semibold px-2.5 py-0.5 bg-green-600 text-white rounded-full">
                        <CheckIcon className="w-3 h-3 me-1" />
                        {t('subscription.active')}
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 border-b pb-6">
                    <div>
                        <p className="text-sm text-gray-500">{t('subscription.price')}</p>
                        <p className="text-2xl font-bold">$99</p>
                        <p className="text-xs text-gray-500">{t('subscription.perMonth')}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">{t('subscription.billingCycle')}</p>
                        <p className="font-semibold">{t('subscription.monthly')}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">{t('subscription.started')}</p>
                        <p className="font-semibold">Dec 1, 2024</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">{t('subscription.renewal')}</p>
                        <p className="font-semibold">Jan 1, 2025</p>
                    </div>
                </div>

                <div className="mt-6">
                    <h4 className="font-semibold mb-3">{t('subscription.includedFeatures')}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                        {subscriptionPlans.premium.features.map((feature, i) => <PlanFeature key={i}>{feature}</PlanFeature>)}
                    </div>
                </div>

                <div className="flex items-center gap-4 mt-6 pt-6 border-t">
                    <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 text-sm font-medium">
                        <RefreshCwIcon className="w-4 h-4 me-2"/>
                        {t('subscription.upgradePlan')}
                    </button>
                    <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
                        {t('subscription.cancelSubscription')}
                    </button>
                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('subscription.otherPlans')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   <PlanCard {...subscriptionPlans.basic} t={t} />
                   <PlanCard {...subscriptionPlans.premium} t={t} />
                   <PlanCard {...subscriptionPlans.enterprise} t={t} />
                </div>
            </div>

            <div className="mt-8 bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="p-6 border-b">
                    <h3 className="text-xl font-semibold">{t('subscription.paymentMethod')}</h3>
                </div>
                <div className="p-6">
                    <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <CreditCardIcon className="w-6 h-6 text-gray-500" />
                            <div>
                                <p className="font-semibold">{t('subscription.visaEnding', {last4: '4242'})}</p>
                                <p className="text-sm text-gray-500">{t('subscription.expires', {date: '12/26'})}</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                             <button className="px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">{t('subscription.edit')}</button>
                             <button className="px-3 py-1 text-sm font-medium text-red-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">{t('subscription.remove')}</button>
                        </div>
                    </div>
                     <button className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-200 rounded-lg hover:bg-gray-200">
                        <CreditCardIcon className="w-4 h-4" />
                        {t('subscription.addPaymentMethod')}
                    </button>
                </div>
            </div>
            
            <div className="mt-8 bg-white border border-gray-200 rounded-lg shadow-sm">
                 <div className="p-6 border-b">
                    <h3 className="text-xl font-semibold">{t('subscription.billingHistory')}</h3>
                    <p className="mt-1 text-sm text-gray-500">{t('subscription.billingHistorySubtitle')}</p>
                </div>
                <div className="p-6 space-y-3">
                    {[{date: "Dec 1, 2024", inv: "INV-202412-001"}, {date: "Nov 1, 2024", inv: "INV-202411-001"}, {date: "Oct 1, 2024", inv: "INV-202410-001"}].map(item => (
                        <div key={item.inv} className="flex justify-between items-center p-4 border rounded-lg">
                            <div className="flex items-center gap-4">
                                <CalendarIcon className="w-5 h-5 text-gray-500"/>
                                <div>
                                    <p className="font-semibold">{item.date}</p>
                                    <p className="text-sm text-gray-500">{t('subscription.premiumPlan')} - {item.inv}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-xs font-semibold px-2.5 py-0.5 bg-green-600 text-white rounded-full">paid</span>
                                <p className="font-semibold w-20 text-end">$99.00</p>
                                <button className="text-sm font-medium text-gray-700">{t('subscription.download')}</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-200 flex items-start gap-3">
                <CircleAlertIcon className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                    <p className="font-semibold text-yellow-800">{t('subscription.renewalNoticeTitle')}</p>
                    <p className="text-sm text-yellow-700">{t('subscription.renewalNoticeText', { date: 'January 1, 2025', price: '$99.00'})}</p>
                </div>
            </div>

        </div>
    );
};

export default Subscription;
