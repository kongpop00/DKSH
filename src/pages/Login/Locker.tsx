
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';

const Locker: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div
      className=" inset-0 w-screen h-screen flex items-center justify-center bg-gradient-to-br from-[#eaf6ff] via-[#f6fbff] to-[#d2eaff] overflow-hidden"
      style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
    >
      <div className="flex flex-col items-center justify-center max-w-lg w-full px-4 py-12 bg-white/80 rounded-2xl shadow-lg">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
          alt="locked"
          className="w-32 h-32 mb-6"
        />
        <h2 className="text-2xl font-bold mb-2 text-center">
          {t('locker.title')}
        </h2>
        <div className="text-gray-500 mb-1 text-[17px] text-center">
          {t('locker.desc1')}
        </div>
        <div className="text-gray-400 mb-6 text-[16px] text-center">
          {t('locker.desc2')}
        </div>
        <Button
          type="primary"
          className="w-40 h-10 rounded-[80px] bg-blue-600 hover:bg-blue-700 border-blue-600 text-white font-medium text-base"
          onClick={() => window.location.href = '/'}
        >
          {t('common.accept')}
        </Button>
      </div>
    </div>
  );
};

export default Locker;

