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
    { name: 'อุปกรณ์ทดสอบ', quantity: 0, unitPrice: 200.00, totalPrice: 0 },
    { name: 'ในระบบเบส/เก็บข้อมูล', quantity: 0, unitPrice: 200.00, totalPrice: 0 },
    { name: 'เชื้อรา', quantity: 0, unitPrice: 200.00, totalPrice: 0 },
    { name: 'แยกแซลิเอนส์', quantity: 0, unitPrice: 200.00, totalPrice: 0 },
    { name: 'ค่าอื่น', quantity: 0, unitPrice: 200.00, totalPrice: 0 },
    { name: 'บริการข้อมูลผลิตภัณฑ์', quantity: 0, unitPrice: 200.00, totalPrice: 0 }
  ];

  const handleQuantityChange = (productName: string, value: number) => {
    setQuantities(prev => ({
      ...prev,
      [productName]: value
    }));
  };

  const calculateTotal = () => {
    let total = 0;
    relatedProducts.forEach(product => {
      const quantity = quantities[product.name] || 0;
      total += quantity * product.unitPrice;
    });
    return total;
  };

  const handleAddToCart = () => {
    const newCartItems: CartItem[] = [];
    
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

      <div className="max-w-7xl mx-auto p-6">
        <Row gutter={24}>
          {/* Product Details */}
          <Col xs={24} lg={14}>
            <Card className="mb-6">
              <div className="mb-4">
                <Title level={3} className="mb-2">
                  {productDetail.productName}
                </Title>
                <Space className="mb-4">
                  <Text strong>รหัสสินค้า:</Text>
                  <Text>{productDetail.productCode}</Text>
                  <Text strong>TISTR Number:</Text>
                  <Text>{productDetail.tistrNumber}</Text>
                  <Tag color="blue">{productDetail.grade}</Tag>
                </Space>
              </div>

              <div className="mb-6">
                <Title level={4} className="text-blue-600 mb-2">
                  ฿ {productDetail.price.toLocaleString()}.00 {productDetail.unit}
                </Title>
              </div>

              <div className="mb-6">
                <Title level={5} className="mb-2">{t('shopping.description')}</Title>
                <Text>{productDetail.description}</Text>
              </div>

              {/* Related Products */}
              <div>
                <Title level={5} className="mb-4">{t('shopping.additionalItems')}</Title>
                <div className="space-y-3">
                  {relatedProducts.map((product, index) => (
                    <Row key={index} className="items-center p-3 border rounded-lg hover:bg-gray-50">
                      <Col span={12}>
                        <Text>{product.name}</Text>
                      </Col>
                      <Col span={8} className="flex justify-center">
                        <QuantitySelector
                          value={quantities[product.name] || 0}
                          onChange={(value) => handleQuantityChange(product.name, value)}
                          size="small"
                          min={0}
                          max={999}
                        />
                      </Col>
                      <Col span={4} className="text-right">
                        <Text strong>฿ {product.unitPrice.toLocaleString()}.00</Text>
                      </Col>
                    </Row>
                  ))}
                </div>
              </div>
            </Card>
          </Col>

          {/* Order Summary */}
          <Col xs={24} lg={10}>
            <Card title={t('shopping.orderSummary')} className="sticky top-6">
              <div className="space-y-4">
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
                
                {Object.keys(quantities).some(key => quantities[key] > 0) && (
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
