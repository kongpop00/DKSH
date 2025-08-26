import React, { useState } from 'react';
import { Button, Checkbox } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import BgPattern from '../../components/BgPattern';
import { privacyPolicyTH, privacyPolicyEN, PolicySection, PolicySubsection } from '../../mock/policy';

const Policies: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState({
    terms: false,
    privacy: false,
    cookies: false  
  });

  // ใช้ข้อมูลจาก mock policy.ts
  const policyData = i18n.language === 'th' ? privacyPolicyTH : privacyPolicyEN;

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

  const renderPolicySection = (section: PolicySection) => (
    <div key={section.id} className="">
      <div className="  text-gray-800  mt-4">{section.title}</div>
      
      {section.content && (
        <div className="text-gray-700 whitespace-pre-line  ">{section.content}</div>
      )}
      
      {section.subsections?.map((subsection: PolicySubsection) => (
        <div key={subsection.id} className="ml-4 mt-4 ">
          <div className="text-md  ">{subsection.title}</div>
          {subsection.content && (
            <div className="text-gray-700 whitespace-pre-line ">{subsection.content}</div>
          )}
          {subsection.items && (
            <ul className="    pl-6 space-y-3">
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
            {/* แสดงชื่อ policy */}
            <div className="text-[31px] font-[500] text-gray-800 mb-6 text-center">{policyData.title}</div>

            {/* แสดงเนื้อหา policy แต่ละ section */}
            {policyData.sections.map(renderPolicySection)}
          </div>

          {/* Checkboxes */}
          <div className="space-y-4 mt-8 border-t pt-6">
            <div className="flex items-start gap-3">
              <Checkbox 
                checked={checkedItems.terms}
                onChange={(e) => handleCheckboxChange('terms', e.target.checked)}
                className="mt-1" 
              />
              <span className="text-sm text-gray-700 leading-relaxed">
                {t('policies.checkboxes.terms')}
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Checkbox 
                checked={checkedItems.privacy}
                onChange={(e) => handleCheckboxChange('privacy', e.target.checked)}
                className="mt-1" 
              />
              <span className="text-sm text-gray-700 leading-relaxed">
                {t('policies.checkboxes.privacy')}
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Checkbox 
                checked={checkedItems.cookies}
                onChange={(e) => handleCheckboxChange('cookies', e.target.checked)}
                className="mt-1" 
              />
              <span className="text-sm text-gray-700 leading-relaxed">
                {t('policies.checkboxes.cookies')}
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
      </div>
    </div>
  );
};

export default Policies;
