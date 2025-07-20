import React from 'react';
import { Button } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { ButtonConfig } from './ButtonConfig';

interface BaseBtnProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'primary' | 'default' | 'dashed' | 'link' | 'text';
  size?: SizeType;
  loading?: boolean;
  disabled?: boolean;
  danger?: boolean;
  block?: boolean;
  htmlType?: 'button' | 'submit' | 'reset';
  className?: string;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
}

const BaseBtn: React.FC<BaseBtnProps> = ({
  children,
  onClick,
  type = 'default',
  size = 'middle',
  loading = false,
  disabled = false,
  danger = false,
  block = false,
  htmlType = 'button',
  className = '',
  icon,
  variant,
  ...props
}) => {
  // สร้าง className สำหรับ variant colors - ใช้จาก config
  const getVariantClass = () => {
    if (!variant) return '';
    
    const colorConfig = ButtonConfig.colors[variant];
    return `${colorConfig.bg} ${colorConfig.hover} ${colorConfig.border} ${colorConfig.text}`;
  };

  // เพิ่ม border radius จาก config
  const getBorderRadius = () => {
    const sizeMap = {
      small: ButtonConfig.borderRadius.small,
      middle: ButtonConfig.borderRadius.default,
      large: ButtonConfig.borderRadius.large,
    };
    return sizeMap[size] || ButtonConfig.borderRadius.default;
  };

  const finalClassName = `${className} ${getVariantClass()}`.trim();
  
  const buttonStyle = {
    borderRadius: `${getBorderRadius()}px`
  };

  return (
    <Button
      type={type}
      size={size}
      loading={loading}
      disabled={disabled}
      danger={danger}
      block={block}
      htmlType={htmlType}
      className={finalClassName}
      style={buttonStyle}
      icon={icon}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
};

export default BaseBtn;
