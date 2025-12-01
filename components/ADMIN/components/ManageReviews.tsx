import React, { useState } from 'react';
import { Search, ChevronDown, Star, MessageSquare, CircleCheckBig, X, CircleAlert } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';
import { useData } from '../contexts/DataContext';

const ManageReviews: React.FC = () => {
  const { t } = useLanguage();
  const { reviews, resolveReview, removeReview } = useData();

  const [searchTerm, setSearchTerm] = useState('');

  const handleRemove = (id: string) => {
    if(window.confirm("Delete this review?")) {
        removeReview(id);
    }
  };

  const filteredReviews = reviews.filter(r => 
    r.userName.toLowerCase().includes(searchTerm.toLowerCase()) || 
    r.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{t('reviewsComplaints')}</h1>
        <p className="mt-2 text-gray-500">{t('manageReviews')}</p>
      </div>

      {/* Filters */}
      <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute top-2.5 start-3 h-5 w-5 text-gray-400" />
            <input 
                type="text" 
                placeholder={t('searchReviews')} 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2 ps-10 pe-4 text-sm outline-none focus:border-blue-500 transition-colors" 
            />
          </div>
          <div className="flex gap-4">
            <button className="flex items-center justify-between gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
              <span>{t('type')}</span>
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </button>
            <button className="flex items-center justify-between gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
              <span>{t('rating')}</span>
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {filteredReviews.map((review) => (
          <div key={review.id} className={`rounded-xl border ${review.type === 'Complaint' ? 'border-red-100' : 'border-gray-200'} bg-white p-6 shadow-sm hover:shadow-md transition-shadow`}>
            <div className="flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${review.avatarSeed}`} alt="Avatar" className="h-10 w-10 rounded-full bg-gray-100" />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-gray-900">{review.userName}</h3>
                      <div className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold ${review.typeColorClass}`}>
                        {review.type === 'Complaint' && <CircleAlert className="h-3 w-3" />}
                        <span>{t(review.type === 'Complaint' ? 'complaint' : 'review')}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">{t('about')}: {review.about}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">{review.date}</span>
              </div>

              <div>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="font-semibold text-gray-900">{t(review.title as any) || review.title}</p>
                <p className="mt-1 text-sm text-gray-500">{review.content}</p>
              </div>

              <div className="flex gap-2 border-t border-gray-100 pt-4">
                <button className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                  <MessageSquare className="h-4 w-4" />
                  <span>{t('respond')}</span>
                </button>
                <button 
                  onClick={() => resolveReview(review.id)}
                  className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-green-700 hover:bg-green-50 transition-colors"
                >
                  <CircleCheckBig className="h-4 w-4" />
                  <span>{t('resolve')}</span>
                </button>
                <button 
                  onClick={() => handleRemove(review.id)}
                  className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
                >
                  <X className="h-4 w-4" />
                  <span>{t('remove')}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
          <h3 className="text-sm font-medium text-gray-600">{t('averageRating')}</h3>
          <div className="mt-2">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-gray-900">4.3</span>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
                <Star className="h-4 w-4 text-gray-300" />
              </div>
            </div>
            <p className="mt-1 text-xs text-gray-500">{t('fromReviews')}</p>
          </div>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
          <h3 className="text-sm font-medium text-gray-600">{t('totalReviews')}</h3>
          <div className="mt-2">
            <span className="text-3xl font-bold text-gray-900">2,847</span>
            <p className="mt-1 text-xs text-gray-500">+342 {t('thisMonth')}</p>
          </div>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
          <h3 className="text-sm font-medium text-gray-600">{t('activeComplaints')}</h3>
          <div className="mt-2">
            <span className="text-3xl font-bold text-red-600">{reviews.filter(r => r.type === 'Complaint').length + 24}</span>
            <p className="mt-1 text-xs text-gray-500">{t('awaitingResolution')}</p>
          </div>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
          <h3 className="text-sm font-medium text-gray-600">{t('resolutionRate')}</h3>
          <div className="mt-2">
            <span className="text-3xl font-bold text-green-600">94%</span>
            <p className="mt-1 text-xs text-gray-500">{t('within7Days')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageReviews;