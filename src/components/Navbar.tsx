
import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import tistrLogo from '../assets/tistr_logo.png';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  return (
    <nav
      className={`z-[9999] w-full flex flex-col sm:flex-row items-center justify-between bg-gradient-to-r from-[#cbe3fa] via-[#eaf6ff] to-[#fff] shadow-sm ${className} px-4 sm:px-8 md:px-20 py-2 sm:py-4`}
    >
      <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto justify-center sm:justify-start">
        <img
          src={tistrLogo}
          alt="TISTR Logo"
          className="h-10 sm:h-12 md:h-16 w-auto object-contain"
          style={{ minWidth: 60 }}
        />
        <div className="flex flex-col justify-center">
          <span className="text-base sm:text-lg md:text-xl font-bold text-[#1a237e] leading-tight sm:leading-5">สถาบันวิจัยวิทยาศาสตร์<br className="hidden sm:block"/>และเทคโนโลยีแห่งประเทศไทย</span>
          <span className="text-[10px] sm:text-xs md:text-sm text-[#1a237e] -mt-0">THAILAND INSTITUTE OF SCIENTIFIC AND TECHNOLOGICAL RESEARCH</span>
        </div>
      </div>
      <div className="flex items-center mt-2 sm:mt-0">
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
