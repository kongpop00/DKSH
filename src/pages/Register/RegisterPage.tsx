import React, { useEffect, useState } from 'react';
import { Button, Input, Form, message } from 'antd';
import { Eye, EyeOff, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TermsModal from '../../components/TermsModal';

const RegisterPage: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [termsModalVisible, setTermsModalVisible] = useState(false);
  const [formFields, setFormFields] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
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

  const handleConfirmPasswordChange = (value: string) => {
    setFormFields(prev => ({ ...prev, confirmPassword: value }));
  };

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

  // เช็คว่าทุกเงื่อนไขครบถ้วนหรือไม่
  const isFormValid = () => {
    try {
      const allPasswordValidationsPass = Object.values(passwordValidation).every(Boolean);
      
      // เช็คว่า email มีค่าและเป็น format ที่ถูกต้อง
      const emailValid = formFields.email && 
                        formFields.email.trim().length > 0 &&
                        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formFields.email.trim());
      
      // เช็คว่า password มีค่าและผ่านเงื่อนไขทั้งหมด
      const passwordValid = formFields.password && 
                           formFields.password.length > 0 &&
                           allPasswordValidationsPass;
      
      // เช็คว่า confirmPassword มีค่าและตรงกับ password
      const confirmPasswordValid = formFields.confirmPassword && 
                                  formFields.confirmPassword.length > 0 && 
                                  formFields.password === formFields.confirmPassword;
      
      // Debug logging
      console.log('Form validation state:', {
        formFields,
        passwordValidation,
        emailValid,
        passwordValid,
        confirmPasswordValid,
        allPasswordValidationsPass
      });
      
      return emailValid && passwordValid && confirmPasswordValid;
    } catch {
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

  return (
 <div className="w-screen h-screen flex items-center justify-center overflow-hidden relative">
       <div
        className="absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat z-0"
        style={{ backgroundImage: 'url(/src/assets/BG.png)' }}
        aria-hidden="true"
      />
      <div
        className="flex flex-col gap-4 sm:gap-6 p-4 sm:p-6 md:p-8 rounded-[20px] shadow-lg bg-white z-10 relative mb-[100px] md:mb-[10px]  xl:mb-[20px] 2xl:mb-[200px] "
        style={{ minHeight: 0, width: '603px' }}
      >
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-small text-gray-900 mb-1 sm:mb-2">{t('auth.registerTitle')}</h1>
          {/* <p className="text-gray-600 text-sm sm:text-base md:text-lg">{t('auth.registerSubtitle')}</p> */}
        </div>

        <Form
          form={form}
          layout="vertical"
          onFinish={handleRegister}
          className="space-y-2 sm:space-y-3 md:space-y-4"
          size="large"
        >
          <Form.Item
            name="email"
            label={<span className="text-sm sm:text-base md:text-lg">{t('common.email')}</span>}
            rules={[
              { required: true, message: t('validation.emailRequired') },
              { type: 'email', message: t('validation.emailInvalid') }
            ]}
          >
            <Input
              placeholder="example@example.com"
              className="h-10 sm:h-12 rounded-lg text-sm sm:text-base"
              onChange={(e) => handleEmailChange(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            name="password"
            label={<span className="text-sm sm:text-base md:text-lg">{t('common.password')}</span>}
            rules={[
              { required: true, message: t('validation.passwordRequired') },
              { min: 8, message: t('validation.passwordMinLength') }
            ]}
          >
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder={t('common.password')}
              className="h-10 sm:h-12 rounded-lg text-sm sm:text-base"
              onChange={(e) => handlePasswordChange(e.target.value)}
              suffix={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-500 hover:text-gray-700 p-1"
                >
                  {showPassword ? <EyeOff className="w-3 h-3 sm:w-4 sm:h-4" /> : <Eye className="w-3 h-3 sm:w-4 sm:h-4" />}
                </button>
              }
            />
          </Form.Item>

          <div className="space-y-1 sm:space-y-2 p-2 sm:p-3 bg-gray-50 rounded-lg">
            <div className="text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">{t('validation.passwordRequirements')}</div>
            <ValidationItem valid={passwordValidation.length} text={t('validation.length8')} />
            <ValidationItem valid={passwordValidation.uppercase} text="มีตัวพิมพ์ใหญ่อย่างน้อย 1 ตัว" />
            <ValidationItem valid={passwordValidation.lowercase} text="มีตัวพิมพ์เล็กอย่างน้อย 1 ตัว" />
            <ValidationItem valid={passwordValidation.number} text={t('validation.number')} />
            <ValidationItem valid={passwordValidation.special} text={t('validation.special')} />
          </div>

          <Form.Item
            name="confirmPassword"
            label={<span className="text-sm sm:text-base md:text-lg">{t('common.confirmPassword')}</span>}
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
              className="h-10 sm:h-12 rounded-lg text-sm sm:text-base"
              onChange={(e) => handleConfirmPasswordChange(e.target.value)}
              suffix={
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="text-gray-500 hover:text-gray-700 p-1"
                >
                  {showConfirmPassword ? <EyeOff className="w-3 h-3 sm:w-4 sm:h-4" /> : <Eye className="w-3 h-3 sm:w-4 sm:h-4" />}
                </button>
              }
            />
          </Form.Item>

          <div className="flex gap-3 sm:gap-4">
            <Button
              onClick={() => navigate('/login')}
              className="flex-1 h-10 sm:h-12 border-[1px] border-red-400 rounded-[50px] text-sm sm:text-base text-red-500"
              type="default"
            >
              {t('common.cancel')}
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              disabled={!isFormValid()}
              className={`flex-1 h-10 sm:h-12 rounded-[50px] font-medium text-sm sm:text-base ${
                isFormValid() 
                  ? 'bg-primary hover:bg-blue-700 text-white' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {t('common.register')}
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