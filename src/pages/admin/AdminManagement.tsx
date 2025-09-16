import React, { useState } from 'react';
import { Table, Button, Input, Modal, Form, Select, Tag, } from 'antd';

import AdminLayout from '../../components/AdminLayout';
import SearchComponent from '../../components/SearchComponent';

const { Option } = Select;

interface Admin {
  id: string;
  adminCode: string;
  name: string;
  email: string;
  phone: string;
  role: 'super_admin' | 'admin' | 'moderator';
  permissions: string[];
  status: 'active' | 'inactive';
  lastLogin: string;
  createdAt: string;
  avatar?: string;
}

const AdminManagement: React.FC = () => {
  const [admins, setAdmins] = useState<Admin[]>([
    {
      id: '1',
      adminCode: 'ADM001',
      name: 'ผู้ดูแลระบบหลัก',
      email: 'superadmin@example.com',
      phone: '081-234-5678',
      role: 'super_admin',
      permissions: ['all'],
      status: 'active',
      lastLogin: '2024-01-15 10:30:00',
      createdAt: '2024-01-01 09:00:00',
    },
    {
      id: '2',
      adminCode: 'ADM002',
      name: 'สมชาย ใจดี',
      email: 'somchai@example.com',
      phone: '082-345-6789',
      role: 'admin',
      permissions: ['orders', 'payments', 'shipping'],
      status: 'active',
      lastLogin: '2024-01-14 15:45:00',
      createdAt: '2024-01-02 10:15:00',
    },
    {
      id: '3',
      adminCode: 'ADM003',
      name: 'สมหญิง รักดี',
      email: 'somying@example.com',
      phone: '083-456-7890',
      role: 'moderator',
      permissions: ['users', 'support'],
      status: 'inactive',
      lastLogin: '2024-01-10 08:20:00',
      createdAt: '2024-01-03 11:30:00',
    },
    {
      id: '4',
      adminCode: 'ADM004',
      name: 'วิชัย สุขใส',
      email: 'wichai@example.com',
      phone: '084-567-8901',
      role: 'admin',
      permissions: ['promotions', 'reports'],
      status: 'active',
      lastLogin: '2024-01-16 09:15:00',
      createdAt: '2024-01-04 14:20:00',
    },
    {
      id: '5',
      adminCode: 'ADM005',
      name: 'นิรันดร์ เก่งมาก',
      email: 'niran@example.com',
      phone: '085-678-9012',
      role: 'moderator',
      permissions: ['settings', 'support'],
      status: 'active',
      lastLogin: '2024-01-13 16:30:00',
      createdAt: '2024-01-05 08:45:00',
    },
    {
      id: '6',
      adminCode: 'ADM006',
      name: 'ปรีชา ฉลาด',
      email: 'preecha@example.com',
      phone: '086-789-0123',
      role: 'admin',
      permissions: ['users', 'orders', 'reports'],
      status: 'inactive',
      lastLogin: '2024-01-08 12:00:00',
      createdAt: '2024-01-06 10:30:00',
    },
    {
      id: '7',
      adminCode: 'ADM007',
      name: 'สุภาพ ดีงาม',
      email: 'suphap@example.com',
      phone: '087-890-1234',
      role: 'moderator',
      permissions: ['support', 'promotions'],
      status: 'active',
      lastLogin: '2024-01-15 14:20:00',
      createdAt: '2024-01-07 13:15:00',
    },
    {
      id: '8',
      adminCode: 'ADM008',
      name: 'มานะ ขยัน',
      email: 'mana@example.com',
      phone: '088-901-2345',
      role: 'admin',
      permissions: ['shipping', 'payments', 'settings'],
      status: 'active',
      lastLogin: '2024-01-16 11:45:00',
      createdAt: '2024-01-08 15:00:00',
    },
    {
      id: '9',
      adminCode: 'ADM009',
      name: 'จิรา สวยงาม',
      email: 'jira@example.com',
      phone: '089-012-3456',
      role: 'moderator',
      permissions: ['users', 'support'],
      status: 'inactive',
      lastLogin: '2024-01-05 09:30:00',
      createdAt: '2024-01-09 16:45:00',
    },
    {
      id: '10',
      adminCode: 'ADM010',
      name: 'ธนา รวยมาก',
      email: 'thana@example.com',
      phone: '090-123-4567',
      role: 'admin',
      permissions: ['orders', 'reports', 'promotions'],
      status: 'active',
      lastLogin: '2024-01-16 08:00:00',
      createdAt: '2024-01-10 12:30:00',
    },
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingAdmin, setEditingAdmin] = useState<Admin | null>(null);
  const [form] = Form.useForm();

  const permissionOptions = [
    { label: 'จัดการผู้ใช้', value: 'users' },
    { label: 'จัดการคำสั่งซื้อ', value: 'orders' },
    { label: 'จัดการชำระเงิน', value: 'payments' },
    { label: 'จัดการการจัดส่ง', value: 'shipping' },
    { label: 'จัดการโปรโมชั่น', value: 'promotions' },
    { label: 'การตั้งค่าระบบ', value: 'settings' },
    { label: 'รายงานและสถิติ', value: 'reports' },
    { label: 'สนับสนุนลูกค้า', value: 'support' },
  ];



  



  const handleModalOk = () => {
    form.validateFields().then(values => {
      const permissions = values.role === 'super_admin' ? ['all'] : values.permissions;
      
      if (editingAdmin) {
        // แก้ไขผู้ดูแล
        setAdmins(admins.map(admin => 
          admin.id === editingAdmin.id 
            ? { ...admin, ...values, permissions }
            : admin
        ));
      } else {
        // เพิ่มผู้ดูแลใหม่
        const newAdmin: Admin = {
          id: Date.now().toString(),
          ...values,
          permissions,
          createdAt: new Date().toISOString(),
          lastLogin: '-',
        };
        setAdmins([...admins, newAdmin]);
      }
      setIsModalVisible(false);
      form.resetFields();
    });
  };

 

 
 

  const columns = [
    {
      title: 'ลำดับ',
      key: 'index',
      width: 80,
      render: (_: unknown, __: Admin, index: number) => (
        <span className="text-sm text-gray-600">{index + 1}</span>
      ),
    },
    {
      title: 'รหัสผู้ดูแล',
      dataIndex: 'adminCode',
      key: 'adminCode',
      width: 120,
      render: (text: string) => (
        <span className="font-mono text-sm">{text}</span>
      ),
    },
    {
      title: 'ชื่อ-นามสกุล',
      dataIndex: 'name',
      key: 'name',
      width: 200,
      render: (text: string) => (
        <div className="flex items-center space-x-3">
        
          <span className="font-medium">{text}</span>
        </div>
      ),
    },
    {
      title: 'วันที่สร้าง',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: 150,
      render: (date: string) => (
        <span className="text-sm text-gray-600">
          {new Date(date).toLocaleDateString('th-TH')}
        </span>
      ),
    },
    {
      title: 'อีเมล',
      dataIndex: 'email',
      key: 'email',
      width: 200,
      render: (text: string) => (
        <span className="text-sm ">{text}</span>
      ),
    },
    {
      title: 'เบอร์โทร',
      dataIndex: 'phone',
      key: 'phone',
      width: 130,
      render: (text: string) => (
        <span className="text-sm">{text}</span>
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
          <h1 className="text-2xl font-bold text-gray-800">จัดการผู้ใช้งาน</h1>
    
        </div>
          {/* ค้นหา */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="flex-1">
            <SearchComponent
              placeholder="ค้นหาด้วยรหัส,ชื่อ-นามสกุล หรืออีเมลของผู้ใช้"
              onSearch={(searchText, selectedDate) => {
                console.log('Search:', searchText, 'Date:', selectedDate);
              }}
            />
          </div>
       
        </div>
            <div className="flex justify-between items-center ">
             <div className='text-xl  text-gray-800'>รายการผู้ดูแลระบบ</div>
                <Button 
            type="primary" 
            onClick={() => {
              setEditingAdmin(null);
              form.resetFields();
              setIsModalVisible(true);
            }}
            className="shrink-0  rounded-3xl"
          >
            สร้างบัญชีผู้ดูแล
          </Button>
            </div>
        {/* ตาราง */}
        <div>
          <Table
            columns={columns}
            dataSource={admins}
            rowKey="id"
            scroll={{ x: 1500, y: 600 }}
            pagination={{
              pageSize: 10,
              showSizeChanger: true,
              showQuickJumper: true,
              showTotal: (total, range) => 
                `${range[0]}-${range[1]} จาก ${total} รายการ`,
              position: ['bottomLeft'],
            }}
          />
        </div>

        {/* Modal สำหรับเพิ่ม/แก้ไขผู้ดูแล */}
        <Modal
          title={editingAdmin ? 'แก้ไขผู้ดูแล' : 'เพิ่มผู้ดูแลใหม่'}
          open={isModalVisible}
          onOk={handleModalOk}
          onCancel={() => setIsModalVisible(false)}
          okText="บันทึก"
          cancelText="ยกเลิก"
          width={600}
        >
          <Form form={form} layout="vertical">
            <Form.Item
              name="name"
              label="ชื่อ-นามสกุล"
              rules={[{ required: true, message: 'กรุณากรอกชื่อ-นามสกุล' }]}
            >
              <Input />
            </Form.Item>
            
            <Form.Item
              name="email"
              label="อีเมล"
              rules={[
                { required: true, message: 'กรุณากรอกอีเมล' },
                { type: 'email', message: 'รูปแบบอีเมลไม่ถูกต้อง' }
              ]}
            >
              <Input />
            </Form.Item>
            
            <Form.Item
              name="role"
              label="บทบาท"
              rules={[{ required: true, message: 'กรุณาเลือกบทบาท' }]}
            >
              <Select onChange={(value) => {
                if (value === 'super_admin') {
                  form.setFieldsValue({ permissions: permissionOptions.map(p => p.value) });
                }
              }}>
                <Option value="moderator">ผู้ดูแล</Option>
                <Option value="admin">ผู้ดูแลระบบ</Option>
                <Option value="super_admin">ผู้ดูแลระบบหลัก</Option>
              </Select>
            </Form.Item>
            
            <Form.Item
              name="permissions"
              label="สิทธิ์การเข้าถึง"
              rules={[{ required: true, message: 'กรุณาเลือกสิทธิ์การเข้าถึง' }]}
            >
              <Select
                mode="multiple"
                placeholder="เลือกสิทธิ์การเข้าถึง"
                options={permissionOptions}
                disabled={form.getFieldValue('role') === 'super_admin'}
              />
            </Form.Item>
            
            <Form.Item
              name="status"
              label="สถานะ"
              rules={[{ required: true, message: 'กรุณาเลือกสถานะ' }]}
            >
              <Select>
                <Option value="active">ใช้งาน</Option>
                <Option value="inactive">ไม่ใช้งาน</Option>
              </Select>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </AdminLayout>
  );
};

export default AdminManagement;