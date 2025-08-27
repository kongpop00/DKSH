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
  width?: number; // ความกว้างทั้งหมดของ component
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  value,
  onChange,
  min = 0,
  max = 999,
  disabled = false,
  size = 'middle',
  width
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
    if (newValue === null || newValue === undefined) {
      onChange(0);
      return;
    }
    
    // ตรวจสอบว่าเป็นจำนวนเต็มและอยู่ในช่วงที่กำหนด
    const intValue = Math.floor(Math.abs(newValue)); // ใช้ค่าบวกและเป็นจำนวนเต็มเท่านั้น
    
    if (intValue >= min && intValue <= max) {
      onChange(intValue);
    } else if (intValue > max) {
      onChange(max);
    } else if (intValue < min) {
      onChange(min);
    }
  };

  const buttonSize = size === 'small' ? 24 : size === 'large' ? 40 : 32;
  const defaultInputWidth = size === 'small' ? 60 : size === 'large' ? 80 : 70;
  const totalWidth = width || (buttonSize * 2 + defaultInputWidth);
  const inputWidth = width ? width - (buttonSize * 2) : defaultInputWidth;

  return (
    <div 
      className="inline-flex items-center border border-gray-300 rounded-full overflow-hidden bg-white"
      style={{ width: totalWidth }}
    >
      <Button
        type="text"
        size={size}
        disabled={disabled || value <= min}
        onClick={handleDecrease}
        className="flex items-center justify-center border-0 rounded-none hover:bg-gray-50 disabled:bg-gray-100 disabled:opacity-50"
        style={{ 
          width: buttonSize, 
          height: buttonSize,
          minWidth: buttonSize
        }}
        icon={<MinusOutlined style={{ fontSize: size === 'small' ? 12 : 14, color: disabled || value <= min ? '#9ca3af' : '#374151' }} />}
      />
      
      <div className="flex items-center justify-center flex-1 bg-white" style={{ minWidth: inputWidth }}>
        <InputNumber
          value={value}
          onChange={handleInputChange}
          min={min}
          max={max}
          disabled={disabled}
          controls={false}
          className="border-0 text-center bg-transparent font-normal [&_.ant-input-number-input]:text-center [&_.ant-input-number-input]:p-0 [&_.ant-input-number-input]:h-full [&_.ant-input-number-input]:flex [&_.ant-input-number-input]:items-center [&_.ant-input-number-input]:justify-center [&_.ant-input-number-input]:font-normal"
          style={{ 
            width: '100%',
            height: buttonSize,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: size === 'small' ? 14 : size === 'large' ? 18 : 16
          }}
          // ป้องกันการพิมพ์ทศนิยมและตัวอักษร
          onKeyDown={(e) => {
            // อนุญาตเฉพาะตัวเลข 0-9, backspace, delete, tab, escape, enter และ arrow keys
            const allowedKeys = [
              8,  // backspace
              9,  // tab
              13, // enter
              27, // escape
              46, // delete
              37, 38, 39, 40 // arrow keys
            ];
            
            const isNumber = (e.keyCode >= 48 && e.keyCode <= 57) || // 0-9
                           (e.keyCode >= 96 && e.keyCode <= 105); // numpad 0-9
            
            if (!isNumber && !allowedKeys.includes(e.keyCode)) {
              e.preventDefault();
              return;
            }
            
            // ป้องกันการพิมพ์จุดทศนิยม, เครื่องหมายลบ, และ e/E
            if (e.key === '.' || e.key === '-' || e.key === '+' || e.key === 'e' || e.key === 'E') {
              e.preventDefault();
            }
          }}
          // ป้องกันการวางข้อความที่ไม่ใช่ตัวเลข
          onPaste={(e) => {
            e.preventDefault(); // ป้องกันการ paste ทั้งหมด
          }}
          // ป้องกันการใช้ mouse wheel
          onWheel={(e) => {
            e.preventDefault();
          }}
          parser={(value) => {
            if (!value) return 0;
            // ลบทุกอย่างที่ไม่ใช่ตัวเลข
            const cleanValue = value.toString().replace(/[^\d]/g, '');
            const parsed = parseInt(cleanValue, 10);
            
            if (isNaN(parsed)) return 0;
            if (parsed > max) return max;
            if (parsed < min) return min;
            
            return parsed;
          }}
          formatter={(value) => {
            if (value === undefined || value === null) return '0';
            // แสดงผลเป็นจำนวนเต็มเท่านั้น
            const intValue = Math.floor(Math.abs(Number(value)));
            return intValue.toString();
          }}
        />
      </div>
      
      <Button
        type="text"
        size={size}
        disabled={disabled || value >= max}
        onClick={handleIncrease}
        className="flex items-center justify-center border-0 rounded-none hover:bg-gray-50 disabled:bg-gray-100 disabled:opacity-50"
        style={{ 
          width: buttonSize, 
          height: buttonSize,
          minWidth: buttonSize
        }}
        icon={<PlusOutlined style={{ fontSize: size === 'small' ? 12 : 14, color: disabled || value >= max ? '#9ca3af' : '#374151' }} />}
      />
    </div>
  );
};

export default QuantitySelector;
