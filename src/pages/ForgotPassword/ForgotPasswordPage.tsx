import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import AuthLayout from '../../components/AuthLayout';
import MessagePage from '../MessagePage';
import Navbar from '../../components/Navbar';

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
      <>
        <Navbar  className='fixed top-0 left-0 right-0 z-10'/>
        <div  className="mt-[-60px] ">
          <MessagePage
            status="success"
            titleKey="forgotPassword.success.title"
            description1Key="forgotPassword.success.description"
            buttonTextKey="common.next"
            navigateTo="/forgot-password/reset"
          />
        </div>
      </>
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

        
        </Form>
          <div className="flex flex-col gap-4 mt-10">
         
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              loading={loading}
              className="w-full h-10 3xl:h-10 4xl:h-16 rounded-[80px] bg-blue-800 hover:bg-blue-700 border-blue-600 text-white font-medium text-base 3xl:text-xl 4xl:text-xl"
           
            >
              {t('forgotPassword.sendButton')}
            </Button>
               <Button
              size="large"
              onClick={handleBack}
              icon={<ChevronLeft className="w-5 h-5" />}
              className="w-full h-10 3xl:h-10 4xl:h-16 rounded-[80px] text-blue-800 font-medium text-base 3xl:text-xl 4xl:text-xl"
            >
              {t('common.back')}
            </Button>
          </div>
      </div>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
