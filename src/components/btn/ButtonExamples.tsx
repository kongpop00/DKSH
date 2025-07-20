import React, { useState } from 'react';
import { Card, Space, message } from 'antd';
import BaseBtn from './BaseBtn';
import SimpleBtn from './SimpleBtn';
import { Download, Heart, ShoppingCart } from 'lucide-react';

const ButtonExamples: React.FC = () => {
  const [loading, setLoading] = useState(false);

  // ตัวอย่าง functions
  const handleClick = () => {
    message.success('ปุ่มถูกกด!');
  };

  const handleAsyncClick = async () => {
    setLoading(true);
    try {
      // จำลองการโหลด
      await new Promise(resolve => setTimeout(resolve, 2000));
      message.success('โหลดสำเร็จ!');
    } catch {
      message.error('เกิดข้อผิดพลาด!');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = () => {
    message.info('บันทึกข้อมูลแล้ว');
  };

  const handleDelete = () => {
    message.warning('ลบข้อมูลแล้ว');
  };

  const handleError = () => {
    message.error('เกิดข้อผิดพลาด!');
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-h2 text-primary">ตัวอย่างการใช้งาน Button Components</h1>

      {/* BaseBtn Examples */}
      <Card title="BaseBtn Component (ใช้ Ant Design)" className="mb-6">
        <div className="space-y-4">
          <div>
            <h4 className="text-h5 mb-3">ประเภทปุ่มต่างๆ:</h4>
            <Space wrap>
              <BaseBtn onClick={handleClick}>Default Button</BaseBtn>
              <BaseBtn type="primary" onClick={handleClick}>Primary Button</BaseBtn>
              <BaseBtn type="dashed" onClick={handleClick}>Dashed Button</BaseBtn>
              <BaseBtn type="link" onClick={handleClick}>Link Button</BaseBtn>
              <BaseBtn type="text" onClick={handleClick}>Text Button</BaseBtn>
            </Space>
          </div>

          <div>
            <h4 className="text-h5 mb-3">ขนาดปุ่ม:</h4>
            <Space wrap>
              <BaseBtn size="small" onClick={handleClick}>Small</BaseBtn>
              <BaseBtn size="middle" onClick={handleClick}>Middle</BaseBtn>
              <BaseBtn size="large" onClick={handleClick}>Large</BaseBtn>
            </Space>
          </div>

          <div>
            <h4 className="text-h5 mb-3">สีแบบ Custom (variant):</h4>
            <Space wrap>
              <BaseBtn variant="primary" onClick={handleClick}>Primary</BaseBtn>
              <BaseBtn variant="secondary" onClick={handleClick}>Secondary</BaseBtn>
              <BaseBtn variant="success" onClick={handleSave}>Success</BaseBtn>
              <BaseBtn variant="warning" onClick={handleDelete}>Warning</BaseBtn>
              <BaseBtn variant="error" onClick={handleError}>Error</BaseBtn>
              <BaseBtn variant="info" onClick={handleClick}>Info</BaseBtn>
            </Space>
          </div>

          <div>
            <h4 className="text-h5 mb-3">ปุ่มพร้อม Icon:</h4>
            <Space wrap>
              <BaseBtn variant="primary" icon={<Download className="w-4 h-4" />} onClick={handleClick}>
                ดาวน์โหลด
              </BaseBtn>
              <BaseBtn variant="error" icon={<Heart className="w-4 h-4" />} onClick={handleClick}>
                ถูกใจ
              </BaseBtn>
              <BaseBtn variant="success" icon={<ShoppingCart className="w-4 h-4" />} onClick={handleClick}>
                เพิ่มลงตะกร้า
              </BaseBtn>
            </Space>
          </div>

          <div>
            <h4 className="text-h5 mb-3">สถานะพิเศษ:</h4>
            <Space wrap>
              <BaseBtn loading={loading} onClick={handleAsyncClick}>
                {loading ? 'กำลังโหลด...' : 'กดเพื่อโหลด'}
              </BaseBtn>
              <BaseBtn disabled onClick={handleClick}>Disabled</BaseBtn>
              <BaseBtn danger onClick={handleError}>Danger</BaseBtn>
              <BaseBtn block onClick={handleClick}>Full Width Button</BaseBtn>
            </Space>
          </div>
        </div>
      </Card>

      {/* SimpleBtn Examples */}
      <Card title="SimpleBtn Component (Custom CSS)" className="mb-6">
        <div className="space-y-4">
          <div>
            <h4 className="text-h5 mb-3">ประเภทสี:</h4>
            <Space wrap>
              <SimpleBtn text="Primary" onClick={handleClick} variant="primary" />
              <SimpleBtn text="Secondary" onClick={handleClick} variant="secondary" />
              <SimpleBtn text="Success" onClick={handleSave} variant="success" />
              <SimpleBtn text="Warning" onClick={handleDelete} variant="warning" />
              <SimpleBtn text="Error" onClick={handleError} variant="error" />
              <SimpleBtn text="Info" onClick={handleClick} variant="info" />
            </Space>
          </div>

          <div>
            <h4 className="text-h5 mb-3">ขนาด:</h4>
            <Space wrap>
              <SimpleBtn text="Small" onClick={handleClick} size="small" />
              <SimpleBtn text="Medium" onClick={handleClick} size="medium" />
              <SimpleBtn text="Large" onClick={handleClick} size="large" />
            </Space>
          </div>

          <div>
            <h4 className="text-h5 mb-3">สถานะ:</h4>
            <Space wrap>
              <SimpleBtn text="ปกติ" onClick={handleClick} />
              <SimpleBtn text="กำลังโหลด" onClick={handleAsyncClick} loading={loading} />
              <SimpleBtn text="ปิดใช้งาน" onClick={handleClick} disabled />
            </Space>
          </div>
        </div>
      </Card>

      {/* Code Examples */}
      <Card title="ตัวอย่างโค้ด">
        <div className="space-y-4">
          <div>
            <h4 className="text-h5 mb-2">BaseBtn:</h4>
            <pre className="bg-gray-100 p-3 rounded text-body-small overflow-x-auto">
{`import BaseBtn from './components/btn/BaseBtn';

// การใช้งานพื้นฐาน
<BaseBtn onClick={() => console.log('clicked')}>
  ข้อความปุ่ม
</BaseBtn>

// ปุ่มสี Primary พร้อม Icon
<BaseBtn 
  variant="primary" 
  icon={<Download />}
  onClick={handleDownload}
>
  ดาวน์โหลด
</BaseBtn>

// ปุ่มโหลด
<BaseBtn loading={isLoading} onClick={handleSubmit}>
  บันทึก
</BaseBtn>`}
            </pre>
          </div>

          <div>
            <h4 className="text-h5 mb-2">SimpleBtn:</h4>
            <pre className="bg-gray-100 p-3 rounded text-body-small overflow-x-auto">
{`import SimpleBtn from './components/btn/SimpleBtn';

// การใช้งานพื้นฐาน
<SimpleBtn 
  text="คลิกที่นี่" 
  onClick={() => alert('Hello!')} 
/>

// ปุ่มสีเขียวขนาดใหญ่
<SimpleBtn 
  text="บันทึก" 
  onClick={handleSave}
  variant="success"
  size="large"
/>

// ปุ่มโหลด
<SimpleBtn 
  text="ส่งข้อมูล" 
  onClick={handleSubmit}
  loading={isSubmitting}
  variant="primary"
/>`}
            </pre>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ButtonExamples;
