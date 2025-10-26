
import React from 'react';
import { Page } from '../types';

interface HomePageProps {
  navigate: (page: Page) => void;
}

const StatCard: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <p className="text-3xl md:text-4xl font-bold text-brand-primary">{value}</p>
    <p className="text-md text-brand-secondary mt-2">{label}</p>
  </div>
);

// Fix: Replaced JSX.Element with React.ReactElement to resolve namespace issue.
const ActionButton: React.FC<{ onClick: () => void; children: React.ReactNode; icon: React.ReactElement }> = ({ onClick, children, icon }) => (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-full bg-brand-primary text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-brand-primary-hover transition-transform transform hover:-translate-y-1 duration-300"
    >
      {icon}
      <span className="ml-3">{children}</span>
    </button>
);


const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-brand-dark mb-4">Welcome to Civic Pulse</h1>
        <p className="text-lg md:text-xl text-brand-secondary max-w-3xl mx-auto mb-8">
          Your platform to report local issues, learn about your civic duties, and discover solutions for a better community.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => navigate(Page.Report)} 
            className="bg-brand-primary text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-brand-primary-hover transition duration-300"
          >
            Report an Issue
          </button>
          <button 
            onClick={() => navigate(Page.Education)} 
            className="bg-gray-200 text-brand-dark font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-300 transition duration-300"
          >
            Learn More
          </button>
        </div>
      </section>

      {/* Main Content Grid */}
       <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 space-y-6">
          <h2 className="text-3xl font-bold text-brand-dark">Be the Change in Your Community</h2>
          <p className="text-brand-secondary">
            Civic Pulse makes it easy to voice your concerns and contribute to positive change. From potholes to pollution, your reports help authorities take action. Explore our resources to become an informed and empowered citizen.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ActionButton onClick={() => navigate(Page.Report)} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>}>
                Report an Issue
            </ActionButton>
            <ActionButton onClick={() => navigate(Page.Education)} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>}>
                Get Educated
            </ActionButton>
            <ActionButton onClick={() => navigate(Page.Solutions)} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>}>
                Find Solutions
            </ActionButton>
          </div>
        </div>
        <div className="order-1 md:order-2">
            <img src="https://picsum.photos/seed/community/600/500" alt="Community engagement" className="rounded-lg shadow-2xl w-full h-auto object-cover" />
        </div>
      </section>

      {/* Stats Section */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <StatCard value="10,000+" label="Reports Filed" />
          <StatCard value="7,500+" label="Issues Resolved" />
          <StatCard value="50,000+" label="Active Citizens" />
        </div>
      </section>
    </div>
  );
};

export default HomePage;