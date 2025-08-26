
import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import tistrLogo from '../assets/lofoNavbar.png';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  return (
    <>
    <div>
      
    </div>
    <nav
      className={`z-[9999] w-full flex flex-col sm:flex-row items-center justify-between bg-gradient-to-b from-[#0958D9] via-[#4096FF] via-[#91CAFF] to-[#FFFFFF] shadow-sm ${className} px-4 sm:px-8 md:px-20 py-2 sm:py-4`}
    >
      <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto justify-center sm:justify-start">
        <img
          src={tistrLogo}
          alt="TISTR Logo"
          className="h-10 sm:h-12 md:h-[100px] w-auto object-contain"
          style={{ minWidth: 60 }}
        />

        <div className="flex flex-col justify-center">
          <span className="text-base sm:text-lg md:text-3xl font-[400] text-[#1a237e] leading-tight sm:leading-5">สถาบันวิจัยวิทยาศาสตร์และเทคโนโลยีแห่งประเทศไทย</span>
          <span className="text-[10px] sm:text-xs md:text-lg text-[#1a237e] -mt-0">THAILAND INSTITUTE OF SCIENTIFIC AND TECHNOLOGICAL RESEARCH</span>
        </div>
      </div>
      <div className="flex items-center mt-2 sm:mt-0">
        <LanguageSwitcher />
      </div>
    </nav>
    </>
   
  );
};

export default Navbar;
