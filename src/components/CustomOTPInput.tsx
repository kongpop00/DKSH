import React, { useRef } from 'react';

interface CustomOTPInputProps {
  value: string;
  onChange: (val: string) => void;
  length?: number;
  error?: boolean;
}

const CustomOTPInput: React.FC<CustomOTPInputProps> = ({ value, onChange, length = 6, error }) => {
  const inputs = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const val = e.target.value.replace(/[^0-9]/g, ''); // block non-numeric
    if (!val) return;
    const newValue = value.split('');
    newValue[idx] = val;
    const joined = newValue.join('').slice(0, length);
    onChange(joined);
    // move to next input
    if (val && idx < length - 1) {
      inputs.current[idx + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
    if (e.key === 'Backspace') {
      const newValue = value.split('');
      if (newValue[idx]) {
        newValue[idx] = '';
        onChange(newValue.join(''));
      } else if (idx > 0) {
        inputs.current[idx - 1]?.focus();
        newValue[idx - 1] = '';
        onChange(newValue.join(''));
      }
    }
  };

  return (
    <div className="flex gap-2 justify-center">
      {Array.from({ length }).map((_, idx) => (
        <input
          key={idx}
          ref={el => (inputs.current[idx] = el)}
          type="text"
          inputMode="numeric"
          maxLength={1}
          className={`w-12 h-12 text-center border rounded ${error ? 'border-red-500' : 'border-gray-300'} text-2xl`}
          value={value[idx] || ''}
          onChange={e => handleChange(e, idx)}
          onKeyDown={e => handleKeyDown(e, idx)}
        />
      ))}
    </div>
  );
};

export default CustomOTPInput;
