
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-6 text-center text-brand-secondary">
        <p>&copy; {new Date().getFullYear()} Civic Pulse. All Rights Reserved.</p>
        <p className="text-sm mt-1">Empowering citizens for a better tomorrow.</p>
      </div>
    </footer>
  );
};

export default Footer;
