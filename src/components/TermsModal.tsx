import React from 'react';
import { Modal, Button } from 'antd';
import { X } from 'lucide-react';

interface TermsModalProps {
  visible: boolean;
  onClose: () => void;
  onAccept: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({ visible, onClose, onAccept }) => {
  const { t } = useTranslation();

  return (
    <Modal
      title={null}
      open={visible}
      onCancel={onClose}
      footer={null}
      width={600}
      className="terms-modal"
      closeIcon={<X className="w-5 h-5" />}
    >
      <div className="p-4">
        <h2 className="text-xl font-bold text-center mb-6">{t('terms.title')}</h2>
        
        <div className="max-h-96 overflow-y-auto text-sm leading-relaxed text-gray-700 space-y-4">
          <p>
            Lorem ipsum dolor sit amet consectetur. Tincidunt nec nunc sed semper nunc eu purus velit quis. 
            Turpis ut elementum faucibus tempor. Hac viverra eget eget malesuada semper vestibulum magna lectus. 
            Faucibus iaculis fermentum arcu cursus turpis nunc diam convallis egestas. Duis rutrum felis facilisis commodo.
          </p>
          
          <p>
            Est quam dolor sed faucibus nunc venenatis quisque augue risus. Quis ullamcorper sit tellus amet massa. 
            In tellus blandit in quis cursus diam lorem elementum. Vulputate urna sit blandit commodo. 
            Eget rhoncus sit sed felis felis felis aenean tincidunt. Varius malesuada at arcu risus.
          </p>
          
          <p>
            Adipiscing. Orci consequat cras in erat est purus nulla fusce risus. Ut feugiat velit massa 
            at metus. Lorem faucibus facilisis quis ut facilisi ante blandit eget. Sed ultrices orci at massa. 
            Scelerisque odio luctus risus diam odio non nec. Sit ultrices faucibus hac egestas risl.
          </p>
          
          <p>
            Lectus integer pretium mattis nec. Amet arcu ultrices tortor ultrices tellus ut adipiscing vehicula orci lectus. 
            Nibh ac sit habitant sed. Purus neque et feugiat convallis massa. Vestibulum etiam libero gravida est.
          </p>
        </div>
        
        <div className="flex gap-4 mt-6">
          <Button 
            onClick={onClose} 
            className="flex-1 h-12 rounded-lg"
            type="default"
          >
            {t('common.cancel')}
          </Button>
          <Button 
            onClick={onAccept} 
            className="flex-1 h-12 rounded-lg bg-blue-600 hover:bg-blue-700"
            type="primary"
          >
            {t('common.accept')}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default TermsModal;