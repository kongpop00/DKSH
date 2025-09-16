import React, { useState } from 'react';
import { Table, Button, Space, Input, Modal, Form, Select, Tag, Avatar, Card, Statistic, Switch } from 'antd';
import { Search, Plus, Edit, Trash2, Eye, Shield, ShieldCheck, ShieldX, Crown } from 'lucide-react';
import AdminLayout from '../../components/AdminLayout';

const { Search: AntSearch } = Input;
const { Option } = Select;

interface Admin {
  id: string;
  name: string;
  email: string;
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
      name: 'ผู้ดูแลระบบหลัก',
      email: 'superadmin@example.com',
      role: 'super_admin',
      permissions: ['all'],
      status: 'active',
      lastLogin: '2024-01-15 10:30:00',
      createdAt: '2024-01-01 09:00:00',
    },
    {
      id: '2',
      name: 'ผู้ดูแลคำสั่งซื้อ',
      email: 'orderadmin@example.com',
      role: 'admin',
      permissions: ['orders', 'payments', 'shipping'],
      status: 'active',
      lastLogin: '2024-01-14 15:45:00',
      createdAt: '2024-01-02 10:15:00',
    },
    {
      id: '3',
      name: 'ผู้ดูแลผู้ใช้',
      email: 'useradmin@example.com',
      role: 'moderator',
      permissions: ['users', 'support'],
      status: 'inactive',
      lastLogin: '2024-01-10 08:20:00',
      createdAt: '2024-01-03 11:30:00',
    },
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingAdmin, setEditingAdmin] = useState<Admin | null>(null);
  const [searchText, setSearchText] = useState('');
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

  const handleAddAdmin = () => {
    setEditingAdmin(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleEditAdmin = (admin: Admin) => {
    setEditingAdmin(admin);
    form.setFieldsValue({
      ...admin,
      permissions: admin.permissions.includes('all') ? permissionOptions.map(p => p.value) : admin.permissions
    });
    setIsModalVisible(true);
  };

  const handleDeleteAdmin = (adminId: string) => {
    Modal.confirm({
      title: 'ยืนยันการลบผู้ดูแล',
      content: 'คุณแน่ใจหรือไม่ที่จะลบผู้ดูแลนี้?',
      okText: 'ลบ',
      cancelText: 'ยกเลิก',
      onOk: () => {
        setAdmins(admins.filter(admin => admin.id !== adminId));
      },
    });
  };

  const handleStatusToggle = (adminId: string, checked: boolean) => {
    setAdmins(admins.map(admin => 
      admin.id === adminId 
        ? { ...admin, status: checked ? 'active' : 'inactive' }
        : admin
    ));
  };

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

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'super_admin': return 'gold';
      case 'admin': return 'red';
      case 'moderator': return 'blue';
      default: return 'default';
    }
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'super_admin': return <Crown size={16} />;
      case 'admin': return <Shield size={16} />;
      case 'moderator': return <ShieldCheck size={16} />;
      default: return <ShieldX size={16} />;
    }
  };

  const getRoleName = (role: string) => {
    switch (role) {
      case 'super_admin': return 'ผู้ดูแลระบบหลัก';
      case 'admin': return 'ผู้ดูแลระบบ';
      case 'moderator': return 'ผู้ดูแล';
      default: return role;
    }
  };

  const filteredAdmins = admins.filter(admin => 
    admin.name.toLowerCase().includes(searchText.toLowerCase()) ||
    admin.email.toLowerCase().includes(searchText.toLowerCase())
  );

  const columns = [
    {
      title: 'ผู้ดูแล',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: Admin) => (
        <div className="flex items-center space-x-3">
          <Avatar size="small" className="bg-purple-500">
            {text.charAt(0)}
          </Avatar>
          <div>
            <div className="font-medium">{text}</div>
            <div className="text-sm text-gray-500">{record.email}</div>
          </div>
        </div>
      ),
    },
    {
      title: 'บทบาท',
      dataIndex: 'role',
      key: 'role',
      render: (role: string) => (
        <Tag color={getRoleColor(role)} icon={getRoleIcon(role)}>
          {getRoleName(role)}
        </Tag>
      ),
    },
    {
      title: 'สิทธิ์การเข้าถึง',
      dataIndex: 'permissions',
      key: 'permissions',
      render: (permissions: string[]) => (
        <div className="flex flex-wrap gap-1">
          {permissions.includes('all') ? (
            <Tag color="gold">สิทธิ์ทั้งหมด</Tag>
          ) : (
            permissions.slice(0, 3).map(permission => {
              const option = permissionOptions.find(p => p.value === permission);
              return (
                <Tag key={permission}>
                  {option?.label || permission}
                </Tag>
              );
            })
          )}
          {permissions.length > 3 && !permissions.includes('all') && (
            <Tag>+{permissions.length - 3}</Tag>
          )}
        </div>
      ),
    },
    {
      title: 'สถานะ',
      dataIndex: 'status',
      key: 'status',
      render: (status: string, record: Admin) => (
        <Switch
          checked={status === 'active'}
          onChange={(checked) => handleStatusToggle(record.id, checked)}
          checkedChildren="ใช้งาน"
          unCheckedChildren="ปิด"
        />
      ),
    },
    {
      title: 'เข้าสู่ระบบล่าสุด',
      dataIndex: 'lastLogin',
      key: 'lastLogin',
      render: (date: string) => (
        <span className="text-sm text-gray-600">
          {date === '-' ? 'ยังไม่เคยเข้าสู่ระบบ' : new Date(date).toLocaleString('th-TH')}
        </span>
      ),
    },
    {
      title: 'การดำเนินการ',
      key: 'actions',
      render: (_: unknown, record: Admin) => (
        <Space size="small">
          <Button 
            type="text" 
            icon={<Eye size={16} />} 
            size="small"
            title="ดูรายละเอียด"
          />
          <Button 
            type="text" 
            icon={<Edit size={16} />} 
            size="small"
            onClick={() => handleEditAdmin(record)}
            title="แก้ไข"
          />
          <Button 
            type="text" 
            danger 
            icon={<Trash2 size={16} />} 
            size="small"
            onClick={() => handleDeleteAdmin(record.id)}
            title="ลบ"
            disabled={record.role === 'super_admin'}
          />
        </Space>
      ),
    },
  ];

  const totalAdmins = admins.length;
  const activeAdmins = admins.filter(a => a.status === 'active').length;
  const superAdmins = admins.filter(a => a.role === 'super_admin').length;
  const regularAdmins = admins.filter(a => a.role === 'admin').length;

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">จัดการผู้ดูแล</h1>
          <Button 
            type="primary" 
            icon={<Plus size={16} />}
            onClick={handleAddAdmin}
          >
            เพิ่มผู้ดูแลใหม่
          </Button>
        </div>

        {/* สถิติ */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <Statistic
              title="ผู้ดูแลทั้งหมด"
              value={totalAdmins}
              prefix={<Shield className="text-blue-500" size={20} />}
            />
          </Card>
          <Card>
            <Statistic
              title="ใช้งานอยู่"
              value={activeAdmins}
              prefix={<ShieldCheck className="text-green-500" size={20} />}
            />
          </Card>
          <Card>
            <Statistic
              title="ผู้ดูแลระบบหลัก"
              value={superAdmins}
              prefix={<Crown className="text-yellow-500" size={20} />}
            />
          </Card>
          <Card>
            <Statistic
              title="ผู้ดูแลทั่วไป"
              value={regularAdmins}
              prefix={<Shield className="text-purple-500" size={20} />}
            />
          </Card>
        </div>

        {/* ค้นหา */}
        <div className="flex justify-between items-center">
          <AntSearch
            placeholder="ค้นหาผู้ดูแล..."
            allowClear
            style={{ width: 300 }}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            prefix={<Search size={16} />}
          />
        </div>

        {/* ตาราง */}
        <Card>
          <Table
            columns={columns}
            dataSource={filteredAdmins}
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