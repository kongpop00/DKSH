import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import BgPattern from '../components/BgPattern';


export type MessageStatus = 'success' | 'locked' | 'error';

interface MessagePageProps {
  status: MessageStatus;
  titleKey: string;
  description1Key?: string;
  description2Key?: string; 
  description3Key?: string;
  buttonTextKey: string;
  navigateTo: string;
  buttonColor?: 'blue' | 'green';
}

const MessagePage: React.FC<MessagePageProps> = ({
  status,
  titleKey,
  description1Key,
  description2Key,
  description3Key,
  buttonTextKey,
  navigateTo,

}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const getIcon = () => {
    switch (status) {
      case 'success':
        return '/src/assets/check-circle.png';
      case 'locked':
        return '/src/assets/IconLocker.png';
      case 'error':
        return '/src/assets/error-circle.png'; // สำหรับ error ถ้ามี
      default:
        return '/src/assets/check-circle.png';
    }
  };

  const getIconBgColor = () => {
    switch (status) {
      case 'success':
        return 'bg-[#52C41A]';
      case 'locked':
        return 'bg-orange-500';
      case 'error':
        return 'bg-red-500';
      default:
        return 'bg-[#52C41A]';
    }
  };

  const handleButtonClick = () => {
    navigate(navigateTo);
  };

  return (
    <div className="min-h-screen relative flex flex-col">
      <BgPattern />
      
    

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center relative px-6">
        <div className="text-center max-w-md mx-auto">
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            {status === 'success' ? (
              <div className={`w-[120px] h-[120px] ${getIconBgColor()} rounded-full flex items-center justify-center`}>
                <svg className="w-[105px] h-[105px] text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            ) : (
              <div className="w-20 h-20 flex items-center justify-center">
                <img 
                  src={getIcon()} 
                  alt={status}
                  className="w-16 h-16 object-contain"
                />
              </div>
            )}
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            {t(titleKey)}
          </h1>

          {/* Descriptions */}
          <div className="space-y-3 mb-8 text-gray-600">
            {description1Key && (
              <p className="text-sm sm:text-base leading-relaxed">
                {t(description1Key)}
              </p>
            )}
            {description2Key && (
              <p className="text-sm sm:text-base leading-relaxed">
                {t(description2Key)}
              </p>
            )}
            {description3Key && (
              <p className="text-sm sm:text-base leading-relaxed">
                {t(description3Key)}
              </p>
            )}
          </div>

          {/* Button */}
          <Button
            type="primary"
            size="large"
            onClick={handleButtonClick}
            className='h-12 px-8 rounded-full font-medium text-base border-none bg-primary ' 
             
          >
            {t(buttonTextKey)}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MessagePage;
