import React from 'react';
import { Modal, Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const { Title, Text } = Typography;

interface CartModalProps {
  visible: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ visible, onClose }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleGoToHome = () => {
    onClose();
    navigate('/users/Home');
  };

  const handleGoToCart = () => {
    onClose();
    navigate('/users/cart');
  };

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      centered
      width={400}
      closeIcon={
        <div className="text-gray-500 hover:text-gray-700">
          ✕
        </div>
      }
      styles={{
        body: {
          padding: '10px 20px',
          textAlign: 'center'
        }
      }}
    >
      <div className="flex flex-col items-center space-y-2">
        {/* Icon รถเข็นพร้อม check mark */}
        <div className="relative">
          <div className="l p-6">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="100px" 
              height="100px" 
              viewBox="0 0 24 24"
              style={{ color: '#69C0FF' }}
            >
              <path 
                fill="currentColor" 
                d="M15.543 9.517a.75.75 0 1 0-1.086-1.034l-2.314 2.43l-.6-.63a.75.75 0 1 0-1.086 1.034l1.143 1.2a.75.75 0 0 0 1.086 0z"
              />
              <path 
                fill="currentColor" 
                fillRule="evenodd" 
                d="M1.293 2.751a.75.75 0 0 1 .956-.459l.301.106c.617.217 1.14.401 1.553.603c.44.217.818.483 1.102.899c.282.412.399.865.452 1.362l.011.108H17.12c.819 0 1.653 0 2.34.077c.35.039.697.101 1.003.209c.3.105.631.278.866.584c.382.496.449 1.074.413 1.66c-.035.558-.173 1.252-.338 2.077l-.01.053l-.002.004l-.508 2.47c-.15.726-.276 1.337-.439 1.82c-.172.51-.41.96-.837 1.308c-.427.347-.916.49-1.451.556c-.505.062-1.13.062-1.87.062H10.88c-1.345 0-2.435 0-3.293-.122c-.897-.127-1.65-.4-2.243-1.026c-.547-.576-.839-1.188-.985-2.042c-.137-.8-.15-1.848-.15-3.3V7.038c0-.74-.002-1.235-.043-1.615c-.04-.363-.109-.545-.2-.677c-.087-.129-.22-.25-.524-.398c-.323-.158-.762-.314-1.43-.549l-.26-.091a.75.75 0 0 1-.46-.957M5.708 6.87v2.89c0 1.489.018 2.398.13 3.047c.101.595.274.925.594 1.263c.273.288.65.472 1.365.573c.74.105 1.724.107 3.14.107h5.304c.799 0 1.33-.001 1.734-.05c.382-.047.56-.129.685-.231s.24-.26.364-.625c.13-.385.238-.905.4-1.688l.498-2.42v-.002c.178-.89.295-1.482.322-1.926c.026-.422-.04-.569-.101-.65a.6.6 0 0 0-.177-.087a3.2 3.2 0 0 0-.672-.134c-.595-.066-1.349-.067-2.205-.067zM5.25 19.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 0 0-4.5 0m2.25.75a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5m6.75-.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 0 0-4.5 0m2.25.75a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5" 
                clipRule="evenodd"
              />
            </svg>
          </div>
         
        </div>

        {/* ข้อความ */}
        <div className="space-y-3">
          <Title level={4} className="mb-0" style={{ color: '#333', fontSize: '22px', fontWeight: 'bold' }}>
            {t('cartModal.title')}
          </Title>
          <div className="space-y-1">
            <Text style={{ color: '#666', fontSize: '16px', display: 'block' }}>
              {t('cartModal.message1')}
            </Text>
            <Text style={{ color: '#666', fontSize: '16px', display: 'block' }}>
              {t('cartModal.message2')}
            </Text>
          </div>
        </div>

        {/* ปุ่ม */}
        <div className="flex space-x-3 w-full pt-4">
          <Button
            size="large"
            onClick={handleGoToHome}
            style={{
              flex: 1,
              height: '44px',
              fontSize: '16px',
              borderColor: '#1b4db1',
              color: '#1b4db1',
              borderRadius: '100px',
              fontWeight: '500',
            }}
          >
            {t('cartModal.backToHome')}
          </Button>
          <Button
            type="primary"
            size="large"
            onClick={handleGoToCart}
            style={{
              flex: 1,
              height: '44px',
              fontSize: '16px',
              backgroundColor: '#1b4db1',
          
              borderRadius: '100px'
            }}
          >
            {t('cartModal.goToCart')}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CartModal;
