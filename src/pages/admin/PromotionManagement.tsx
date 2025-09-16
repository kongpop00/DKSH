import React, { useState } from 'react';
import { Table, Button, Space, Input, Modal, Tag, Card, Statistic, Select, Form, InputNumber, DatePicker, Switch, Descriptions } from 'antd';
import { Search, Eye, Plus, Edit, Trash2, Gift, Percent, Calendar, Users } from 'lucide-react';
import AdminLayout from '../../components/AdminLayout';
import dayjs from 'dayjs';

interface Promotion {
  id: string;
  name: string;
  description: string;
  type: 'percentage' | 'fixed_amount' | 'free_shipping' | 'buy_x_get_y';
  value: number;
  minOrderAmount?: number;
  maxDiscount?: number;
  startDate: string;
  endDate: string;
  usageLimit?: number;
  usedCount: number;
  isActive: boolean;
  code: string;
  createdAt: string;
}

const PromotionManagement: React.FC = () => {
  const [promotions, setPromotions] = useState<Promotion[]>([
    {
      id: '1',
      name: 'ลดราคา 20% สำหรับสมาชิกใหม่',
      description: 'ส่วนลดพิเศษสำหรับลูกค้าใหม่ที่สมัครสมาชิก',
      type: 'percentage',
      value: 20,
      minOrderAmount: 500,
      maxDiscount: 200,
      startDate: '2024-01-01T00:00:00Z',
      endDate: '2024-03-31T23:59:59Z',
      usageLimit: 1000,
      usedCount: 245,
      isActive: true,
      code: 'NEWMEMBER20',
      createdAt: '2023-12-15T10:00:00Z'
    },
    {
      id: '2',
      name: 'ฟรีค่าจัดส่ง',
      description: 'ฟรีค่าจัดส่งสำหรับคำสั่งซื้อขั้นต่ำ 1000 บาท',
      type: 'free_shipping',
      value: 0,
      minOrderAmount: 1000,
      startDate: '2024-01-15T00:00:00Z',
      endDate: '2024-02-29T23:59:59Z',
      usedCount: 89,
      isActive: true,
      code: 'FREESHIP1000',
      createdAt: '2024-01-10T14:30:00Z'
    },
    {
      id: '3',
      name: 'ซื้อ 2 แถม 1',
      description: 'ซื้อสินค้าในหมวดเสื้อผ้า 2 ชิ้น แถม 1 ชิ้น',
      type: 'buy_x_get_y',
      value: 1,
      startDate: '2024-02-01T00:00:00Z',
      endDate: '2024-02-14T23:59:59Z',
      usageLimit: 500,
      usedCount: 156,
      isActive: false,
      code: 'BUY2GET1',
      createdAt: '2024-01-25T09:15:00Z'
    },
    {
      id: '4',
      name: 'ลด 100 บาท',
      description: 'ส่วนลดคงที่ 100 บาท สำหรับคำสั่งซื้อขั้นต่ำ 2000 บาท',
      type: 'fixed_amount',
      value: 100,
      minOrderAmount: 2000,
      startDate: '2024-01-20T00:00:00Z',
      endDate: '2024-04-30T23:59:59Z',
      usageLimit: 200,
      usedCount: 67,
      isActive: true,
      code: 'SAVE100',
      createdAt: '2024-01-18T16:45:00Z'
    }
  ]);

  const [searchText, setSearchText] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedPromotion, setSelectedPromotion] = useState<Promotion | null>(null);
  const [detailModalVisible, setDetailModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [form] = Form.useForm();

  const handleToggleStatus = (promotionId: string) => {
    setPromotions(promotions.map(promotion => 
      promotion.id === promotionId 
        ? { ...promotion, isActive: !promotion.isActive }
        : promotion
    ));
  };

  const handleViewDetails = (promotion: Promotion) => {
    setSelectedPromotion(promotion);
    setDetailModalVisible(true);
  };

  const handleEdit = (promotion: Promotion) => {
    setSelectedPromotion(promotion);
    form.setFieldsValue({
      ...promotion,
      startDate: dayjs(promotion.startDate),
      endDate: dayjs(promotion.endDate)
    });
    setEditModalVisible(true);
  };

  const handleDelete = (promotionId: string) => {
    Modal.confirm({
      title: 'ยืนยันการลบ',
      content: 'คุณต้องการลบโปรโมชั่นนี้หรือไม่?',
      onOk: () => {
        setPromotions(promotions.filter(p => p.id !== promotionId));
      }
    });
  };

  const handleSave = (values: Partial<Promotion> & { startDate: dayjs.Dayjs; endDate: dayjs.Dayjs }) => {
    if (selectedPromotion) {
      setPromotions(promotions.map(promotion => 
        promotion.id === selectedPromotion.id 
          ? {
              ...promotion,
              ...values,
              startDate: values.startDate.toISOString(),
              endDate: values.endDate.toISOString()
            }
          : promotion
      ));
    }
    setEditModalVisible(false);
    form.resetFields();
  };

  const getTypeColor = (type: Promotion['type']) => {
    switch (type) {
      case 'percentage': return 'blue';
      case 'fixed_amount': return 'green';
      case 'free_shipping': return 'orange';
      case 'buy_x_get_y': return 'purple';
      default: return 'default';
    }
  };

  const getTypeIcon = (type: Promotion['type']) => {
    switch (type) {
      case 'percentage': return <Percent size={16} />;
      case 'fixed_amount': return <Gift size={16} />;
      case 'free_shipping': return <Gift size={16} />;
      case 'buy_x_get_y': return <Gift size={16} />;
      default: return <Gift size={16} />;
    }
  };

  const filteredPromotions = promotions.filter(promotion => {
    const matchesSearch = promotion.name.toLowerCase().includes(searchText.toLowerCase()) ||
                         promotion.code.toLowerCase().includes(searchText.toLowerCase()) ||
                         promotion.description.toLowerCase().includes(searchText.toLowerCase());
    const matchesType = typeFilter === 'all' || promotion.type === typeFilter;
    const matchesStatus = statusFilter === 'all' || 
                         (statusFilter === 'active' && promotion.isActive) ||
                         (statusFilter === 'inactive' && !promotion.isActive);
    return matchesSearch && matchesType && matchesStatus;
  });

  const columns = [
    {
      title: 'รหัสโปรโมชั่น',
      dataIndex: 'code',
      key: 'code',
      render: (text: string) => <span className="font-mono">{text}</span>
    },
    {
      title: 'ชื่อโปรโมชั่น',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <span className="font-semibold">{text}</span>
    },
    {
      title: 'ประเภท',
      dataIndex: 'type',
      key: 'type',
      render: (type: Promotion['type']) => (
        <div className="flex items-center gap-2">
          {getTypeIcon(type)}
          <Tag color={getTypeColor(type)}>
            {type === 'percentage' && 'ลดเปอร์เซ็นต์'}
            {type === 'fixed_amount' && 'ลดจำนวนคงที่'}
            {type === 'free_shipping' && 'ฟรีค่าจัดส่ง'}
            {type === 'buy_x_get_y' && 'ซื้อ X แถม Y'}
          </Tag>
        </div>
      )
    },
    {
      title: 'ค่าส่วนลด',
      dataIndex: 'value',
      key: 'value',
      render: (value: number, record: Promotion) => (
        <span className="font-semibold">
          {record.type === 'percentage' && `${value}%`}
          {record.type === 'fixed_amount' && `${value} บาท`}
          {record.type === 'free_shipping' && 'ฟรี'}
          {record.type === 'buy_x_get_y' && `แถม ${value} ชิ้น`}
        </span>
      )
    },
    {
      title: 'การใช้งาน',
      key: 'usage',
      render: (record: Promotion) => (
        <div>
          <div>{record.usedCount} ครั้ง</div>
          {record.usageLimit && (
            <div className="text-sm text-gray-500">จาก {record.usageLimit} ครั้ง</div>
          )}
        </div>
      )
    },
    {
      title: 'วันที่เริ่ม - สิ้นสุด',
      key: 'dateRange',
      render: (record: Promotion) => (
        <div className="text-sm">
          <div>{dayjs(record.startDate).format('DD/MM/YYYY')}</div>
          <div>{dayjs(record.endDate).format('DD/MM/YYYY')}</div>
        </div>
      )
    },
    {
      title: 'สถานะ',
      dataIndex: 'isActive',
      key: 'isActive',
      render: (isActive: boolean, record: Promotion) => (
        <Switch
          checked={isActive}
          onChange={() => handleToggleStatus(record.id)}
          checkedChildren="เปิด"
          unCheckedChildren="ปิด"
        />
      )
    },
    {
      title: 'การดำเนินการ',
      key: 'actions',
      render: (record: Promotion) => (
        <Space>
          <Button 
            type="primary" 
            icon={<Eye size={16} />} 
            onClick={() => handleViewDetails(record)}
          >
            ดู
          </Button>
          <Button 
            icon={<Edit size={16} />} 
            onClick={() => handleEdit(record)}
          >
            แก้ไข
          </Button>
          <Button 
            danger 
            icon={<Trash2 size={16} />} 
            onClick={() => handleDelete(record.id)}
          >
            ลบ
          </Button>
        </Space>
      )
    }
  ];

  // Statistics
  const totalPromotions = promotions.length;
  const activePromotions = promotions.filter(p => p.isActive).length;
  const totalUsage = promotions.reduce((sum, p) => sum + p.usedCount, 0);
  const expiredPromotions = promotions.filter(p => dayjs().isAfter(dayjs(p.endDate))).length;

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold mb-2">จัดการโปรโมชั่น</h1>
              <p className="text-gray-600">จัดการและติดตามโปรโมชั่นทั้งหมด</p>
            </div>
            <Button type="primary" icon={<Plus size={16} />} size="large">
              เพิ่มโปรโมชั่น
            </Button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card>
            <Statistic
              title="โปรโมชั่นทั้งหมด"
              value={totalPromotions}
              prefix={<Gift className="text-blue-500" />}
            />
          </Card>
          <Card>
            <Statistic
              title="กำลังใช้งาน"
              value={activePromotions}
              prefix={<Calendar className="text-green-500" />}
            />
          </Card>
          <Card>
            <Statistic
              title="การใช้งานรวม"
              value={totalUsage}
              prefix={<Users className="text-orange-500" />}
            />
          </Card>
          <Card>
            <Statistic
              title="หมดอายุ"
              value={expiredPromotions}
              prefix={<Calendar className="text-red-500" />}
            />
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <div className="flex flex-wrap gap-4">
            <Input
              placeholder="ค้นหาด้วยชื่อ, รหัส, หรือคำอธิบาย"
              prefix={<Search size={16} />}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              style={{ width: 300 }}
            />
            <Select
              placeholder="ประเภท"
              value={typeFilter}
              onChange={setTypeFilter}
              style={{ width: 150 }}
            >
              <Select.Option value="all">ทั้งหมด</Select.Option>
              <Select.Option value="percentage">ลดเปอร์เซ็นต์</Select.Option>
              <Select.Option value="fixed_amount">ลดจำนวนคงที่</Select.Option>
              <Select.Option value="free_shipping">ฟรีค่าจัดส่ง</Select.Option>
              <Select.Option value="buy_x_get_y">ซื้อ X แถม Y</Select.Option>
            </Select>
            <Select
              placeholder="สถานะ"
              value={statusFilter}
              onChange={setStatusFilter}
              style={{ width: 120 }}
            >
              <Select.Option value="all">ทั้งหมด</Select.Option>
              <Select.Option value="active">เปิดใช้งาน</Select.Option>
              <Select.Option value="inactive">ปิดใช้งาน</Select.Option>
            </Select>
          </div>
        </Card>

        {/* Promotions Table */}
        <Card>
          <Table
            columns={columns}
            dataSource={filteredPromotions}
            rowKey="id"
            pagination={{
              total: filteredPromotions.length,
              pageSize: 10,
              showSizeChanger: true,
              showQuickJumper: true,
              showTotal: (total, range) => `${range[0]}-${range[1]} จาก ${total} รายการ`
            }}
          />
        </Card>

        {/* Detail Modal */}
        <Modal
          title="รายละเอียดโปรโมชั่น"
          open={detailModalVisible}
          onCancel={() => setDetailModalVisible(false)}
          footer={[
            <Button key="close" onClick={() => setDetailModalVisible(false)}>
              ปิด
            </Button>
          ]}
          width={600}
        >
          {selectedPromotion && (
            <Descriptions column={2} bordered>
              <Descriptions.Item label="รหัสโปรโมชั่น" span={2}>
                <span className="font-mono text-lg">{selectedPromotion.code}</span>
              </Descriptions.Item>
              <Descriptions.Item label="ชื่อโปรโมชั่น" span={2}>
                <span className="font-semibold">{selectedPromotion.name}</span>
              </Descriptions.Item>
              <Descriptions.Item label="คำอธิบาย" span={2}>
                {selectedPromotion.description}
              </Descriptions.Item>
              <Descriptions.Item label="ประเภท">
                <div className="flex items-center gap-2">
                  {getTypeIcon(selectedPromotion.type)}
                  <Tag color={getTypeColor(selectedPromotion.type)}>
                    {selectedPromotion.type === 'percentage' && 'ลดเปอร์เซ็นต์'}
                    {selectedPromotion.type === 'fixed_amount' && 'ลดจำนวนคงที่'}
                    {selectedPromotion.type === 'free_shipping' && 'ฟรีค่าจัดส่ง'}
                    {selectedPromotion.type === 'buy_x_get_y' && 'ซื้อ X แถม Y'}
                  </Tag>
                </div>
              </Descriptions.Item>
              <Descriptions.Item label="ค่าส่วนลด">
                <span className="font-semibold">
                  {selectedPromotion.type === 'percentage' && `${selectedPromotion.value}%`}
                  {selectedPromotion.type === 'fixed_amount' && `${selectedPromotion.value} บาท`}
                  {selectedPromotion.type === 'free_shipping' && 'ฟรี'}
                  {selectedPromotion.type === 'buy_x_get_y' && `แถม ${selectedPromotion.value} ชิ้น`}
                </span>
              </Descriptions.Item>
              {selectedPromotion.minOrderAmount && (
                <Descriptions.Item label="ยอดขั้นต่ำ">
                  {selectedPromotion.minOrderAmount} บาท
                </Descriptions.Item>
              )}
              {selectedPromotion.maxDiscount && (
                <Descriptions.Item label="ส่วนลดสูงสุด">
                  {selectedPromotion.maxDiscount} บาท
                </Descriptions.Item>
              )}
              <Descriptions.Item label="วันที่เริ่ม">
                {dayjs(selectedPromotion.startDate).format('DD/MM/YYYY HH:mm')}
              </Descriptions.Item>
              <Descriptions.Item label="วันที่สิ้นสุด">
                {dayjs(selectedPromotion.endDate).format('DD/MM/YYYY HH:mm')}
              </Descriptions.Item>
              <Descriptions.Item label="การใช้งาน">
                {selectedPromotion.usedCount} ครั้ง
                {selectedPromotion.usageLimit && ` / ${selectedPromotion.usageLimit} ครั้ง`}
              </Descriptions.Item>
              <Descriptions.Item label="สถานะ">
                <Tag color={selectedPromotion.isActive ? 'green' : 'red'}>
                  {selectedPromotion.isActive ? 'เปิดใช้งาน' : 'ปิดใช้งาน'}
                </Tag>
              </Descriptions.Item>
              <Descriptions.Item label="วันที่สร้าง">
                {dayjs(selectedPromotion.createdAt).format('DD/MM/YYYY HH:mm:ss')}
              </Descriptions.Item>
            </Descriptions>
          )}
        </Modal>

        {/* Edit Modal */}
        <Modal
          title="แก้ไขโปรโมชั่น"
          open={editModalVisible}
          onCancel={() => {
            setEditModalVisible(false);
            form.resetFields();
          }}
          onOk={() => form.submit()}
          width={600}
        >
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSave}
          >
            <Form.Item
              name="name"
              label="ชื่อโปรโมชั่น"
              rules={[{ required: true, message: 'กรุณากรอกชื่อโปรโมชั่น' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="description"
              label="คำอธิบาย"
              rules={[{ required: true, message: 'กรุณากรอกคำอธิบาย' }]}
            >
              <Input.TextArea rows={3} />
            </Form.Item>
            <Form.Item
              name="code"
              label="รหัสโปรโมชั่น"
              rules={[{ required: true, message: 'กรุณากรอกรหัสโปรโมชั่น' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="type"
              label="ประเภท"
              rules={[{ required: true, message: 'กรุณาเลือกประเภท' }]}
            >
              <Select>
                <Select.Option value="percentage">ลดเปอร์เซ็นต์</Select.Option>
                <Select.Option value="fixed_amount">ลดจำนวนคงที่</Select.Option>
                <Select.Option value="free_shipping">ฟรีค่าจัดส่ง</Select.Option>
                <Select.Option value="buy_x_get_y">ซื้อ X แถม Y</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="value"
              label="ค่าส่วนลด"
              rules={[{ required: true, message: 'กรุณากรอกค่าส่วนลด' }]}
            >
              <InputNumber min={0} style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item
              name="minOrderAmount"
              label="ยอดขั้นต่ำ (บาท)"
            >
              <InputNumber min={0} style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item
              name="maxDiscount"
              label="ส่วนลดสูงสุด (บาท)"
            >
              <InputNumber min={0} style={{ width: '100%' }} />
            </Form.Item>
            <div className="grid grid-cols-2 gap-4">
              <Form.Item
                name="startDate"
                label="วันที่เริ่ม"
                rules={[{ required: true, message: 'กรุณาเลือกวันที่เริ่ม' }]}
              >
                <DatePicker showTime style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item
                name="endDate"
                label="วันที่สิ้นสุด"
                rules={[{ required: true, message: 'กรุณาเลือกวันที่สิ้นสุด' }]}
              >
                <DatePicker showTime style={{ width: '100%' }} />
              </Form.Item>
            </div>
            <Form.Item
              name="usageLimit"
              label="จำนวนครั้งที่ใช้ได้"
            >
              <InputNumber min={1} style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item
              name="isActive"
              label="สถานะ"
              valuePropName="checked"
            >
              <Switch checkedChildren="เปิด" unCheckedChildren="ปิด" />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </AdminLayout>
  );
};

export default PromotionManagement;