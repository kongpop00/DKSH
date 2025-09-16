import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import BgPattern from '../components/BgPattern';


export type MessageStatus = 'success' | 'locked' | 'error';

interface MessagePageProps {
  status: MessageStatus;
  titleKey?: string;
  title?: string;
  description1Key?: string;
  description1?: string;
  description2Key?: string; 
  description2?: string;
  description3Key?: string;
  description3?: string;
  buttonTextKey?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  navigateTo?: string;
  primaryNavigateTo?: string;
  secondaryNavigateTo?: string;
  buttonColor?: 'blue' | 'green';
}

const MessagePage: React.FC<MessagePageProps> = ({
  status,
  titleKey,
  title,
  description1Key,
  description1,
  description2Key,
  description2,
  description3Key,
  description3,
  buttonTextKey,
  primaryButtonText,
  secondaryButtonText,
  navigateTo,
  primaryNavigateTo,
  secondaryNavigateTo,

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

  const handlePrimaryButtonClick = () => {
    if (primaryNavigateTo) {
      navigate(primaryNavigateTo);
    } else if (navigateTo) {
      navigate(navigateTo);
    }
  };

  const handleSecondaryButtonClick = () => {
    if (secondaryNavigateTo) {
      navigate(secondaryNavigateTo);
    }
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
            {title || (titleKey ? t(titleKey) : '')}
          </h1>

          {/* Descriptions */}
          <div className="space-y-3 mb-8 text-gray-600">
            {(description1 || description1Key) && (
              <p className="text-sm sm:text-base leading-relaxed">
                {description1 || (description1Key ? t(description1Key) : '')}
              </p>
            )}
            {(description2 || description2Key) && (
              <p className="text-sm sm:text-base leading-relaxed">
                {description2 || (description2Key ? t(description2Key) : '')}
              </p>
            )}
            {(description3 || description3Key) && (
              <p className="text-sm sm:text-base leading-relaxed">
                {description3 || (description3Key ? t(description3Key) : '')}
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 justify-center">
            {/* Primary Button - Left */}
            <Button
              type="primary"
              size="large"
              onClick={handlePrimaryButtonClick}
              className='h-12 px-8 rounded-full font-medium text-base border-none bg-[#1677FF]' 
            >
              {primaryButtonText || (buttonTextKey ? t(buttonTextKey) : '')}
            </Button>

            {/* Secondary Button - Right */}
            {secondaryButtonText && (
              <Button
                size="large"
                onClick={handleSecondaryButtonClick}
                className='h-12 px-8 rounded-full font-medium text-base border border-[#1677FF] text-[#1677FF] bg-white hover:bg-blue-50'
              >
                {secondaryButtonText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagePage;
