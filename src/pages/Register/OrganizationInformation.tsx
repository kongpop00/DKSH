import React, { useState } from 'react';
import { Form, Input, Radio, Select, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import BgPattern from '../../components/BgPattern';

const { TextArea } = Input;
const { Option } = Select;

interface OrganizationFormData {
  organizationType: string;
  services: string;
  namePrefix: string;
  firstName: string;
  lastName?: string;
  email: string;
  phone: string;
  organizationName: string;
  description?: string;
  country: string;
  province: string;
  district?: string;
  subdistrict?: string;
  postalCode?: string;
  documents?: File[];
}

const OrganizationInformation: React.FC = () => {
  const [form] = Form.useForm();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: OrganizationFormData) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Organization Info:', values);
      message.success(t('organization.submitSuccess'));
      navigate('/dashboard');
    } catch {
      message.error(t('organization.submitError'));
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen relative ">
      <BgPattern />
      <div className="relative z-10 max-w-7xl mx-auto p-6 ">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            className="space-y-6"
          >
            {/* Organization Type Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {t('organization.type.title')}
              </h3>
              <Form.Item name="organizationType" rules={[{ required: true, message: t('organization.type.required') }]}>
                <Radio.Group className="w-full">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Radio value="international" className="text-sm">
                      {t('organization.type.international')}
                    </Radio>
                    <Radio value="domestic-public" className="text-sm">
                      {t('organization.type.domesticPublic')}
                    </Radio>
                    <Radio value="domestic-private" className="text-sm">
                      {t('organization.type.domesticPrivate')}
                    </Radio>
                    <Radio value="internal" className="text-sm">
                      {t('organization.type.internal')}
                    </Radio>
                  </div>
                </Radio.Group>
              </Form.Item>
            </div>

            {/* Services Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {t('organization.services.title')}
              </h3>
              <div className="text-sm text-gray-600 mb-4">
                {t('organization.services.subtitle')}
              </div>
              
              <Form.Item name="services" rules={[{ required: true, message: t('organization.services.required') }]}>
                <Radio.Group className="w-full">
                  <div className="space-y-3">
                    <Radio value="quality-testing" className="text-sm block">
                      {t('organization.services.qualityTesting')}
                    </Radio>
                    <div className="ml-6 space-y-2 text-sm">
                      <div>• {t('organization.services.cultureSupply')}</div>
                      <div>• {t('organization.services.publicDeposit')}</div>
                      <div>• {t('organization.services.conditionalDeposit')}</div>
                      <div>• {t('organization.services.safeDeposit')}</div>
                    </div>
                    
                    <Radio value="patent-search" className="text-sm block">
                      {t('organization.services.patentSearch')}
                    </Radio>
                    <div className="ml-6 space-y-2 text-sm">
                      <div>• {t('organization.services.strainPreservation')}</div>
                      <div>• {t('organization.services.microorganismEnumeration')}</div>
                      <div>• {t('organization.services.microorganismIdentification')}</div>
                      <div>• {t('organization.services.dataServices')}</div>
                    </div>
                  </div>
                </Radio.Group>
              </Form.Item>
            </div>

            {/* Contact Information Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {t('organization.contact.title')}
              </h3>
              <div className="text-sm text-gray-600 mb-4">
                {t('organization.contact.required')} <span className="text-red-500">*</span> {t('organization.contact.optional')}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <Form.Item 
                  name="namePrefix" 
                  label={t('organization.contact.namePrefix')}
                  rules={[{ required: true, message: t('organization.contact.namePrefixRequired') }]}
                >
                  <Input placeholder={t('organization.contact.namePrefixPlaceholder')} />
                </Form.Item>
                
                <Form.Item 
                  name="firstName" 
                  label={t('organization.contact.firstName')}
                  rules={[{ required: true, message: t('organization.contact.firstNameRequired') }]}
                >
                  <Input placeholder={t('organization.contact.firstNamePlaceholder')} />
                </Form.Item>
                
                <Form.Item 
                  name="lastName" 
                  label={t('organization.contact.lastName')}
                >
                  <Input placeholder={t('organization.contact.lastNamePlaceholder')} />
                </Form.Item>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <Form.Item 
                  name="email" 
                  label={t('organization.contact.email')}
                  rules={[
                    { required: true, message: t('organization.contact.emailRequired') },
                    { type: 'email', message: t('organization.contact.emailInvalid') }
                  ]}
                >
                  <Input placeholder={t('organization.contact.emailPlaceholder')} />
                </Form.Item>
                
                <Form.Item 
                  name="phone" 
                  label={t('organization.contact.phone')}
                  rules={[{ required: true, message: t('organization.contact.phoneRequired') }]}
                >
                  <Input placeholder={t('organization.contact.phonePlaceholder')} />
                </Form.Item>
              </div>
            </div>

            {/* Organization Details Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {t('organization.details.title')}
              </h3>

              <Form.Item 
                name="organizationName" 
                label={t('organization.details.name')}
                rules={[{ required: true, message: t('organization.details.nameRequired') }]}
                className="mb-4"
              >
                <Input placeholder={t('organization.details.namePlaceholder')} />
              </Form.Item>

              <Form.Item 
                name="description" 
                label={t('organization.details.description')}
                className="mb-4"
              >
                <TextArea 
                  rows={4} 
                  placeholder={t('organization.details.descriptionPlaceholder')}
                  showCount
                  maxLength={500}
                />
              </Form.Item>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <Form.Item 
                  name="country" 
                  label={t('organization.details.country')}
                  rules={[{ required: true, message: t('organization.details.countryRequired') }]}
                >
                  <Select placeholder={t('organization.details.countryPlaceholder')}>
                    <Option value="thailand">{t('organization.details.thailand')}</Option>
                    <Option value="usa">{t('organization.details.usa')}</Option>
                    <Option value="japan">{t('organization.details.japan')}</Option>
                    <Option value="singapore">{t('organization.details.singapore')}</Option>
                  </Select>
                </Form.Item>
                
                <Form.Item 
                  name="province" 
                  label={t('organization.details.province')}
                  rules={[{ required: true, message: t('organization.details.provinceRequired') }]}
                >
                  <Input placeholder={t('organization.details.provincePlaceholder')} />
                </Form.Item>
                
                <Form.Item 
                  name="district" 
                  label={t('organization.details.district')}
                >
                  <Input placeholder={t('organization.details.districtPlaceholder')} />
                </Form.Item>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Form.Item 
                  name="subdistrict" 
                  label={t('organization.details.subdistrict')}
                >
                  <Input placeholder={t('organization.details.subdistrictPlaceholder')} />
                </Form.Item>
                
                <Form.Item 
                  name="postalCode" 
                  label={t('organization.details.postalCode')}
                >
                  <Input placeholder={t('organization.details.postalCodePlaceholder')} />
                </Form.Item>
              </div>
            </div>

            {/* File Upload Section */}
            <div className="mb-8 p-4 border-2 border-dashed border-blue-300 rounded-lg bg-blue-50">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {t('organization.upload.title')}
              </h3>
              
              <Form.Item name="documents">
                <Upload.Dragger
                  name="files"
                  multiple
                  beforeUpload={() => false}
                  className="bg-white"
                >
                  <p className="ant-upload-drag-icon">
                    <UploadOutlined className="text-2xl text-blue-500" />
                  </p>
                  <p className="ant-upload-text text-sm">
                    {t('organization.upload.dragText')}
                  </p>
                  <p className="ant-upload-hint text-xs text-gray-500">
                    {t('organization.upload.hint')}
                  </p>
                </Upload.Dragger>
              </Form.Item>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 pt-6 border-t">
              <Button 
                size="large"
                onClick={handleCancel}
                className="px-8"
              >
                {t('common.cancel')}
              </Button>
              <Button 
                type="primary" 
                htmlType="submit"
                size="large"
                loading={loading}
                className="px-8 bg-blue-600 hover:bg-blue-700"
              >
                {t('organization.submit')}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default OrganizationInformation;
