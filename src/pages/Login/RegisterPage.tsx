import React, { useState } from 'react';
import { Button, Input, Form, message, Checkbox } from 'antd';
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
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false
  });

  const handlePasswordChange = (value: string) => {
    setPasswordValidation({
      length: value.length >= 8,
      uppercase: /[A-Z]/.test(value),
      lowercase: /[a-z]/.test(value),
      number: /\d/.test(value),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(value)
    });
  };

  const handleRegister = async () => {
    if (!acceptedTerms) {
      message.error(t('terms.acceptTermsError'));
      return;
    }

    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      message.success(t('auth.registerSuccess'));
      navigate('/login');
    } catch {
      message.error(t('auth.registerError'));
    } finally {
      setLoading(false);
    }
  };

  const handleTermsAccept = () => {
    setAcceptedTerms(true);
    setTermsModalVisible(false);
    message.success(t('terms.acceptTermsSuccess'));
  };

  const ValidationItem = ({ valid, text }: { valid: boolean; text: string }) => (
    <div className={`flex items-center gap-2 text-sm ${valid ? 'text-green-600' : 'text-gray-500'}`}>
      <Check className={`w-4 h-4 ${valid ? 'text-green-600' : 'text-gray-300'}`} />
      {text}
    </div>
  );

  return (
    <div className=" w-full flex items-center justify-center  bg-red-500 pt-0">
      <div className="space-y-6 w-full max-w-lg px-4 py-12 bg-white/80 rounded-2xl shadow-lg bg-red-500">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{t('auth.registerTitle')}</h1>
          <p className="text-gray-600">{t('auth.registerSubtitle')}</p>
        </div>

        <Form
          form={form}
          layout="vertical"
          onFinish={handleRegister}
          className="space-y-4"
          size="large"
        >
          <Form.Item
            name="email"
            label={t('common.email')}
            rules={[
              { required: true, message: t('validation.emailRequired') },
              { type: 'email', message: t('validation.emailInvalid') }
            ]}
          >
            <Input
              placeholder="example@example.com"
              className="h-12 rounded-lg"
            />
          </Form.Item>

          <Form.Item
            name="password"
            label={t('common.password')}
            rules={[
              { required: true, message: t('validation.passwordRequired') },
              { min: 8, message: t('validation.passwordMinLength') }
            ]}
          >
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder={t('common.password')}
              className="h-12 rounded-lg"
              onChange={(e) => handlePasswordChange(e.target.value)}
              suffix={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              }
            />
          </Form.Item>

          <div className="space-y-2 p-3 bg-gray-50 rounded-lg">
            <div className="text-sm font-medium text-gray-700 mb-2">{t('validation.passwordRequirements')}</div>
            <ValidationItem valid={passwordValidation.length} text={t('validation.length8')} />
            <ValidationItem valid={passwordValidation.uppercase} text={t('validation.upperLower')} />
            <ValidationItem valid={passwordValidation.lowercase} text={t('validation.number')} />
            <ValidationItem valid={passwordValidation.number} text={t('validation.special')} />
          </div>

          <Form.Item
            name="confirmPassword"
            label={t('common.confirmPassword')}
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
              className="h-12 rounded-lg"
              suffix={
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              }
            />
          </Form.Item>

          <div className="space-y-3">
            <div className="text-sm text-gray-600">
              {t('terms.readAndAccept')}{' '}
              <button
                type="button"
                onClick={() => setTermsModalVisible(true)}
                className="text-blue-600 hover:text-blue-800 underline"
              >
                {t('terms.termsAndConditions')}
              </button>
              {' '}{t('terms.and')}{' '}
              <button
                type="button"
                onClick={() => setTermsModalVisible(true)}
                className="text-blue-600 hover:text-blue-800 underline"
              >
                {t('terms.privacyPolicy')}
              </button>
            </div>

            <Checkbox
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              className="text-sm"
            >
              {t('terms.acceptTerms')}
            </Checkbox>
          </div>

          <div className="flex gap-4">
            <Button
              onClick={() => navigate('/login')}
              className="flex-1 h-12 rounded-lg"
              type="default"
            >
              {t('common.cancel')}
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="flex-1 h-12 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium"
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