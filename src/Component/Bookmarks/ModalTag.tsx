import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Cancel, Save } from '@/Constant';
import { ModalTagPropType } from '@/Type/SideBarType';

const ModalTag = ({ tagToggle, value }: ModalTagPropType) => {
  return (
    <Modal className='fade show modal-bookmark' size='lg' isOpen={value} toggle={tagToggle}>
      <ModalHeader className='modal-title' toggle={tagToggle}>
        {'Create Tag'}
      </ModalHeader>
      <ModalBody>
        <Form className='form-bookmark needs-validation'>
          <div className='form-row'>
            <FormGroup className='col-md-12'>
              <Label>{'Tag Name'}</Label>
              <Input type='text' />
            </FormGroup>
            <FormGroup className='form-group col-md-12 mb-0 mb-3 mb-3'>
              <Label>{'Tag color'}</Label>
              <Input type='color' className='fill-color form-control' defaultValue='#26695c' />
            </FormGroup>
          </div>
          <Button color='secondary' onClick={tagToggle}>
            {Save}
          </Button>
          &nbsp;&nbsp;
          <Button color='primary' onClick={tagToggle}>
            {Cancel}
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};
export default ModalTag;
