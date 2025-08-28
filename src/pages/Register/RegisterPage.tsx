import React, { useEffect, useState } from 'react';
import { Button, Input, Form, message, Steps } from 'antd';
import { Eye, EyeOff, Check, RotateCcw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TermsModal from '../../components/TermsModal';

const RegisterPage: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [termsModalVisible, setTermsModalVisible] = useState(false);
  const [formFields, setFormFields] = useState({
    email: '',
    pincode: '',
    password: '',
    confirmPassword: ''
  });
  const [countdown, setCountdown] = useState(0);
  const [canResend, setCanResend] = useState(true);
  const [passwordValidation, setPasswordValidation] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false
  });

  const handlePasswordChange = (value: string) => {
    setFormFields(prev => ({ ...prev, password: value }));
    setPasswordValidation({
      length: value.length >= 8,
      uppercase: /[A-Z]/.test(value), // เช็คแค่พิมพ์ใหญ่
      lowercase: /[a-z]/.test(value), // เช็คแค่พิมพ์เล็ก
      number: /\d/.test(value),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(value)
    });
  };

  const handleEmailChange = (value: string) => {
    setFormFields(prev => ({ ...prev, email: value }));
  };

  const handlePincodeInputChange = (value: string, index: number) => {
    const newValue = value.replace(/\D/g, ''); // เฉพาะตัวเลข
    if (newValue.length <= 1) {
      const newPincode = [...formFields.pincode.padEnd(6, '')]; // แปลงเป็น array และ pad ให้ครบ 6 ตัว
      newPincode[index] = newValue;
      const updatedPincode = newPincode.join('').replace(/\s/g, ''); // ลบ space ออก
      setFormFields(prev => ({ ...prev, pincode: updatedPincode }));

      // Auto focus to next input
      if (newValue && index < 5) {
        const nextInput = document.getElementById(`pincode-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handlePincodeKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Backspace') {
      const newPincode = [...formFields.pincode.padEnd(6, '')];
      if (newPincode[index]) {
        // ลบตัวอักษรในช่องปัจจุบัน
        newPincode[index] = '';
        const updatedPincode = newPincode.join('').replace(/\s/g, '');
        setFormFields(prev => ({ ...prev, pincode: updatedPincode }));
      } else if (index > 0) {
        // ถ้าช่องปัจจุบันว่าง ให้กลับไปช่องก่อนหน้า
        const prevInput = document.getElementById(`pincode-${index - 1}`);
        prevInput?.focus();
      }
    }
  };

  const handlePincodeePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    setFormFields(prev => ({ ...prev, pincode: pastedText }));
    
    // Focus ไปช่องสุดท้ายที่มีค่า หรือช่องถัดไป
    const nextIndex = Math.min(pastedText.length, 5);
    setTimeout(() => {
      const nextInput = document.getElementById(`pincode-${nextIndex}`);
      nextInput?.focus();
    }, 0);
  };

  const handleConfirmPasswordChange = (value: string) => {
    setFormFields(prev => ({ ...prev, confirmPassword: value }));
  };

  // ฟังก์ชันแปลงวินาทีเป็นรูปแบบ MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleResendCode = () => {
    if (canResend) {
      message.success('ส่งรหัสยืนยันใหม่แล้ว');
      setCountdown(180); // เริ่มนับเวลา 180 วินาที
      setCanResend(false); // ปิดการใช้งานปุ่ม
    }
  };

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

  useEffect(() => {
    const handleOverflow = () => {
      if (window.innerWidth > 1500) {
        const original = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
          document.body.style.overflow = original;
        };
      }
    };

    const cleanup = handleOverflow();
    
    const handleResize = () => {
      if (window.innerWidth <= 1500) {
        document.body.style.overflow = '';
      } else {
        document.body.style.overflow = 'hidden';
      }
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (cleanup) cleanup();
      if (window.innerWidth > 1500) {
        document.body.style.overflow = '';
      }
    };
  }, []);

  const handleRegister = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      message.success(t('auth.registerSuccess'));
      navigate('/register-policies');
    } catch {
      message.error(t('auth.registerError'));
    } finally {
      setLoading(false);
    }
  };

  // Step 1: ตรวจสอบ email
  const handleEmailVerification = async () => {
    if (!formFields.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formFields.email)) {
      message.error('กรุณากรอกอีเมลที่ถูกต้อง');
      return;
    }
    
    setLoading(true);
    try {
      // Simulate API call to check email
      await new Promise(resolve => setTimeout(resolve, 1000));
      message.success('ส่งรหัสยืนยันไปยังอีเมลของคุณแล้ว');
      setCurrentStep(1);
    } catch {
      message.error('เกิดข้อผิดพลาดในการตรวจสอบอีเมล');
    } finally {
      setLoading(false);
    }
  };

  // Step 2: ยืนยัน pincode
  const handlePincodeVerification = async () => {
    if (!formFields.pincode || formFields.pincode.length !== 6) {
      message.error('กรุณากรอกรหัสยืนยัน 6 หลัก');
      return;
    }
    
    setLoading(true);
    try {
      // Simulate API call to verify pincode
      await new Promise(resolve => setTimeout(resolve, 1000));
      message.success('ยืนยันรหัสสำเร็จ');
      setCurrentStep(2);
    } catch {
      message.error('รหัสยืนยันไม่ถูกต้อง');
    } finally {
      setLoading(false);
    }
  };

  // เช็คความถูกต้องสำหรับแต่ละ step
  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return formFields.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formFields.email);
      case 1:
        return formFields.pincode && formFields.pincode.length === 6;
      case 2: {
        const allPasswordValidationsPass = Object.values(passwordValidation).every(Boolean);
        return formFields.password && 
               formFields.confirmPassword && 
               formFields.password === formFields.confirmPassword &&
               allPasswordValidationsPass;
      }
      default:
        return false;
    }
  };

  const handleTermsAccept = () => {
    setTermsModalVisible(false);
    message.success(t('terms.acceptTermsSuccess'));
  };

  const ValidationItem = ({ valid, text }: { valid: boolean; text: string }) => (
    <div className={`flex items-center gap-1 sm:gap-2 text-xs sm:text-sm ${valid ? 'text-[#52C41A]' : 'text-gray-500'}`}>
      <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 flex items-center justify-center ${valid ? 'border-[#52C41A] bg-[#52C41A]' : 'border-gray-300 bg-white'}`}>
        {valid && <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white" />}
      </div>
      {text}
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <Form.Item
            name="email"
            label={<span className="text-lg sm:text-xl md:text-2xl">{t('common.email')}</span>}
            rules={[
              { required: true, message: t('validation.emailRequired') },
              { type: 'email', message: t('validation.emailInvalid') }
            ]}
          >
            <Input
              placeholder={t('common.email')}
              className="h-12 sm:h-11 md:h-11 rounded-lg text-lg sm:text-xl"
              value={formFields.email}
              onChange={(e) => handleEmailChange(e.target.value)}
            />
          </Form.Item>
        );
      
      case 1:
        return (
          <div className="space-y-4">
            <div className="text-center flex justify-center">
              <p className="text-gray-600  text-lg sm:text-xl">ระบบได้ส่งรหัสยืนยันไปยัง</p>
              <p className="text-blue-800  text-lg sm:text-xl ml-2 ">{formFields.email}</p>
            </div>
             <p className="text-gray-600 text-lg sm:text-xl text-center ">ระหัสอ้างอิง :</p>

            
            <div className="text-center mt-2">
            
              <div className="flex justify-center gap-3 sm:gap-4" onPaste={handlePincodeePaste}>
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <input
                    key={index}
                    id={`pincode-${index}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={formFields.pincode[index] || ''}
                    onChange={(e) => handlePincodeInputChange(e.target.value, index)}
                    onKeyDown={(e) => handlePincodeKeyDown(e, index)}
                    className={`
                      w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18
                      text-2xl sm:text-3xl font-semibold
                      text-center rounded-xl
                      border-2 outline-none transition-all duration-200
                      bg-blue-50 border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                      ${formFields.pincode[index] ? 'bg-blue-100' : ''}
                    `}
                    style={{
                      backgroundColor: '#E0F4FF',
                      borderColor: '#87CEEB',
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="text-center mt-4">
              <button
                type="button"
                className={` flex items-center justify-center gap-2 mx-auto text-base 3xl:text-md 4xl:text-lg ${
                  canResend 
                    ? 'cursor-pointer' 
                    : 'cursor-not-allowed'
                }`}
                style={{ 
                  color: canResend ? '#1b4db1' : '#9CA3AF' 
                }}
                onClick={handleResendCode}
                disabled={!canResend}
              >
                <RotateCcw 
                  className="w-4 h-4 3xl:w-4 3xl:h-4 4xl:w-5 4xl:h-5" 
                  style={{ 
                    transform: 'scaleX(-1)',
                   
                  }} 
                />
                {canResend ? 'ส่งรหัสใหม่' : `ส่งรหัสใหม่ (${formatTime(countdown)})`}
              </button>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-4">
            <div className="text-center mb-4">
              <p className="text-gray-600 text-base sm:text-lg">อีเมล: <span className="font-medium">{formFields.email}</span></p>
            </div>
            
            <Form.Item
              name="password"
              label={<span className="text-base sm:text-lg md:text-xl">{t('common.password')}</span>}
              rules={[
                { required: true, message: t('validation.passwordRequired') },
                { min: 8, message: t('validation.passwordMinLength') }
              ]}
            >
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder={t('common.password')}
                className="h-10 sm:h-11 md:h-12 rounded-lg text-base sm:text-lg"
                value={formFields.password}
                onChange={(e) => handlePasswordChange(e.target.value)}
                suffix={
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-500 hover:text-gray-700 p-1"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Eye className="w-4 h-4 sm:w-5 sm:h-5" />}
                  </button>
                }
              />
            </Form.Item>

            <div className="space-y-1 sm:space-y-2 p-3 sm:p-4 bg-gray-50 rounded-lg">
              <div className="text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">{t('validation.passwordRequirements')}</div>
              <ValidationItem valid={passwordValidation.length} text={t('validation.length8')} />
              <ValidationItem valid={passwordValidation.uppercase} text={t('validation.uppercase')} />
              <ValidationItem valid={passwordValidation.lowercase} text={t('validation.lowercase')} />
              <ValidationItem valid={passwordValidation.number} text={t('validation.number')} />
              <ValidationItem valid={passwordValidation.special} text={t('validation.special')} />
            </div>

            <Form.Item
              name="confirmPassword"
              label={<span className="text-base sm:text-lg md:text-xl">{t('common.confirmPassword')}</span>}
              dependencies={['password']}
              rules={[
                { required: true, message: t('validation.confirmPasswordRequired') },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error(t('validation.passwordMismatch')));
                  }
                })
              ]}
            >
              <Input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder={t('common.confirmPassword')}
                className="h-10 sm:h-11 md:h-12 rounded-lg text-base sm:text-lg"
                value={formFields.confirmPassword}
                onChange={(e) => handleConfirmPasswordChange(e.target.value)}
                suffix={
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="text-gray-500 hover:text-gray-700 p-1"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Eye className="w-4 h-4 sm:w-5 sm:h-5" />}
                  </button>
                }
              />
            </Form.Item>
          </div>
        );
      
      default:
        return null;
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 0:
        return '';
      case 1:
        return '';
      case 2:
        return '';
      default:
        return '';
    }
  };

  const handleNext = () => {
    switch (currentStep) {
      case 0:
        handleEmailVerification();
        break;
      case 1:
        handlePincodeVerification();
        break;
      case 2:
        handleRegister();
        break;
    }
  };

  const getButtonText = () => {
    switch (currentStep) {
      case 0:
        return 'ตรวจสอบ';
      case 1:
        return 'ยืนยัน';
      case 2:
        return t('common.register');
      default:
        return 'ถัดไป';
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center overflow-hidden relative">
      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat z-0"
        style={{ backgroundImage: 'url(/src/assets/BG.png)' }}
        aria-hidden="true"
      />
      <div
        className="flex flex-col gap-6 sm:gap-8 p-6 sm:p-8 md:p-12 rounded-[20px] shadow-lg bg-white z-10 relative mb-[100px] md:mb-[10px] xl:mb-[20px] 2xl:mb-[200px]"
        style={{ minHeight: 0, width: '750px' }}
      >
        
        <Steps
          current={currentStep}
          size="default"
          items={[
            {
              title: 'อีเมล',
            },
            {
              title: 'ยืนยัน',
            },
            {
              title: 'รหัสผ่าน',
            },
          ]}
        />
          <div className="text-center">
          {/* <h1 className="text-2xl sm:text-3xl md:text-3xl font-[400] text-gray-900 ">{t('auth.registerTitle')}</h1> */}
          <p className="text-gray-600 text-lg sm:text-xl md:text-2xl">{getStepTitle()}</p>
        </div>
        <Form
          form={form}
          layout="vertical"
          className="space-y-0 sm:space-y-4"
          size="small"
        >
          {renderStepContent()}

          <div className="flex gap-3 sm:gap-4 mt-6  justify-center">
            {currentStep > 0 && (
              <Button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="w-[30%] h-10 mt-10 sm:h-10 md:h-10 border-[1px] border-gray-400 rounded-[50px] text-base sm:text-lg text-gray-600"
                type="default"
              >
                ย้อนกลับ
              </Button>
            )}
            {currentStep === 0 && (
              <Button
                onClick={() => navigate('/login')}
                className="w-[30%] h-10 sm:h-10 md:h-10  border-[1px] mt-10 border-red-400 rounded-[50px] text-base sm:text-lg text-red-500 "
                type="default"
              >
                {t('common.cancel')}
              </Button>
            )}
            <Button
              type="primary"
              loading={loading}
              disabled={!isStepValid()}
              onClick={handleNext}
              className={`w-[30%] h-10 sm:h-10 md:h-10 mt-10 rounded-[50px] font-medium text-base sm:text-lg ${
                isStepValid() 
                  ? 'bg-primary hover:bg-blue-700 text-white' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {getButtonText()}
            </Button>
          </div>
        </Form>

        <TermsModal
          visible={termsModalVisible}
          onClose={() => setTermsModalVisible(false)}
          onAccept={handleTermsAccept}
        />
      </div>
    </div>
  );
};

export default RegisterPage;