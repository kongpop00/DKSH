import React, { useState } from 'react';
import { Card, Form, Input, Button, Switch, Select, InputNumber, Upload, message, Tabs, Divider } from 'antd';
import { Save, Upload as UploadIcon, Settings as SettingsIcon, Globe, Shield, Bell, Palette } from 'lucide-react';
import AdminLayout from '../../components/AdminLayout';

const { TabPane } = Tabs;
const { TextArea } = Input;

interface SystemSettings {
  siteName: string;
  siteDescription: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  currency: string;
  timezone: string;
  language: string;
  maintenanceMode: boolean;
  allowRegistration: boolean;
  emailVerification: boolean;
  twoFactorAuth: boolean;
  sessionTimeout: number;
  maxLoginAttempts: number;
  emailNotifications: boolean;
  smsNotifications: boolean;
  pushNotifications: boolean;
  orderNotifications: boolean;
  promotionNotifications: boolean;
  primaryColor: string;
  secondaryColor: string;
  logoUrl: string;
  faviconUrl: string;
}

const Settings: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [settings, setSettings] = useState<SystemSettings>({
    siteName: 'DK Admin',
    siteDescription: 'ระบบจัดการร้านค้าออนไลน์',
    contactEmail: 'admin@dkadmin.com',
    contactPhone: '02-123-4567',
    address: '123 ถนนสุขุมวิท แขวงคลองตัน เขตคลองตัน กรุงเทพฯ 10110',
    currency: 'THB',
    timezone: 'Asia/Bangkok',
    language: 'th',
    maintenanceMode: false,
    allowRegistration: true,
    emailVerification: true,
    twoFactorAuth: false,
    sessionTimeout: 30,
    maxLoginAttempts: 5,
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    orderNotifications: true,
    promotionNotifications: true,
    primaryColor: '#1890ff',
    secondaryColor: '#52c41a',
    logoUrl: '',
    faviconUrl: ''
  });

  const handleSave = async (values: SystemSettings) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSettings({ ...settings, ...values });
      message.success('บันทึกการตั้งค่าเรียบร้อยแล้ว');
    } catch {
      message.error('เกิดข้อผิดพลาดในการบันทึก');
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = (info: { file: { status?: string; response?: { url: string } } }, type: 'logo' | 'favicon') => {
    if (info.file.status === 'done') {
      message.success(`อัปโหลด${type === 'logo' ? 'โลโก้' : 'ไอคอน'}เรียบร้อยแล้ว`);
      // Update the URL in settings
      const newSettings = {
        ...settings,
        [type === 'logo' ? 'logoUrl' : 'faviconUrl']: info.file.response?.url || ''
      };
      setSettings(newSettings);
    } else if (info.file.status === 'error') {
      message.error(`อัปโหลด${type === 'logo' ? 'โลโก้' : 'ไอคอน'}ล้มเหลว`);
    }
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <SettingsIcon size={24} />
            ตั้งค่าระบบ
          </h1>
          <p className="text-gray-600">จัดการการตั้งค่าทั่วไปของระบบ</p>
        </div>

        <Form
          form={form}
          layout="vertical"
          initialValues={settings}
          onFinish={handleSave}
        >
          <Tabs defaultActiveKey="general" type="card">
            {/* General Settings */}
            <TabPane 
              tab={
                <span className="flex items-center gap-2">
                  <Globe size={16} />
                  ทั่วไป
                </span>
              } 
              key="general"
            >
              <Card title="ข้อมูลเว็บไซต์" className="mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Form.Item
                    name="siteName"
                    label="ชื่อเว็บไซต์"
                    rules={[{ required: true, message: 'กรุณากรอกชื่อเว็บไซต์' }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="language"
                    label="ภาษาหลัก"
                    rules={[{ required: true, message: 'กรุณาเลือกภาษา' }]}
                  >
                    <Select>
                      <Select.Option value="th">ไทย</Select.Option>
                      <Select.Option value="en">English</Select.Option>
                    </Select>
                  </Form.Item>
                </div>
                <Form.Item
                  name="siteDescription"
                  label="คำอธิบายเว็บไซต์"
                >
                  <TextArea rows={3} />
                </Form.Item>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Form.Item
                    name="currency"
                    label="สกุลเงิน"
                    rules={[{ required: true, message: 'กรุณาเลือกสกุลเงิน' }]}
                  >
                    <Select>
                      <Select.Option value="THB">บาท (THB)</Select.Option>
                      <Select.Option value="USD">ดอลลาร์ (USD)</Select.Option>
                      <Select.Option value="EUR">ยูโร (EUR)</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="timezone"
                    label="เขตเวลา"
                    rules={[{ required: true, message: 'กรุณาเลือกเขตเวลา' }]}
                  >
                    <Select>
                      <Select.Option value="Asia/Bangkok">Asia/Bangkok</Select.Option>
                      <Select.Option value="UTC">UTC</Select.Option>
                      <Select.Option value="America/New_York">America/New_York</Select.Option>
                    </Select>
                  </Form.Item>
                </div>
              </Card>

              <Card title="ข้อมูลติดต่อ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Form.Item
                    name="contactEmail"
                    label="อีเมลติดต่อ"
                    rules={[
                      { required: true, message: 'กรุณากรอกอีเมล' },
                      { type: 'email', message: 'รูปแบบอีเมลไม่ถูกต้อง' }
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="contactPhone"
                    label="เบอร์โทรศัพท์"
                    rules={[{ required: true, message: 'กรุณากรอกเบอร์โทรศัพท์' }]}
                  >
                    <Input />
                  </Form.Item>
                </div>
                <Form.Item
                  name="address"
                  label="ที่อยู่"
                >
                  <TextArea rows={3} />
                </Form.Item>
              </Card>
            </TabPane>

            {/* Security Settings */}
            <TabPane 
              tab={
                <span className="flex items-center gap-2">
                  <Shield size={16} />
                  ความปลอดภัย
                </span>
              } 
              key="security"
            >
              <Card title="การเข้าสู่ระบบ" className="mb-6">
                <div className="space-y-4">
                  <Form.Item
                    name="allowRegistration"
                    label="อนุญาตให้สมัครสมาชิกใหม่"
                    valuePropName="checked"
                  >
                    <Switch />
                  </Form.Item>
                  <Form.Item
                    name="emailVerification"
                    label="ต้องยืนยันอีเมลก่อนใช้งาน"
                    valuePropName="checked"
                  >
                    <Switch />
                  </Form.Item>
                  <Form.Item
                    name="twoFactorAuth"
                    label="เปิดใช้งานการยืนยันตัวตน 2 ขั้นตอน"
                    valuePropName="checked"
                  >
                    <Switch />
                  </Form.Item>
                </div>
                <Divider />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Form.Item
                    name="sessionTimeout"
                    label="หมดเวลาเซสชัน (นาที)"
                    rules={[{ required: true, message: 'กรุณากรอกเวลา' }]}
                  >
                    <InputNumber min={5} max={1440} style={{ width: '100%' }} />
                  </Form.Item>
                  <Form.Item
                    name="maxLoginAttempts"
                    label="จำนวนครั้งที่พยายามเข้าสู่ระบบ"
                    rules={[{ required: true, message: 'กรุณากรอกจำนวนครั้ง' }]}
                  >
                    <InputNumber min={3} max={10} style={{ width: '100%' }} />
                  </Form.Item>
                </div>
              </Card>

              <Card title="โหมดบำรุงรักษา">
                <Form.Item
                  name="maintenanceMode"
                  label="เปิดโหมดบำรุงรักษา"
                  valuePropName="checked"
                  extra="เมื่อเปิดใช้งาน ผู้ใช้ทั่วไปจะไม่สามารถเข้าถึงเว็บไซต์ได้"
                >
                  <Switch />
                </Form.Item>
              </Card>
            </TabPane>

            {/* Notification Settings */}
            <TabPane 
              tab={
                <span className="flex items-center gap-2">
                  <Bell size={16} />
                  การแจ้งเตือน
                </span>
              } 
              key="notifications"
            >
              <Card title="ช่องทางการแจ้งเตือน" className="mb-6">
                <div className="space-y-4">
                  <Form.Item
                    name="emailNotifications"
                    label="การแจ้งเตือนทางอีเมล"
                    valuePropName="checked"
                  >
                    <Switch />
                  </Form.Item>
                  <Form.Item
                    name="smsNotifications"
                    label="การแจ้งเตือนทาง SMS"
                    valuePropName="checked"
                  >
                    <Switch />
                  </Form.Item>
                  <Form.Item
                    name="pushNotifications"
                    label="การแจ้งเตือนแบบ Push"
                    valuePropName="checked"
                  >
                    <Switch />
                  </Form.Item>
                </div>
              </Card>

              <Card title="ประเภทการแจ้งเตือน">
                <div className="space-y-4">
                  <Form.Item
                    name="orderNotifications"
                    label="แจ้งเตือนคำสั่งซื้อใหม่"
                    valuePropName="checked"
                  >
                    <Switch />
                  </Form.Item>
                  <Form.Item
                    name="promotionNotifications"
                    label="แจ้งเตือนโปรโมชั่นใหม่"
                    valuePropName="checked"
                  >
                    <Switch />
                  </Form.Item>
                </div>
              </Card>
            </TabPane>

            {/* Appearance Settings */}
            <TabPane 
              tab={
                <span className="flex items-center gap-2">
                  <Palette size={16} />
                  รูปลักษณ์
                </span>
              } 
              key="appearance"
            >
              <Card title="สีธีม" className="mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Form.Item
                    name="primaryColor"
                    label="สีหลัก"
                  >
                    <Input type="color" />
                  </Form.Item>
                  <Form.Item
                    name="secondaryColor"
                    label="สีรอง"
                  >
                    <Input type="color" />
                  </Form.Item>
                </div>
              </Card>

              <Card title="โลโก้และไอคอน">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">โลโก้เว็บไซต์</label>
                    <Upload
                      name="logo"
                      listType="picture-card"
                      showUploadList={false}
                      action="/api/upload"
                      onChange={(info) => handleUpload(info, 'logo')}
                    >
                      <div className="flex flex-col items-center">
                        <UploadIcon size={24} />
                        <div className="mt-2">อัปโหลดโลโก้</div>
                      </div>
                    </Upload>
                    <p className="text-xs text-gray-500 mt-2">
                      รองรับไฟล์ PNG, JPG ขนาดไม่เกิน 2MB
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Favicon</label>
                    <Upload
                      name="favicon"
                      listType="picture-card"
                      showUploadList={false}
                      action="/api/upload"
                      onChange={(info) => handleUpload(info, 'favicon')}
                    >
                      <div className="flex flex-col items-center">
                        <UploadIcon size={24} />
                        <div className="mt-2">อัปโหลด Favicon</div>
                      </div>
                    </Upload>
                    <p className="text-xs text-gray-500 mt-2">
                      รองรับไฟล์ ICO, PNG ขนาด 16x16 หรือ 32x32 พิกเซล
                    </p>
                  </div>
                </div>
              </Card>
            </TabPane>
          </Tabs>

          <div className="mt-6 flex justify-end">
            <Button 
              type="primary" 
              htmlType="submit" 
              loading={loading}
              icon={<Save size={16} />}
              size="large"
            >
              บันทึกการตั้งค่า
            </Button>
          </div>
        </Form>
      </div>
    </AdminLayout>
  );
};

export default Settings;