import React, { useState } from 'react';
import { Button } from 'antd';
import { ShoppingCartOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-white w-full">
      <div className="px-4 md:px-8 lg:px-[100px] mx-auto">
        <div className="flex items-center justify-between h-[56px]">
          {/* Left side - Navigation Menu - Desktop */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-20">
            <a 
              href="#"
              className="text-white hover:text-blue-200 transition-colors duration-200 text-sm font-light"
            >
              {t('header.home')}
            </a>
            <a 
              href="#" 
              className="text-white hover:text-blue-200 transition-colors duration-200 text-sm font-light"
            >
              {t('header.government')}
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-blue-200 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <CloseOutlined style={{ fontSize: 20 }} />
            ) : (
              <MenuOutlined style={{ fontSize: 20 }} />
            )}
          </button>

          {/* Right side - Cart Button */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <Button 
              type="text" 
              className="text-white hover:text-blue-200 hover:bg-blue-700 border border-white rounded-[40px] px-3 py-2 md:px-5 md:py-5 text-xs md:text-sm font-extralight flex items-center gap-1 md:gap-2"
              icon={<ShoppingCartOutlined style={{ fontSize: 16 }} className="md:text-[20px]" />}
            >
              <span className='text-xs md:text-sm font-light hidden sm:inline'>{t('header.cart')}</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-primary border-t border-blue-500">
            <nav className="px-4 py-4 space-y-4">
              <a 
                href="#"
                className="block text-white hover:text-blue-200 transition-colors duration-200 text-sm font-light py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('header.home')}
              </a>
              <a 
                href="#" 
                className="block text-white hover:text-blue-200 transition-colors duration-200 text-sm font-light py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('header.government')}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;