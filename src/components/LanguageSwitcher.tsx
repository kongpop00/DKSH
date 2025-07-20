import React from 'react';
import { Dropdown, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import Flag from 'react-world-flags';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const ThaiFlag = () => (
    <Flag
      code="TH"
      style={{
        width: 26,
        height: 26,
        borderRadius: '50%',
        border: '1px solid #e5e7eb',
        boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
        objectFit: 'cover',
        display: 'block',
      }}
    />
  );

  const EnglishFlag = () => (
    <Flag
      code="GB"
      style={{
        width: 26,
        height: 26,
        borderRadius: '50%',
        border: '1px solid #e5e7eb',
        boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
        objectFit: 'cover',
        display: 'block',
      }}
    />
  );

  const menuItems = [
    {
      key: 'th',
      label: (
        <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-md transition-colors ">
          <ThaiFlag />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-800">ไทย</span>
            <span className="text-xs text-gray-500">Thai</span>
          </div>
        </div>
      ),
      onClick: () => changeLanguage('th'),
    },
    {
      key: 'en',
      label: (
        <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-md transition-colors">
          <EnglishFlag />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-800">English</span>
            <span className="text-xs text-gray-500">อังกฤษ</span>
          </div>
        </div>
      ),
      onClick: () => changeLanguage('en'),
    },
  ];

  const getCurrentFlag = () => {
    return i18n.language === 'th' ? <ThaiFlag /> : <EnglishFlag />;
  };

  const getCurrentLanguageCode = () => {
    return i18n.language === 'th' ? 'TH' : 'EN';
  };

  return (
    <Dropdown
      menu={{ items: menuItems }}
      placement="bottomRight"
      trigger={['click']}
    >
      <Button
        type="text"
        className="flex items-center gap-2 h-10 px-3 hover:bg-gray-100 rounded-lg border border-gray-200 bg-white"
      >
        {getCurrentFlag()}
        <span className="text-sm font-medium text-gray-700">{getCurrentLanguageCode()}</span>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </Button>
    </Dropdown>
  );
};

export default LanguageSwitcher;