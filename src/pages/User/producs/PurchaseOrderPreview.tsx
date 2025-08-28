import React, { useState } from 'react';
import { Button, Typography, Card, Row, Col, Space, Tag, Checkbox, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import Header from '../../../components/user/header';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronLeft } from 'lucide-react';
import MessagePage from '../../MessagePage';

const { Title, Text } = Typography;

interface OrderItem {
  id: string;
  productName: string;
  productCode: string;
  tistrNumber: string;
  grade: string;
  description: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  subItems?: {
    name: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
  }[];
}

const PurchaseOrderPreview: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [deliveryMethod] = useState('pickup'); // 'pickup' หรือ 'delivery'
  const [showMessage, setShowMessage] = useState(false);

  const [checkboxes, setCheckboxes] = useState({
    taxInvoice: false,
    invoice: false,
    quotation: false
  });

  // Confirmation modal state
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const [orderItems] = useState<OrderItem[]>([
    {
      id: '1',
      productName: 'Tryptic Soy Agar - Ready-to-use Contact Plates',
      productCode: '144562',
      tistrNumber: '146552',
      grade: 'Glo Germ™',
      description: 'Lecithin, Tween®, ICR plus with lockable lid, plate diam. 55 mm, sterile, γ-irradiated, pkg of 10 plates Triple packed; suitable for air monitoring',
      quantity: 3,
      unitPrice: 3600.00,
      totalPrice: 3600.00,
      subItems: [
        {
          name: 'ข้อมูลสายพันธุ์',
          quantity: 2,
          unitPrice: 200.00,
          totalPrice: 200.00
        },
        {
          name: 'ใบรายงานผล/ใบรับรอง',
          quantity: 1,
          unitPrice: 200.00,
          totalPrice: 200.00
        }
      ]
    }
  ]);

  const handleGoBack = () => {
    navigate('/users/cart');
  };

  const handlePlaceOrder = () => {
    setShowMessage(true);
  };

  if (showMessage) {
    return (
      <MessagePage
        status="success"
        title="ส่งคำสั่งซื้อเรียบร้อย"
        description1="โปรดรอ Admin ตรวจสอบและติดต่อกลับ"
        primaryButtonText="กลับไปหน้าแรก"
        secondaryButtonText="ดูรายการสั่งซื้อ"
        primaryNavigateTo="/"
        secondaryNavigateTo="/users/orders"
      />
    );
  }

  return (
    <div className='bg-white'>
      <Header />
      <div className="max-w-7xl mx-auto  min-h-screen">
        <div className="px-[100px] mx-auto p-6">
          {/* Back Button */}
          <Button
            size="large"
            onClick={handleGoBack}
            icon={<ChevronLeft className="w-5 h-5 mt-1" />}
            style={{
              height: '40px',
              fontSize: '16px',
              width: '110px',
              borderColor: '#242222ff',
              color: '#302a2aff',
              borderRadius: '100px',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            {t('purchaseOrder.back')}
          </Button>

          {/* รายละเอียดคำสั่งซื้อ */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mt-6 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#1677FF" stroke-width="1.5"><path d="m18.18 8.04l.463-.464a1.966 1.966 0 1 1 2.781 2.78l-.463.464M18.18 8.04s.058.984.927 1.853s1.854.927 1.854.927M18.18 8.04l-4.26 4.26c-.29.288-.434.433-.558.592q-.22.282-.374.606c-.087.182-.151.375-.28.762l-.413 1.24l-.134.401m8.8-5.081l-4.26 4.26c-.29.29-.434.434-.593.558q-.282.22-.606.374c-.182.087-.375.151-.762.28l-1.24.413l-.401.134m0 0l-.401.134a.53.53 0 0 1-.67-.67l.133-.402m.938.938l-.938-.938"/><path stroke-linecap="round" d="M8 13h2.5M8 9h6.5M8 17h1.5M19.828 3.172C18.657 2 16.771 2 13 2h-2C7.229 2 5.343 2 4.172 3.172S3 6.229 3 10v4c0 3.771 0 5.657 1.172 6.828S7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172c.944-.943 1.127-2.348 1.163-4.828"/></g></svg>
              <Title level={2} className="mb-0" style={{ fontSize: '24px', fontWeight: '500' }}>
                รายละเอียดคำสั่งซื้อ
              </Title>
            </div>
            
            <Card className="shadow-sm mb-6">
              <div className='flex flex-col space-y-2'>
                  <Text style={{ fontSize: '16px', color: '#333' }}>
                  ผู้สั่งซื้อ: <span style={{ fontWeight: '600' }}>เจมส์ ตามาจา</span>
                </Text>
                <Text style={{ fontSize: '16px', color: '#333' }}>
                  หมายเลขที่คำสั่งซื้อ: <span style={{ fontWeight: '600' }}>PO20230915-0001</span>
                </Text>
                <Text style={{ fontSize: '16px', color: '#333' }}>
                  วันที่สั่งซื้อ: <span style={{ fontWeight: '600' }}>2023/09/15</span>
                </Text>
                <Text style={{ fontSize: '16px', color: '#333' }}>
                  เวลาสั่งซื้อ: <span style={{ fontWeight: '600' }}>10:30 AM</span>
                </Text>
            
              </div>
            </Card>
          </div>
          
          {/* Page Header */}
          <div className="flex items-center space-x-3 mt-6 mb-8">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#1677FF" stroke-width="1.5"><path d="M16.755 2h-9.51c-1.159 0-1.738 0-2.206.163a3.05 3.05 0 0 0-1.881 1.936C3 4.581 3 5.177 3 6.37v14.004c0 .858.985 1.314 1.608.744a.946.946 0 0 1 1.284 0l.483.442a1.657 1.657 0 0 0 2.25 0a1.657 1.657 0 0 1 2.25 0a1.657 1.657 0 0 0 2.25 0a1.657 1.657 0 0 1 2.25 0a1.657 1.657 0 0 0 2.25 0l.483-.442a.946.946 0 0 1 1.284 0c.623.57 1.608.114 1.608-.744V6.37c0-1.193 0-1.79-.158-2.27a3.05 3.05 0 0 0-1.881-1.937C18.493 2 17.914 2 16.755 2Z"/><path stroke-linecap="round" d="M10.5 11H17M7 11h.5M7 7.5h.5m-.5 7h.5m3-7H17m-6.5 7H17"/></g></svg>
            <Title level={2} className="mb-0" style={{ fontSize: '24px', fontWeight: '500' }}>
              {t('purchaseOrder.title')}
            </Title>
          </div>

          <Row gutter={24}>
            <Col span={24}>
              {/* Order Items */}
              {orderItems.map((item) => (
                <Card key={item.id} className="shadow-sm  mb-4">
                  {/* Product Header */}
                  <div className="flex items-start space-x-3 mb-3">
                    <Title level={4} className="mb-0 flex-1" style={{ fontSize: '20px', fontWeight: 'bold', lineHeight: '1.4' }}>
                      {item.productName}
                    </Title>
                  </div>

                  {/* Product Details */}
                  <div className="mb-3">
                    <Space className="mb-2" direction="horizontal" size={12}>
                      <Text style={{ fontSize: '16px' }}>รหัสสินค้า : {item.productCode}</Text>
                      <Text style={{ fontSize: '16px' }}>TISTR Number : {item.tistrNumber}</Text>
                      <Tag color="red" style={{ fontSize: '14px', padding: '2px 6px' }}>{item.grade}</Tag>
                    </Space>
                  </div>

                  {/* Main Product Details */}
                  <div className="mb-3">
                    <Text strong style={{ fontSize: '16px', color: '#333', display: 'block', marginBottom: '8px' }}>
                      รายละเอียดสินค้า
                    </Text>
                    <div className="bg-white  p-3 rounded">
                      <div className="flex justify-between items-start mb-0">
                        <div className="w-[50%] pr-4">
                          <Text style={{ fontSize: '16px', lineHeight: '1.4' }}>{item.description}</Text>
                        </div>
                        <div className="flex items-center space-x-8 min-w-fit">
                          <Text style={{ fontSize: '16px' }}>x3 EA</Text>
                          <Text  style={{ fontSize: '16px' }}>฿ {item.totalPrice.toLocaleString()}.00</Text>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Services */}
                  {item.subItems && item.subItems.length > 0 && (
                    <div className="mb-3">
                      <Text strong style={{ fontSize: '16px', color: '#333', display: 'block', marginBottom: '8px' }}>
                        รายการเพิ่มเติม
                      </Text>
                      {item.subItems.map((subItem, index) => (
                        <div key={index} className="bg-white  p-2 rounded ">
                          <div className="flex justify-between items-center">
                            <Text style={{ fontSize: '16px' }}>{subItem.name}</Text>
                            <div className="flex items-center space-x-8">
                              <Text style={{ fontSize: '16px' }}>x{subItem.quantity} EA</Text>
                              <Text style={{ fontSize: '16px' }}>+฿ {subItem.totalPrice.toLocaleString()}.00</Text>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Item Total */}
                  <div className="text-right pt-3 border-t border-gray-200">
                    <Text strong style={{ fontSize: '20px', color: '#000' }}>
                      ฿ {(item.totalPrice + (item.subItems?.reduce((total, sub) => total + sub.totalPrice, 0) || 0)).toLocaleString()}.00
                    </Text>
                  </div>
                </Card>
              ))}

              {/* Shipping Information */}
              <div className="shadow-sm border-none">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex items-center space-x-3 mt-6 ">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#1677FF" stroke-linecap="round" stroke-width="1.5" d="m15.578 3.382l2 1.05c2.151 1.129 3.227 1.693 3.825 2.708C22 8.154 22 9.417 22 11.942v.117c0 2.524 0 3.787-.597 4.801c-.598 1.015-1.674 1.58-3.825 2.709l-2 1.049C13.822 21.539 12.944 22 12 22s-1.822-.46-3.578-1.382l-2-1.05c-2.151-1.129-3.227-1.693-3.825-2.708C2 15.846 2 14.583 2 12.06v-.117c0-2.525 0-3.788.597-4.802c.598-1.015 1.674-1.58 3.825-2.708l2-1.05C10.178 2.461 11.056 2 12 2s1.822.46 3.578 1.382ZM21 7.5l-4 2M12 12L3 7.5m9 4.5v9.5m0-9.5l4.5-2.25l.5-.25m0 0V13m0-3.5l-9.5-5"/></svg>                    <Title level={2} className="mb-0" style={{ fontSize: '24px', fontWeight: '500' }}>
                   รายละเอียดการจัดส่ง
                    </Title>
                  </div>
                </div>
                <div className="space-y-3">
                    <Card className='mt-3' style={{ backgroundColor: deliveryMethod === 'pickup' ? '#f0f8ff' : '#ffffff' }}>
                      {deliveryMethod === 'pickup' ? (
                        <div>
                          <div>
                            รับสินค้าเอง
                          </div>
                          <Text style={{ fontSize: '16px', fontWeight: '' }}>ศูนย์จุลินทรีย์ สถาบันวิจัยวิทยาศาสตร์และเทคโนโลยีแห่งประเทศไทย ชั้น 2 ตึก RD1</Text>
                        
                          <div>
                            <Text style={{ fontSize: '16px' }}>เลขที่ 35 หมู่ 3 เทคโนธานี ต. คลองห้า อ. คลองหลวง จ. ปทุมธานี 12120</Text>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div>
                            จัดส่งทางไปรษณีย์
                          </div>
                          <Text style={{ fontSize: '16px' }}>นาย ลชาภาค โด OBJ-123-4567</Text>
                          <div className="mt-2">
                            <Text style={{ fontSize: '16px' }}>123 หมู่ 5 ตำบลบางใหม่ อำเภอบางลิง จังหวัดตรัง 30000</Text>
                          </div>
                        </div>
                      )}
                    </Card>
                

                  <div className="space-y-2">
                    <div>
                      <Checkbox 
                        checked={checkboxes.taxInvoice}
                        onChange={(e) => setCheckboxes(prev => ({ ...prev, taxInvoice: e.target.checked }))}
                        style={{ fontSize: '16px' }}
                        disabled
                      >
                        <span style={{  }}>ขอใบกำกับภาษี</span>
                      </Checkbox>
                    </div>
                    <div>
                      <Checkbox 
                        checked={checkboxes.invoice}
                        onChange={(e) => setCheckboxes(prev => ({ ...prev, invoice: e.target.checked }))}
                        style={{ fontSize: '16px' }}
                        disabled
                      >
                        <span style={{ }}>ขอใบแจ้งหนี้</span>
                      </Checkbox>
                    </div>
                    <div>
                      <Checkbox 
                        checked={checkboxes.quotation}
                        onChange={(e) => setCheckboxes(prev => ({ ...prev, quotation: e.target.checked }))}
                        style={{ fontSize: '16px' }}
                        disabled
                      >
                        <span style={{  }}>ขอใบเสนอราคา</span>
                      </Checkbox>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-3   w-[60%]">
                    <Text style={{ fontSize: '16px' }}>
                      <ExclamationCircleOutlined style={{ marginRight: '8px', color: '#faad14', fontSize: '20px' }} />
                      <strong>เงื่อนไขพิเศษ</strong><br />
                      กรณีมีสินค้าอันตรายอยู่ในรายการสินค้าที่เลือกซื้อ โปรดแนบไฟล์เอกสารผลิตภัณฑ์ที่จำเป็น
                    </Text>
                  </div>
                </div>

               

                {/* File Upload Section */}
                <div className="mb-8 mt-4 ">
                  <div className="flex items-center  mb-4">
                    <Title level={2} className="mb-0" style={{ fontSize: '24px', fontWeight: '500' }}>
                      เอกสารที่เกี่ยวข้อง
                    </Title>
                  </div>
                  
                  {/* Files Table */}
                  <div className="bg-white rounded-lg border overflow-hidden">
                 
                 
                    
                    {/* Table Rows */}
                    {[
                      {
                        fileName: "ใบขออนุญาตนำเข้าสินค้าอันตราย.pdf",
                        description1: "คำอธิบาย",
                        description2: "คำอธิบาย"
                      },
                      {
                        fileName: "ใบรับรองคุณภาพสินค้า.pdf",
                        description1: "คำอธิบาย",
                        description2: "คำอธิบาย"
                      }
                    ].map((file, index) => (
                      <div key={index} className="grid grid-cols-4 border-b border-gray-200 hover:bg-gray-50">
                        <div className="p-4 border-r border-gray-200">
                          <div className="flex items-center gap-2">
                           
                            <Text style={{ fontSize: '14px', color: '#333' }}>ไฟล์ที่แนบมา</Text>
                          </div>
                        </div>
                        <div className="p-4 border-r border-gray-200">
                          <Text style={{ fontSize: '14px', color: '#1677FF', textDecoration: 'underline', cursor: 'pointer' }}>
                            {file.fileName}
                          </Text>
                        </div>
                        <div className="p-4 border-r border-gray-200">
                          <Text style={{ fontSize: '14px', color: '#333' }}>
                            {file.description1}
                          </Text>
                        </div>
                        <div className="p-4">
                          <Text style={{ fontSize: '14px', color: '#333' }}>
                            -
                          </Text>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <Card className="shadow-sm border mb-4">
             
                <div className="space-y-3">
                  <div className="mb-3">
                    <Text strong style={{ fontSize: '18px' }}>สรุปยอดเงิน</Text>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <Text style={{ fontSize: '16px' }}>ยอดรวมการสั่งซื้อ</Text>
                    <Text strong style={{ fontSize: '16px' }}>฿ 5,600.00</Text>
                  </div>
                  
                  <div className="py-2 border-b border-gray-100">
                    <div className="flex justify-between items-center mb-1">
                      <Text style={{ fontSize: '16px' }}>ส่วนลด</Text>
                      <div className="flex items-center space-x-4">
                        <Text style={{ fontSize: '16px' }}>10 %</Text>
                        <Text strong style={{ fontSize: '16px' }}>฿ 560.00</Text>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <Text style={{ fontSize: '16px' }}>ราคารวมหลังจากส่วนลด</Text>
                      <Text strong style={{ fontSize: '16px' }}>฿ 5,040.00</Text>
                    </div>
                  </div>
                  
                  <div className="">
                    <div className="flex justify-between items-center ">
                      <Text style={{ fontSize: '16px' }}>ภาษีมูลค่าเพิ่ม</Text>
                      <Text strong style={{ fontSize: '16px' }}>฿ 0.00</Text>
                    </div>
                    <div className="flex justify-between items-center">
                      <Text style={{ fontSize: '16px' }}>ราคารวมภาษีมูลค่าเพิ่ม</Text>
                      <Text strong style={{ fontSize: '16px' }}>฿ 0.00</Text>
                    </div>
                        <div className="flex justify-between items-center border-b  border-gray-100">
                    <div className='flex gap-2'>
                      <Text style={{ fontSize: '16px' }}>ค่าจัดส่ง</Text>
                      <Text style={{ fontSize: '14px', color: '#999' }}>* ค่าจัดส่งแล้วแต่ 100 บาทเท่านั้น ระยะบางช่วงถ้างบ่อน 15 วันกิโซร</Text>
                    </div>
                    <Text strong style={{ fontSize: '16px' }}>฿ 100.00</Text>
                  </div>
                  </div>
              
                
                </div>
              </Card>

              {/* Final Summary */}
              <div className="">
                <div className="flex items-center justify-between ">
                  <Text strong style={{ fontSize: '18px' }}>ราคาสินค้าทั้งหมด</Text>
                  <Text strong style={{ fontSize: '24px', color: '#1a1a1bff' }}>
                    ฿ 5,140.00
                  </Text>
                </div>

                <div className="text-center">
                  <Button 
                    type="primary" 
                    size="large"
                    onClick={handlePlaceOrder}
                    style={{ 
                      fontSize: '16px', 
                      height: '44px',
                      paddingLeft: '32px',
                      paddingRight: '32px',
                      backgroundColor: '#1b4db1',
                      borderColor: '#1b4db1',
                      borderRadius: '100px',
                      width: '10%'
                    }}
                  >
                    ถัดไป
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
          
          {/* Confirmation Modal */}
          <Modal
            open={isConfirmModalOpen}
            onCancel={() => setIsConfirmModalOpen(false)}
            footer={null}
            width={400}
            centered
            closeIcon={
              <span style={{ fontSize: '50px', color: '#666', fontWeight:'100' }}>×</span>
            }
          >
            <div className="text-center p-6">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto mb-4   flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24"><g fill="none"><path stroke="#69C0FF" stroke-linecap="round" stroke-width="1.5" d="M12 7v6"/><circle cx="12" cy="16" r="1" fill="#69C0FF"/><path stroke="#69C0FF" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"/></g></svg>
                </div>
              </div>
              
              <div className="mb-6">
                <Text strong style={{ fontSize: '18px', color: '#000', display: 'block', marginBottom: '8px' }}>
                  ตรวจสอบ การซื้อสินค้า
                </Text>
                <Text style={{ fontSize: '16px', color: '#666', lineHeight: '1.5' }}>
                  สินค้าที่กำลังสั่งซื้อ<br />
                  ใช้งานในเชิงพาณิชย์ ใช่หรือไม่
                </Text>
              </div>
              
              <div className="flex justify-center space-x-3">
                <Button 
                  onClick={() => {
                    setIsConfirmModalOpen(false);
                    navigate('/users/purchase-order-preview');
                  }}
                  style={{ 
                    borderRadius: '20px',
                    paddingLeft: '24px',
                    paddingRight: '24px',
                    height: '40px',
                    fontSize: '16px',
                    width: '100px',
                  }}
                >
                  ไม่ใช่
                </Button>
                <Button 
                  type="primary"
                  onClick={() => {
                    setIsConfirmModalOpen(false);
                    navigate('/users/purchase-order-preview');
                  }}
                  style={{ 
                    borderRadius: '20px',
                    paddingLeft: '24px',
                    paddingRight: '24px',
                    height: '40px',
                    fontSize: '16px',
                    backgroundColor: '#0050B3',
                    borderColor: '#0050B3',
                    width: '100px',
                  }}
                >
                  ใช่
                </Button>
              </div>
            </div>
          </Modal>
          
        
        </div>
      </div>
    </div>
  );
};

export default PurchaseOrderPreview ;
