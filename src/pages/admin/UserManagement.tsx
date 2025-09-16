import React, { useState } from 'react';
import { Table, Card, Tag } from 'antd';
import AdminLayout from '../../components/AdminLayout';
import SearchComponent from '../../components/SearchComponent';


interface User {
  id: string;
  customerCode: string;
  customerType: 'individual' | 'organization';
  name: string;
  nameEn: string;
  email: string;
  role: 'user' | 'admin' | 'moderator';
  status: 'active' | 'inactive' | 'suspended';
  accountStatus: 'verified' | 'pending' | 'rejected';
  lastLogin: string;
  createdAt: string;
  avatar?: string;
}

const UserManagement: React.FC = () => {
  const [users] = useState<User[]>([
    {
      id: '1',
      customerCode: 'CUS001',
      customerType: 'individual',
      name: 'สมชาย ใจดี',
      nameEn: 'Somchai Jaidee',
      email: 'somchai@example.com',
      role: 'user',
      status: 'active',
      accountStatus: 'verified',
      lastLogin: '2024-01-15 10:30:00',
      createdAt: '2024-01-01 09:00:00',
    },
    {
      id: '2',
      customerCode: 'CUS002',
      customerType: 'organization',
      name: 'บริษัท เทคโนโลยี จำกัด',
      nameEn: 'Technology Company Ltd.',
      email: 'contact@techcompany.com',
      role: 'moderator',
      status: 'active',
      accountStatus: 'verified',
      lastLogin: '2024-01-14 15:45:00',
      createdAt: '2024-01-02 10:15:00',
    },
    {
      id: '3',
      customerCode: 'CUS003',
      customerType: 'individual',
      name: 'วิชัย เก่งมาก',
      nameEn: 'Wichai Kengmak',
      email: 'wichai@example.com',
      role: 'admin',
      status: 'inactive',
      accountStatus: 'pending',
      lastLogin: '2024-01-10 08:20:00',
      createdAt: '2024-01-03 11:30:00',
    },
  ]);

 
 
  const [searchText, setSearchText] = useState('');

 



  const filteredUsers = users.filter(user => {
    const searchLower = searchText.toLowerCase();
    return (
      user.customerCode.toLowerCase().includes(searchLower) ||
      user.name.toLowerCase().includes(searchLower) ||
      user.email.toLowerCase().includes(searchLower)
    );
  });

  const columns = [
    {
      title: 'ลำดับ',
      key: 'index',
      width: 80,
      render: (_: unknown, __: User, index: number) => (
        <span className="text-sm text-gray-600">{index + 1}</span>
      ),
    },
    {
      title: 'รหัสลูกค้า',
      dataIndex: 'customerCode',
      key: 'customerCode',
      width: 120,
      render: (code: string) => (
        <span className="font-mono text-sm">{code}</span>
      ),
    },
    {
      title: 'ประเภทลูกค้า',
      dataIndex: 'customerType',
      key: 'customerType',
      width: 120,
      render: (type: string) => (
        type === 'individual' ? 'บุคคลธรรมดา' : 'นิติบุคคล'
      ),
    },
    {
      title: 'ชื่อ-นามสกุล/ชื่อองค์กร',
      dataIndex: 'name',
      key: 'name',
      width: 200,
      render: (text: string) => (
        <span className="font-medium">{text}</span>
      ),
    },
    {
      title: 'ชื่อ-นามสกุล/ชื่อองค์กร (ภาษาอังกฤษ)',
      dataIndex: 'nameEn',
      key: 'nameEn',
      width: 250,
      render: (text: string) => (
        <span className="text-sm text-gray-600">{text}</span>
      ),
    },
    {
      title: 'วันที่สมัคร',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: 120,
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
      render: (email: string) => (
        <span className="text-sm ">{email}</span>
      ),
    },
    {
      title: 'สถานะบัญชี',
      dataIndex: 'accountStatus',
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
      title: 'สถานะการใช้งาน',
      dataIndex: 'status',
      key: 'status',
      width: 130,
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
        <div className="flex justify-between items-center">
          <SearchComponent
            placeholder="ค้นหาด้วยรหัส,ชื่อ-นามสกุล หรืออีเมลของผู้ใช้"
            onSearch={(searchText, selectedDate) => {
              setSearchText(searchText);
              console.log('Search:', searchText, 'Date:', selectedDate);
            }}
          />
        </div>

        {/* ตาราง */}
        <Card>
          <Table
            columns={columns}
            dataSource={filteredUsers}
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
        </Card>

    
      </div>
    </AdminLayout>
  );
};

export default UserManagement;