import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/AuthLayout';

const ForgotPasswordReset: React.FC = () => {

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
            ตั้งรหัสผ่านใหม่
          </h1>
          <p className="text-gray-600 text-base">
            กรุณากรอกรหัสผ่านใหม่ของคุณ
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
                รหัสผ่านใหม่
              </span>
            }
            name="password"
            rules={[
              {
                required: true,
                message: 'กรุณากรอกรหัสผ่าน',
              },
              {
                min: 8,
                message: 'รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร',
              },
              {
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                message: 'รหัสผ่านต้องมีตัวอักษรพิมพ์เล็ก พิมพ์ใหญ่ และตัวเลข',
              },
            ]}
          >
            <Input.Password
              size="large"
              placeholder="กรุณากรอกรหัสผ่านใหม่"
              className="h-12 rounded-lg"
            />
          </Form.Item>

          <Form.Item
            label={
              <span className="text-base font-medium text-gray-700">
                ยืนยันรหัสผ่าน
              </span>
            }
            name="confirmPassword"
            dependencies={['password']}
            rules={[
              {
                required: true,
                message: 'กรุณายืนยันรหัสผ่าน',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('รหัสผ่านไม่ตรงกัน'));
                },
              }),
            ]}
          >
            <Input.Password
              size="large"
              placeholder="กรุณายืนยันรหัสผ่านใหม่"
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
              ตั้งรหัสผ่านใหม่
            </Button>
          </Form.Item>
        </Form>

        <div className="text-center mt-6">
          <Button
            type="link"
            onClick={() => navigate('/login')}
            className="text-gray-600 text-base"
          >
            กลับสู่หน้าเข้าสู่ระบบ
          </Button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ForgotPasswordReset;
