import React from 'react';
import { Button, InputNumber } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  disabled?: boolean;
  size?: 'small' | 'middle' | 'large';
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  value,
  onChange,
  min = 0,
  max = 999,
  disabled = false,
  size = 'middle'
}) => {
  const handleDecrease = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrease = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  const handleInputChange = (newValue: number | null) => {
    if (newValue !== null && newValue >= min && newValue <= max) {
      onChange(Math.floor(newValue)); // ให้แน่ใจว่าเป็นจำนวนเต็ม
    }
  };

  const buttonSize = size === 'small' ? 24 : size === 'large' ? 40 : 32;
  const inputWidth = size === 'small' ? 60 : size === 'large' ? 80 : 70;

  return (
    <div className="flex items-center border border-gray-300 rounded-full overflow-hidden bg-white">
      <Button
        type="text"
        size={size}
        disabled={disabled || value <= min}
        onClick={handleDecrease}
        className="flex items-center justify-center border-0 rounded-none hover:bg-gray-100 disabled:bg-gray-50"
        style={{ 
          width: buttonSize, 
          height: buttonSize,
          minWidth: buttonSize
        }}
        icon={<MinusOutlined style={{ fontSize: size === 'small' ? 12 : 14 }} />}
      />
      
      <div className="flex-1 flex items-center justify-center border-x border-gray-300">
        <InputNumber
          value={value}
          onChange={handleInputChange}
          min={min}
          max={max}
          disabled={disabled}
          controls={false}
          className="border-0 text-center"
          style={{ 
            width: inputWidth,
            height: buttonSize - 2
          }}
          // ป้องกันการพิมพ์ทศนิยมและตัวอักษร
          onKeyPress={(e) => {
            const char = String.fromCharCode(e.which);
            if (!/^[0-9]$/.test(char) && e.which !== 8 && e.which !== 46) {
              e.preventDefault();
            }
          }}
          // ป้องกันการวางข้อความที่ไม่ใช่ตัวเลข
          onPaste={(e) => {
            const paste = e.clipboardData.getData('text');
            if (!/^\d+$/.test(paste)) {
              e.preventDefault();
            }
          }}
          parser={(value) => {
            // แปลงค่าที่ป้อนเข้ามาให้เป็นจำนวนเต็มเท่านั้น
            const parsed = value ? parseInt(value.replace(/\D/g, ''), 10) : 0;
            return isNaN(parsed) ? 0 : parsed;
          }}
          formatter={(value) => {
            // แสดงผลเป็นจำนวนเต็มเท่านั้น
            return value ? Math.floor(Number(value)).toString() : '0';
          }}
        />
      </div>
      
      <Button
        type="text"
        size={size}
        disabled={disabled || value >= max}
        onClick={handleIncrease}
        className="flex items-center justify-center border-0 rounded-none hover:bg-gray-100 disabled:bg-gray-50"
        style={{ 
          width: buttonSize, 
          height: buttonSize,
          minWidth: buttonSize
        }}
        icon={<PlusOutlined style={{ fontSize: size === 'small' ? 12 : 14 }} />}
      />
    </div>
  );
};

export default QuantitySelector;
