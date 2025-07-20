import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, Space } from 'antd';

const DevNavigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const routes = [
    { path: '/login', label: 'Login', color: 'default' },
    { path: '/register', label: 'Register', color: 'default' },
    { path: '/dashboard', label: 'Dashboard', color: 'primary' },
    { path: '/style-example', label: 'Style Example', color: 'default' },
    { path: '/button-examples', label: 'Button Examples', color: 'default' },
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white p-3 rounded-lg shadow-lg border">
      <div className="text-xs text-gray-500 mb-2">Quick Navigation</div>
      <Space wrap size="small">
        {routes.map((route) => (
          <Button
            key={route.path}
            size="small"
            type={location.pathname === route.path ? 'primary' : 'default'}
            onClick={() => navigate(route.path)}
            className="text-xs"
          >
            {route.label}
          </Button>
        ))}
      </Space>
      <div className="text-xs text-gray-400 mt-2">
        Shortcuts: Ctrl+1 (Login), Ctrl+2 (Dashboard), Ctrl+3 (Styles)
      </div>
    </div>
  );
};

export default DevNavigation;
