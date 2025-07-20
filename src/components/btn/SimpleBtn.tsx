import React from 'react';
import { ButtonConfig } from './ButtonConfig';

interface SimpleBtnProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

const SimpleBtn: React.FC<SimpleBtnProps> = ({
  text,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  className = '',
}) => {
  // สไตล์ตามประเภท - ใช้จาก config
  const getVariantStyles = () => {
    const colorConfig = ButtonConfig.colors[variant];
    return `${colorConfig.bg} ${colorConfig.hover} ${colorConfig.text} ${colorConfig.border}`;
  };

  // ขนาดปุ่ม - ใช้จาก config
  const getSizeStyles = () => {
    return `${ButtonConfig.spacing[size]} ${ButtonConfig.fontSize[size]}`;
  };

  const baseStyles = `${ButtonConfig.baseStyles}`;
  const loadingStyles = loading ? 'opacity-70 cursor-wait' : '';
  
  const finalClassName = `
    ${baseStyles}
    ${getVariantStyles()}
    ${getSizeStyles()}
    ${loadingStyles}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  // สร้าง inline style สำหรับ border radius
  const getBorderRadius = () => {
    const sizeMap = {
      small: ButtonConfig.borderRadius.small,
      medium: ButtonConfig.borderRadius.default,
      large: ButtonConfig.borderRadius.large,
    };
    return sizeMap[size];
  };

  const inlineStyle = {
    borderRadius: `${getBorderRadius()}px`
  };

  return (
    <button
      className={finalClassName}
      style={inlineStyle}
      onClick={onClick}
      disabled={disabled || loading}
      type="button"
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          {text}
        </span>
      ) : (
        text
      )}
    </button>
  );
};

export default SimpleBtn;
