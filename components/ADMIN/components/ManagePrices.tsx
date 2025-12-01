import React, { useState } from 'react';
import { DollarSign, TrendingUp } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';
import { PriceInfo } from '../types';

const ManagePrices: React.FC = () => {
  const { t } = useLanguage();

  const [prices, setPrices] = useState<PriceInfo[]>([
    {
      id: '1',
      serviceName: 'clinicVisit',
      currentPrice: '$ 150',
      previousPrice: '$ 140',
      increase: '+10',
      dateChanged: 'Dec 1, 2024',
      icon: DollarSign,
      iconColorClass: 'text-blue-500',
    },
    {
      id: '2',
      serviceName: 'onlineConsultation',
      currentPrice: '$ 100',
      previousPrice: '$ 90',
      increase: '+10',
      dateChanged: 'Nov 15, 2024',
      icon: DollarSign,
      iconColorClass: 'text-purple-500',
    },
    {
      id: '3',
      serviceName: 'homeVisit',
      currentPrice: '$ 200',
      previousPrice: '$ 180',
      increase: '+20',
      dateChanged: 'Nov 1, 2024',
      icon: DollarSign,
      iconColorClass: 'text-green-500',
    },
  ]);

  const [inputValues, setInputValues] = useState<{[key: string]: string}>({
      '1': '150',
      '2': '100',
      '3': '200'
  });
  const [percentageInput, setPercentageInput] = useState('');

  const handleUpdatePrice = (id: string) => {
      const newValue = inputValues[id];
      if (!newValue) return;

      setPrices(prev => prev.map(p => {
          if (p.id === id) {
              const oldPrice = parseFloat(p.currentPrice.replace('$', '').trim());
              const newPrice = parseFloat(newValue);
              const diff = newPrice - oldPrice;
              const increaseStr = diff > 0 ? `+${diff}` : `${diff}`;

              return {
                  ...p,
                  previousPrice: p.currentPrice,
                  currentPrice: `$ ${newValue}`,
                  increase: increaseStr,
                  dateChanged: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric'})
              };
          }
          return p;
      }));
      alert(t('updatePrice') + ' ' + t('completed'));
  };

  const handleInputChange = (id: string, value: string) => {
      setInputValues(prev => ({...prev, [id]: value}));
  };

  const handleApplyPercentage = () => {
      const percent = parseFloat(percentageInput);
      if (isNaN(percent) || percent <= 0) {
          alert("Please enter a valid positive percentage");
          return;
      }

      setPrices(prev => prev.map(p => {
          const currentVal = parseFloat(p.currentPrice.replace('$', '').trim());
          const newVal = Math.round(currentVal * (1 + percent / 100));
          const diff = newVal - currentVal;
          const increaseStr = diff > 0 ? `+${diff}` : `${diff}`;

          // Also update the individual input fields to match new state
          setInputValues(prevInputs => ({
              ...prevInputs,
              [p.id]: newVal.toString()
          }));

          return {
              ...p,
              previousPrice: p.currentPrice,
              currentPrice: `$ ${newVal}`,
              increase: increaseStr,
              dateChanged: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric'})
          };
      }));
      
      setPercentageInput('');
      alert(`Applied ${percent}% increase to all prices.`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{t('managePrices')}</h1>
        <p className="mt-2 text-gray-500">{t('setPrices')}</p>
      </div>

      {/* Price Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {prices.map((price) => (
          <div key={price.id} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">{t(price.serviceName as any)}</h3>
              <price.icon className={`h-5 w-5 ${price.iconColorClass}`} />
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500">{t('currentPrice')}</p>
              <p className="text-3xl font-bold text-gray-900">{price.currentPrice}</p>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <div className="flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700">
                <TrendingUp className="me-1 h-3 w-3" />
                <span>{price.increase}</span>
              </div>
              <span className="text-xs text-gray-500">{t('from')} {price.previousPrice}</span>
            </div>
            <div className="mt-4 space-y-3">
              <input 
                type="number" 
                value={inputValues[price.id]}
                onChange={(e) => handleInputChange(price.id, e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-blue-500 transition-colors" 
              />
              <button 
                onClick={() => handleUpdatePrice(price.id)}
                className="w-full rounded-xl bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600"
              >
                {t('updatePrice')}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Percentage Increase */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900">{t('applyPercentageIncrease')}</h3>
        <p className="mt-1 text-sm text-gray-500">{t('increaseAllPrices')}</p>
        <div className="mt-6 flex flex-col md:flex-row gap-4 items-end">
          <div className="flex-1 space-y-2 w-full">
            <label className="text-sm font-medium text-gray-700">{t('percentageIncrease')}</label>
            <input 
                type="number" 
                placeholder="e.g., 10" 
                value={percentageInput}
                onChange={(e) => setPercentageInput(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-blue-500 transition-colors" 
            />
          </div>
          <div className="flex-[2] space-y-2 w-full">
            <label className="text-sm font-medium text-gray-700">{t('reason')}</label>
            <input type="text" placeholder="e.g., Inflation adjustment" className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-blue-500 transition-colors" />
          </div>
          <button 
            onClick={handleApplyPercentage}
            className="w-full md:w-auto rounded-xl bg-blue-500 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600 h-[38px]"
          >
            {t('applyIncrease')}
          </button>
        </div>
      </div>

      {/* History Table */}
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
        <div className="px-6 py-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">{t('priceChangeHistory')}</h3>
          <p className="mt-1 text-sm text-gray-500">{t('recentAdjustments')}</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-start">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-start">{t('service')}</th>
                <th className="px-6 py-3 text-start">{t('previousPrice')}</th>
                <th className="px-6 py-3 text-start">{t('newPrice')}</th>
                <th className="px-6 py-3 text-start">{t('dateChanged')}</th>
                <th className="px-6 py-3 text-start">{t('changedBy')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {prices.map((price) => (
                <tr key={price.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{t(price.serviceName as any)}</td>
                  <td className="px-6 py-4 text-gray-500">{price.previousPrice.replace(' ', '')}</td>
                  <td className="px-6 py-4 text-green-600 font-medium">{price.currentPrice.replace(' ', '')}</td>
                  <td className="px-6 py-4 text-gray-500">{price.dateChanged}</td>
                  <td className="px-6 py-4 text-gray-500">{t('admin')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
          <h3 className="text-sm font-medium text-gray-600">{t('monthlyRevenueImpact')}</h3>
          <div className="mt-2">
            <span className="text-3xl font-bold text-green-600">+$12,450</span>
            <p className="mt-1 text-xs text-gray-500">{t('recentPriceIncreases')}</p>
          </div>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
          <h3 className="text-sm font-medium text-gray-600">{t('avgBookingCost')}</h3>
          <div className="mt-2">
            <span className="text-3xl font-bold text-gray-900">$130</span>
            <p className="mt-1 text-xs text-gray-500">{t('acrossAllServices')}</p>
          </div>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
          <h3 className="text-sm font-medium text-gray-600">{t('priceCompetitiveness')}</h3>
          <div className="mt-2">
            <span className="text-3xl font-bold text-blue-600">85%</span>
            <p className="mt-1 text-xs text-gray-500">{t('marketCompetitive')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManagePrices;