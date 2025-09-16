import React, { useState } from 'react';
import { Card, Button, Checkbox } from 'antd';
import BgPattern from '../../components/BgPattern';
import MessagePage from '../MessagePage';

const Organizationpreview: React.FC = () => {

  const [showMessage, setShowMessage] = useState(false);

  const handleConfirmVerification = () => {
    setShowMessage(true);
  };

  const handleBack = () => {
    // ย้อนกลับไปหน้าก่อนหน้า หรือสามารถใช้ window.history.back()
    console.log('Back button clicked');
  };

  // แสดง MessagePage เมื่อ showMessage เป็น true
  if (showMessage) {
    return (
      <MessagePage
        status="success"
        titleKey="message.success.title"
        description1Key="message.success.description1"
        buttonTextKey="message.success.button"
        navigateTo="/"
        
      />
    );
  }

  // Mock data for preview
  const data = {
    account: {
      email: 'Kongjop@hotmail.com',
      password: '********',
    },
    organizationType: 'International',
    userInfo: {
      type: 'บุคคลธรรมดา',
      citizenId: '1542486487774',
      firstName: 'เกษียร ธนชาติ',
      firstNameEng: 'Kongjo Yamasaki',
      gender: 'ชาย',
      customerCode: '-',
      avatar: 'https://i.imgur.com/0y0y0y0.png',
    },
    contact: {
      phone: '08446494700',
      address: '123/45 ซอยสุขสันต์ ถนนร่มเย็น',
      subdistrict: 'ลาดยาว',
      district: 'จตุจักร',
      province: 'กรุงเทพมหานคร',
      country: 'ไทย',
      postalCode: '10900',
    },
    documents: [
      { name: 'xxx.png', description: 'หนังสือมอบอำนาจ', type: 'เอกสารรับรองตัวตน' },
    ],
  };

  return (
    <div className="relative min-h-screen bg-transparent">
      <BgPattern />
      <div className="relative z-10 min-h-screen py-8">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section: สร้างบัญชี */}
          <Card className="mb-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{t('preview.account.title')}</h2>
            <div className="grid grid-cols-4 border border-gray-200 rounded-lg ">
              <div className="px-6 py-3 font-bold bg-gray-50 border-r border-gray-200 text-base">{t('preview.account.email')}</div>
              <div className="px-6 py-3 bg-white border-r border-gray-200 text-base">{data.account.email}</div>
              <div className="px-6 py-3 font-bold bg-gray-50 border-r border-gray-200 text-base">{t('preview.account.password')}</div>
              <div className="px-6 py-3 bg-white text-base">{data.account.password}</div>
            </div>
          </Card>

          {/* Section: รูปแบบองค์กร */}
          <Card className="mb-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{t('preview.organization.title')}</h2>
            <div className="grid grid-cols-2 border border-gray-200 rounded-lg w-1/2">
              <div className="px-6 py-3 font-bold bg-gray-50 border-r border-gray-200 text-base">{t('preview.organization.type')}</div>
              <div className="px-6 py-3 bg-white text-base">{data.organizationType}</div>
            </div>
          </Card>

          {/* Section: รูปแบบบริการ */}

          <Card className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {t('organization.services.title')}
            </h3>
            <div className="text-base text-gray-600 mb-4">
              {t('organization.services.subtitle')}
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-base text-gray-400">
                <Checkbox value="quality-testing" disabled checked className="mr-2" />
                {t('organization.services.qualityTesting')}
              </div>
              <div className="flex items-center text-base text-gray-400">
                <Checkbox value="culture-supply" disabled checked className="mr-2" />
                {t('organization.services.cultureSupply')}
              </div>
              <div className="flex items-center text-base text-gray-400">
                <Checkbox value="public-deposit" disabled checked className="mr-2" />
                {t('organization.services.publicDeposit')}
              </div>
              <div className="flex items-center text-base text-gray-400">
                <Checkbox value="conditional-deposit" disabled checked className="mr-2" />
                {t('organization.services.conditionalDeposit')}
              </div>
              <div className="flex items-center text-base text-gray-400">
                <Checkbox value="safe-deposit" disabled checked className="mr-2" />
                {t('organization.services.safeDeposit')}
              </div>
              <div className="flex items-center text-base text-gray-400">
                <Checkbox value="patent-search" disabled checked className="mr-2" />
                {t('organization.services.patentSearch')}
              </div>
              <div className="flex items-center text-base text-gray-400">
                <Checkbox value="strain-preservation" disabled checked className="mr-2" />
                {t('organization.services.strainPreservation')}
              </div>
              <div className="flex items-center text-base text-gray-400">
                <Checkbox value="microorganism-enumeration" disabled checked className="mr-2" />
                {t('organization.services.microorganismEnumeration')}
              </div>
              <div className="flex items-center text-base text-gray-400">
                <Checkbox value="microorganism-identification" disabled checked className="mr-2" />
                {t('organization.services.microorganismIdentification')}
              </div>
              <div className="flex items-center text-base text-gray-400">
                <Checkbox value="data-services" disabled checked className="mr-2" />
                {t('organization.services.dataServices')}
              </div>
            </div>
          </Card>

          {/* Section: ข้อมูลผู้ใช้งาน */}
          <Card className="mb-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{t('preview.userInfo.title')}</h2>
            <div className="grid grid-cols-4 border border-gray-200 rounded-lg">
              <div className="px-6 py-3 font-bold bg-gray-50 border-r border-b border-gray-200 text-base">{t('preview.userInfo.type')}</div>
              <div className="px-6 py-3 bg-white border-r border-b border-gray-200 text-base">{data.userInfo.type}</div>
              <div className="px-6 py-3 font-bold bg-gray-50 border-r border-b border-gray-200 text-base">{t('preview.userInfo.citizenId')}</div>
              <div className="px-6 py-3 bg-white border-b border-gray-200 text-base">{data.userInfo.citizenId}</div>
              
              <div className="px-6 py-3 font-bold bg-gray-50 border-r border-b border-gray-200 text-base">{t('preview.userInfo.fullName')}</div>
              <div className="px-6 py-3 bg-white border-r border-b border-gray-200 text-base">{data.userInfo.firstName}</div>
              <div className="px-6 py-3 font-bold bg-gray-50 border-r border-b border-gray-200 text-base">{t('preview.userInfo.fullNameEng')}</div>
              <div className="px-6 py-3 bg-white border-b border-gray-200 text-base">{data.userInfo.firstNameEng}</div>
              
              <div className="px-6 py-3 font-bold bg-gray-50 border-r border-gray-200 text-base">{t('preview.userInfo.gender')}</div>
              <div className="px-6 py-3 bg-white border-r border-gray-200 text-base">{data.userInfo.gender}</div>
              <div className="px-6 py-3 font-bold bg-gray-50 border-r border-gray-200 text-base">{t('preview.userInfo.customerCode')}</div>
              <div className="px-6 py-3 bg-white flex items-center text-base">
                <span className="mr-2">-</span>
              </div>
            </div>
          </Card>

          {/* Section: ข้อมูลติดต่อ */}
          <Card className="mb-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{t('preview.contact.title')}</h2>
            <div className="grid grid-cols-4 border border-gray-200 rounded-lg">
              <div className="px-6 py-3 font-bold bg-gray-50 border-r border-b border-gray-200 text-base">{t('preview.contact.phone')}</div>
              <div className="px-6 py-3 bg-white border-r border-b border-gray-200 text-base">{data.contact.phone}</div>
              <div className="px-6 py-3 font-bold bg-gray-50 border-r border-b border-gray-200 text-base">{t('preview.contact.address')}</div>
              <div className="px-6 py-3 bg-white border-b border-gray-200 text-base">{data.contact.address}</div>
              
              <div className="px-6 py-3 font-bold bg-gray-50 border-r border-b border-gray-200 text-base">{t('preview.contact.subdistrict')}</div>
              <div className="px-6 py-3 bg-white border-r border-b border-gray-200 text-base">{data.contact.subdistrict}</div>
              <div className="px-6 py-3 font-bold bg-gray-50 border-r border-b border-gray-200 text-base">{t('preview.contact.district')}</div>
              <div className="px-6 py-3 bg-white border-b border-gray-200 text-base">{data.contact.district}</div>
              
              <div className="px-6 py-3 font-bold bg-gray-50 border-r border-b border-gray-200 text-base">{t('preview.contact.province')}</div>
              <div className="px-6 py-3 bg-white border-r border-b border-gray-200 text-base">{data.contact.province}</div>
              <div className="px-6 py-3 font-bold bg-gray-50 border-r border-b border-gray-200 text-base">{t('preview.contact.country')}</div>
              <div className="px-6 py-3 bg-white border-b border-gray-200 text-base">{data.contact.country}</div>
              
              <div className="px-6 py-3 font-bold bg-gray-50 border-r border-gray-200 text-base">{t('preview.contact.postalCode')}</div>
              <div className="px-6 py-3 bg-white border-r border-gray-200 text-base">{data.contact.postalCode}</div>
              <div className="px-6 py-3 bg-gray-50"></div>
              <div className="px-6 py-3 bg-white"></div>
            </div>
          </Card>

       

          {/* Section: เอกสารที่เกี่ยวข้อง */}
          <Card className="mb-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{t('preview.documents.title')}</h2>
            <div className="grid grid-cols-3 border border-gray-200 rounded-lg">
              <div className="px-6 py-3 font-bold bg-gray-50 border-r border-b border-gray-200 text-base">{t('preview.documents.fileName')}</div>
              <div className="px-6 py-3 font-bold bg-gray-50 border-r border-b border-gray-200 text-base">{t('preview.documents.description')}</div>
              <div className="px-6 py-3 font-bold bg-gray-50 border-b border-gray-200 text-base">{t('preview.documents.type')}</div>
              
              <div className="px-6 py-3 bg-white border-r border-gray-200 text-base">
                <a href="#" className="text-blue-600">{data.documents[0].name}</a>
              </div>
              <div className="px-6 py-3 bg-white border-r border-gray-200 text-base">{data.documents[0].description}</div>
              <div className="px-6 py-3 bg-white text-base">{data.documents[0].type}</div>
            </div>
          </Card>

          {/* Action Buttons */}
          <Card className="flex justify-end gap-4 mt-8 p-2">
            <Button size="large" className="px-7 rounded-[26px] h-[40px] mr-3 text-base" onClick={handleBack}>
              {t('common.back')}
            </Button>
            <Button type="primary" size="large" className="px-8 rounded-[26px] h-[40px] text-base" onClick={handleConfirmVerification}>
              {t('common.confirmVerification')}
            </Button>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default Organizationpreview;
