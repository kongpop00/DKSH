import React, { useState } from 'react';
import { Table, Button, Space, Input, Modal, Tag, Card, Statistic, Select, DatePicker, Descriptions } from 'antd';
import { Search, Eye, Package, Clock, Truck, DollarSign } from 'lucide-react';
import AdminLayout from '../../components/AdminLayout';
import dayjs from 'dayjs';

const { Search: AntSearch } = Input;
const { Option } = Select;
const { RangePicker } = DatePicker;

interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  image?: string;
}

interface Order {
  id: string;
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  items: OrderItem[];
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  shippingAddress: string;
  createdAt: string;
  updatedAt: string;
}

const OrderManagement: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: '1',
      orderNumber: 'ORD-2024-001',
      customerName: 'สมชาย ใจดี',
      customerEmail: 'somchai@example.com',
      items: [
        { id: '1', name: 'สินค้า A', quantity: 2, price: 500 },
        { id: '2', name: 'สินค้า B', quantity: 1, price: 300 }
      ],
      totalAmount: 1300,
      status: 'confirmed',
      paymentStatus: 'paid',
      shippingAddress: '123 ถนนสุขุมวิท กรุงเทพฯ 10110',
      createdAt: '2024-01-15T10:30:00Z',
      updatedAt: '2024-01-15T11:00:00Z',
    },
    {
      id: '2',
      orderNumber: 'ORD-2024-002',
      customerName: 'สมหญิง รักดี',
      customerEmail: 'somying@example.com',
      items: [
        { id: '3', name: 'สินค้า C', quantity: 3, price: 200 }
      ],
      totalAmount: 600,
      status: 'processing',
      paymentStatus: 'paid',
      shippingAddress: '456 ถนนพหลโยธิน กรุงเทพฯ 10400',
      createdAt: '2024-01-14T15:45:00Z',
      updatedAt: '2024-01-14T16:00:00Z',
    },
    {
      id: '3',
      orderNumber: 'ORD-2024-003',
      customerName: 'วิชัย เก่งมาก',
      customerEmail: 'wichai@example.com',
      items: [
        { id: '4', name: 'สินค้า D', quantity: 1, price: 1500 }
      ],
      totalAmount: 1500,
      status: 'pending',
      paymentStatus: 'pending',
      shippingAddress: '789 ถนนรัชดาภิเษก กรุงเทพฯ 10310',
      createdAt: '2024-01-13T08:20:00Z',
      updatedAt: '2024-01-13T08:20:00Z',
    },
  ]);

  const [searchText, setSearchText] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [paymentFilter, setPaymentFilter] = useState<string>('all');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isDetailModalVisible, setIsDetailModalVisible] = useState(false);

  const handleViewOrder = (order: Order) => {
    setSelectedOrder(order);
    setIsDetailModalVisible(true);
  };

  const handleStatusChange = (orderId: string, newStatus: string) => {
    setOrders(orders.map(order => 
      order.id === orderId 
        ? { ...order, status: newStatus as Order['status'], updatedAt: new Date().toISOString() }
        : order
    ));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'orange';
      case 'confirmed': return 'blue';
      case 'processing': return 'cyan';
      case 'shipped': return 'purple';
      case 'delivered': return 'green';
      case 'cancelled': return 'red';
      default: return 'default';
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'green';
      case 'pending': return 'orange';
      case 'failed': return 'red';
      case 'refunded': return 'purple';
      default: return 'default';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return 'รอดำเนินการ';
      case 'confirmed': return 'ยืนยันแล้ว';
      case 'processing': return 'กำลังเตรียม';
      case 'shipped': return 'จัดส่งแล้ว';
      case 'delivered': return 'ส่งสำเร็จ';
      case 'cancelled': return 'ยกเลิก';
      default: return status;
    }
  };

  const getPaymentStatusText = (status: string) => {
    switch (status) {
      case 'paid': return 'ชำระแล้ว';
      case 'pending': return 'รอชำระ';
      case 'failed': return 'ชำระไม่สำเร็จ';
      case 'refunded': return 'คืนเงินแล้ว';
      default: return status;
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.orderNumber.toLowerCase().includes(searchText.toLowerCase()) ||
      order.customerName.toLowerCase().includes(searchText.toLowerCase()) ||
      order.customerEmail.toLowerCase().includes(searchText.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    const matchesPayment = paymentFilter === 'all' || order.paymentStatus === paymentFilter;
    
    return matchesSearch && matchesStatus && matchesPayment;
  });

  const columns = [
    {
      title: 'หมายเลขคำสั่งซื้อ',
      dataIndex: 'orderNumber',
      key: 'orderNumber',
      render: (text: string) => (
        <span className="font-mono font-medium text-blue-600">{text}</span>
      ),
    },
    {
      title: 'ลูกค้า',
      dataIndex: 'customerName',
      key: 'customerName',
      render: (text: string, record: Order) => (
        <div>
          <div className="font-medium">{text}</div>
          <div className="text-sm text-gray-500">{record.customerEmail}</div>
        </div>
      ),
    },
    {
      title: 'จำนวนสินค้า',
      dataIndex: 'items',
      key: 'itemCount',
      render: (items: OrderItem[]) => (
        <span>{items.reduce((sum, item) => sum + item.quantity, 0)} ชิ้น</span>
      ),
    },
    {
      title: 'ยอดรวม',
      dataIndex: 'totalAmount',
      key: 'totalAmount',
      render: (amount: number) => (
        <span className="font-medium">฿{amount.toLocaleString()}</span>
      ),
    },
    {
      title: 'สถานะคำสั่งซื้อ',
      dataIndex: 'status',
      key: 'status',
      render: (status: string, record: Order) => (
        <Select
          value={status}
          style={{ width: 120 }}
          onChange={(value) => handleStatusChange(record.id, value)}
        >
          <Option value="pending">รอดำเนินการ</Option>
          <Option value="confirmed">ยืนยันแล้ว</Option>
          <Option value="processing">กำลังเตรียม</Option>
          <Option value="shipped">จัดส่งแล้ว</Option>
          <Option value="delivered">ส่งสำเร็จ</Option>
          <Option value="cancelled">ยกเลิก</Option>
        </Select>
      ),
    },
    {
      title: 'สถานะการชำระ',
      dataIndex: 'paymentStatus',
      key: 'paymentStatus',
      render: (status: string) => (
        <Tag color={getPaymentStatusColor(status)}>
          {getPaymentStatusText(status)}
        </Tag>
      ),
    },
    {
      title: 'วันที่สั่งซื้อ',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date: string) => (
        <span className="text-sm">
          {dayjs(date).format('DD/MM/YYYY HH:mm')}
        </span>
      ),
    },
    {
      title: 'การดำเนินการ',
      key: 'actions',
      render: (_: unknown, record: Order) => (
        <Space size="small">
          <Button 
            type="text" 
            icon={<Eye size={16} />} 
            size="small"
            onClick={() => handleViewOrder(record)}
            title="ดูรายละเอียด"
          />
        </Space>
      ),
    },
  ];

  const totalOrders = orders.length;
  const pendingOrders = orders.filter(o => o.status === 'pending').length;
  const processingOrders = orders.filter(o => o.status === 'processing').length;
  const totalRevenue = orders
    .filter(o => o.paymentStatus === 'paid')
    .reduce((sum, order) => sum + order.totalAmount, 0);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">จัดการคำสั่งซื้อ</h1>
        </div>

        {/* สถิติ */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <Statistic
              title="คำสั่งซื้อทั้งหมด"
              value={totalOrders}
              prefix={<Package className="text-blue-500" size={20} />}
            />
          </Card>
          <Card>
            <Statistic
              title="รอดำเนินการ"
              value={pendingOrders}
              prefix={<Clock className="text-orange-500" size={20} />}
            />
          </Card>
          <Card>
            <Statistic
              title="กำลังเตรียม"
              value={processingOrders}
              prefix={<Truck className="text-purple-500" size={20} />}
            />
          </Card>
          <Card>
            <Statistic
              title="ยอดขายรวม"
              value={totalRevenue}
              prefix={<DollarSign className="text-green-500" size={20} />}
              formatter={(value) => `฿${Number(value).toLocaleString()}`}
            />
          </Card>
        </div>

        {/* ตัวกรอง */}
        <Card>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <AntSearch
              placeholder="ค้นหาคำสั่งซื้อ..."
              allowClear
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              prefix={<Search size={16} />}
            />
            
            <Select
              placeholder="สถานะคำสั่งซื้อ"
              value={statusFilter}
              onChange={setStatusFilter}
              style={{ width: '100%' }}
            >
              <Option value="all">ทุกสถานะ</Option>
              <Option value="pending">รอดำเนินการ</Option>
              <Option value="confirmed">ยืนยันแล้ว</Option>
              <Option value="processing">กำลังเตรียม</Option>
              <Option value="shipped">จัดส่งแล้ว</Option>
              <Option value="delivered">ส่งสำเร็จ</Option>
              <Option value="cancelled">ยกเลิก</Option>
            </Select>
            
            <Select
              placeholder="สถานะการชำระ"
              value={paymentFilter}
              onChange={setPaymentFilter}
              style={{ width: '100%' }}
            >
              <Option value="all">ทุกสถานะ</Option>
              <Option value="pending">รอชำระ</Option>
              <Option value="paid">ชำระแล้ว</Option>
              <Option value="failed">ชำระไม่สำเร็จ</Option>
              <Option value="refunded">คืนเงินแล้ว</Option>
            </Select>
            
            <RangePicker
              placeholder={['วันที่เริ่ม', 'วันที่สิ้นสุด']}
              style={{ width: '100%' }}
            />
          </div>
        </Card>

        {/* ตาราง */}
        <Card>
          <Table
            columns={columns}
            dataSource={filteredOrders}
            rowKey="id"
            pagination={{
              pageSize: 10,
              showSizeChanger: true,
              showQuickJumper: true,
              showTotal: (total, range) => 
                `${range[0]}-${range[1]} จาก ${total} รายการ`,
            }}
          />
        </Card>

        {/* Modal รายละเอียดคำสั่งซื้อ */}
        <Modal
          title={`รายละเอียดคำสั่งซื้อ ${selectedOrder?.orderNumber}`}
          open={isDetailModalVisible}
          onCancel={() => setIsDetailModalVisible(false)}
          footer={null}
          width={800}
        >
          {selectedOrder && (
            <div className="space-y-4">
              <Descriptions bordered column={2}>
                <Descriptions.Item label="หมายเลขคำสั่งซื้อ">
                  {selectedOrder.orderNumber}
                </Descriptions.Item>
                <Descriptions.Item label="วันที่สั่งซื้อ">
                  {dayjs(selectedOrder.createdAt).format('DD/MM/YYYY HH:mm')}
                </Descriptions.Item>
                <Descriptions.Item label="ชื่อลูกค้า">
                  {selectedOrder.customerName}
                </Descriptions.Item>
                <Descriptions.Item label="อีเมล">
                  {selectedOrder.customerEmail}
                </Descriptions.Item>
                <Descriptions.Item label="สถานะคำสั่งซื้อ">
                  <Tag color={getStatusColor(selectedOrder.status)}>
                    {getStatusText(selectedOrder.status)}
                  </Tag>
                </Descriptions.Item>
                <Descriptions.Item label="สถานะการชำระ">
                  <Tag color={getPaymentStatusColor(selectedOrder.paymentStatus)}>
                    {getPaymentStatusText(selectedOrder.paymentStatus)}
                  </Tag>
                </Descriptions.Item>
                <Descriptions.Item label="ที่อยู่จัดส่ง" span={2}>
                  {selectedOrder.shippingAddress}
                </Descriptions.Item>
              </Descriptions>
              
              <div>
                <h3 className="text-lg font-medium mb-3">รายการสินค้า</h3>
                <Table
                  dataSource={selectedOrder.items}
                  rowKey="id"
                  pagination={false}
                  columns={[
                    {
                      title: 'สินค้า',
                      dataIndex: 'name',
                      key: 'name',
                    },
                    {
                      title: 'จำนวน',
                      dataIndex: 'quantity',
                      key: 'quantity',
                    },
                    {
                      title: 'ราคาต่อหน่วย',
                      dataIndex: 'price',
                      key: 'price',
                      render: (price: number) => `฿${price.toLocaleString()}`,
                    },
                    {
                      title: 'รวม',
                      key: 'total',
                      render: (_: unknown, record: OrderItem) => 
                        `฿${(record.price * record.quantity).toLocaleString()}`,
                    },
                  ]}
                />
                
                <div className="flex justify-end mt-4">
                  <div className="text-xl font-bold">
                    ยอดรวมทั้งสิ้น: ฿{selectedOrder.totalAmount.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </AdminLayout>
  );
};

export default OrderManagement;