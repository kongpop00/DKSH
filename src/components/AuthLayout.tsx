import React from 'react';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';
import  bgLeft from'../assets/BG3.svg'

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex">
      {/* Language Switcher - Fixed position */}
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>

      {/* Left side - Image background */}
      <div className="flex w-[722px] relative">
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-pink-500/90 via-pink-600/90 to-pink-700/90">
          <img
            src={bgLeft}
            alt="background"
            className="w-full h-full object-cover absolute inset-0"
            style={{ zIndex: 1 }}
          />
        </div>
        <div className="relative z-10 flex items-center justify-center w-full">
          <div className="text-center">
            <Logo size="large" className="justify-center mb-4" />
            <h1 className="text-2xl font-light text-white/90 max-w-md">
              {t('auth.welcomeMessage')}
            </h1>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex items-center justify-center p-8" style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #ffffff 40%, #ACDFFF 100%)' }}>
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;