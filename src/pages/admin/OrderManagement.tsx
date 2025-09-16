import React, { useState } from 'react';
import { Table, Button, Tag } from 'antd';
import { Plus } from 'lucide-react';
import AdminLayout from '../../components/AdminLayout';
import SearchComponent from '../../components/SearchComponent';
import dayjs from 'dayjs';



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
  isCommercial: boolean;
}

const OrderManagement: React.FC = () => {
  const [orders] = useState<Order[]>([
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
      isCommercial: false,
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
      isCommercial: true,
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
      isCommercial: false,
    },
    {
      id: '4',
      orderNumber: 'ORD-2024-004',
      customerName: 'บริษัท ABC จำกัด',
      customerEmail: 'contact@abc.com',
      items: [
        { id: '5', name: 'สินค้า E', quantity: 10, price: 800 }
      ],
      totalAmount: 8000,
      status: 'delivered',
      paymentStatus: 'paid',
      shippingAddress: '100 ถนนสีลม กรุงเทพฯ 10500',
      createdAt: '2024-01-12T14:30:00Z',
      updatedAt: '2024-01-16T10:00:00Z',
      isCommercial: true,
    },
    {
      id: '5',
      orderNumber: 'ORD-2024-005',
      customerName: 'มานี รักสวย',
      customerEmail: 'manee@example.com',
      items: [
        { id: '6', name: 'สินค้า F', quantity: 2, price: 450 }
      ],
      totalAmount: 900,
      status: 'shipped',
      paymentStatus: 'paid',
      shippingAddress: '555 ถนนลาดพร้าว กรุงเทพฯ 10230',
      createdAt: '2024-01-11T09:15:00Z',
      updatedAt: '2024-01-15T16:30:00Z',
      isCommercial: false,
    },
  ]);

  const [searchText, setSearchText] = useState('');









  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.orderNumber.toLowerCase().includes(searchText.toLowerCase()) ||
      order.customerName.toLowerCase().includes(searchText.toLowerCase()) ||
      order.customerEmail.toLowerCase().includes(searchText.toLowerCase());
    
    return matchesSearch;
  });

  const columns = [
    {
      title: 'ลำดับ',
      key: 'index',
      width: 80,
      render: (_: unknown, __: Order, index: number) => (
        <span className="font-medium">{index + 1}</span>
      ),
    },
    {
      title: 'หมายเลขคำสั่งซื้อ',
      dataIndex: 'orderNumber',
      key: 'orderNumber',
      width: 150,
      render: (text: string) => (
        <span className="font-mono font-medium text-blue-600">{text}</span>
      ),
    },
    {
      title: 'วันที่สั่งซื้อ',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: 150,
      render: (date: string) => (
        <span className="text-sm">
          {dayjs(date).format('DD/MM/YYYY HH:mm')}
        </span>
      ),
    },
    {
      title: 'ผู้ซื้อ',
      dataIndex: 'customerName',
      key: 'customerName',
      width: 200,
      render: (text: string, record: Order) => (
        <div>
          <div className="font-medium">{text}</div>
          <div className="text-sm text-gray-500">{record.customerEmail}</div>
        </div>
      ),
    },
    {
      title: 'ยอดชำระ',
      dataIndex: 'totalAmount',
      key: 'totalAmount',
      width: 120,
      render: (amount: number) => (
        <span className="font-medium">฿{amount.toLocaleString()}</span>
      ),
    },
    {
      title: 'ใช้เชิงพาณิชย์',
      dataIndex: 'isCommercial',
      key: 'isCommercial',
      width: 130,
      render: (isCommercial: boolean) => (
        <Tag color={isCommercial ? 'blue' : 'default'}>
          {isCommercial ? 'ใช่' : 'ไม่ใช่'}
        </Tag>
      ),
    },
  {
      title: 'สถานะบัญชี',
      dataIndex: 'status',
      key: 'accountStatus',
      width: 120,
     render: (status: string) => {
        if (status === 'active') {
          return (
            <span style={{
              color: 'black',
              border: '1px solid #B7EB8F',
              backgroundColor: '#D9F7BE',
              borderRadius: '20px',
              padding: '4px 8px',
              fontSize: '12px',
              fontWeight: '500',
              display: 'inline-block'
            }}>
              ใช้งาน
            </span>
          );
        }
        if (status === 'inactive') {
           return (
             <span style={{
               color: 'black',
               border: '1px solid #FFA39E',
               backgroundColor: '#FFCCC7',
               borderRadius: '20px',
               padding: '4px 8px',
               fontSize: '12px',
               fontWeight: '500',
               display: 'inline-block'
             }}>
               ไม่ใช้งาน
             </span>
           );
         }
         if (status === 'locked') {
            return (
              <span style={{
                color: 'black',
                border: '1px solid #FFBB96',
                backgroundColor: '#FFD8BF',
                borderRadius: '20px',
                padding: '4px 8px',
                fontSize: '12px',
                fontWeight: '500',
                display: 'inline-block'
              }}>
                ถูกล็อค
              </span>
            );
          }
          return (
            <Tag color="red">
              ถูกระงับ
            </Tag>
          );
      },
    },
   {
      title: 'จัดการ',
      key: 'actions',
      width: 200,
     
      render: () => (
        <div style={{color:'#1890FF'}} >แสดงรายละเอียด</div>
      ),
    },
  ];

  
  return (
    <AdminLayout>
      <div className="space-y-6">
       
           <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">จัดการคำสั่งซื้อ</h1>
    
        </div>
        {/* ตาราง */}
        <div>
          <div className="mb-4">
              <SearchComponent
                placeholder="ค้นหาคำสั่งซื้อ, ชื่อลูกค้า, อีเมล..."
                onSearch={(searchText) => setSearchText(searchText)}
              />
            </div>
          <div className="flex justify-between items-center py-3 ">
             <div className='text-xl  text-gray-800'>รายการคำสั่งซื้อ</div>
           <Button 
            type="primary" 
            style={{borderRadius: 30}}
            icon={<Plus size={16} />}
            onClick={() => {}}
          >
             เพิ่มคำสั่งซื้อ
          </Button>
            </div>
          <Table
            columns={columns}
            dataSource={filteredOrders}
            rowKey="id"
            scroll={{ x: 1200 }}
            pagination={{
              pageSize: 10,
              showSizeChanger: true,
              showQuickJumper: true,
              position: ['bottomLeft'],
              showTotal: (total, range) => 
                `${range[0]}-${range[1]} จาก ${total} รายการ`,
            }}
          />
        </div>



      </div>
    </AdminLayout>
  );
};

export default OrderManagement;