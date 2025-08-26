import React, { useState, useEffect } from 'react';
import { Button, Checkbox } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import BgPattern from '../../components/BgPattern';
import { privacyPolicyTH, privacyPolicyEN, microbialCenterPolicyTH, microbialCenterPolicyEN, serviceAgreementPolicyTH, serviceAgreementPolicyEN, PolicySection, PolicySubsection } from '../../mock/policy';

const Policies: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState({
    allPolicies: false
  });
  const [isAtBottom, setIsAtBottom] = useState(false);

  // ตรวจสอบว่าผู้ใช้อยู่ที่ล่างสุดของหน้าหรือไม่
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // ถ้าเลื่อนมาถึงล่างสุด (ให้ tolerance 100px)
      setIsAtBottom(scrollTop + windowHeight >= documentHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // สร้างรายการนโยบายทั้งหมด
  const getPolicyData = () => {
    if (i18n.language === 'th') {
      return {
        privacy: privacyPolicyTH,
        microbial: microbialCenterPolicyTH,
        serviceAgreement: serviceAgreementPolicyTH
      };
    } else {
      return {
        privacy: privacyPolicyEN,
        microbial: microbialCenterPolicyEN,
        serviceAgreement: serviceAgreementPolicyEN
      };
    }
  };

  const policies = getPolicyData();

  const handleCheckboxChange = (key: keyof typeof checkedItems, checked: boolean) => {
    setCheckedItems(prev => ({
      ...prev,
      [key]: checked
    }));
  };

  const allChecked = Object.values(checkedItems).every(Boolean);

  const handleAccept = () => {
    if (allChecked) {
      navigate('/organization-information');
    }
  };

  // ฟังก์ชันสำหรับเลื่อนหน้า
  const handleScrollAction = () => {
    if (isAtBottom) {
      // เลื่อนไปบนสุด
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // เลื่อนไปล่างสุด
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    }
  };

  const renderPolicySection = (section: PolicySection) => (
    <div key={section.id} className="">
      <div className="  text-gray-800  mt-2">{section.title}</div>
      
      {section.content && (
        <div className="text-gray-700 whitespace-pre-line  ">{section.content}</div>
      )}
      
      {section.subsections?.map((subsection: PolicySubsection) => (
        <div key={subsection.id} className="ml-4 mt-4 ">
          <div className="text-md  ">{subsection.title}</div>
          {subsection.content && (
            <div className="text-gray-700  ">{subsection.content}</div>
          )}
          {subsection.items && (
            <ul className=" pl-6 ">
              {subsection.items.map((item: string, index: number) => (
                <li key={index} className="text-gray-700 leading-relaxed">{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-6 md:p-8 relative">
      <BgPattern />
      <div className="max-w-6xl mx-auto relative z-10"> 
        {/* Header */}
       
        {/* Content Container */}
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-6">
          <div className="prose prose-sm sm:prose-base max-w-none text-gray-700 leading-relaxed text-justify">
            
            {/* นโยบายการคุ้มครองข้อมูลส่วนบุคคล */}
            <div className="mb-12">
              <div className="text-[31px] font-[500] text-gray-800 mb-6 text-center">
                {policies.privacy.title}
              </div>
              {policies.privacy.sections.map(renderPolicySection)}
            </div>

            {/* เส้นแบ่ง */}
            <div className="border-t-2 border-gray-200 my-8"></div>

            {/* นโยบายศูนย์รับฝากจุลินทรีย์ */}
            <div className="mb-12">
              <div className="text-[31px] font-[500] text-gray-800 mb-6 text-center">
                {policies.microbial.title}
              </div>
              {policies.microbial.sections.map(renderPolicySection)}
            </div>

            {/* เส้นแบ่ง */}
            <div className="border-t-2 border-gray-200 my-8"></div>

            {/* ข้อตกลงการให้บริการฝากเก็บสายพันธุ์จุลินทรีย์ */}
            <div className="mb-12">
              <div className="text-[31px] font-[500] text-gray-800 mb-6 text-center">
                {policies.serviceAgreement.title}
              </div>
              {policies.serviceAgreement.sections.map(renderPolicySection)}
            </div>

          </div>

          {/* Checkboxes */}
          <div className="space-y-4 mt-8 border-t pt-6  flex   items-end">
            <div className="flex gap-3">
              <Checkbox 
                checked={checkedItems.allPolicies}
                onChange={(e) => handleCheckboxChange('allPolicies', e.target.checked)}
                className='mb-3'
               
              />
              <span className="text-sm text-gray-700 leading-relaxed">
                {t('policies.checkboxes.allPolicies')}
              </span>
            </div>
          </div>
        </div>

        {/* Accept Button */}
        <div className="text-center">
          <Button
            type="primary"
            size="large"
            disabled={!allChecked}
            className={`border-none rounded-full px-16 py-3 h-auto font-medium text-lg ${
              allChecked 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            onClick={handleAccept}
          >
            {t('policies.acceptButton')}
          </Button>
        </div>

        {/* Floating Scroll Button */}
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 lg:bottom-6 lg:right-6 z-50">
          <Button
            type="primary"
            shape="circle"
            size="large"
            icon={isAtBottom ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
            className="w-20  sm:w-14  md:w-16  lg:w-14 lborder-none shadow-lg hover:shadow-xl transition-all bg-white text-black hover:text-blue-800 flex items-center justify-center"
            onClick={handleScrollAction}
          />
        </div>
      </div>
    </div>
  );
};

export default Policies;
