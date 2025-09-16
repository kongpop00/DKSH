import React, { useState } from 'react';
import { Form, Input, Radio, Select, Button, Upload, message, Checkbox, Card } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import BgPattern from '../../components/BgPattern';

const { TextArea } = Input;
const { Option } = Select;

interface OrganizationFormData {
  organizationType: string;
  services: string[];
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
  const [fileRows, setFileRows] = useState<Array<{id: number, file?: File, description: string}>>([]);
  const [nextId, setNextId] = useState(1);

  const addFileRow = () => {
    setFileRows(prev => [...prev, { id: nextId, description: '' }]);
    setNextId(prev => prev + 1);
  };

  const handleFileUpload = (file: File, rowId: number) => {
    setFileRows(prev => 
      prev.map(row => row.id === rowId ? { ...row, file } : row)
    );
    return false; // Prevent auto upload
  };

  const handleDescriptionChange = (rowId: number, description: string) => {
    setFileRows(prev => 
      prev.map(row => row.id === rowId ? { ...row, description } : row)
    );
  };

  const handleFileRemove = (rowId: number) => {
    setFileRows(prev => prev.filter(row => row.id !== rowId));
  };

  const handleSubmit = async (values: OrganizationFormData) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Organization Info:', values);
      message.success(t('organization.submitSuccess'));
      navigate('/organization-preview');
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
      <div className="relative z-10 max-w-7xl mx-auto  bg-transparent p-6">
        <div className="rounded-lg shadow-lg ">
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            className="space-y-6"
          >
            {/* Organization Type Section */}
            <Card className="w-full mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {t('organization.type.title')}
              </h3>
              <Form.Item name="organizationType" rules={[{ required: true, message: t('organization.type.required') }]}>
                <Radio.Group className="w-full"> 
                  <div className="flex flex-row gap-4"> 
                    <Radio value="international" className="text-base"> 
                      {t('organization.type.international')} 
                    </Radio> 
                    <Radio value="domestic-public" className="text-base"> 
                      {t('organization.type.domesticPublic')} 
                    </Radio> 
                    <Radio value="domestic-private" className="text-base"> 
                      {t('organization.type.domesticPrivate')} 
                    </Radio> 
                    <Radio value="internal" className="text-base"> 
                      {t('organization.type.internal')} 
                    </Radio> 
                  </div> 
                </Radio.Group>
              </Form.Item>
            </Card>

            {/* Services Section */}
            <Card className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {t('organization.services.title')}
              </h3>
              <div className="text-base text-gray-600 mb-4">
                {t('organization.services.subtitle')}
              </div>
              
              {/* ส่วน checkbox สนใจบริการ */}
              <div className="mb-2">
                <Form.Item 
                  noStyle
                  shouldUpdate={(prevValues, currentValues) => {
                    const prev = prevValues as OrganizationFormData;
                    const current = currentValues as OrganizationFormData;
                    return JSON.stringify(prev?.services) !== JSON.stringify(current?.services);
                  }}
                >
                  {({ getFieldValue, setFieldsValue }) => {
                    const services = getFieldValue('services') || [];
                    const allServiceValues = [
                      'quality-testing', 'culture-supply', 'public-deposit', 
                      'conditional-deposit', 'safe-deposit', 'patent-search',
                      'strain-preservation', 'microorganism-enumeration', 
                      'microorganism-identification', 'data-services', 'other-services'
                    ];
                    
                    const isAllChecked = allServiceValues.every(value => services.includes(value));
                    const isIndeterminate = allServiceValues.some(value => services.includes(value)) && !isAllChecked;
                    
                    return (
                      <Checkbox
                        indeterminate={isIndeterminate}
                        checked={isAllChecked}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFieldsValue({ services: allServiceValues });
                          } else {
                            setFieldsValue({ services: [] });
                          }
                        }}
                        className="text-base"
                      >
                        {t('organization.services.interestedAll')}
                      </Checkbox>
                    );
                  }}
                </Form.Item>
              </div>

              {/* เส้นแบ่ง */}
              <div className="border-t border-gray-700 mb-6"></div>
              
              <Form.Item name="services" rules={[{ required: true, message: t('organization.services.required') }]}> 
                <Checkbox.Group className="w-full"> 
                  <div className="space-y-2">
                    <div className="flex items-center text-base">
                      <Checkbox value="quality-testing" className="mr-2" />
                      {t('organization.services.qualityTesting')}
                    </div>
                    <div className="flex items-center text-base">
                      <Checkbox value="culture-supply" className="mr-2" />
                      {t('organization.services.cultureSupply')}
                    </div>
                    <div className="flex items-center text-base">
                      <Checkbox value="public-deposit" className="mr-2" />
                      {t('organization.services.publicDeposit')}
                    </div>
                    <div className="flex items-center text-base">
                      <Checkbox value="conditional-deposit" className="mr-2" />
                      {t('organization.services.conditionalDeposit')}
                    </div>
                    <div className="flex items-center text-base">
                      <Checkbox value="safe-deposit" className="mr-2" />
                      {t('organization.services.safeDeposit')}
                    </div>
                    <div className="flex items-center text-base">
                      <Checkbox value="patent-search" className="mr-2" />
                      {t('organization.services.patentSearch')}
                    </div>
                    <div className="flex items-center text-base">
                      <Checkbox value="strain-preservation" className="mr-2" />
                      {t('organization.services.strainPreservation')}
                    </div>
                    <div className="flex items-center text-base">
                      <Checkbox value="microorganism-enumeration" className="mr-2" />
                      {t('organization.services.microorganismEnumeration')}
                    </div>
                    <div className="flex items-center text-base">
                      <Checkbox value="microorganism-identification" className="mr-2" />
                      {t('organization.services.microorganismIdentification')}
                    </div>
                    <div className="flex items-center text-base">
                      <Checkbox value="data-services" className="mr-2" />
                      {t('organization.services.dataServices')}
                    </div>
                    <div className="flex items-center text-base">
                      <Checkbox value="other-services" className="mr-2" />
                      งานบริการอื่นๆ (Other services)
                    </div>
                  </div>
                </Checkbox.Group> 
              </Form.Item>

              {/* Other Services Text Input */}
              <Form.Item 
                noStyle
                shouldUpdate={(prevValues, currentValues) => {
                  const prev = prevValues as OrganizationFormData;
                  const current = currentValues as OrganizationFormData;
                  return JSON.stringify(prev?.services) !== JSON.stringify(current?.services);
                }}
              >
                {({ getFieldValue }) => {
                  const services = getFieldValue('services') || [];
                  return services.includes('other-services') ? (
                    <div className="mt-4">
                      <Form.Item name="otherServicesDetail">
                        <Input 
                          placeholder="ระบุข้อมูล"
                          size="large"
                          className="w-64"
                        />
                      </Form.Item>
                    </div>
                  ) : null;
                }}
              </Form.Item>
            </Card>

            {/* User Information Section */}
            <Card className="mb-8 p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {t('userInfo.title')}
              </h3>

              {/* ประเภทผู้ใช้งาน */}
              <Form.Item name="userType" label={<span className="text-base">{t('userInfo.type')}</span>} className="mb-4" rules={[{ required: true, message: t('userInfo.typeRequired') }]}>
                <Radio.Group className="flex flex-row gap-6">
                  <Radio value="individual" className="text-base">{t('userInfo.individual')}</Radio>
                  <Radio value="corporate" className="text-base">{t('userInfo.corporate')}</Radio>
                </Radio.Group>
              </Form.Item>

              {/* ข้อมูลส่วนตัว */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <Form.Item name="citizenId" label={<span className="text-base">{t('userInfo.citizenId')}</span>} rules={[{ required: true, message: t('userInfo.citizenIdRequired') }]}>
                  <Input size="large" placeholder={t('userInfo.placeholder')} className="text-base" />
                </Form.Item>
                <Form.Item name="fullName" label={<span className="text-base">{t('userInfo.fullName')}</span>} rules={[{ required: true, message: t('userInfo.fullNameRequired') }]}>
                  <Input size='large' placeholder={t('userInfo.placeholder')} className="text-base" />
                </Form.Item>
                <Form.Item name="fullNameEng" label={<span className="text-base">{t('userInfo.fullNameEng')}</span>} rules={[{ required: true, message: t('userInfo.fullNameEngRequired') }]}>
                  <Input size="large" placeholder={t('userInfo.placeholder')} className="text-base" />
                </Form.Item>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <Form.Item name="gender" label={<span className="text-base">{t('userInfo.gender')}</span>} rules={[{ required: true, message: t('userInfo.genderRequired') }]}>
                  <Select size='large' placeholder={t('userInfo.genderPlaceholder')} className="text-base">
                    <Option value="male">{t('userInfo.male')}</Option>
                    <Option value="female">{t('userInfo.female')}</Option>
                    <Option value="other">{t('userInfo.other')}</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="receiptName" label={<span className="text-base">{t('userInfo.receiptName')}</span>}>
                  <Input size='large' placeholder={t('userInfo.placeholder')} className="text-base" />
                </Form.Item>
              </div>

              {/* หมายเหตุ (optional) */}
              <div className="mb-8  sm:w-[90%]  md:w-[60%]">
                <Form.Item name="note" label={<span className="text-base">{t('userInfo.note')}</span>}>
                  <TextArea 
                    rows={4}
                    placeholder={t('userInfo.notePlaceholder')}
                    showCount
                    maxLength={100}
                    className="text-base"
                  />
                </Form.Item>
              </div>

              {/* ข้อมูลติดต่อ Section */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {t('contactInfo.title')}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <Form.Item 
                  name="organizationPhone" 
                  label={<span className="text-base">{t('contactInfo.phone')}</span>}
                  rules={[{ required: true, message: t('contactInfo.phoneRequired') }]}
                >
                  <Input 
                    size="large"
                    placeholder={t('contactInfo.placeholder')}
                    className="text-base"
                    maxLength={10}
                    onKeyPress={(e) => {
                      if (!/[0-9\-+() ]/.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^0-9\-+() ]/g, '');
                      if (value.length <= 10) {
                        e.target.value = value;
                      } else {
                        e.target.value = value.substring(0, 10);
                      }
                    }}
                  />
                </Form.Item>
                <Form.Item 
                  name="organizationPhoneBackup" 
                  label={<span className="text-base">{t('contactInfo.phoneBackup')}</span>}
                >
                  <Input 
                    size='large' 
                    placeholder={t('contactInfo.placeholder')} 
                    className="text-base"
                    maxLength={10}
                    onKeyPress={(e) => {
                      if (!/[0-9\-+() ]/.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^0-9\-+() ]/g, '');
                      if (value.length <= 10) {
                        e.target.value = value;
                      } else {
                        e.target.value = value.substring(0, 10);
                      }
                    }}
                  />
                </Form.Item>
                <Form.Item 
                  name="organizationFax" 
                  label={<span className="text-base">{t('contactInfo.fax')}</span>}
                >
                  <Input 
                    size='large' 
                    placeholder={t('contactInfo.placeholder')} 
                    className="text-base"
                    maxLength={15}
                    onKeyPress={(e) => {
                      if (!/[0-9\-+() ]/.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^0-9\-+() ]/g, '');
                      if (value.length <= 15) {
                        e.target.value = value;
                      } else {
                        e.target.value = value.substring(0, 15);
                      }
                    }}
                  />
                </Form.Item>
              </div>

              {/* ที่อยู่ (บ้าน/สำนักงาน) */}
              <div className="mb-4 sm:w-[90%]  md:w-[60%]">
                <Form.Item 
                  name="organizationAddress" 
                  label={<span className="text-base">{t('contactInfo.address')}</span>}
                  rules={[{ required: true, message: t('contactInfo.addressRequired') }]}
                >
                  <TextArea 
                    rows={4}
                    placeholder={t('contactInfo.addressPlaceholder')}
                    showCount
                    maxLength={100}
                    className="text-base"
                  />
                </Form.Item>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <Form.Item 
                  name="subdistrict" 
                  label={<span className="text-base">{t('contactInfo.subdistrict')}</span>}
                  rules={[{ required: true, message: t('contactInfo.subdistrictRequired') }]}
                >
                  <Input size='large' placeholder={t('contactInfo.placeholder')} className="text-base" />
                </Form.Item>

                <Form.Item 
                  name="district" 
                  label={<span className="text-base">{t('contactInfo.district')}</span>}
                  rules={[{ required: true, message: t('contactInfo.districtRequired') }]}
                >
                  <Input size='large' placeholder={t('contactInfo.placeholder')} className="text-base" />
                </Form.Item>
                
                <Form.Item 
                  name="province" 
                  label={<span className="text-base">{t('contactInfo.province')}</span>}
                  rules={[{ required: true, message: t('contactInfo.provinceRequired') }]}
                >
                  <Input size='large' placeholder={t('contactInfo.placeholder')} className="text-base" />
                </Form.Item>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <Form.Item 
                  name="country" 
                  label={<span className="text-base">{t('contactInfo.country')}</span>}
                  rules={[{ required: true, message: t('contactInfo.countryRequired') }]}
                >
                  <Input size='large' placeholder={t('contactInfo.placeholder')} className="text-base" />
                </Form.Item>

                <Form.Item 
                  name="postalCode" 
                  label={<span className="text-base">{t('contactInfo.postalCode')}</span>}
                  rules={[{ required: true, message: t('contactInfo.postalCodeRequired') }]}
                >
                  <Input size='large' placeholder={t('contactInfo.postalCodePlaceholder')} className="text-base" />
                </Form.Item>
              </div>
            </Card>

           

            {/* File Upload Section */}
            <Card className="mb-8 p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {t('organization.upload.title')}
              </h3>
              
              {/* Add File Button */}
              <div className="mb-4">
                <Button 
                  type="primary" 
                  onClick={addFileRow}
                  className="bg-primary border-blue-600 px-6 rounded-[16px] text-base"
                >
                  {t('organization.upload.addFile')}
                </Button>
              </div>

              {/* File Rows */}
              {fileRows.map((row) => (
                <div key={row.id} className="flex items-center gap-2 p-2 bg-white   mb-2 ">
                  <Upload
                    name="files"
                    beforeUpload={(file) => handleFileUpload(file as File, row.id)}
                    showUploadList={false}
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"

                  >
                    <Button 
                      type="default"
                      className="min-w-auto text-left px-3 py-[18px] border-gray-300 bg-gray-50 rounded-md text-base"
                    >
                      {row.file ? row.file.name : t('organization.upload.selectFile')}
                    </Button>
                  </Upload>
                  <Input 
                    value={row.description}
                    onChange={(e) => handleDescriptionChange(row.id, e.target.value)}
                    placeholder={t('organization.upload.descriptionPlaceholder')}
                    size="small"
                    className="ml-2 flex-1 px-3 py-2 border-gray-300 bg-gray-50 rounded-md text-base"
                  />
                  <Button 
                    type="primary"
                    danger
                    onClick={() => handleFileRemove(row.id)}
                    size="small"
                    className="ml-2 px-4 py-5 rounded-[30px] bg-red-500 text-base"
                    icon={<DeleteOutlined />}
                  >
                    {t('organization.upload.delete')}
                  </Button>
                </div>
              ))}
            </Card>

            {/* Action Buttons */}
            <Card className="flex justify-end pt-2 border-t p-3 ">
              <Button 
                size="large"
                onClick={handleCancel}
                className="px-7 hover:bg-gray-400 rounded-[26px] h-[40px] text-base"
              >
                {t('common.back')}
              </Button>
              <Button 
                type="primary" 
                htmlType="submit"
                size="large"
                loading={loading}
                className="px-8 bg-primary hover:bg-blue-700 rounded-[26px] ml-4 h-[40px] text-base"
              >
                {t('common.next')}
              </Button>
            </Card>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default OrganizationInformation;
