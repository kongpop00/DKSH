import React, { useState } from 'react';
import {  useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, Typography, Card, Row, Col, Divider, Space, Tag } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import Header from '../../../components/user/header';
import QuantitySelector from '../../../components/user/QuantitySelector';

const { Title, Text } = Typography;

interface ProductDetail {
  id: string;
  productCode: string;
  productName: string;
  description: string;
  tistrNumber: string;
  grade: string;
  price: number;
  unit: string;
  category: string;
  inStock: boolean;
}

interface CartItem {
  productId: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

const Shopping: React.FC = () => {
  const { t } = useTranslation();
 
  const { productId } = useParams();
  
  const [quantities, setQuantities] = useState<{[key: string]: number}>({});
  const [mainProductQuantity, setMainProductQuantity] = useState<number>(0);

  // Mock product data - ในการใช้งานจริงจะดึงจาก API ตาม productId
  const productDetail: ProductDetail = {
    id: productId || '1',
    productCode: '146552',
    productName: 'Tryptic Soy Agar - Ready-to-use Contact Plates',
    description: 'Lecithin, Tween®, ICR plus with lactolate lid, plate diam. 55 mm, sterile, γ-irradiated, pkg of 10 plates Triple packed; suitable for air monitoring',
    tistrNumber: '146552',
    grade: 'Glo Germ™',
    price: 1200.00,
    unit: '/EA',
    category: 'อุปกรณ์ทดสอบ',
    inStock: true
  };

  // สินค้าที่เกี่ยวข้อง/เพิ่มเติม
  const relatedProducts = [
    { name: 'ข้อมูลสายพันธุ์', quantity: 0, unitPrice: 500.00, totalPrice: 0 },
    { name: 'ใบรายงานผล/ใบรับรอง', quantity: 0, unitPrice: 300.00, totalPrice: 0 },
    { name: 'เชื้อสด', quantity: 0, unitPrice: 800.00, totalPrice: 0 },
    { name: 'แยกเชื้อบริสุทธิ์', quantity: 0, unitPrice: 1000.00, totalPrice: 0 },
    { name: 'ถ่ายรูป', quantity: 0, unitPrice: 200.00, totalPrice: 0 },
    { name: 'บริการด่วนพิเศษ', quantity: 0, unitPrice: 1500.00, totalPrice: 0 }
  ];

  const handleQuantityChange = (productName: string, value: number) => {
    setQuantities(prev => ({
      ...prev,
      [productName]: value
    }));
  };

  const calculateTotal = () => {
    let total = 0;
    
    // เพิ่มราคาสินค้าหลัก
    total += mainProductQuantity * productDetail.price;
    
    // เพิ่มราคาสินค้าเพิ่มเติม
    relatedProducts.forEach(product => {
      const quantity = quantities[product.name] || 0;
      total += quantity * product.unitPrice;
    });
    return total;
  };

  const handleAddToCart = () => {
    const newCartItems: CartItem[] = [];
    
    // เพิ่มสินค้าหลัก
    if (mainProductQuantity > 0) {
      newCartItems.push({
        productId: productDetail.id,
        productName: productDetail.productName,
        quantity: mainProductQuantity,
        unitPrice: productDetail.price,
        totalPrice: mainProductQuantity * productDetail.price
      });
    }
    
    // เพิ่มสินค้าเพิ่มเติม
    relatedProducts.forEach(product => {
      const quantity = quantities[product.name] || 0;
      if (quantity > 0) {
        newCartItems.push({
          productId: product.name,
          productName: product.name,
          quantity,
          unitPrice: product.unitPrice,
          totalPrice: quantity * product.unitPrice
        });
      }
    });

    // ที่นี่จะเพิ่มลงตะกร้าจริง
    console.log('Added to cart:', newCartItems);
    // Navigate to cart or show success message
  };

//   const handleBackToProducts = () => {
//     navigate('/users/Home');
//   };

  return (
    <div className="bg-gray-50 min-h-screen">
        <Header />

      <div className="px-[100px] mx-auto p-6">
        <Row gutter={24}>
          {/* Product Details */}
          <Col xs={24} lg={14}>
            <Card className="mb-6">
              <div className="mb-4">
                <Row justify="space-between" align="middle" className="mb-2">
                  <Col>
                    <Title level={3} className="mb-0">
                      {productDetail.productName}
                    </Title>
                  </Col>
                  <Col>
                    <Title level={4} className="mb-0" style={{ color: '#1e40af', margin: 0 }}>
                      ฿ {productDetail.price.toLocaleString()}.00 {productDetail.unit}
                    </Title>
                  </Col>
                </Row>
                <Space className="mb-4">
                  <Text strong>รหัสสินค้า:</Text>
                  <Text>{productDetail.productCode}</Text>
                  <Text strong>TISTR Number:</Text>
                  <Text>{productDetail.tistrNumber}</Text>
                  <Tag color="blue">{productDetail.grade}</Tag>
                </Space>
              </div>

              <div className="">
              
              </div>

              <div className="">
                <Title level={5} className="mb-2">{t('shopping.description')}</Title>
                <Text>{productDetail.description}</Text>
              </div>
              
              <div className="flex items-center gap-4 my-6 p-4 bg-gray-50 rounded-lg">
                <Text strong style={{ fontSize: '16px' }}>จำนวน:</Text>
                <QuantitySelector
                  value={mainProductQuantity}
                  onChange={setMainProductQuantity}
                  size="middle"
                  min={0}
                  max={999}
                  width={140}
                />
              </div>
              {/* Related Products */}
              <div>
                <Title level={5} className="mb-4">{t('shopping.additionalItems')}</Title>
                
                {/* หัวตาราง */}
                <Row className="bg-gray-100 p-3 font-semibold border rounded-t-lg">
                  <Col span={10}>
                    <Text strong>รายการ</Text>
                  </Col>
                  <Col span={6} className="text-center">
                    <Text strong>จำนวน</Text>
                  </Col>
                  <Col span={4} className="text-center">
                    <Text strong>ราคาต่อหน่วย</Text>
                  </Col>
                  <Col span={4} className="text-center">
                    <Text strong>ราคารวม</Text>
                  </Col>
                </Row>
                
                {/* รายการสินค้า */}
                <div className="border-x border-b rounded-b-lg">
                  {relatedProducts.map((product, index) => {
                    const quantity = quantities[product.name] || 0;
                    const totalPrice = quantity * product.unitPrice;
                    
                    return (
                      <Row 
                        key={index} 
                        className={`items-center p-3 hover:bg-gray-50 ${index < relatedProducts.length - 1 ? 'border-b' : ''}`}
                      >
                        <Col span={10}>
                          <Text>{product.name}</Text>
                        </Col>
                        <Col span={6} className="flex justify-center">
                          <QuantitySelector
                            value={quantity}
                            onChange={(value) => handleQuantityChange(product.name, value)}
                            size="small"
                            min={0}
                            max={999}
                            width={100}
                          />
                        </Col>
                        <Col span={4} className="text-center">
                          <Text>฿ {product.unitPrice.toLocaleString()}.00</Text>
                        </Col>
                        <Col span={4} className="text-center">
                          <Text strong style={{ color: totalPrice > 0 ? '#1e40af' : 'inherit' }}>
                            ฿ {totalPrice.toLocaleString()}.00
                          </Text>
                        </Col>
                      </Row>
                    );
                  })}
                </div>
              </div>
            </Card>
          </Col>

          {/* Order Summary */}
          <Col xs={24} lg={10}>
            <Card title={t('shopping.orderSummary')} className="sticky top-6">
              <div className="space-y-4">
                {/* แสดงสินค้าหลัก */}
                {mainProductQuantity > 0 && (
                  <Row justify="space-between">
                    <Col>
                      <Text strong>{productDetail.productName}</Text>
                      <br />
                      <Text type="secondary">x{mainProductQuantity}</Text>
                    </Col>
                    <Col>
                      <Text strong>฿ {(mainProductQuantity * productDetail.price).toLocaleString()}.00</Text>
                    </Col>
                  </Row>
                )}
                
                {/* แสดงสินค้าเพิ่มเติม */}
                {relatedProducts.map((product, index) => {
                  const quantity = quantities[product.name] || 0;
                  if (quantity === 0) return null;
                  
                  return (
                    <Row key={index} justify="space-between">
                      <Col>
                        <Text>{product.name}</Text>
                        <br />
                        <Text type="secondary">x{quantity}</Text>
                      </Col>
                      <Col>
                        <Text strong>฿ {(quantity * product.unitPrice).toLocaleString()}.00</Text>
                      </Col>
                    </Row>
                  );
                })}
                
                {(mainProductQuantity > 0 || Object.keys(quantities).some(key => quantities[key] > 0)) && (
                  <>
                    <Divider />
                    <Row justify="space-between" className="text-lg">
                      <Col>
                        <Text strong>{t('shopping.total')}</Text>
                      </Col>
                      <Col>
                        <Text strong className="text-blue-600">
                          ฿ {calculateTotal().toLocaleString()}.00
                        </Text>
                      </Col>
                    </Row>
                  </>
                )}
              </div>

              <div className="mt-6">
                <Button 
                  type="primary" 
                  size="large" 
                  block
                  icon={<ShoppingCartOutlined />}
                  onClick={handleAddToCart}
                  disabled={calculateTotal() === 0}
                >
                  {t('shopping.addToCart')}
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Shopping;
