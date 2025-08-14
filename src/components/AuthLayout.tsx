import React from 'react';
// import { useTranslation } from 'react-i18next';
 import Logo from '../assets/Logo.svg';
import LanguageSwitcher from './LanguageSwitcher';
import bgLeft from'../assets/BG3.svg'
import BgLogin from '../assets/BG2.svg'; 

interface AuthLayoutProps {
  children: React.ReactNode;
  backgroundImage?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, backgroundImage }) => {
  // const { t } = useTranslation();

  return (
    <div 
      className="min-h-screen flex relative" 
      style={{ 
        backgroundImage: `url(${BgLogin})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Language Switcher - Fixed position */}
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>

      {/* Left side - Image background */}
      <div className="hidden xl:flex w-auto relative">
        <div className="relative">
          <img
            src={backgroundImage || bgLeft}
            alt="background"
            className="h-screen w-auto object-contain"
          />
         
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center bg-[#BAE0FF] px-8 py-4  flex items-center justify-center w-full">
              <img src={Logo} alt="logo" className="h-48 md:h-56 lg:h-64 xl:h-72 2xl:h-64 3xl:h-72 4xl:h-112 w-auto object-contain max-w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div 
        className="flex-1 flex items-center justify-center p-6 xl:p-8 relative" 
       
      >
        {/* Lighter overlay for better readability */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]"></div>
        
        <div className="w-full max-w-md relative z-10">
          {/* Mobile logo */}
          <div className="xl:hidden mb-8 text-center">
            <img src={Logo} alt="logo" className="h-[10%] w-auto object-contain mx-auto" />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;