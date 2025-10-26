
import React, { useState, useMemo } from 'react';
import { SOLUTIONS } from '../constants';
import { ReportCategory } from '../types';

const SolutionCard: React.FC<{ title: string; thumbnail: string; steps: string[] }> = ({ title, thumbnail, steps }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
    <img src={thumbnail} alt={title} className="w-full md:w-1/3 h-48 md:h-auto object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-brand-dark mb-3">{title}</h3>
      <ul className="space-y-2 list-disc list-inside text-brand-secondary">
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
    </div>
  </div>
);


const SolutionsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState<ReportCategory | 'all'>('all');

  const filteredSolutions = useMemo(() => {
    return SOLUTIONS.filter(solution => {
      const matchesCategory = filterCategory === 'all' || solution.category === filterCategory;
      const matchesSearch = solution.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            solution.steps.some(step => step.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, filterCategory]);

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Find Solutions</h2>
        <p className="mt-4 text-lg text-brand-secondary max-w-2xl mx-auto">
          Discover actionable steps to resolve common civic issues. Search for a problem or filter by category.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 p-4 bg-white rounded-lg shadow-md">
        <div className="flex-grow">
          <input
            type="text"
            placeholder="Search for solutions..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
          />
        </div>
        <div className="flex-shrink-0">
          <select
            value={filterCategory}
            onChange={e => setFilterCategory(e.target.value as ReportCategory | 'all')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
          >
            <option value="all">All Categories</option>
            {Object.values(ReportCategory).map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Solutions List */}
      <div className="space-y-8">
        {filteredSolutions.length > 0 ? (
          filteredSolutions.map(solution => <SolutionCard key={solution.id} {...solution} />)
        ) : (
          <div className="text-center py-16 px-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-brand-dark">No Solutions Found</h3>
            <p className="text-brand-secondary mt-2">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SolutionsPage;
