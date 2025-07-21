
import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import tistrLogo from '../assets/tistr_logo.png';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  return (
    <nav
      className={`z-[9999] w-full flex items-center justify-between bg-gradient-to-r from-[#cbe3fa] via-[#eaf6ff] to-[#fff] shadow-sm ${className}`}
      style={{  padding: '40px 80px 16px 80px' }}
    >
      <div className="flex items-center gap-4">
        <img
          src={tistrLogo}
          alt="TISTR Logo"
          className="h-12 w-auto object-contain"
          style={{ minWidth: 90 }}
        />
        <div className="flex flex-col justify-center">
          <span className="text-[20px] font-bold text-[#1a237e] leading-5">สถาบันวิจัยวิทยาศาสตร์<br/>และเทคโนโลยีแห่งประเทศไทย</span>
          <span className="text-[11px] text-[#1a237e] -mt-0">THAILAND INSTITUTE OF SCIENTIFIC AND TECHNOLOGICAL RESEARCH</span>
        </div>
      </div>
      <div className="flex items-center">
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
