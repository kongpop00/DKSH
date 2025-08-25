import React, { useState, useEffect } from 'react';
import { message, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { RotateCcw } from 'lucide-react';
import AuthLayout from '../../components/AuthLayout';



const CheckCodePage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [otpValue, setOtpValue] = useState('');
  const [countdown, setCountdown] = useState(180); // 180 วินาที
  const [canResend, setCanResend] = useState(false);
  const [otpError, setOtpError] = useState(false);

  // useEffect สำหรับนับถอยหลัง
  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            setCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [countdown]);

  // ฟังก์ชันแปลงวินาทีเป็นรูปแบบ MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const [, setFailCount] = useState(0);

  const handleVerifyCode = async () => {
    console.log('OTP Value:', otpValue);
    if (otpValue.length !== 6) {
      message.error(t('auth.otpRequired'));
      setOtpError(true);
      return;
    }
    setLoading(true);
    try {
      // Mockup: only accept 123456
      await new Promise(resolve => setTimeout(resolve, 500));
      if (otpValue === '123456') {
        message.success(t('auth.verifySuccess'));
        setOtpError(false);
        setFailCount(0);
        navigate('/users/Home');
      } else {
        message.error(t('auth.verifyError'));
        setOtpError(true);
        setFailCount(prev => {
          const next = prev + 1;
          if (next >= 5) {
            navigate('/lockerPincode');
          }
          return next;
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = () => {
    if (canResend) {
      message.success(t('auth.resendSuccess'));
      setCountdown(180); // รีเซ็ตเวลา
      setCanResend(false); // ปิดการใช้งานปุ่ม
    }
  };

  // const onChange = (text: string) => {
  //   // กรองให้เหลือแต่ตัวเลขเท่านั้น
  //   const onlyDigits = text.replace(/\D/g, '');
  //   setOtpValue(onlyDigits);
  //   setOtpError(false);
  // };

  const handleInputChange = (value: string, index: number) => {
    const newValue = value.replace(/\D/g, ''); // เฉพาะตัวเลข
    if (newValue.length <= 1) {
      const newOtp = otpValue.split('');
      newOtp[index] = newValue;
      const updatedOtp = newOtp.join('').slice(0, 6);
      setOtpValue(updatedOtp);
      setOtpError(false);

      // Auto focus to next input
      if (newValue && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Backspace' && !otpValue[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    setOtpValue(pastedText);
    setOtpError(false);
  };

  return (
    <AuthLayout>
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-4xl 3xl:text-5xl 4xl:text-6xl font-medium text-gray-900 mb-2">{t('auth.verifyCodeTitle')}</h2>
          <p className="text-lg 3xl:text-xl 4xl:text-2xl text-gray-600 mb-6">{t('auth.verifyCodeDescription')}</p>
        </div>
        
        <div className="space-y-6">
          <div className="text-center">
            <p className="text-gray-700 font-medium text-lg 3xl:text-xl 4xl:text-2xl mb-4">{t('auth.verificationCode')}</p>
            <div className="flex justify-center gap-3 3xl:gap-4 4xl:gap-5" onPaste={handlePaste}>
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={otpValue[index] || ''}
                  onChange={(e) => handleInputChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className={`
                    w-12 h-12 3xl:w-16 3xl:h-16 4xl:w-20 4xl:h-20
                    text-xl 3xl:text-2xl 4xl:text-3xl font-semibold
                    text-center rounded-xl
                    border-2 outline-none transition-all duration-200
                    ${otpError 
                      ? 'bg-red-50 border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
                      : 'bg-blue-50 border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                    }
                    ${otpValue[index] ? 'bg-blue-100' : ''}
                  `}
                  style={{
                    backgroundColor: otpError ? '#FEF2F2' : '#E0F4FF',
                    borderColor: otpError ? '#FCA5A5' : '#87CEEB',
                  }}
                />
              ))}
            </div>
            {otpError && (
              <div className="text-red-500 text-base 3xl:text-lg 4xl:text-xl mt-2">{t('auth.verifyError')}</div>
            )}
          </div>

          <Button
            type="primary"
            loading={loading}
            onClick={handleVerifyCode}
            className="w-full h-14 3xl:h-16 4xl:h-20 rounded-[80px]  hover:bg-blue-700 border-blue-600 text-white font-medium text-lg 3xl:text-xl 4xl:text-2xl"
          >
            {t('auth.verify')}
          </Button>

          <div className="text-center">
            <button
              type="button"
              className={`font-bold flex items-center justify-center gap-2 mx-auto text-base 3xl:text-lg 4xl:text-xl ${
                canResend 
                  ? 'cursor-pointer' 
                  : 'cursor-not-allowed'
              }`}
              style={{ 
                color: canResend ? '#1890FF' : '#9CA3AF' 
              }}
              onClick={handleResendCode}
              disabled={!canResend}
            >
              <RotateCcw 
                className="w-5 h-5 3xl:w-6 3xl:h-6 4xl:w-7 4xl:h-7" 
                style={{ 
                  transform: 'scaleX(-1)',
                  strokeWidth: 2.5
                }} 
              />
              {canResend ? t('auth.resendCode') : `${t('auth.resendCode')} (${formatTime(countdown)})`}
            </button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default CheckCodePage;