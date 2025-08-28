import React, { useState } from 'react';
import { Button, Typography, Card, Row, Col, Space, Tag, Checkbox, Divider, Table, Input } from 'antd';
import { CheckCircleOutlined, DownOutlined } from '@ant-design/icons';
import Header from '../../../components/user/header';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronLeft } from 'lucide-react';

const { Title, Text } = Typography;
const { TextArea } = Input;

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

  const [orderItems] = useState<OrderItem[]>([
    {
      id: '1',
      productName: 'Tryptic Soy Agar - Ready-to-use Contact Plates',
      productCode: '146552',
      tistrNumber: '146552',
      grade: 'Glo Germ™',
      description: 'Lecithin, Tween®, ICR plus with lockable lid, plate diam. 55 mm, sterile, γ-irradiated, pkg of 10 plates Triple packed; suitable for air monitoring',
      quantity: 2,
      unitPrice: 3600.00,
      totalPrice: 7200.00,
      subItems: [
        {
          name: 'ข้อมูลสายพันธุ์',
          quantity: 2,
          unitPrice: 200.00,
          totalPrice: 400.00
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

  const [additionalNotes, setAdditionalNotes] = useState('ชื่อเครื่องปนเปื้อนเทียบจำลอง โดยโรงพยาบาลสมเด็จพระนางเจ้าสิริกิติ์');

  const handleGoBack = () => {
    navigate('/users/cart');
  };

  const calculateSubtotal = () => {
    return orderItems.reduce((total, item) => {
      const itemTotal = item.totalPrice + (item.subItems?.reduce((subTotal, subItem) => subTotal + subItem.totalPrice, 0) || 0);
      return total + itemTotal;
    }, 0);
  };

  const calculateShippingCost = () => 100.00; // Fixed shipping cost
  const calculateGrandTotal = () => calculateSubtotal() + calculateShippingCost();

  const handlePlaceOrder = () => {
    console.log('Order placed:', { orderItems, shippingInfo, additionalNotes });
  };

  // Table columns for order summary
  const summaryColumns = [
    {
      title: 'รายการ',
      dataIndex: 'name',
      key: 'name',
      width: '60%',
    },
    {
      title: 'จำนวน',
      dataIndex: 'quantity',
      key: 'quantity',
      align: 'center' as const,
      width: '20%',
    },
    {
      title: 'ราคา',
      dataIndex: 'price',
      key: 'price',
      align: 'right' as const,
      width: '20%',
      render: (price: number) => `฿ ${price.toLocaleString()}`
    }
  ];

  const summaryData = [
    { key: '1', name: 'ของการส่งสิทธิ์', quantity: '10 %', price: 8100 },
    { key: '2', name: 'ค่าแพ็ค', quantity: '', price: 3750 },
    { key: '3', name: 'ราคาลด', quantity: '', price: 0 },
    { key: '4', name: 'รวมสุทธิ', quantity: '', price: 0 },
    { key: '5', name: 'ภาษีบริการ', quantity: '* ยังสามารถสั่งซื้อได้ โปรดกรุณาติดต่อเจ้าหน้าที่ ก่อนถึงอายุ', price: 100 },
    { key: '6', name: 'ราขรรมก', quantity: '', price: 3880 }
  ];

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto bg-gray-50 min-h-screen">
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
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
              <g fill="none" stroke="#1677FF" strokeWidth="1.5">
                <path d="M3 10h18M7 3v4m10-4v4M7.5 21h9a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-9a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3Z"/>
                <path d="m9 16l2 2l4-4"/>
              </g>
            </svg>
            <Title level={2} className="mb-0" style={{ fontSize: '28px', fontWeight: '500' }}>
              {t('purchaseOrder.title')}
            </Title>
          </div>

          <Row gutter={24}>
            <Col span={24}>
              {/* Order Items */}
              {orderItems.map((item) => (
                <Card key={item.id} className="shadow-sm border mb-4">
                  {/* Product Header */}
                  <div className="flex items-center space-x-3 mb-4">
                    <CheckCircleOutlined style={{ color: '#52c41a', fontSize: '20px' }} />
                    <Title level={4} className="mb-0 flex-1" style={{ fontSize: '24px', fontWeight: 'bold' }}>
                      {item.productName}
                    </Title>
                  </div>

                  {/* Product Details */}
                  <div className="mb-4">
                    <Space className="mb-2">
                      <Text style={{ fontSize: '16px' }}>{t('purchaseOrder.productCode')}: {item.productCode}</Text>
                      <Text style={{ fontSize: '16px' }}>{t('purchaseOrder.tistrNumber')}: {item.tistrNumber}</Text>
                      <Tag color="red" style={{ fontSize: '14px' }}>{item.grade}</Tag>
                    </Space>
                  </div>

                  {/* Main Product Details */}
                  <div className="bg-gray-50 p-4 rounded-md mb-4">
                    <Text strong style={{ fontSize: '16px', color: '#666', display: 'block', marginBottom: '8px' }}>
                      {t('purchaseOrder.productDetails')}
                    </Text>
                    <Row justify="space-between" align="middle" className="py-2">
                      <Col span={12}>
                        <Text style={{ fontSize: '16px' }}>{item.description}</Text>
                      </Col>
                      <Col span={3} className="text-center">
                        <Text style={{ fontSize: '16px' }}>{item.quantity} EA</Text>
                      </Col>
                      <Col span={4} className="text-right">
                        <Text strong style={{ fontSize: '18px' }}>฿ {item.totalPrice.toLocaleString()}.00</Text>
                      </Col>
                    </Row>

                    {/* Sub Items */}
                    {item.subItems?.map((subItem, index) => (
                      <Row key={index} justify="space-between" align="middle" className="py-1 ml-4">
                        <Col span={12}>
                          <Text style={{ fontSize: '16px', color: '#666' }}>{subItem.name}</Text>
                        </Col>
                        <Col span={3} className="text-center">
                          <Text style={{ fontSize: '16px' }}>{subItem.quantity} EA</Text>
                        </Col>
                        <Col span={4} className="text-right">
                          <Text style={{ fontSize: '16px' }}>+฿ {subItem.totalPrice.toLocaleString()}.00</Text>
                        </Col>
                      </Row>
                    ))}
                  </div>

                  {/* Item Total */}
                  <div className="text-right pt-3 border-t">
                    <Text strong style={{ fontSize: '20px', color: '#1890ff' }}>
                      ฿ {(item.totalPrice + (item.subItems?.reduce((total, sub) => total + sub.totalPrice, 0) || 0)).toLocaleString()}.00
                    </Text>
                  </div>
                </Card>
              ))}

              {/* Shipping Information */}
              <Card className="shadow-sm border mb-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
                  <Title level={4} className="mb-0" style={{ fontSize: '20px' }}>
                    {t('purchaseOrder.shippingSettings')}
                  </Title>
                  <Button 
                    type="link" 
                    icon={<DownOutlined />} 
                    style={{ padding: 0, height: 'auto', marginLeft: 'auto' }}
                  />
                </div>

                <div className="space-y-4">
                  <Row gutter={16}>
                    <Col span={12}>
                      <Text>เลขที่ติดต่อ {shippingInfo.contactNumber}</Text>
                    </Col>
                  </Row>
                  
                  <Row gutter={16}>
                    <Col span={24}>
                      <Text>{shippingInfo.weight} ชิ้นส่งปกติ ห้ามเปิดบรรจุภัณฑ์ 30000</Text>
                    </Col>
                  </Row>

                  <div className="space-y-2">
                    <div>
                      <Checkbox checked style={{ fontSize: '16px' }}>
                        <span style={{ color: '#1890ff' }}>ลองใหม่สัก</span>
                      </Checkbox>
                    </div>
                    <div>
                      <Checkbox checked style={{ fontSize: '16px' }}>
                        <span style={{ color: '#1890ff' }}>ลองใหม่สัก</span>
                      </Checkbox>
                    </div>
                    <div>
                      <Checkbox checked style={{ fontSize: '16px' }}>
                        <span style={{ color: '#1890ff' }}>ลองใหม่สัก</span>
                      </Checkbox>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-3 rounded-md border border-yellow-200">
                    <Text style={{ fontSize: '14px' }}>
                      <strong>เงินใส่พื้น</strong><br />
                      แบบสั่งการพรรคเทียบพวกเขาเยอะสิได้ โมทยกเพื่อสิทธิกัตรศึกษา
                    </Text>
                  </div>
                </div>

                <Divider />

                <div>
                  <Text strong style={{ fontSize: '16px', display: 'block', marginBottom: '8px' }}>
                    แนบเอกสารเพิ่มเติมจากท่าน
                  </Text>
                  <TextArea 
                    value={additionalNotes}
                    onChange={(e) => setAdditionalNotes(e.target.value)}
                    rows={3}
                    style={{ fontSize: '14px' }}
                    placeholder="กรอกชื่อเครื่องปนเปื้อนเทียบจำลอง โดยโรงพยาบาลสมเด็จพระนางเจ้าสิริกิติ์"
                  />
                </div>
              </Card>

              {/* Order Summary */}
              <Card className="shadow-sm border mb-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
                  <Title level={4} className="mb-0" style={{ fontSize: '20px' }}>
                    ใช้ชื่อของดี
                  </Title>
                  <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Text>10 {'>'}</Text>
                  </div>
                </div>

                <Table 
                  columns={summaryColumns}
                  dataSource={summaryData}
                  pagination={false}
                  showHeader={false}
                  size="small"
                  style={{ marginBottom: '16px' }}
                  rowClassName={(record) => record.key === '5' ? 'text-yellow-600' : ''}
                />
              </Card>

              {/* Final Summary */}
              <Card className="shadow-sm border">
                <div className="flex items-center justify-between mb-4">
                  <Text strong style={{ fontSize: '20px' }}>รวมสุทธิในใบคำสั่ง</Text>
                  <Text strong style={{ fontSize: '24px', color: '#1890ff' }}>
                    ฿ {calculateGrandTotal().toLocaleString()}.00
                  </Text>
                </div>

                <div className="text-center">
                  <Button 
                    type="primary" 
                    size="large"
                    onClick={handlePlaceOrder}
                    style={{ 
                      fontSize: '18px', 
                      height: '50px',
                      paddingLeft: '40px',
                      paddingRight: '40px',
                      backgroundColor: '#1890ff',
                      borderColor: '#1890ff',
                      borderRadius: '25px'
                    }}
                  >
                    สั่งซื้อ
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default PurchaseOrder;
