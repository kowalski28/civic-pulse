
import React from 'react';
import type { EducationTopic } from '../types';

interface TopicDetailModalProps {
  topic: EducationTopic;
  onClose: () => void;
}

const TopicDetailModal: React.FC<TopicDetailModalProps> = ({ topic, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <div className="relative">
          <img src={topic.thumbnail.replace('/400/300', '/800/400')} alt={topic.title} className="w-full h-64 object-cover rounded-t-lg" />
          <button onClick={onClose} className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-200 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-8">
          <h2 className="text-3xl font-bold text-brand-dark mb-4">{topic.title}</h2>
          <p className="text-brand-secondary leading-relaxed">{topic.fullText}</p>
        </div>
      </div>
    </div>
  );
};

export default TopicDetailModal;
