import React from 'react';
import { Layout, Menu, Card, Button } from 'antd';
import { 
  ShoppingCart, 
  Package, 
  Users, 
  BarChart3, 
  Settings, 
  Plus,
  TrendingUp,
  DollarSign
} from 'lucide-react';

import Logo from '../components/Logo';


const { Sider, Content } = Layout;

const DashboardPage: React.FC = () => {








  const menuItems = [
    { key: 'dashboard', icon: <BarChart3 className="w-4 h-4" />, label: 'แดชบอร์ด' },
    { key: 'products', icon: <Package className="w-4 h-4" />, label: 'สินค้า' },
    { key: 'orders', icon: <ShoppingCart className="w-4 h-4" />, label: 'คำสั่งซื้อ' },
    { key: 'customers', icon: <Users className="w-4 h-4" />, label: 'ลูกค้า' },
    { key: 'analytics', icon: <TrendingUp className="w-4 h-4" />, label: 'การวิเคราะห์' },
    { key: 'settings', icon: <Settings className="w-4 h-4" />, label: 'การตั้งค่า' },
  ];

  const statsCards = [
    { title: 'ยอดขายวันนี้', value: '฿125,430', change: '+12.5%', color: 'text-green-600' },
    { title: 'คำสั่งซื้อใหม่', value: '24', change: '+8.2%', color: 'text-blue-600' },
    { title: 'สินค้าทั้งหมด', value: '1,234', change: '+3.1%', color: 'text-purple-600' },
    { title: 'ลูกค้าทั้งหมด', value: '567', change: '+5.7%', color: 'text-orange-600' },
  ];

  return (
    <Layout className="min-h-screen">
      <Sider 
        trigger={null} 
        collapsible 
        collapsed={false}
        className="bg-white shadow-md"
        width={260}
      >
        <div className="p-4">
          <Logo size="small" className="text-pink-600" />
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['dashboard']}
          items={menuItems}
          className="border-r-0"
        />
      </Sider>

      <Layout>


        <Content className="p-6 bg-gray-50">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">แดชบอร์ด</h1>
              <Button 
                type="primary" 
                icon={<Plus className="w-4 h-4" />}
                className="bg-blue-600 hover:bg-blue-700"
              >
                เพิ่มสินค้าใหม่
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {statsCards.map((stat, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className={`text-sm ${stat.color}`}>{stat.change}</p>
                    </div>
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-gray-600" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card title="ยอดขายรายเดือน" className="hover:shadow-md transition-shadow">
                <div className="h-64 flex items-center justify-center text-gray-500">
                  <BarChart3 className="w-16 h-16" />
                  <span className="ml-2">แผนภูมิจะแสดงที่นี่</span>
                </div>
              </Card>

              <Card title="คำสั่งซื้อล่าสุด" className="hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">#{item}</div>
                        <div>
                          <p className="font-medium">คำสั่งซื้อ #000{item}</p>
                          <p className="text-sm text-gray-600">ลูกค้า: John Doe</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">฿{(Math.random() * 1000 + 500).toFixed(0)}</p>
                        <p className="text-sm text-gray-600">วันนี้</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardPage;