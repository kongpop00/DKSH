import React, { useState } from 'react';
import { Table, Tabs, Select, Tag, Input, Pagination } from 'antd';
import { useTranslation } from 'react-i18next';

const { TabPane } = Tabs;
const { Option } = Select;
const { Search } = Input;

interface Product {
  key: string;
  productCode: string;
  productName: string;
  description: string;
  tistrNumber: string;
  grade: string;
  price: string;
  status: string;
}

interface Variety {
  id: string;
  name: string;
  color: string;
}

interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
}

const Products: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('varieties');
  const [selectedVarieties, setSelectedVarieties] = useState<string[]>(['1', '2', '3', '4']); // Pre-select all varieties like in the image
  const [searchText, setSearchText] = useState('');

  // Handle search
  const onSearch = (value: string) => {
    setSearchText(value);
  };

  // Mock data สำหรับสายพันธุ์
  const varieties: Variety[] = [
    { id: '1', name: 'แบคทีเรีย', color: 'blue' },
    { id: '2', name: 'ยีสต์', color: 'green' },
    { id: '3', name: 'เชื้อรา', color: 'orange' },
    { id: '4', name: 'อื่นๆ', color: 'pink' },
  ];

  // Mock data สำหรับสินค้า
  const products: Product[] = [
    {
      key: '1',
      productCode: '146552',
      productName: 'แมกโซ่ย',
      description: 'Tryptic Soy Agar - Ready-to-use Contact Plates',
      tistrNumber: '004',
      grade: 'R1',
      price: '฿ 100.00',
      status: 'available'
    },
    {
      key: '2',
      productCode: '146552',
      productName: 'คิมิ',
      description: 'Tryptic Soy Agar - Ready-to-use Contact Plates',
      tistrNumber: '002',
      grade: 'R2',
      price: '฿ 100.00',
      status: 'available'
    },
    {
      key: '3',
      productCode: '146552',
      productName: 'อื่น',
      description: 'Tryptic Soy Agar - Ready-to-use Contact Plates',
      tistrNumber: '003',
      grade: 'R1',
      price: '฿ 100.00',
      status: 'ติดต่อสำนักงาน'
    },
    {
      key: '4',
      productCode: '146552',
      productName: 'แมกโซ่ย',
      description: 'Tryptic Soy Agar - Ready-to-use Contact Plates',
      tistrNumber: '005',
      grade: 'R2',
      price: '฿ 100.00',
      status: 'available'
    },
    {
      key: '5',
      productCode: '146552',
      productName: 'คิมิ',
      description: 'Tryptic Soy Agar - Ready-to-use Contact Plates',
      tistrNumber: '001',
      grade: 'R2',
      price: '฿ 100.00',
      status: 'available'
    },
  ];

  // Mock data สำหรับบริการ
  const services: Service[] = [
    {
      id: '1',
      name: 'บริการติดตั้ง',
      description: 'บริการติดตั้งอุปกรณ์ในห้องปฏิบัติการ',
      price: '฿ 5,000.00'
    },
    {
      id: '2',
      name: 'บริการบำรุงรักษา',
      description: 'บริการบำรุงรักษาอุปกรณ์เป็นประจำ',
      price: '฿ 3,000.00'
    },
    {
      id: '3',
      name: 'บริการอบรม',
      description: 'บริการอบรมการใช้งานอุปกรณ์',
      price: '฿ 2,500.00'
    },
    {
      id: '4',
      name: 'บริการซ่อมแซม',
      description: 'บริการซ่อมแซมอุปกรณ์ที่เสียหาย',
      price: 'ติดต่อสำนักงาน'
    },
  ];

  // Filter products based on selected varieties
  const filteredProducts = products.filter(product => {
    if (selectedVarieties.length === 0) return true;
    return selectedVarieties.some(varietyId => {
      const variety = varieties.find(v => v.id === varietyId);
      return variety && product.productName.includes(variety.name);
    });
  });

  // Table columns for products
  const productColumns = [
    {
      title: t('products.columns.productCode'),
      dataIndex: 'productCode',
      key: 'productCode',
      width: 100,
    },
    {
      title: t('products.columns.variety'),
      dataIndex: 'productName',
      key: 'productName',
      width: 120,
    },
    {
      title: t('products.columns.productName'),
      dataIndex: 'description',
      key: 'description',
      width: 300,
    },
    {
      title: t('products.columns.tistrNumber'),
      dataIndex: 'tistrNumber',
      key: 'tistrNumber',
      width: 120,
    },
    {
      title: t('products.columns.microbialGroup'),
      dataIndex: 'grade',
      key: 'grade',
      width: 120,
    },
    {
      title: t('products.columns.price'),
      dataIndex: 'price',
      key: 'price',
      width: 100,
      render: (price: string, record: Product) => (
        <span className={record.status === 'ติดต่อสำนักงาน' ? 'text-blue-600' : 'text-gray-900'}>
          {record.status === 'ติดต่อสำนักงาน' ? t('products.status.contactOffice') : price}
        </span>
      ),
    },
  ];

  // Table columns for services
  const serviceColumns = [
    {
      title: t('products.columns.serviceCode'),
      dataIndex: 'id',
      key: 'id',
      width: 150,
    },
    {
      title: t('products.columns.serviceName'),
      dataIndex: 'name',
      key: 'name',
      width: 300,
    },
    {
      title: t('products.columns.price'),
      dataIndex: 'price',
      key: 'price',
      width: 150,
      render: (price: string) => (
        <span className={price === 'ติดต่อสำนักงาน' ? 'text-blue-600' : 'text-gray-900'}>
          {price === 'ติดต่อสำนักงาน' ? t('products.status.contactOffice') : price}
        </span>
      ),
    },
  ];

  return (
    <div className="bg-white p-6  shadow-md">
      <div className="mb-6">
         <style>
          {`
            .custom-tabs .ant-tabs-nav {
              margin-bottom: 0 !important;
              border-radius: 8px 8px 0 0 !important;
              padding: 4px !important;
            }
            .custom-tabs .ant-tabs-nav-wrap {
              overflow: hidden;
            }
            .custom-tabs .ant-tabs-tab {
              background-color: #b8d9f9ff !important;
              border: none !important;
              margin: 0 2px !important;
              padding: 8px 24px !important;
              color: #666 !important;
              font-weight: 400 !important;
              border-radius: 20px 20px 0px 0px !important;
              transition: all 0.3s ease !important;
            }
            .custom-tabs .ant-tabs-tab .ant-tabs-tab-btn {
              color: #666 !important;
            }
            .custom-tabs .ant-tabs-tab:hover {
              background-color: #98c6f3ff !important;
              color: #333 !important;
            }
            .custom-tabs .ant-tabs-tab:hover .ant-tabs-tab-btn {
              color: #333 !important;
            }
            .custom-tabs .ant-tabs-tab-active {
              background-color: #1b4db1 !important;
              font-weight: 500 !important;
              color: white !important;
            }
            .custom-tabs .ant-tabs-tab-active .ant-tabs-tab-btn {
              color: white !important;
              font-weight: 300 !important;
            }
            .custom-tabs .ant-tabs-tab-active:hover {
              background-color: #1890ff !important;
              color: white !important;
            }
            .custom-tabs .ant-tabs-tab-active:hover .ant-tabs-tab-btn {
              color: white !important;
            }
            .custom-tabs .ant-tabs-ink-bar {
              display: none !important;
            }
            .custom-tabs .ant-tabs-content-holder {
              border: none !important;
              border-radius: 0 !important;
              background: transparent;
            }
            .custom-tabs .ant-tabs-tabpane {
              padding: 16px;
            }
          `}
        </style>
        <Tabs 
          activeKey={activeTab} 
          onChange={setActiveTab} 
          size="large" 
          className="custom-tabs"
        >
          <TabPane tab={t('products.tabs.varieties')} key="varieties">
            <div className="space-y-4">
              {/* Variety Selection and Search Bar in one row */}
              <div className="flex justify-between items-end gap-4 mb-4">
                {/* Variety Selection Dropdown */}
                <div className="flex-1 max-w-sm">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('products.varieties.title')}
                  </label>
                  <Select
                    mode="multiple"
                    placeholder={t('products.varieties.placeholder')}
                    value={selectedVarieties}
                    onChange={setSelectedVarieties}
                    style={{ width: '100%' }}
                    size="large"
                    className="variety-selector"
                    tagRender={(props) => {
                      const { label, value, closable, onClose } = props;
                      const variety = varieties.find(v => v.id === value);
                      return (
                        <Tag
                          color={variety?.color}
                          closable={closable}
                          onClose={onClose}
                          style={{
                            marginRight: 3,
                            fontSize: '12px',
                            padding: '2px 8px',
                            borderRadius: '12px'
                          }}
                        >
                          {label}
                        </Tag>
                      );
                    }}
                  >
                    {varieties.map(variety => (
                      <Option key={variety.id} value={variety.id}>
                        {variety.name}
                      </Option>
                    ))}
                  </Select>
                </div>

                {/* Search */}
                <div className="flex items-center gap-4">
                  <div className="w-80">
                    <Search 
                      placeholder={t('products.varieties.searchPlaceholder')} 
                      onSearch={onSearch}
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                      style={{ width: '100%' }}
                      size="large"
                    />
                  </div>
                
                </div>
                
              </div>
              <div className="flex justify-end mb-4">
                  <Select
                    placeholder={t('products.varieties.sortPlaceholder')}
                    style={{ width: 200 }}
                    size="small"
                  >
                    <Option value="newest">{t('products.sort.newest')}</Option>
                    <Option value="oldest">{t('products.sort.oldest')}</Option>
                    <Option value="price-asc">{t('products.sort.priceAsc')}</Option>
                    <Option value="price-desc">{t('products.sort.priceDesc')}</Option>
                    <Option value="name-asc">{t('products.sort.nameAsc')}</Option>
                    <Option value="name-desc">{t('products.sort.nameDesc')}</Option>
                  </Select>
              </div>

              {/* Products Table */}
              <div className="overflow-x-auto">
                <Table
                  columns={productColumns}
                  dataSource={filteredProducts}
                  pagination={false}
                  scroll={{ x: 800 }}
                  size="middle"
                  className="border border-gray-200 rounded-lg"
                />
                <div className="mt-4 flex justify-end">
                  <Pagination
                    total={85}
                    showTotal={(total) => t('products.pagination.total', { total })}
                    defaultPageSize={10}
                    defaultCurrent={1}
                    showSizeChanger={true}
                    pageSizeOptions={['10', '20', '50', '100']}
                    showQuickJumper={false}
                    showLessItems={false}
                  />
                </div>
              </div>
            </div>
          </TabPane>

          <TabPane tab={t('products.tabs.services')} key="services">
            <div className="space-y-4">
              <div className="text-gray-600 mb-4">
                {t('products.services.description')}
              </div>
              
              <div className="flex justify-end mb-4">
                <Select
                  placeholder={t('products.services.sortPlaceholder')}
                  style={{ width: 200 }}
                  size="small"
                >
                  <Option value="newest">{t('products.sort.newest')}</Option>
                  <Option value="oldest">{t('products.sort.oldest')}</Option>
                  <Option value="price-asc">{t('products.sort.priceAsc')}</Option>
                  <Option value="price-desc">{t('products.sort.priceDesc')}</Option>
                  <Option value="name-asc">{t('products.sort.nameAsc')}</Option>
                  <Option value="name-desc">{t('products.sort.nameDesc')}</Option>
                </Select>
              </div>
              
              {/* Services Table */}
              <div className="overflow-x-auto">
                <Table
                  columns={serviceColumns}
                  dataSource={services}
                  pagination={false}
                  scroll={{ x: 600 }}
                  size="middle"
                  className="border border-gray-200 rounded-lg"
                />
                <div className="mt-4 flex justify-end">
                  <Pagination
                    total={85}
                    showTotal={(total) => t('products.pagination.total', { total })}
                    defaultPageSize={10}
                    defaultCurrent={1}
                    showSizeChanger={true}
                    pageSizeOptions={['10', '20', '50', '100']}
                    showQuickJumper={false}
                    showLessItems={false}
                  />
                </div>
              </div>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Products;
