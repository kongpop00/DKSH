import React from 'react';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';

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
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-pink-500/90 via-pink-600/90 to-pink-700/90"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        />
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
      <div className="flex-1 lg:w-1/2 flex items-center justify-center p-8" style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #ffffff 40%, #ACDFFF 100%)' }}>
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden mb-8 text-center">
            <Logo size="medium" className="justify-center text-pink-600" />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;