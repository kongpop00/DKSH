import React from 'react';
import { Typography, Button, Card } from 'antd';

const { Title, Text } = Typography;

const StyleExamplePage: React.FC = () => {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-h1 text-primary">วิธีใช้งาน Styling System</h1>
      
      {/* Font Size Examples */}
      <Card title="ตัวอย่างขนาดฟอนต์" className="mb-6">
        <div className="space-y-4">
          <h1 className="text-h1">Heading 1 (32px)</h1>
          <h2 className="text-h2">Heading 2 (28px)</h2>
          <h3 className="text-h3">Heading 3 (24px)</h3>
          <h4 className="text-h4">Heading 4 (20px)</h4>
          <h5 className="text-h5">Heading 5 (18px)</h5>
          <h6 className="text-h6">Heading 6 (16px)</h6>
          <p className="text-body-large">Body Large (16px)</p>
          <p className="text-body">Body Normal (14px)</p>
          <p className="text-body-small">Body Small (12px)</p>
          <p className="text-caption">Caption (11px)</p>
        </div>
      </Card>

      {/* Text Color Examples */}
      <Card title="ตัวอย่างสีตัวหนังสือ" className="mb-6">
        <div className="space-y-2">
          <p className="text-primary text-h4">ข้อความสี Primary</p>
          <p className="text-subprimary text-h4">ข้อความสี Sub Primary</p>
          <p className="text-success text-h4">ข้อความสี Success</p>
          <p className="text-warning text-h4">ข้อความสี Warning</p>
          <p className="text-error text-h4">ข้อความสี Error</p>
          <p className="text-info text-h4">ข้อความสี Info</p>
        </div>
      </Card>

      {/* Background Color Examples */}
      <Card title="ตัวอย่างสีพื้นหลัง" className="mb-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-primary text-white text-body p-4 rounded">
            พื้นหลัง Primary + ตัวหนังสือสีขาว
          </div>
          <div className="bg-subprimary text-white text-body p-4 rounded">
            พื้นหลัง Sub Primary + ตัวหนังสือสีขาว
          </div>
          <div className="bg-success text-white text-body p-4 rounded">
            พื้นหลัง Success + ตัวหนังสือสีขาว
          </div>
          <div className="bg-warning text-black text-body p-4 rounded">
            พื้นหลัง Warning + ตัวหนังสือสีดำ
          </div>
          <div className="bg-error text-white text-body p-4 rounded">
            พื้นหลัง Error + ตัวหนังสือสีขาว
          </div>
          <div className="bg-info text-white text-body p-4 rounded">
            พื้นหลัง Info + ตัวหนังสือสีขาว
          </div>
        </div>
      </Card>

      {/* Combined Examples */}
      <Card title="ตัวอย่างการใช้งานรวม" className="mb-6">
        <div className="space-y-4">
          {/* Alert Style Messages */}
          <div className="bg-success text-white text-body p-4 rounded-lg">
            <h4 className="text-h5 text-white mb-2">สำเร็จ!</h4>
            <p className="text-body-small text-white">การดำเนินการเสร็จสิ้นแล้ว</p>
          </div>
          
          <div className="bg-warning text-black text-body p-4 rounded-lg">
            <h4 className="text-h5 text-black mb-2">คำเตือน!</h4>
            <p className="text-body-small text-black">กรุณาตรวจสอบข้อมูลอีกครั้ง</p>
          </div>
          
          <div className="bg-error text-white text-body p-4 rounded-lg">
            <h4 className="text-h5 text-white mb-2">เกิดข้อผิดพลาด!</h4>
            <p className="text-body-small text-white">ไม่สามารถดำเนินการได้</p>
          </div>

          {/* Card with colored header */}
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-primary text-white p-4">
              <h3 className="text-h4 text-white">หัวข้อการ์ด</h3>
            </div>
            <div className="p-4">
              <p className="text-body text-black">เนื้อหาภายในการ์ด</p>
              <p className="text-body-small text-subprimary">ข้อความย่อยสีน้ำเงิน</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Ant Design with Theme */}
      <Card title="ตัวอย่าง Ant Design ใช้สี Theme">
        <div className="space-y-4">
          <Button type="primary" size="large">
            ปุ่ม Primary (ใช้สีจาก theme)
          </Button>
          
          <Title level={2} style={{ color: '#1B4DB1' }}>
            Typography ของ Ant Design
          </Title>
          
          <Text type="success">ข้อความสำเร็จจาก Ant Design</Text>
          <br />
          <Text type="warning">ข้อความเตือนจาก Ant Design</Text>
          <br />
          <Text type="danger">ข้อความข้อผิดพลาดจาก Ant Design</Text>
        </div>
      </Card>

      {/* Usage Guide */}
      <Card title="วิธีการใช้งาน">
        <div className="space-y-4">
          <div>
            <h4 className="text-h5 text-primary mb-2">1. ขนาดฟอนต์:</h4>
            <code className="bg-gray-100 p-2 rounded text-body-small block">
              {'<h1 className="text-h1">หัวข้อใหญ่</h1>'}
              <br />
              {'<p className="text-body">ข้อความปกติ</p>'}
              <br />
              {'<span className="text-caption">ข้อความเล็ก</span>'}
            </code>
          </div>

          <div>
            <h4 className="text-h5 text-primary mb-2">2. สีตัวหนังสือ:</h4>
            <code className="bg-gray-100 p-2 rounded text-body-small block">
              {'<p className="text-primary">ข้อความสีน้ำเงิน</p>'}
              <br />
              {'<p className="text-success">ข้อความสีเขียว</p>'}
              <br />
              {'<p className="text-error">ข้อความสีแดง</p>'}
            </code>
          </div>

          <div>
            <h4 className="text-h5 text-primary mb-2">3. สีพื้นหลัง:</h4>
            <code className="bg-gray-100 p-2 rounded text-body-small block">
              {'<div className="bg-primary text-white">พื้นหลังน้ำเงิน</div>'}
              <br />
              {'<div className="bg-success text-white">พื้นหลังเขียว</div>'}
            </code>
          </div>

          <div>
            <h4 className="text-h5 text-primary mb-2">4. การใช้งานรวม:</h4>
            <code className="bg-gray-100 p-2 rounded text-body-small block">
              {'<div className="bg-primary text-white text-h3 p-4">'}
              <br />
              {'  หัวข้อสีขาวบนพื้นน้ำเงิน'}
              <br />
              {'</div>'}
            </code>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default StyleExamplePage;
