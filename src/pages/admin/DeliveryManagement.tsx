import React, { useState } from 'react';
import { Table, Button, Space, Input, Modal, Tag, Card, Statistic, Select, Descriptions } from 'antd';
import { Search, Eye, Truck, Package, MapPin, Clock, CheckCircle } from 'lucide-react';
import AdminLayout from '../../components/AdminLayout';
import dayjs from 'dayjs';

interface Delivery {
  id: string;
  orderId: string;
  customerName: string;
  customerAddress: string;
  customerPhone: string;
  status: 'pending' | 'picked_up' | 'in_transit' | 'delivered' | 'failed';
  trackingNumber: string;
  courier: string;
  estimatedDelivery: string;
  actualDelivery?: string;
  createdAt: string;
  notes?: string;
}

const DeliveryManagement: React.FC = () => {
  const [deliveries, setDeliveries] = useState<Delivery[]>([
    {
      id: '1',
      orderId: 'ORD-001',
      customerName: 'สมชาย ใจดี',
      customerAddress: '123 ถนนสุขุมวิท แขวงคลองตัน เขตคลองตัน กรุงเทพฯ 10110',
      customerPhone: '081-234-5678',
      status: 'delivered',
      trackingNumber: 'TH123456789',
      courier: 'Kerry Express',
      estimatedDelivery: '2024-01-16T14:00:00Z',
      actualDelivery: '2024-01-16T13:45:00Z',
      createdAt: '2024-01-15T10:30:00Z',
      notes: 'ส่งถึงแล้ว ลูกค้าเซ็นรับเอง'
    },
    {
      id: '2',
      orderId: 'ORD-002',
      customerName: 'สมหญิง รักดี',
      customerAddress: '456 ถนนพหลโยธิน แขวงลาดยาว เขตจตุจักร กรุงเทพฯ 10900',
      customerPhone: '082-345-6789',
      status: 'in_transit',
      trackingNumber: 'TH987654321',
      courier: 'Thailand Post',
      estimatedDelivery: '2024-01-17T16:00:00Z',
      createdAt: '2024-01-15T11:00:00Z',
      notes: 'กำลังขนส่ง คาดว่าจะถึงวันพรุ่งนี้'
    },
    {
      id: '3',
      orderId: 'ORD-003',
      customerName: 'วิชัย สุขใจ',
      customerAddress: '789 ถนนรัชดาภิเษก แขวงห้วยขวาง เขตห้วยขวาง กรุงเทพฯ 10310',
      customerPhone: '083-456-7890',
      status: 'picked_up',
      trackingNumber: 'TH456789123',
      courier: 'Flash Express',
      estimatedDelivery: '2024-01-18T10:00:00Z',
      createdAt: '2024-01-15T12:15:00Z',
      notes: 'เก็บจากคลังแล้ว'
    },
    {
      id: '4',
      orderId: 'ORD-004',
      customerName: 'มาลี สวยงาม',
      customerAddress: '321 ถนนเพชรบุรี แขวงมักกะสัน เขตราชเทวี กรุงเทพฯ 10400',
      customerPhone: '084-567-8901',
      status: 'failed',
      trackingNumber: 'TH789123456',
      courier: 'J&T Express',
      estimatedDelivery: '2024-01-16T15:00:00Z',
      createdAt: '2024-01-14T14:20:00Z',
      notes: 'ไม่พบผู้รับ จะนัดส่งใหม่'
    },
    {
      id: '5',
      orderId: 'ORD-005',
      customerName: 'ประยุทธ์ มั่นคง',
      customerAddress: '654 ถนนลาดพร้าว แขวงจอมพล เขตจตุจักร กรุงเทพฯ 10900',
      customerPhone: '085-678-9012',
      status: 'pending',
      trackingNumber: 'TH321654987',
      courier: 'DHL',
      estimatedDelivery: '2024-01-19T11:00:00Z',
      createdAt: '2024-01-15T15:30:00Z',
      notes: 'รอจัดส่ง'
    }
  ]);

  const [searchText, setSearchText] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [courierFilter, setCourierFilter] = useState<string>('all');
  const [selectedDelivery, setSelectedDelivery] = useState<Delivery | null>(null);
  const [detailModalVisible, setDetailModalVisible] = useState(false);

  const handleStatusChange = (deliveryId: string, newStatus: string) => {
    setDeliveries(deliveries.map(delivery => 
      delivery.id === deliveryId 
        ? { 
            ...delivery, 
            status: newStatus as Delivery['status'],
            actualDelivery: newStatus === 'delivered' ? new Date().toISOString() : delivery.actualDelivery
          }
        : delivery
    ));
  };

  const handleViewDetails = (delivery: Delivery) => {
    setSelectedDelivery(delivery);
    setDetailModalVisible(true);
  };

  const getStatusColor = (status: Delivery['status']) => {
    switch (status) {
      case 'delivered': return 'green';
      case 'in_transit': return 'blue';
      case 'picked_up': return 'orange';
      case 'pending': return 'default';
      case 'failed': return 'red';
      default: return 'default';
    }
  };

  const getStatusIcon = (status: Delivery['status']) => {
    switch (status) {
      case 'delivered': return <CheckCircle size={16} />;
      case 'in_transit': return <Truck size={16} />;
      case 'picked_up': return <Package size={16} />;
      case 'pending': return <Clock size={16} />;
      case 'failed': return <Clock size={16} />;
      default: return <Clock size={16} />;
    }
  };

  const filteredDeliveries = deliveries.filter(delivery => {
    const matchesSearch = delivery.customerName.toLowerCase().includes(searchText.toLowerCase()) ||
                         delivery.orderId.toLowerCase().includes(searchText.toLowerCase()) ||
                         delivery.trackingNumber.toLowerCase().includes(searchText.toLowerCase());
    const matchesStatus = statusFilter === 'all' || delivery.status === statusFilter;
    const matchesCourier = courierFilter === 'all' || delivery.courier === courierFilter;
    return matchesSearch && matchesStatus && matchesCourier;
  });

  const columns = [
    {
      title: 'หมายเลขติดตาม',
      dataIndex: 'trackingNumber',
      key: 'trackingNumber',
      render: (text: string) => <span className="font-mono">{text}</span>
    },
    {
      title: 'รหัสคำสั่งซื้อ',
      dataIndex: 'orderId',
      key: 'orderId',
      render: (text: string) => <span className="font-mono">{text}</span>
    },
    {
      title: 'ลูกค้า',
      dataIndex: 'customerName',
      key: 'customerName'
    },
    {
      title: 'บริษัทขนส่ง',
      dataIndex: 'courier',
      key: 'courier'
    },
    {
      title: 'สถานะ',
      dataIndex: 'status',
      key: 'status',
      render: (status: Delivery['status'], record: Delivery) => (
        <Select
          value={status}
          onChange={(value) => handleStatusChange(record.id, value)}
          style={{ width: 140 }}
        >
          <Select.Option value="pending">
            <div className="flex items-center gap-2">
              {getStatusIcon('pending')}
              <Tag color={getStatusColor('pending')}>รอจัดส่ง</Tag>
            </div>
          </Select.Option>
          <Select.Option value="picked_up">
            <div className="flex items-center gap-2">
              {getStatusIcon('picked_up')}
              <Tag color={getStatusColor('picked_up')}>เก็บแล้ว</Tag>
            </div>
          </Select.Option>
          <Select.Option value="in_transit">
            <div className="flex items-center gap-2">
              {getStatusIcon('in_transit')}
              <Tag color={getStatusColor('in_transit')}>กำลังส่ง</Tag>
            </div>
          </Select.Option>
          <Select.Option value="delivered">
            <div className="flex items-center gap-2">
              {getStatusIcon('delivered')}
              <Tag color={getStatusColor('delivered')}>ส่งแล้ว</Tag>
            </div>
          </Select.Option>
          <Select.Option value="failed">
            <div className="flex items-center gap-2">
              {getStatusIcon('failed')}
              <Tag color={getStatusColor('failed')}>ล้มเหลว</Tag>
            </div>
          </Select.Option>
        </Select>
      )
    },
    {
      title: 'กำหนดส่ง',
      dataIndex: 'estimatedDelivery',
      key: 'estimatedDelivery',
      render: (date: string) => dayjs(date).format('DD/MM/YYYY HH:mm')
    },
    {
      title: 'วันที่สร้าง',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date: string) => dayjs(date).format('DD/MM/YYYY HH:mm')
    },
    {
      title: 'การดำเนินการ',
      key: 'actions',
      render: (record: Delivery) => (
        <Space>
          <Button 
            type="primary" 
            icon={<Eye size={16} />} 
            onClick={() => handleViewDetails(record)}
          >
            ดูรายละเอียด
          </Button>
        </Space>
      )
    }
  ];

  // Statistics
  const totalDeliveries = deliveries.length;
  const pendingDeliveries = deliveries.filter(d => d.status === 'pending').length;
  const inTransitDeliveries = deliveries.filter(d => d.status === 'in_transit').length;
  const deliveredDeliveries = deliveries.filter(d => d.status === 'delivered').length;
  const failedDeliveries = deliveries.filter(d => d.status === 'failed').length;
  const deliveryRate = totalDeliveries > 0 ? ((deliveredDeliveries / totalDeliveries) * 100).toFixed(1) : '0';

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">จัดการการจัดส่ง</h1>
          <p className="text-gray-600">จัดการและติดตามการจัดส่งสินค้าทั้งหมด</p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-6">
          <Card>
            <Statistic
              title="การจัดส่งทั้งหมด"
              value={totalDeliveries}
              prefix={<Package className="text-blue-500" />}
            />
          </Card>
          <Card>
            <Statistic
              title="รอจัดส่ง"
              value={pendingDeliveries}
              prefix={<Clock className="text-gray-500" />}
            />
          </Card>
          <Card>
            <Statistic
              title="กำลังส่ง"
              value={inTransitDeliveries}
              prefix={<Truck className="text-blue-500" />}
            />
          </Card>
          <Card>
            <Statistic
              title="ส่งแล้ว"
              value={deliveredDeliveries}
              prefix={<CheckCircle className="text-green-500" />}
            />
          </Card>
          <Card>
            <Statistic
              title="ล้มเหลว"
              value={failedDeliveries}
              prefix={<Clock className="text-red-500" />}
            />
          </Card>
          <Card>
            <Statistic
              title="อัตราส่งสำเร็จ"
              value={deliveryRate}
              suffix="%"
              prefix={<CheckCircle className="text-green-500" />}
            />
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <div className="flex flex-wrap gap-4">
            <Input
              placeholder="ค้นหาด้วยชื่อลูกค้า, รหัสคำสั่งซื้อ, หรือหมายเลขติดตาม"
              prefix={<Search size={16} />}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              style={{ width: 350 }}
            />
            <Select
              placeholder="สถานะ"
              value={statusFilter}
              onChange={setStatusFilter}
              style={{ width: 150 }}
            >
              <Select.Option value="all">ทั้งหมด</Select.Option>
              <Select.Option value="pending">รอจัดส่ง</Select.Option>
              <Select.Option value="picked_up">เก็บแล้ว</Select.Option>
              <Select.Option value="in_transit">กำลังส่ง</Select.Option>
              <Select.Option value="delivered">ส่งแล้ว</Select.Option>
              <Select.Option value="failed">ล้มเหลว</Select.Option>
            </Select>
            <Select
              placeholder="บริษัทขนส่ง"
              value={courierFilter}
              onChange={setCourierFilter}
              style={{ width: 150 }}
            >
              <Select.Option value="all">ทั้งหมด</Select.Option>
              <Select.Option value="Kerry Express">Kerry Express</Select.Option>
              <Select.Option value="Thailand Post">Thailand Post</Select.Option>
              <Select.Option value="Flash Express">Flash Express</Select.Option>
              <Select.Option value="J&T Express">J&T Express</Select.Option>
              <Select.Option value="DHL">DHL</Select.Option>
            </Select>
          </div>
        </Card>

        {/* Deliveries Table */}
        <Card>
          <Table
            columns={columns}
            dataSource={filteredDeliveries}
            rowKey="id"
            pagination={{
              total: filteredDeliveries.length,
              pageSize: 10,
              showSizeChanger: true,
              showQuickJumper: true,
              showTotal: (total, range) => `${range[0]}-${range[1]} จาก ${total} รายการ`
            }}
          />
        </Card>

        {/* Delivery Detail Modal */}
        <Modal
          title="รายละเอียดการจัดส่ง"
          open={detailModalVisible}
          onCancel={() => setDetailModalVisible(false)}
          footer={[
            <Button key="close" onClick={() => setDetailModalVisible(false)}>
              ปิด
            </Button>
          ]}
          width={700}
        >
          {selectedDelivery && (
            <Descriptions column={2} bordered>
              <Descriptions.Item label="หมายเลขติดตาม" span={2}>
                <span className="font-mono text-lg">{selectedDelivery.trackingNumber}</span>
              </Descriptions.Item>
              <Descriptions.Item label="รหัสคำสั่งซื้อ">
                <span className="font-mono">{selectedDelivery.orderId}</span>
              </Descriptions.Item>
              <Descriptions.Item label="บริษัทขนส่ง">
                {selectedDelivery.courier}
              </Descriptions.Item>
              <Descriptions.Item label="ลูกค้า">
                {selectedDelivery.customerName}
              </Descriptions.Item>
              <Descriptions.Item label="เบอร์โทรศัพท์">
                {selectedDelivery.customerPhone}
              </Descriptions.Item>
              <Descriptions.Item label="ที่อยู่จัดส่ง" span={2}>
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="mt-1 text-gray-500" />
                  <span>{selectedDelivery.customerAddress}</span>
                </div>
              </Descriptions.Item>
              <Descriptions.Item label="สถานะ">
                <div className="flex items-center gap-2">
                  {getStatusIcon(selectedDelivery.status)}
                  <Tag color={getStatusColor(selectedDelivery.status)}>
                    {selectedDelivery.status === 'pending' && 'รอจัดส่ง'}
                    {selectedDelivery.status === 'picked_up' && 'เก็บแล้ว'}
                    {selectedDelivery.status === 'in_transit' && 'กำลังส่ง'}
                    {selectedDelivery.status === 'delivered' && 'ส่งแล้ว'}
                    {selectedDelivery.status === 'failed' && 'ล้มเหลว'}
                  </Tag>
                </div>
              </Descriptions.Item>
              <Descriptions.Item label="กำหนดส่ง">
                {dayjs(selectedDelivery.estimatedDelivery).format('DD/MM/YYYY HH:mm')}
              </Descriptions.Item>
              <Descriptions.Item label="วันที่สร้าง">
                {dayjs(selectedDelivery.createdAt).format('DD/MM/YYYY HH:mm:ss')}
              </Descriptions.Item>
              {selectedDelivery.actualDelivery && (
                <Descriptions.Item label="วันที่ส่งจริง">
                  {dayjs(selectedDelivery.actualDelivery).format('DD/MM/YYYY HH:mm:ss')}
                </Descriptions.Item>
              )}
              {selectedDelivery.notes && (
                <Descriptions.Item label="หมายเหตุ" span={2}>
                  {selectedDelivery.notes}
                </Descriptions.Item>
              )}
            </Descriptions>
          )}
        </Modal>
      </div>
    </AdminLayout>
  );
};

export default DeliveryManagement;