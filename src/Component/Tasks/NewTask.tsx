import { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Modal, ModalBody, Form, FormGroup, Input, Label, Row, Button } from 'reactstrap';
import { CheckCircle } from 'react-feather';
import { AddTask, TaskTitle, Collection, General, Description, Save, Cancel, NewTask } from '@/Constant';
import { useDispatch } from 'react-redux';
import { AddNewTask } from '@/Redux/Slices/TaskReducer';
const NewTaskClass = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [addModal, setaddModal] = useState(false);
  const addToggle = () => {
    setaddModal(!addModal);
  };
  const dispatch = useDispatch();

  const Addtask = (data: any) => {
    if (data !== '') {
      dispatch(AddNewTask(data));
      setaddModal(false);
    }
  };

  return (
    <Fragment>
      <button className='badge-light btn-block btn-mail' onClick={addToggle}>
        <CheckCircle className='me-2' /> {NewTask}
      </button>
      <Modal isOpen={addModal} toggle={addToggle} size='lg'>
        <div className='modal-header'>
          <h5 className='modal-title'>{AddTask}</h5>
          <Button color='transprant' className='btn-close' onClick={addToggle}></Button>
        </div>
        <ModalBody>
          <Form className='form-bookmark needs-validation' onSubmit={handleSubmit(Addtask)}>
            <Row>
              <FormGroup className='col-md-12'>
                <Label>{TaskTitle}</Label>
                <input className='form-control' type='text' {...register('title', { required: true })} />
                <span style={{ color: 'red' }}>{errors.title && 'Title is required'}</span>
              </FormGroup>
              <FormGroup className='col-md-12'>
                <Label>{Collection}</Label>
                <Input className='js-example-disabled-results form-select' name='collection' type='select'>
                  <option value='general'>{General}</option>
                  <option value='fs'>{'Fs'}</option>
                </Input>
              </FormGroup>
              <FormGroup className='col-md-12'>
                <Label>{Description}</Label>
                <input className='form-control' type='textarea' {...register('desc', { required: true })} />
                <span style={{ color: 'red' }}>{errors.desc && 'Description is required'}</span>
              </FormGroup>
            </Row>
            <Button color='secondary' className='me-1'>
              {Save}
            </Button>
            &nbsp;&nbsp;
            <Button color='primary' onClick={addToggle}>
              {Cancel}
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};
export default NewTaskClass;
