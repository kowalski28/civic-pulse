
import React, { useState } from 'react';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  navigate: (page: Page) => void;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  navigate: (page: Page) => void;
  children: React.ReactNode;
  isMobile?: boolean;
}> = ({ page, currentPage, navigate, children, isMobile = false }) => {
  const isActive = currentPage === page;
  const baseClasses = `cursor-pointer font-medium transition-colors duration-200`;
  const mobileClasses = `block px-4 py-2 text-lg`;
  const desktopClasses = `py-2`;
  const activeClasses = 'text-brand-primary';
  const inactiveClasses = 'text-gray-600 hover:text-brand-primary';

  return (
    <a
      onClick={() => navigate(page)}
      className={`${baseClasses} ${isMobile ? mobileClasses : desktopClasses} ${isActive ? activeClasses : inactiveClasses}`}
    >
      {children}
    </a>
  );
};


const Header: React.FC<HeaderProps> = ({ currentPage, navigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { page: Page.Home, label: 'Home' },
    { page: Page.Report, label: 'Report an Issue' },
    { page: Page.Education, label: 'Education' },
    { page: Page.Solutions, label: 'Solutions' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate(Page.Home)}>
            <svg className="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
            <h1 className="text-2xl font-bold text-brand-dark">Civic Pulse</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <NavLink key={item.page} page={item.page} currentPage={currentPage} navigate={navigate}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-dark focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-2">
               {navItems.map(item => (
                <NavLink key={item.page} page={item.page} currentPage={currentPage} navigate={() => { navigate(item.page); setIsMenuOpen(false); }} isMobile>
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
