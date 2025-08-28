import React, { useState } from 'react';
import { Button, Typography, Card, Row, Col, Space, Tag, Checkbox } from 'antd';
import {  DeleteOutlined, } from '@ant-design/icons';
import Header from '../../../components/user/header';
import QuantitySelector from '../../../components/user/QuantitySelector';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronLeft } from 'lucide-react';
const { Title, Text } = Typography;

interface CartItem {
  id: string;
  productCode: string;
  productName: string;
  tistrNumber: string;
  grade: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  category: string;
  isSelected?: boolean;
}

const Cart: React.FC = () => {
const navigate = useNavigate();
const { t } = useTranslation();
  // Mock cart data - ในการใช้งานจริงจะดึงจาก context หรือ state management
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      productCode: '146552',
      productName: 'Tryptic Soy',
      tistrNumber: '146552',
      grade: 'Glo Germ™',
      quantity: 1,
      unitPrice: 1200.00,
      totalPrice: 1400.00,
      category: 'รายละเอียดสินค้า',
      isSelected: true
    },
    {
      id: '2',
      productCode: '146552',
      productName: 'Tryptic Soy Agar - Ready-to-use Contact Plates',
      tistrNumber: '146552',
      grade: 'Glo Germ™',
      quantity: 3,
      unitPrice: 1200.00,
      totalPrice: 1200.00,
      category: 'รายละเอียดสินค้า',
      isSelected: false
    }
  ]);
    const handleGoToHome = () => {
   
    navigate('/users/Home');
  };

  const handleItemSelect = (itemId: string, checked: boolean) => {
    setCartItems(prev => prev.map(item => 
      item.id === itemId ? { ...item, isSelected: checked } : item
    ));
  };

  const handleSelectAll = (checked: boolean) => {
    setCartItems(prev => prev.map(item => ({ ...item, isSelected: checked })));
  };

  const isAllSelected = cartItems.every(item => item.isSelected);
  const hasSelectedItems = cartItems.some(item => item.isSelected);

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: newQuantity,
          totalPrice: newQuantity * item.unitPrice
        };
      }
      return item;
    }));
  };

  const handleRemoveItem = (itemId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  };

  const calculateGrandTotal = () => {
    return cartItems
      .filter(item => item.isSelected)
      .reduce((total, item) => total + item.totalPrice, 0);
  };

  const handleCheckout = () => {
    // นำไปยังหน้าใบคำสั่งซื้อ
    navigate('/users/purchase-order');
  };

  return (
    <>
      <Header />
   
    <div className="max-w-7xl mx-auto bg-gray-50 min-h-screen">
      <div className="px-[100px] mx-auto p-6">
        <Button
          size="large"
          onClick={handleGoToHome}
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
          {t('cartPage.back')}
        </Button>

        <div className="flex items-center space-x-3 mt-6 mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
            <g fill="none" stroke="#1677FF" strokeWidth="1.5">
              <path strokeLinecap="round" d="m2 3l.265.088c1.32.44 1.98.66 2.357 1.184S5 5.492 5 6.883V9.5c0 2.828 0 4.243.879 5.121c.878.879 2.293.879 5.121.879h8"/>
              <path d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z"/>
              <path strokeLinecap="round" d="M11 9H8"/>
              <path d="M5 6h11.45c2.055 0 3.083 0 3.528.674c.444.675.04 1.619-.77 3.508l-.429 1c-.378.882-.567 1.322-.942 1.57c-.376.248-.856.248-1.815.248H5"/>
            </g>
          </svg>
          <Title level={2} className="mb-0" style={{ fontSize: '28px', fontWeight: '500' }}>
            {t('cartPage.title')}
          </Title>
        </div>    
        <Row gutter={24}>
          {/* Cart Items */}
          <Col span={24}>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id} className="shadow-sm border">
                  {/* Header with blue square and product name */}
                  <div className="flex items-center space-x-3 mb-4">
                    <Checkbox
                      checked={item.isSelected}
                      onChange={(e) => handleItemSelect(item.id, e.target.checked)}
                      style={{ 
                        transform: 'scale(1.2)',
                        accentColor: '#1677ff'
                      }}
                    />
                    <Title level={4} className="mb-0 flex-1" style={{ fontSize: '24px', fontWeight: 'bold' }}>
                      {item.productName}
                    </Title>
                    <DeleteOutlined 
                      className="text-red-500 hover:text-red-700 cursor-pointer"
                      style={{ fontSize: '20px' }}
                      onClick={() => handleRemoveItem(item.id)}
                    />
                  </div>
                  
                  {/* Product details */}
                  <div className="mb-4">
                    <Space className="mb-2">
                      <Text style={{ fontSize: '18px' }}>{t('cartPage.productCode')}: {item.productCode}</Text>
                      <Text style={{ fontSize: '18px' }}>{t('cartPage.tistrNumber')}: {item.tistrNumber}</Text>
                      <Tag color="red" style={{ fontSize: '16px' }}>{item.grade}</Tag>
                    </Space>
                  </div>

                  {/* Main product and sub-items */}
                  <div className="space-y-2">
                    <Text strong style={{ fontSize: '18px', color: '#666' }}>{t('cartPage.productDetails')}</Text>
                    
                    {/* Sub items based on cart data */}
                    {item.id === '1' && (
                      <div className="space-y-2">
                        {/* Main product row */}
                        <Row justify="space-between" align="middle" className="py-2">
                          <Col span={10}>
                            <Text style={{ fontSize: '18px' }}>
                              {t('cartPage.lecithinDescription')}
                            </Text>
                          </Col>
                          <Col span={3} className="text-center">
                            <Text style={{ fontSize: '18px' }}>{t('cartPage.quantity')}</Text>
                          </Col>
                          <Col span={2} className="text-center">
                            <QuantitySelector
                              value={1}
                              onChange={(value) => handleQuantityChange(item.id, value)}
                              size="small"
                              min={1}
                              max={999}
                              width={80}
                            />
                          </Col>
                          <Col span={4} className="text-right">
                            <Text strong style={{ fontSize: '20px' }}>฿ 1,200.00</Text>
                          </Col>
                        </Row>
                        
                        {/* Sub items with consistent alignment */}
                        <Row justify="space-between" align="middle" className="py-2">
                          <Col span={10}>
                            <Text style={{ fontSize: '18px' }}>{t('cartPage.strainData')}</Text>
                          </Col>
                          <Col span={3} className="text-center">
                            <Text style={{ fontSize: '18px' }}>{t('cartPage.quantity')}</Text>
                          </Col>
                          <Col span={2} className="text-center">
                            <QuantitySelector
                              value={2}
                              onChange={() => {}}
                              size="small"
                              min={0}
                              max={999}
                              width={80}
                            />
                          </Col>
                          <Col span={4} className="text-right">
                            <Text style={{ fontSize: '18px' }}>+฿ 400.00</Text>
                          </Col>
                        </Row>
                        
                        <Row justify="space-between" align="middle" className="py-2">
                          <Col span={10}>
                            <Text style={{ fontSize: '18px' }}>{t('cartPage.reportCertificate')}</Text>
                          </Col>
                          <Col span={3} className="text-center">
                            <Text style={{ fontSize: '18px' }}>{t('cartPage.quantity')}</Text>
                          </Col>
                          <Col span={2} className="text-center">
                            <QuantitySelector
                              value={1}
                              onChange={() => {}}
                              size="small"
                              min={0}
                              max={999}
                              width={80}
                            />
                          </Col>
                          <Col span={4} className="text-right">
                            <Text style={{ fontSize: '18px' }}>+฿ 100.00</Text>
                          </Col>
                        </Row>
                      </div>
                    )}

                    {item.id === '2' && (
                      <div className="space-y-2">
                        {/* Main product row */}
                        <Row justify="space-between" align="middle" className="py-2">
                          <Col span={10}>
                            <Text style={{ fontSize: '18px' }}>{t('cartPage.productDetails')}</Text>
                          </Col>
                          <Col span={3} className="text-center">
                            <Text style={{ fontSize: '18px' }}>{t('cartPage.quantity')}</Text>
                          </Col>
                          <Col span={2} className="text-center">
                            <QuantitySelector
                              value={3}
                              onChange={(value) => handleQuantityChange(item.id, value)}
                              size="small"
                              min={1}
                              max={999}
                              width={80}
                            />
                          </Col>
                          <Col span={4} className="text-right">
                            <Text strong style={{ fontSize: '20px' }}>฿ 3,600.00</Text>
                          </Col>
                        </Row>
                        
                        {/* Sub items with consistent alignment */}
                        <Row justify="space-between" align="middle" className="py-2">
                          <Col span={10}>
                            <Text style={{ fontSize: '18px' }}>{t('cartPage.certificateDocument')}</Text>
                          </Col>
                          <Col span={3} className="text-center">
                            <Text style={{ fontSize: '18px' }}>{t('cartPage.quantity')}</Text>
                          </Col>
                          <Col span={2} className="text-center">
                            <QuantitySelector
                              value={0}
                              onChange={() => {}}
                              size="small"
                              min={0}
                              max={999}
                              width={80}
                            />
                          </Col>
                          <Col span={4} className="text-right">
                            <Text style={{ fontSize: '18px' }}>+฿ 300.00</Text>
                          </Col>
                        </Row>
                      </div>
                    )}
                  </div>
                  
                  {/* Total for this item */}
                  <div className="mt-6 pt-3 border-t">
                    <Row justify="end">
                      <Col>
                        <Text strong style={{ fontSize: '26px',  }}>
                          ฿ {item.totalPrice.toLocaleString()}.00
                        </Text>
                      </Col>
                    </Row>
                  </div>
                </Card>
              ))}
            </div>
            
            {/* Bottom Summary and Order Button */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center space-x-3 mb-4">
                <Checkbox
                  checked={isAllSelected}
                  indeterminate={hasSelectedItems && !isAllSelected}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                  style={{ 
                    transform: 'scale(1.2)',
                    accentColor: '#1677ff'
                  }}
                />
                <Title level={4} className="mb-0" style={{ fontSize: '24px' }}>
                  {t('cartPage.orderSummary')}
                </Title>
              </div>
              
              <Row justify="space-between" className="mb-6">
                <Col>
                  <Text strong style={{ fontSize: '30px' }}>{t('cartPage.total')}</Text>
                </Col>
                <Col>
                  <Text strong style={{ fontSize: '30px' }}>
                    ฿ {calculateGrandTotal().toLocaleString()}.00
                  </Text>
                </Col>
              </Row>
              
              <div className="text-center">
                <Button 
                  type="primary" 
                  size="large"
                  onClick={handleCheckout}
                  disabled={!hasSelectedItems}
                  style={{ 
                    fontSize: '22px', 
                    height: '45px',
                    paddingLeft: '50px',
                    paddingRight: '50px',
                    backgroundColor: hasSelectedItems ? '#1b4db1' : '#d9d9d9',
                  
                    borderRadius: '28px',
                    opacity: hasSelectedItems ? 1 : 0.6
                  }}
                >
                  {t('cartPage.orderButton')}
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
     </>
  );
};

export default Cart;
