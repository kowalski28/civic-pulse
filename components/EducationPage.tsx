
import React, { useState } from 'react';
import { EDUCATION_TOPICS } from '../constants';
import TopicDetailModal from './TopicDetailModal';
import type { EducationTopic } from '../types';

const EducationCard: React.FC<{ topic: EducationTopic; onReadMore: () => void }> = ({ topic, onReadMore }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group">
      <img src={topic.thumbnail} alt={topic.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-brand-dark mb-2">{topic.title}</h3>
        <p className="text-brand-secondary flex-grow mb-4">{topic.shortDescription}</p>
        <button onClick={onReadMore} className="mt-auto text-brand-primary font-semibold hover:underline self-start">
          Read More &rarr;
        </button>
      </div>
    </div>
  );
};


const EducationPage: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<EducationTopic | null>(null);

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Civic Education Hub</h2>
        <p className="mt-4 text-lg text-brand-secondary max-w-2xl mx-auto">
          Knowledge is power. Empower yourself by learning about your rights, duties, and how you can contribute to society.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {EDUCATION_TOPICS.map(topic => (
          <EducationCard key={topic.id} topic={topic} onReadMore={() => setSelectedTopic(topic)} />
        ))}
      </div>
      {selectedTopic && (
        <TopicDetailModal topic={selectedTopic} onClose={() => setSelectedTopic(null)} />
      )}
    </div>
  );
};

export default EducationPage;
