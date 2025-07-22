import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { useTranslation } from 'react-i18next';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import StyleExamplePage from './pages/StyleExamplePage';

import ButtonExamples from './components/btn/ButtonExamples';
import './i18n';
import './index.css';
import CheckCodePage from './pages/Login/CheckCode';
import Locker from './pages/Login/Locker';
import Navbar from './components/Navbar';
import LockerPincode from './pages/Login/LockerPincode';
import Policies from './pages/Register/Policies';
import OrganizationInformation from './pages/Register/OrganizationInformation';
import Organizationpreview from './pages/Register/Organizationpreview';

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
    colorBgPrimary: '#1B4DB1',
    colorBgSubPrimary: '#3366CC',
    colorBgSuccess: '#52c41a',
    colorBgWarning: '#faad14',
    colorBgError: '#ff4d4f',
    colorBgInfo: '#1890ff',
    
    // Text colors
    colorTextPrimary: '#1B4DB1',
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
  const { i18n } = useTranslation();

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
      <div dir={i18n.language === 'th' ? 'ltr' : 'ltr'}>
        <Router>
          <div className="min-h-screen bg-gray-50 ">
            <Routes>
              {/* Routes without Navbar */}
              <Route path="/" element={<LoginPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/check-code" element={<CheckCodePage />} />

              {/* Routes with Navbar */}
              {[
                { path: '/locker', element: <Locker /> },
                { path: '/register', element: <RegisterPage /> },
                { path: '/register-policies', element: <Policies /> },
                { path: '/dashboard', element: <DashboardPage /> },
                { path: '/style-example', element: <StyleExamplePage /> },
                { path: '/button-examples', element: <ButtonExamples /> },
                { path: '/lockerPincode', element: <LockerPincode /> },
                { path: '/organization-information', element: <OrganizationInformation /> },
                { path: '/organization-preview', element: <Organizationpreview /> },
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