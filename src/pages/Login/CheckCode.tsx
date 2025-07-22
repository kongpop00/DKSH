import React, { useState, useEffect } from 'react';
import { message, Button } from 'antd';
import { Input } from 'antd';
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

  const onChange = (text: string) => {
    // กรองให้เหลือแต่ตัวเลขเท่านั้น
    const onlyDigits = text.replace(/\D/g, '');
    setOtpValue(onlyDigits);
    setOtpError(false);
  };

  return (
    <AuthLayout>
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-medium text-gray-900 mb-2">{t('auth.verifyCodeTitle')}</h2>
          <p className="text-gray-600 mb-6">{t('auth.verifyCodeDescription')}</p>
        </div>
        
        <div className="space-y-6">
          <div className="text-center">
            <p className="text-gray-700 font-medium mb-4">{t('auth.verificationCode')}</p>
            <Input.OTP
              size="large"
              length={6}
              value={otpValue}
              status={otpError ? 'error' : ''}
              onChange={onChange}
              inputMode="numeric"
              className="justify-center"
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '12px'
              }}
            />
            {otpError && (
              <div className="text-red-500 text-sm mt-2">{t('auth.verifyError')}</div>
            )}
          </div>

          <Button
            type="primary"
            loading={loading}
            onClick={handleVerifyCode}
            className="w-full h-12 rounded-[80px] bg-blue-600 hover:bg-blue-700 border-blue-600 text-white font-medium text-base"
          >
            {t('auth.verify')}
          </Button>

          <div className="text-center">
            <button
              type="button"
              className={`font-medium flex items-center justify-center gap-2 mx-auto ${
                canResend 
                  ? 'text-blue-600 hover:text-blue-800 cursor-pointer' 
                  : 'text-gray-400 cursor-not-allowed'
              }`}
              onClick={handleResendCode}
              disabled={!canResend}
            >
              <RotateCcw className="w-4 h-4" />
              {canResend ? t('auth.resendCode') : `${t('auth.resendCode')} (${formatTime(countdown)})`}
            </button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default CheckCodePage;