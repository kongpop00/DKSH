import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/AuthLayout';
import MessagePage from '../MessagePage';

const ForgotPasswordPage: React.FC = () => {
  const [form] = Form.useForm();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = async (values: { email: string }) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Password reset email sent to:', values.email);
      // แสดง MessagePage เมื่อ email ผ่านการตรวจสอบ
      setShowMessage(true);
    } catch {
      message.error(t('forgotPassword.sendError'));
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate('/login');
  };

  // แสดง MessagePage เมื่อ showMessage เป็น true
  if (showMessage) {
    return (
      <MessagePage
        status="success"
        titleKey="forgotPassword.success.title"
        description1Key="forgotPassword.success.description"
        buttonTextKey="common.next"
        navigateTo="/forgot-password/reset"
      />
    );
  }

  return (
    <AuthLayout>
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {t('forgotPassword.title')}
          </h1>
        
        </div>

        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          className="space-y-4"
        >
          <Form.Item
            name="email"
            label={<span className="text-base font-medium">{t('common.email')}</span>}
            rules={[
              { required: true, message: t('validation.emailRequired') },
              { type: 'email', message: t('validation.emailInvalid') }
            ]}
          >
            <Input
              size="large"
              placeholder={t('forgotPassword.emailPlaceholder')}
              className="text-base"
            />
          </Form.Item>

          <div className="flex gap-4  mt-8">
            <Button
              size="large"
              onClick={handleBack}
              className="flex-1 text-base h-12  rounded-[80px]  hover:bg-blue-700    text-base 3xl:text-xl 4xl:text-xl"
            >
              {t('common.back')}
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              loading={loading}
              className="flex-1 text-base h-12 rounded-[80px] bg-blue-600 hover:bg-blue-700 border-blue-600 text-white font-medium text-base 3xl:text-xl 4xl:text-xl"
           
            >
              {t('forgotPassword.sendButton')}
            </Button>
          </div>
        </Form>
      </div>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
