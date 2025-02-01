import { useRef } from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';
import ReactToPrint from 'react-to-print';
import { Cancel, PrintViews, Print } from '@/Constant';
import Printpreview from './printpreview';
import { PrintModalProps, userCallbackUser } from './ContactType';

const PrintModal = ({ printmodal, selectedUser, toggleCallback }: PrintModalProps) => {
  const printModalToggle = () => {
    toggleCallback(false);
  };

  const componentRef = useRef();
  return (
    <Modal isOpen={printmodal} toggle={printModalToggle}>
      <div className='modal-header'>
        <h5 className='modal-title'>{PrintViews}</h5>
        <Button color='transprant' className='btn-close' onClick={printModalToggle}></Button>
      </div>
      <ModalBody className='list-persons'>
        <Printpreview selectedUser={selectedUser} />
        <ReactToPrint
          trigger={() => (
            <Button color='secondary' className='me-1'>
              {Print}
            </Button>
          )}
          content={() => componentRef?.current || null}
        />
        &nbsp;&nbsp;
        <Button color='primary' onClick={printModalToggle}>
          {Cancel}
        </Button>
      </ModalBody>
    </Modal>
  );
};

export default PrintModal;
