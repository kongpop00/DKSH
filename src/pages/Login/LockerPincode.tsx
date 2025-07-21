

import React, { useEffect } from 'react';
import IconLocker from '../../assets/IconLocker.png';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';

const LockerPincode: React.FC = () => {
  const { t } = useTranslation('translation');

  // ป้องกัน scroll หรือขยับของหน้า
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, []);
  return (
    <div className="w-screen h-screen flex items-center justify-center overflow-hidden relative">
      {/* พื้นหลัง BG.png เต็มจอ */}
      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat z-0"
        style={{ backgroundImage: 'url(/src/assets/BG.png)' }}
        aria-hidden="true"
      />
      <div className="flex flex-col items-center justify-center max-w-lg w-full relative mb-[80px]">
        <img
          src={IconLocker}
          alt="locked"
          className="mb-6"
          style={{ width: 240, height: 240 }}
        />
        <h2 className="text-2xl  mb-2 text-center">
          {t('auth.locker.titlePincode')}
        </h2>
        <div className="text-gray-500 mb-1 text-[17px] text-center">
          {t('auth.locker.desc1Pincode')}
        </div>
        <div className="text-gray-400 mb-6 text-[16px] text-center">
          {t('auth.locker.desc2Pincode')}
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

export default LockerPincode;

