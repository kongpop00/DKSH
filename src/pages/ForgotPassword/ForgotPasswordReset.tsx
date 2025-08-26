import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/AuthLayout';

const ForgotPasswordReset: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: { password: string; confirmPassword: string }) => {
    setLoading(true);
    
    try {
      // Simulate API call with the new password
      console.log('Resetting password:', values.password);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Navigate to final success page
      navigate('/forgot-password/complete');
    } catch (error) {
      console.error('Reset password error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {t('forgotPassword.reset.title')}
          </h1>
          <p className="text-gray-600 text-base">
            {t('forgotPassword.reset.description')}
          </p>
        </div>

        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          requiredMark={false}
          className="space-y-1"
        >
          <Form.Item
            label={
              <span className="text-base font-medium text-gray-700">
                {t('forgotPassword.reset.newPassword')}
              </span>
            }
            name="password"
            rules={[
              {
                required: true,
                message: t('forgotPassword.reset.passwordRequired'),
              },
              {
                min: 8,
                message: t('forgotPassword.reset.passwordMinLength'),
              },
              {
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                message: t('forgotPassword.reset.passwordPattern'),
              },
            ]}
          >
            <Input.Password
              size="large"
              placeholder={t('forgotPassword.reset.newPasswordPlaceholder')}
              className="h-12 rounded-lg"
            />
          </Form.Item>

          <Form.Item
            label={
              <span className="text-base font-medium text-gray-700">
                {t('forgotPassword.reset.confirmPassword')}
              </span>
            }
            name="confirmPassword"
            dependencies={['password']}
            rules={[
              {
                required: true,
                message: t('forgotPassword.reset.confirmPasswordRequired'),
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error(t('forgotPassword.reset.passwordMismatch')));
                },
              }),
            ]}
          >
            <Input.Password
              size="large"
              placeholder={t('forgotPassword.reset.confirmPasswordPlaceholder')}
              className="h-12 rounded-lg"
            />
          </Form.Item>

          <Form.Item className="mb-0 pt-6">
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="w-full h-12 rounded-full text-base font-medium"
              size="large"
            >
              {t('forgotPassword.reset.submitButton')}
            </Button>
          </Form.Item>
        </Form>

        <div className="text-center mt-6">
          <Button
            type="link"
            onClick={() => navigate('/login')}
            className="text-gray-600 text-base"
          >
            {t('common.backToLogin')}
          </Button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ForgotPasswordReset;
