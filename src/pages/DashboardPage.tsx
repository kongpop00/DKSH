import React, { useState } from 'react';
import { Layout, Menu, Card, Button, Space, Badge, Avatar, Dropdown } from 'antd';
import { 
  ShoppingCart, 
  Package, 
  Users, 
  BarChart3, 
  Settings, 
  LogOut, 
  Bell,
  Search,
  Plus,
  TrendingUp,
  DollarSign
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from '../components/Logo';
import LanguageSwitcher from '../components/LanguageSwitcher';

const { Header, Sider, Content } = Layout;

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  const handleLogout = () => {
    navigate('/login');
  };

  const userMenu = (
    <Menu>
      <Menu.Item key="profile" icon={<Settings className="w-4 h-4" />}>
        {t('navigation.profile')}
      </Menu.Item>
      <Menu.Item key="settings" icon={<Settings className="w-4 h-4" />}>
        {t('navigation.settings')}
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" icon={<LogOut className="w-4 h-4" />} onClick={handleLogout}>
        {t('common.logout')}
      </Menu.Item>
    </Menu>
  );

  const menuItems = [
    { key: 'dashboard', icon: <BarChart3 className="w-4 h-4" />, label: t('navigation.dashboard') },
    { key: 'products', icon: <Package className="w-4 h-4" />, label: t('navigation.products') },
    { key: 'orders', icon: <ShoppingCart className="w-4 h-4" />, label: t('navigation.orders') },
    { key: 'customers', icon: <Users className="w-4 h-4" />, label: t('navigation.customers') },
    { key: 'analytics', icon: <TrendingUp className="w-4 h-4" />, label: t('navigation.analytics') },
    { key: 'settings', icon: <Settings className="w-4 h-4" />, label: t('navigation.settings') },
  ];

  const statsCards = [
    { title: t('dashboard.todaySales'), value: '฿125,430', change: '+12.5%', color: 'text-green-600' },
    { title: t('dashboard.newOrders'), value: '24', change: '+8.2%', color: 'text-blue-600' },
    { title: t('dashboard.totalProducts'), value: '1,234', change: '+3.1%', color: 'text-purple-600' },
    { title: t('dashboard.totalCustomers'), value: '567', change: '+5.7%', color: 'text-orange-600' },
  ];

  return (
    <Layout className="min-h-screen">
      <Sider 
        trigger={null} 
        collapsible 
        collapsed={collapsed}
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
        <Header className="bg-white shadow-sm px-6 flex items-center justify-between">
          <Button
            type="text"
            icon={collapsed ? <Package className="w-4 h-4" /> : <Package className="w-4 h-4" />}
            onClick={() => setCollapsed(!collapsed)}
            className="text-lg"
          />
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder={t('common.search')}
                className="pl-10 pr-4 py-2 border rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <Badge count={5}>
              <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
            </Badge>

            <LanguageSwitcher />
            
            <Dropdown overlay={userMenu} placement="bottomRight">
              <div className="flex items-center gap-2 cursor-pointer">
                <Avatar className="bg-pink-500">A</Avatar>
                <span className="text-sm font-medium">Admin User</span>
              </div>
            </Dropdown>
          </div>
        </Header>

        <Content className="p-6 bg-gray-50">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">{t('dashboard.title')}</h1>
              <Button 
                type="primary" 
                icon={<Plus className="w-4 h-4" />}
                className="bg-blue-600 hover:bg-blue-700"
              >
                {t('dashboard.addNewProduct')}
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
              <Card title={t('dashboard.monthlySales')} className="hover:shadow-md transition-shadow">
                <div className="h-64 flex items-center justify-center text-gray-500">
                  <BarChart3 className="w-16 h-16" />
                  <span className="ml-2">{t('dashboard.chartPlaceholder')}</span>
                </div>
              </Card>

              <Card title={t('dashboard.recentOrders')} className="hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                      <div className="flex items-center gap-3">
                        <Avatar className="bg-blue-100 text-blue-600">#{item}</Avatar>
                        <div>
                          <p className="font-medium">{t('dashboard.order')} #000{item}</p>
                          <p className="text-sm text-gray-600">{t('dashboard.customer')}: John Doe</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">฿{(Math.random() * 1000 + 500).toFixed(0)}</p>
                        <p className="text-sm text-gray-600">{t('dashboard.today')}</p>
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