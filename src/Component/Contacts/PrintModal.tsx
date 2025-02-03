import { useRef } from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import { Cancel, PrintViews, Print } from '@/Constant';
import Printpreview from './printpreview';
import { PrintModalProps, userCallbackUser } from './ContactType';

const PrintModal = ({ printmodal, selectedUser, toggleCallback }: PrintModalProps) => {
   const contentRef = useRef<HTMLDivElement | null>(null);

   const handlePrint = useReactToPrint({
     contentRef,
   });

   const printModalToggle = () => {
     toggleCallback(false);
     handlePrint();
   };

   const closePrintModal = () => {
     toggleCallback(false);
   };


  return (
    <Modal isOpen={printmodal} toggle={printModalToggle}>
      <div className="modal-header">
        <h5 className="modal-title">{PrintViews}</h5>
        <Button color="transprant" className="btn-close" onClick={printModalToggle}></Button>
      </div>
      <ModalBody className="list-persons">
        <Printpreview selectedUser={selectedUser} ref={contentRef} />
        <Button color="secondary" className="me-1" onClick={printModalToggle}>
          {Print}
        </Button>
        &nbsp;&nbsp;
        <Button color="primary" onClick={closePrintModal}>
          {Cancel}
        </Button>
      </ModalBody>
    </Modal>
  );
};

export default PrintModal;
