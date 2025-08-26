import React, { useState } from 'react';
import { Input, Form, message, Button, Modal } from 'antd';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AuthLayout from '../../components/AuthLayout';



const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showFailModal, setShowFailModal] = useState(false);
  const [, setFailCount] = useState(0);
  const [form] = Form.useForm();

  const handleLogin = async (values: { email: string; password: string }) => {
    setLoading(true);
    try {
      // Mock validation - ตรวจสอบ email และ password
      if (values.email && values.password) {
        // Mock: only allow DKSH@gmail.com / password
        if (
          values.email === 'DKSH@gmail.com' &&
          values.password === 'password'
        ) {
          await new Promise(resolve => setTimeout(resolve, 1000));
          message.success('ส่งรหัสยืนยันแล้ว');
          setFailCount(0);
          form.resetFields();
          navigate('/check-code');
        } else {
          setFailCount(prev => {
            const next = prev + 1;
            if (next === 2) setShowFailModal(true);
            if (next === 3) {
              navigate('/locker');
            }
            return next;
          });
          form.setFields([
            { name: 'email', errors: [' '] },
            { name: 'password', errors: [t('auth.loginError')] }
          ]);
          message.error('อีเมลหรือรหัสผ่านไม่ถูกต้อง');
        }
      } else {
        message.error('กรุณากรอกข้อมูลให้ครบถ้วน');
      }
    } catch {
      message.error(t('auth.loginError'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Modal
        open={showFailModal}
        style={{ borderRadius: 20, padding: 40, textAlign: 'center', width: 404, maxWidth: 'vw', margin: '0 auto' }}
        onCancel={() => setShowFailModal(false)}
        footer={null}
        centered
        closable={false}
        bodyStyle={{ borderRadius: 20, padding: 24, textAlign: 'center' }}
      >
        <h2 className="text-2xl 3xl:text-3xl 4xl:text-4xl font-bold mb-2">{t('auth.failModalTitle')}</h2>
        <div className="text-gray-500 mb-1 text-[14px] 3xl:text-base 4xl:text-lg">{t('auth.failModalDesc1')}</div>
        <div className="text-gray-400 mb-6 text-[13px] 3xl:text-sm 4xl:text-base">{t('auth.failModalDesc2')}</div>
       
        <Button
          type="primary"
          className="w-full h-10 3xl:h-12 4xl:h-14 rounded-[80px] bg-blue-600 hover:bg-blue-700 border-blue-600 text-white font-medium text-base 3xl:text-lg 4xl:text-xl"
          onClick={() => setShowFailModal(false)}
        >
          {t('common.accept')}
        </Button>
      </Modal>
      <AuthLayout>
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl 3xl:text-5xl font-medium text-gray-900 mb-6">{t('auth.loginTitle')}</h2>
          </div>
          
          <Form
            form={form}
            layout="vertical"
            onFinish={handleLogin}
            className="space-y-4"
            size="large"
            requiredMark={false}
            initialValues={{ email: 'DKSH@gmail.com', password: 'password' }}
          >
            <Form.Item
              name="email"
              label={<span className="text-gray-700 font-medium text-sm 3xl:text-xl 4xl:text-lg">{t('common.email')} <span className="text-red-500">*</span></span>}
              rules={[
                { required: true },
                { type: 'email', message: t('validation.emailInvalid') }
              ]}
            >
              <Input
                placeholder={t('common.email')}
                className="h-12 3xl:h-14 4xl:h-16 rounded-xl border-gray-300 text-base 3xl:text-lg 4xl:text-xl"
              />
            </Form.Item>

            <Form.Item
              name="password"
              label={<span className="text-gray-700 font-medium text-sm 3xl:text-xl 4xl:text-lg">{t('common.password')} <span className="text-red-500">*</span></span>}
              rules={[
                { required: true },
              ]}
            >
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder={t('common.password')}
                className="h-12 3xl:h-14 4xl:h-16 rounded-xl border-gray-300 text-base 3xl:text-lg 4xl:text-xl"
                suffix={
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-500 hover:text-gray-700"
                    tabIndex={-1}
                    style={{ background: 'none', border: 'none', padding: 0, margin: 0 }}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4 3xl:w-5 3xl:h-5 4xl:w-6 4xl:h-6" /> : <Eye className="w-4 h-4 3xl:w-5 3xl:h-5 4xl:w-6 4xl:h-6" />}
                  </button>
                }
              />
            </Form.Item>

            <div className="text-right">
              <button
                type="button"
                className="text-sm 3xl:text-base 4xl:text-lg text-black-600 hover:text-blue-800"
                onClick={() => navigate('/forgot-password')}
              >
                {t('common.forgotPassword')}
              </button>
            </div>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                className="w-full h-12 3xl:h-14 4xl:h-16 rounded-[80px] bg-blue-600 hover:bg-blue-700 border-blue-600 text-white font-medium text-base 3xl:text-xl 4xl:text-xl"
              >
                {t('common.signIn')}
              </Button>
            </Form.Item>
          </Form>

          <div className="flex items-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-gray-600 text-base 3xl:text-lg ">{t('common.or')}</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          <Button
            type="default"
            className="w-full h-12 3xl:h-14 4xl:h-16 rounded-[80px] border-blue-600 text-blue-600 hover:bg-blue-50 font-medium text-base 3xl:text-xl 4xl:text-xl"
            onClick={() => navigate('/register')}
          >
            {t('common.signUp')}
          </Button>
        </div>
      </AuthLayout>
    </>
  );
};

export default LoginPage;