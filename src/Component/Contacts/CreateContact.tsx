import { Fragment, useState } from 'react';
import { Users } from 'react-feather';
import { Row, Col, Modal, ModalBody, Label, Input, FormGroup, Form, Button } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { NewContacts, AddContacts, Name, Mobile, Save, Cancel, Email, Phone, LastName, Work, Other, AssetsImagePath } from '@/Constant';
import { useDispatch } from 'react-redux';
import { createUser } from '@/Redux/Slices/ContactReducer';
import { CreateContactType } from '@/Type/SideBarType';

const CreateContact = ({ empty }: CreateContactType) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const AddContact = (data: any) => {
    if (data !== undefined) {
      dispatch(createUser({ data, defaultUser: `${AssetsImagePath}/user/user.png` }));
      setModal(false);
    }
  };
  return (
    <Fragment>
      <button className={`badge-light btn-block btn-mail w-100 ${empty ? '' : 'emptyContact'} btn btn-primery`} onClick={toggle}>
        <Users className='me-2' />
        {NewContacts}
      </button>
      <Modal isOpen={modal} toggle={toggle} size='lg'>
        <div className='modal-header'>
          <h5 className='modal-title'>{AddContacts}</h5>
          <Button color='transprant' className='btn-close' onClick={toggle} type='button'></Button>
        </div>
        <ModalBody>
          <Form className='form-bookmark needs-validation' onSubmit={handleSubmit(AddContact)}>
            <div className='form-row'>
              <FormGroup className='col-md-12'>
                <Row>
                  <Col sm='6'>
                    <Label>{Name}</Label>
                    <input className='form-control' type='text' {...register('name', { required: true })} />
                    <span style={{ color: 'red' }}>{errors.name && 'First name is required'}</span>
                  </Col>
                  <Col sm='6'>
                    <Label>{LastName}</Label>
                    <input className='form-control' type='text' {...register('surname', { required: true })} />
                    <span style={{ color: 'red' }}>{errors.surname && 'Last name is required'}</span>
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup className='col-md-12'>
                <Label>{Email}</Label>
                <input className='form-control' type='text' {...register('email', { required: true })} />
                <span style={{ color: 'red' }}>{errors.email && 'Please enter email.'}</span>
              </FormGroup>
              <FormGroup className='col-md-12'>
                <Row>
                  <Col sm='6'>
                    <Label>{Phone}</Label>
                    <input className='form-control' type='number' {...register('mobile', { required: true })} />
                    <span style={{ color: 'red' }}>{errors.mobile && 'Please enter number max 9 digit'}</span>
                  </Col>
                  <Col sm='6'>
                    <Label>{Mobile}</Label>
                    <Input type='select' className='form-control'>
                      <option value='1'>{Mobile}</option>
                      <option value='2'>{Work}</option>
                      <option value='3'>{Other}</option>
                    </Input>
                  </Col>
                </Row>
              </FormGroup>
            </div>
            <Button color='secondary' className='me-1' type='submit'>
              {Save}
            </Button>
            &nbsp;
            <Button color='primary' onClick={toggle}>
              {Cancel}
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};
export default CreateContact;
