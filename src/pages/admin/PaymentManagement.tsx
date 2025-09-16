import React, { useState } from 'react';
import { Table, Button, Space, Input, Modal, Tag, Card, Statistic, Select, Descriptions } from 'antd';
import { Search, Eye, CreditCard, DollarSign, TrendingUp, AlertCircle } from 'lucide-react';
import AdminLayout from '../../components/AdminLayout';
import dayjs from 'dayjs';

interface Payment {
  id: string;
  orderId: string;
  customerName: string;
  amount: number;
  method: 'credit_card' | 'bank_transfer' | 'e_wallet' | 'cash';
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  transactionId: string;
  createdAt: string;
  completedAt?: string;
  refundedAt?: string;
  gateway: string;
  currency: string;
}

const PaymentManagement: React.FC = () => {
  const [payments, setPayments] = useState<Payment[]>([
    {
      id: '1',
      orderId: 'ORD-001',
      customerName: 'สมชาย ใจดี',
      amount: 1250.00,
      method: 'credit_card',
      status: 'completed',
      transactionId: 'TXN-001',
      createdAt: '2024-01-15T10:30:00Z',
      completedAt: '2024-01-15T10:31:00Z',
      gateway: 'Stripe',
      currency: 'THB'
    },
    {
      id: '2',
      orderId: 'ORD-002',
      customerName: 'สมหญิง รักดี',
      amount: 850.00,
      method: 'bank_transfer',
      status: 'pending',
      transactionId: 'TXN-002',
      createdAt: '2024-01-15T11:00:00Z',
      gateway: 'SCB Easy',
      currency: 'THB'
    },
    {
      id: '3',
      orderId: 'ORD-003',
      customerName: 'วิชัย สุขใจ',
      amount: 2100.00,
      method: 'e_wallet',
      status: 'failed',
      transactionId: 'TXN-003',
      createdAt: '2024-01-15T12:15:00Z',
      gateway: 'TrueMoney',
      currency: 'THB'
    },
    {
      id: '4',
      orderId: 'ORD-004',
      customerName: 'มาลี สวยงาม',
      amount: 750.00,
      method: 'credit_card',
      status: 'refunded',
      transactionId: 'TXN-004',
      createdAt: '2024-01-14T14:20:00Z',
      completedAt: '2024-01-14T14:21:00Z',
      refundedAt: '2024-01-15T09:00:00Z',
      gateway: 'Omise',
      currency: 'THB'
    }
  ]);

  const [searchText, setSearchText] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [methodFilter, setMethodFilter] = useState<string>('all');
  const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);
  const [detailModalVisible, setDetailModalVisible] = useState(false);

  const handleStatusChange = (paymentId: string, newStatus: string) => {
    setPayments(payments.map(payment => 
      payment.id === paymentId 
        ? { 
            ...payment, 
            status: newStatus as Payment['status'],
            completedAt: newStatus === 'completed' ? new Date().toISOString() : payment.completedAt,
            refundedAt: newStatus === 'refunded' ? new Date().toISOString() : payment.refundedAt
          }
        : payment
    ));
  };

  const handleViewDetails = (payment: Payment) => {
    setSelectedPayment(payment);
    setDetailModalVisible(true);
  };

  const getStatusColor = (status: Payment['status']) => {
    switch (status) {
      case 'completed': return 'green';
      case 'pending': return 'orange';
      case 'failed': return 'red';
      case 'refunded': return 'purple';
      default: return 'default';
    }
  };

  const getMethodIcon = (method: Payment['method']) => {
    switch (method) {
      case 'credit_card': return <CreditCard size={16} />;
      case 'bank_transfer': return <DollarSign size={16} />;
      case 'e_wallet': return <CreditCard size={16} />;
      case 'cash': return <DollarSign size={16} />;
      default: return <CreditCard size={16} />;
    }
  };

  const filteredPayments = payments.filter(payment => {
    const matchesSearch = payment.customerName.toLowerCase().includes(searchText.toLowerCase()) ||
                         payment.orderId.toLowerCase().includes(searchText.toLowerCase()) ||
                         payment.transactionId.toLowerCase().includes(searchText.toLowerCase());
    const matchesStatus = statusFilter === 'all' || payment.status === statusFilter;
    const matchesMethod = methodFilter === 'all' || payment.method === methodFilter;
    return matchesSearch && matchesStatus && matchesMethod;
  });

  const columns = [
    {
      title: 'รหัสการชำระเงิน',
      dataIndex: 'transactionId',
      key: 'transactionId',
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
      title: 'จำนวนเงิน',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount: number, record: Payment) => (
        <span className="font-semibold">
          {amount.toLocaleString()} {record.currency}
        </span>
      )
    },
    {
      title: 'วิธีการชำระเงิน',
      dataIndex: 'method',
      key: 'method',
      render: (method: Payment['method']) => (
        <div className="flex items-center gap-2">
          {getMethodIcon(method)}
          <span>
            {method === 'credit_card' && 'บัตรเครดิต'}
            {method === 'bank_transfer' && 'โอนเงิน'}
            {method === 'e_wallet' && 'กระเป๋าเงินอิเล็กทรอนิกส์'}
            {method === 'cash' && 'เงินสด'}
          </span>
        </div>
      )
    },
    {
      title: 'สถานะ',
      dataIndex: 'status',
      key: 'status',
      render: (status: Payment['status'], record: Payment) => (
        <Select
          value={status}
          onChange={(value) => handleStatusChange(record.id, value)}
          style={{ width: 120 }}
        >
          <Select.Option value="pending">
            <Tag color={getStatusColor('pending')}>รอดำเนินการ</Tag>
          </Select.Option>
          <Select.Option value="completed">
            <Tag color={getStatusColor('completed')}>สำเร็จ</Tag>
          </Select.Option>
          <Select.Option value="failed">
            <Tag color={getStatusColor('failed')}>ล้มเหลว</Tag>
          </Select.Option>
          <Select.Option value="refunded">
            <Tag color={getStatusColor('refunded')}>คืนเงิน</Tag>
          </Select.Option>
        </Select>
      )
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
      render: (record: Payment) => (
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
  const totalPayments = payments.length;
  const completedPayments = payments.filter(p => p.status === 'completed').length;
  const pendingPayments = payments.filter(p => p.status === 'pending').length;
  const failedPayments = payments.filter(p => p.status === 'failed').length;
  const totalRevenue = payments
    .filter(p => p.status === 'completed')
    .reduce((sum, payment) => sum + payment.amount, 0);
  const refundedAmount = payments
    .filter(p => p.status === 'refunded')
    .reduce((sum, payment) => sum + payment.amount, 0);

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">จัดการชำระเงิน</h1>
          <p className="text-gray-600">จัดการและติดตามการชำระเงินทั้งหมด</p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-6">
          <Card>
            <Statistic
              title="การชำระเงินทั้งหมด"
              value={totalPayments}
              prefix={<CreditCard className="text-blue-500" />}
            />
          </Card>
          <Card>
            <Statistic
              title="สำเร็จ"
              value={completedPayments}
              prefix={<TrendingUp className="text-green-500" />}
            />
          </Card>
          <Card>
            <Statistic
              title="รอดำเนินการ"
              value={pendingPayments}
              prefix={<AlertCircle className="text-orange-500" />}
            />
          </Card>
          <Card>
            <Statistic
              title="ล้มเหลว"
              value={failedPayments}
              prefix={<AlertCircle className="text-red-500" />}
            />
          </Card>
          <Card>
            <Statistic
              title="รายได้รวม"
              value={totalRevenue}
              precision={2}
              suffix="THB"
              prefix={<DollarSign className="text-green-500" />}
            />
          </Card>
          <Card>
            <Statistic
              title="เงินคืน"
              value={refundedAmount}
              precision={2}
              suffix="THB"
              prefix={<DollarSign className="text-purple-500" />}
            />
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <div className="flex flex-wrap gap-4">
            <Input
              placeholder="ค้นหาด้วยชื่อลูกค้า, รหัสคำสั่งซื้อ, หรือรหัสการชำระเงิน"
              prefix={<Search size={16} />}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              style={{ width: 300 }}
            />
            <Select
              placeholder="สถานะ"
              value={statusFilter}
              onChange={setStatusFilter}
              style={{ width: 150 }}
            >
              <Select.Option value="all">ทั้งหมด</Select.Option>
              <Select.Option value="pending">รอดำเนินการ</Select.Option>
              <Select.Option value="completed">สำเร็จ</Select.Option>
              <Select.Option value="failed">ล้มเหลว</Select.Option>
              <Select.Option value="refunded">คืนเงิน</Select.Option>
            </Select>
            <Select
              placeholder="วิธีการชำระเงิน"
              value={methodFilter}
              onChange={setMethodFilter}
              style={{ width: 180 }}
            >
              <Select.Option value="all">ทั้งหมด</Select.Option>
              <Select.Option value="credit_card">บัตรเครดิต</Select.Option>
              <Select.Option value="bank_transfer">โอนเงิน</Select.Option>
              <Select.Option value="e_wallet">กระเป๋าเงินอิเล็กทรอนิกส์</Select.Option>
              <Select.Option value="cash">เงินสด</Select.Option>
            </Select>
          </div>
        </Card>

        {/* Payments Table */}
        <Card>
          <Table
            columns={columns}
            dataSource={filteredPayments}
            rowKey="id"
            pagination={{
              total: filteredPayments.length,
              pageSize: 10,
              showSizeChanger: true,
              showQuickJumper: true,
              showTotal: (total, range) => `${range[0]}-${range[1]} จาก ${total} รายการ`
            }}
          />
        </Card>

        {/* Payment Detail Modal */}
        <Modal
          title="รายละเอียดการชำระเงิน"
          open={detailModalVisible}
          onCancel={() => setDetailModalVisible(false)}
          footer={[
            <Button key="close" onClick={() => setDetailModalVisible(false)}>
              ปิด
            </Button>
          ]}
          width={600}
        >
          {selectedPayment && (
            <Descriptions column={2} bordered>
              <Descriptions.Item label="รหัสการชำระเงิน" span={2}>
                <span className="font-mono">{selectedPayment.transactionId}</span>
              </Descriptions.Item>
              <Descriptions.Item label="รหัสคำสั่งซื้อ">
                <span className="font-mono">{selectedPayment.orderId}</span>
              </Descriptions.Item>
              <Descriptions.Item label="ลูกค้า">
                {selectedPayment.customerName}
              </Descriptions.Item>
              <Descriptions.Item label="จำนวนเงิน">
                <span className="font-semibold text-lg">
                  {selectedPayment.amount.toLocaleString()} {selectedPayment.currency}
                </span>
              </Descriptions.Item>
              <Descriptions.Item label="วิธีการชำระเงิน">
                <div className="flex items-center gap-2">
                  {getMethodIcon(selectedPayment.method)}
                  <span>
                    {selectedPayment.method === 'credit_card' && 'บัตรเครดิต'}
                    {selectedPayment.method === 'bank_transfer' && 'โอนเงิน'}
                    {selectedPayment.method === 'e_wallet' && 'กระเป๋าเงินอิเล็กทรอนิกส์'}
                    {selectedPayment.method === 'cash' && 'เงินสด'}
                  </span>
                </div>
              </Descriptions.Item>
              <Descriptions.Item label="สถานะ">
                <Tag color={getStatusColor(selectedPayment.status)}>
                  {selectedPayment.status === 'pending' && 'รอดำเนินการ'}
                  {selectedPayment.status === 'completed' && 'สำเร็จ'}
                  {selectedPayment.status === 'failed' && 'ล้มเหลว'}
                  {selectedPayment.status === 'refunded' && 'คืนเงิน'}
                </Tag>
              </Descriptions.Item>
              <Descriptions.Item label="Gateway">
                {selectedPayment.gateway}
              </Descriptions.Item>
              <Descriptions.Item label="วันที่สร้าง">
                {dayjs(selectedPayment.createdAt).format('DD/MM/YYYY HH:mm:ss')}
              </Descriptions.Item>
              {selectedPayment.completedAt && (
                <Descriptions.Item label="วันที่สำเร็จ">
                  {dayjs(selectedPayment.completedAt).format('DD/MM/YYYY HH:mm:ss')}
                </Descriptions.Item>
              )}
              {selectedPayment.refundedAt && (
                <Descriptions.Item label="วันที่คืนเงิน">
                  {dayjs(selectedPayment.refundedAt).format('DD/MM/YYYY HH:mm:ss')}
                </Descriptions.Item>
              )}
            </Descriptions>
          )}
        </Modal>
      </div>
    </AdminLayout>
  );
};

export default PaymentManagement;