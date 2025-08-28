import React, { useState } from 'react';
import { Button, Typography, Card, Row, Col, Space, Tag, Checkbox, Radio, Upload, Input, Modal } from 'antd';
import { ExclamationCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import Header from '../../../components/user/header';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronLeft } from 'lucide-react';

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

interface ShippingInfo {
  contactNumber: string;
  weight: string;
  dimensions: string;
  insurance: boolean;
  declaration: boolean;
  agreement: boolean;
}

const PurchaseOrder: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [deliveryMethod, setDeliveryMethod] = useState('pickup'); // 'pickup' หรือ 'delivery'
  const [checkboxes, setCheckboxes] = useState({
    taxInvoice: false,
    invoice: false,
    quotation: false
  });

  // File upload state
  const [fileRows, setFileRows] = useState<{ id: number, file: File | null, description: string }[]>([]);
  
  // Discount modal state
  const [isDiscountModalOpen, setIsDiscountModalOpen] = useState(false);

  const addFileRow = () => {
    const newId = fileRows.length > 0 ? Math.max(...fileRows.map(row => row.id)) + 1 : 1;
    setFileRows([...fileRows, { id: newId, file: null, description: '' }]);
  };

  const handleFileUpload = (file: File, rowId: number) => {
    setFileRows(fileRows.map(row => 
      row.id === rowId ? { ...row, file } : row
    ));
    return false; // Prevent auto upload
  };

  const handleDescriptionChange = (rowId: number, description: string) => {
    setFileRows(fileRows.map(row => 
      row.id === rowId ? { ...row, description } : row
    ));
  };

  const handleFileRemove = (rowId: number) => {
    setFileRows(fileRows.filter(row => row.id !== rowId));
  };

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

  const [shippingInfo] = useState<ShippingInfo>({
    contactNumber: 'OBJ-103-4567',
    weight: '123 กรัม ชิ้นส่งปกติ',
    dimensions: 'ห้ามเปิดบรรจุภัณฑ์',
    insurance: false,
    declaration: false,
    agreement: false
  });

  const handleGoBack = () => {
    navigate('/users/cart');
  };

  const handlePlaceOrder = () => {
    console.log('Order placed:', { orderItems, shippingInfo });
  };

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

          {/* Page Header */}
          <div className="flex items-center space-x-3 mt-6 mb-8">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#1677FF" stroke-width="1.5"><path d="M16.755 2h-9.51c-1.159 0-1.738 0-2.206.163a3.05 3.05 0 0 0-1.881 1.936C3 4.581 3 5.177 3 6.37v14.004c0 .858.985 1.314 1.608.744a.946.946 0 0 1 1.284 0l.483.442a1.657 1.657 0 0 0 2.25 0a1.657 1.657 0 0 1 2.25 0a1.657 1.657 0 0 0 2.25 0a1.657 1.657 0 0 1 2.25 0a1.657 1.657 0 0 0 2.25 0l.483-.442a.946.946 0 0 1 1.284 0c.623.57 1.608.114 1.608-.744V6.37c0-1.193 0-1.79-.158-2.27a3.05 3.05 0 0 0-1.881-1.937C18.493 2 17.914 2 16.755 2Z"/><path stroke-linecap="round" d="M10.5 11H17M7 11h.5M7 7.5h.5m-.5 7h.5m3-7H17m-6.5 7H17"/></g></svg>
            <Title level={2} className="mb-0" style={{ fontSize: '28px', fontWeight: '500' }}>
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
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#1677FF" stroke-linecap="round" stroke-width="1.5" d="m15.578 3.382l2 1.05c2.151 1.129 3.227 1.693 3.825 2.708C22 8.154 22 9.417 22 11.942v.117c0 2.524 0 3.787-.597 4.801c-.598 1.015-1.674 1.58-3.825 2.709l-2 1.049C13.822 21.539 12.944 22 12 22s-1.822-.46-3.578-1.382l-2-1.05c-2.151-1.129-3.227-1.693-3.825-2.708C2 15.846 2 14.583 2 12.06v-.117c0-2.525 0-3.788.597-4.802c.598-1.015 1.674-1.58 3.825-2.708l2-1.05C10.178 2.461 11.056 2 12 2s1.822.46 3.578 1.382ZM21 7.5l-4 2M12 12L3 7.5m9 4.5v9.5m0-9.5l4.5-2.25l.5-.25m0 0V13m0-3.5l-9.5-5"/></svg>                    <Title level={2} className="mb-0" style={{ fontSize: '28px', fontWeight: '500' }}>
                    ตัวเลือกในการจัดส่ง
                    </Title>
                  </div>
                </div>
                <div className="my-5 ml-4">
                  <Radio.Group
                    value={deliveryMethod}
                    onChange={(e) => setDeliveryMethod(e.target.value)}
                    style={{ width: '100%' }}
                  >
                    <div className="flex space-x-6">
                      <Radio value="pickup" style={{ fontSize: '14px' }}>
                        รับสินค้าเอง
                      </Radio>
                      <Radio value="delivery" style={{ fontSize: '14px' }}>
                        จัดส่งทางไปรษณีย์
                      </Radio>
                    </div>
                  </Radio.Group>
                </div>
                  <div className="flex items-center space-x-3 mt-6  justify-between">
                    <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#1677FF" stroke-width="1.5"><path d="M5 8.515C5 4.917 8.134 2 12 2s7 2.917 7 6.515c0 3.57-2.234 7.735-5.72 9.225a3.28 3.28 0 0 1-2.56 0C7.234 16.25 5 12.084 5 8.515Z"/><path d="M14 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"/><path stroke-linecap="round" d="M20.96 15.5c.666.602 1.04 1.282 1.04 2c0 2.485-4.477 4.5-10 4.5S2 19.985 2 17.5c0-.718.374-1.398 1.04-2"/></g></svg>                   <Title level={2} className="mb-0" style={{ fontSize: '28px', fontWeight: '500' }}>
                   ที่อยู่จัดส่ง
                    </Title>
                    </div>
                    <div>
                    <a href="#" style={{ fontSize: '16px', color: '#1b4db1', textDecoration: 'underline' }}>
                      เปลี่ยนที่อยู่
                    </a>                  
                    </div>
                  
                  </div>
                
                <div className="space-y-3">
                    <Card className='mt-3'>
                    <div>
                    <Text style={{ fontSize: '14px' }}>นาย ลชาภาค โด OBJ-123-4567</Text>
                  </div>
                  
                  <div>
                    <Text style={{ fontSize: '14px' }}>123 หมู่ 5 ตำบลบางใหม่ อำเภอบางลิง จังหวัดตรัง 30000</Text>
                  </div>
                    </Card>
                

                  <div className="space-y-2">
                    <div>
                      <Checkbox 
                        checked={checkboxes.taxInvoice}
                        onChange={(e) => setCheckboxes(prev => ({ ...prev, taxInvoice: e.target.checked }))}
                        style={{ fontSize: '16px' }}
                      >
                        <span style={{  }}>ขอใบกำกับภาษี</span>
                      </Checkbox>
                    </div>
                    <div>
                      <Checkbox 
                        checked={checkboxes.invoice}
                        onChange={(e) => setCheckboxes(prev => ({ ...prev, invoice: e.target.checked }))}
                        style={{ fontSize: '16px' }}
                      >
                        <span style={{ }}>ขอใบแจ้งหนี้</span>
                      </Checkbox>
                    </div>
                    <div>
                      <Checkbox 
                        checked={checkboxes.quotation}
                        onChange={(e) => setCheckboxes(prev => ({ ...prev, quotation: e.target.checked }))}
                        style={{ fontSize: '16px' }}
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
                <div className="mb-8 ">
                  <div className="flex items-center  mb-4">
                    <Title level={2} className="mb-0" style={{ fontSize: '28px', fontWeight: '500' }}>
                      แนบเอกสารที่เกี่ยวข้อง
                    </Title>
                  </div>
                  
                  {/* Add File Button */}
                  <div className="mb-4">
                    <Button 
                      type="primary" 
                      onClick={addFileRow}
                      className="bg-primary border-blue-600 px-6 rounded-[16px] text-base"
                    >
                      เพิ่มไฟล์
                    </Button>
                  </div>

                  {/* File Rows */}
                  {fileRows.length > 0 && fileRows.map((row) => (
                    <div key={row.id} className="flex items-center gap-2 p-2 bg-white mb-2">
                      <Upload
                        name="files"
                        beforeUpload={(file) => handleFileUpload(file as File, row.id)}
                        showUploadList={false}
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      >
                        <Button 
                          type="default"
                          className="min-w-auto text-left px-3 py-[18px] border-gray-300 bg-gray-50 rounded-md text-base"
                        >
                          {row.file ? row.file.name : 'เลือกไฟล์'}
                        </Button>
                      </Upload>
                      <Input 
                        value={row.description}
                        onChange={(e) => handleDescriptionChange(row.id, e.target.value)}
                        placeholder="คำอธิบายไฟล์"
                        size="small"
                        className="ml-2 flex-1 px-3 py-2 border-gray-300 bg-gray-50 rounded-md text-base"
                      />
                      <Button 
                        type="primary"
                        danger
                        onClick={() => handleFileRemove(row.id)}
                        size="small"
                        className="ml-2 px-4 py-5 rounded-[30px] bg-red-500 text-base"
                        icon={<DeleteOutlined />}
                      >
                        ลบ
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

                <Card 
                  className=" mb-4 p-0 cursor-pointer"
                  onClick={() => setIsDiscountModalOpen(true)}
                >
                  <div className="flex items-center justify-between ">
                    <div className="flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path stroke="#1677FF" stroke-width="1.5" d="M14.005 4h-4.01c-3.78 0-5.67 0-6.845 1.172c-.81.806-1.061 1.951-1.14 3.817c-.015.37-.023.556.046.679c.07.123.345.278.897.586a1.999 1.999 0 0 1 0 3.492c-.552.309-.828.463-.897.586s-.061.308-.045.678c.078 1.867.33 3.012 1.139 3.818C4.324 20 6.214 20 9.995 20h4.01c3.78 0 5.67 0 6.845-1.172c.81-.806 1.061-1.951 1.14-3.817c.015-.37.023-.556-.046-.679c-.07-.123-.345-.277-.897-.586a1.999 1.999 0 0 1 0-3.492c.552-.308.828-.463.897-.586s.061-.308.045-.679c-.078-1.866-.33-3.01-1.139-3.817C19.676 4 17.786 4 14.005 4Z"/><path stroke="#1677FF" stroke-linecap="round" stroke-width="1.5" d="m9 15l6-6"/><path fill="#1677FF" d="M15.5 14.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"/></g></svg>
                      <Title level={4} className="mb-0" style={{ fontSize: '16px' }}>
                        โค้ดส่วนลด
                      </Title>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Text style={{ fontSize: '14px' }}>10 %</Text>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6,9 12,15 18,9"/>
                      </svg>
                    </div>
                  </div>
                </Card>
              {/* Order Summary */}
              <Card className="shadow-sm border mb-4">
             
                <div className="space-y-3">
                  <div className="mb-3">
                    <Text strong style={{ fontSize: '28px' }}>สรุปยอดเงิน</Text>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <Text style={{ fontSize: '14px' }}>ยอดรวมการสั่งซื้อ</Text>
                    <Text strong style={{ fontSize: '14px' }}>฿ 5,600.00</Text>
                  </div>
                  
                  <div className="py-2 border-b border-gray-100">
                    <div className="flex justify-between items-center mb-1">
                      <Text style={{ fontSize: '14px' }}>ส่วนลด</Text>
                      <div className="flex items-center space-x-4">
                        <Text style={{ fontSize: '14px' }}>10 %</Text>
                        <Text strong style={{ fontSize: '14px' }}>฿ 560.00</Text>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <Text style={{ fontSize: '14px' }}>ราคารวมหลังจากส่วนลด</Text>
                      <Text strong style={{ fontSize: '14px' }}>฿ 5,040.00</Text>
                    </div>
                  </div>
                  
                  <div className="">
                    <div className="flex justify-between items-center ">
                      <Text style={{ fontSize: '14px' }}>ภาษีมูลค่าเพิ่ม</Text>
                      <Text strong style={{ fontSize: '14px' }}>฿ 0.00</Text>
                    </div>
                    <div className="flex justify-between items-center">
                      <Text style={{ fontSize: '14px' }}>ราคารวมภาษีมูลค่าเพิ่ม</Text>
                      <Text strong style={{ fontSize: '14px' }}>฿ 0.00</Text>
                    </div>
                        <div className="flex justify-between items-center border-b  border-gray-100">
                    <div className='flex gap-2'>
                      <Text style={{ fontSize: '14px' }}>ค่าจัดส่ง</Text>
                      <Text style={{ fontSize: '12px', color: '#999' }}>* ค่าจัดส่งแล้วแต่ 100 บาทเท่านั้น ระยะบางช่วงถ้างบ่อน 15 วันกิโซร</Text>
                    </div>
                    <Text strong style={{ fontSize: '14px' }}>฿ 100.00</Text>
                  </div>
                  </div>
              
                
                </div>
              </Card>

              {/* Final Summary */}
              <div className="">
                <div className="flex items-center justify-between ">
                  <Text strong style={{ fontSize: '16px' }}>ราคาสินค้าทั้งหมด</Text>
                  <Text strong style={{ fontSize: '20px', color: '#1a1a1bff' }}>
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
          
          {/* Discount Modal */}
          <Modal
            title="โค้ดส่วนลด"
            open={isDiscountModalOpen}
            onCancel={() => setIsDiscountModalOpen(false)}
            footer={null}
            width={400}
            centered
          >
            <div className="p-4">
              <div className="border-2 border-dashed border-blue-300 rounded-lg p-4 mb-4">
                <div className="text-center">
                  <Text style={{ fontSize: '14px', color: '#666' }}>
                    ใส่รหัสโค้ดส่วนลด
                  </Text>
                </div>
              </div>
              <div className="text-center space-y-2">
                <Button 
                  type="default" 
                  onClick={() => setIsDiscountModalOpen(false)}
                  style={{ 
                    borderRadius: '20px',
                    marginRight: '8px'
                  }}
                >
                  ปิด
                </Button>
                <Button 
                  type="primary" 
                  style={{ 
                    borderRadius: '20px',
                    backgroundColor: '#1677FF'
                  }}
                >
                  ดึงลอง
                </Button>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default PurchaseOrder;
