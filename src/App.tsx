import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import StyleExamplePage from './pages/StyleExamplePage';
import ArticleDetail from './pages/ArticleDetail';
import ForgotPasswordPage from './pages/ForgotPassword/ForgotPasswordPage';
import ForgotPasswordReset from './pages/ForgotPassword/ForgotPasswordReset';
import ForgotPasswordComplete from './pages/ForgotPassword/ForgotPasswordComplete';

import ButtonExamples from './components/btn/ButtonExamples';
import './index.css';
import Navbar from './components/Navbar';
import Policies from './pages/Register/Policies';
import OrganizationInformation from './pages/Register/OrganizationInformation';
import Organizationpreview from './pages/Register/Organizationpreview';


// Admin pages
import UserManagement from './pages/admin/UserManagement';
import AdminManagement from './pages/admin/AdminManagement';
import OrderManagement from './pages/admin/OrderManagement';
import PaymentManagement from './pages/admin/PaymentManagement';
import DeliveryManagement from './pages/admin/DeliveryManagement';
import PromotionManagement from './pages/admin/PromotionManagement';
import Settings from './pages/admin/Settings';

// Layout wrapper for pages that need Navbar
function WithNavbar({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar/>
      <div>{children}</div>
    </>
  );
}

const theme = {
  token: {
    colorPrimary: '#1B4DB1',
    colorSuccess: '#52C41A',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    colorInfo: '#1890ff',
    colorTextBase: '#333333',
    colorBgBase: '#ffffff',
    borderRadius: 8,
    fontSize: 14,
    fontFamily: "'Kanit'",
    
    // Typography font sizes
    fontSizeH1: 32,
    fontSizeH2: 28,
    fontSizeH3: 24,
    fontSizeH4: 20,
    fontSizeH5: 18,
    fontSizeH6: 16,
    fontSizeBody: 14,
    fontSizeBodyLarge: 16,
    fontSizeBodySmall: 12,
    fontSizeCaption: 11,
    
    // Line heights
    lineHeightH1: 1.2,
    lineHeightH2: 1.25,
    lineHeightH3: 1.3,
    lineHeightH4: 1.35,
    lineHeightH5: 1.4,
    lineHeightH6: 1.45,
    lineHeightBody: 1.5,
    
    // Font weights
    fontWeightH1: 700,
    fontWeightH2: 600,
    fontWeightH3: 600,
    fontWeightH4: 500,
    fontWeightH5: 500,
    fontWeightH6: 500,
    fontWeightBody: 400,
    fontWeightBold: 600,
    
    // Background colors
    colorBgPrimary: '#0050B3',
    colorBgSubPrimary: '#3366CC',
    colorBgSuccess: '#52c41a',
    colorBgWarning: '#faad14',
    colorBgError: '#ff4d4f',
    colorBgInfo: '#1890ff',
    
    // Text colors
    colorTextPrimary: '#0050B3',
    colorTextSubPrimary: '#3366CC',
    colorTextSuccess: '#52c41a',
    colorTextWarning: '#faad14',
    colorTextError: '#ff4d4f',
    colorTextInfo: '#1890ff',
  },
  components: {
    Button: {
      borderRadius: 0,
      paddingContentHorizontal: 24,
      paddingContentVertical: 12,
    },
    Input: {
      borderRadius: 12,
      paddingBlock: 12,
      paddingInline: 16,
    },
    Card: {
      borderRadius: 12,
    },
    Typography: {
      titleMarginTop: 0,
      titleMarginBottom: 0.5,
      h1FontSize: 32,
      h2FontSize: 28,
      h3FontSize: 24,
      h4FontSize: 20,
      h5FontSize: 18,
      h6FontSize: 16,
    },
  },
};

function App() {
  // Quick navigation with keyboard shortcuts (for development)
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case '1':
            e.preventDefault();
            window.location.href = '/login';
            break;
          case '2':
            e.preventDefault();
            window.location.href = '/dashboard';
            break;
          case '3':
            e.preventDefault();
            window.location.href = '/style-example';
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <ConfigProvider theme={theme} >
      <div>
        <Router>
          <div className="min-h-screen bg-gray-50 ">
            <Routes>
              {/* Routes without Navbar */}
              <Route path="/" element={<Navigate to="/admin/users" replace />} />
              <Route path="/login" element={<LoginPage />} />

              <Route path="/article/:id" element={<ArticleDetail />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />

              <Route path="/forgot-password/reset" element={<ForgotPasswordReset />} />
              <Route path="/forgot-password/complete" element={<ForgotPasswordComplete />} />

              {/* Routes with Navbar */}
              {[

                { path: '/register', element: <RegisterPage /> },
                { path: '/register-policies', element: <Policies /> },
                { path: '/dashboard', element: <DashboardPage /> },
                { path: '/style-example', element: <StyleExamplePage /> },
                { path: '/button-examples', element: <ButtonExamples /> },

                { path: '/organization-information', element: <OrganizationInformation /> },
                { path: '/organization-preview', element: <Organizationpreview /> },
                { path: '/shopping/:productId', element: <div>Shopping page removed</div> },
                
                // Admin routes
                { path: '/admin/users', element: <UserManagement /> },
                { path: '/admin/admins', element: <AdminManagement /> },
                { path: '/admin/orders', element: <OrderManagement /> },
                { path: '/admin/payments', element: <PaymentManagement /> },
                { path: '/admin/deliveries', element: <DeliveryManagement /> },
                { path: '/admin/promotions', element: <PromotionManagement /> },
                { path: '/admin/settings', element: <Settings /> },

              ].map(({ path, element }) => (
                <Route key={path} path={path} element={<WithNavbar>{element}</WithNavbar>} />
              ))} 
            </Routes>
      
        
          </div>
        </Router>
      </div>
    </ConfigProvider>
  );
}

export default App;