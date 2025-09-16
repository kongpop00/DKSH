import React from 'react';
import { Layout, Menu } from 'antd';
import {
  Users,
  UserCog,
  ShoppingCart,
  CreditCard,
  Truck,
  Tag,
  Settings,
} from 'lucide-react';

import { useNavigate, useLocation } from 'react-router-dom';
const { Sider, Content } = Layout;

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {

  const navigate = useNavigate();
  const location = useLocation();


  const menuItems = [
    {
      key: '/admin/users',
      icon: <Users size={18} />,
      label: 'จัดการผู้ใช้',
    },
    {
      key: '/admin/admins',
      icon: <UserCog size={16} />,
      label: 'จัดการผู้ดูแลระบบ',
    },
    {
      key: '/admin/orders',
      icon: <ShoppingCart size={18} />,
      label: 'จัดการคำสั่งซื้อ',
    },
    {
      key: '/admin/payments',
      icon: <CreditCard size={18} />,
      label: 'จัดการการชำระเงิน',
    },
    {
      key: '/admin/shipping',
      icon: <Truck size={18} />,
      label: 'จัดการการจัดส่ง',
    },
    {
      key: '/admin/promotions',
      icon: <Tag size={18} />,
      label: 'จัดการโปรโมชั่น',
    },
    {
      key: '/admin/settings',
      icon: <Settings size={18} />,
      label: 'การตั้งค่า',
    },
  ];

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  return (
    <Layout className="min-h-screen  ">
      <Sider 
        trigger={null} 
        collapsible 
        collapsed={false}
        className="bg-white bg- shadow-lg"
        width={250}
      >
      
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={handleMenuClick}
          className="border-none mt-4"
        />
      </Sider>
      
      <Layout>
        <Content className="m-6 p-4">
          <div className="mb-6">
        </div>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;