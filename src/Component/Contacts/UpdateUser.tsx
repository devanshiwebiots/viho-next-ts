import { useForm } from 'react-hook-form';
import { Row, Col, Label, FormGroup, Form, Input, Button } from 'reactstrap';
import { Name, Save, Cancel, Email, Phone, Mobile, Work, Other, AssetsImagePath } from '@/Constant';
import { useDispatch } from 'react-redux';
import { UpdateUserPropType, UserUpdateType } from './ContactType';
import { setEditData } from '@/Redux/Slices/ContactReducer';

const UpdateUser = ({ editdata, userEditCallback }: UpdateUserPropType) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const UpdateContact = (updatedData: any) => {
    let withImageData = { ...updatedData, avatar: `${AssetsImagePath}/user/user.png` };
    userEditCallback(false, withImageData);
    dispatch(setEditData(withImageData));
    alert('Contact Update successfully');
  };
  return (
    <div className='contact-editform ps-0 m-auto'>
      <Form onSubmit={handleSubmit(UpdateContact)}>
        <Row>
          <FormGroup className='col-md-12'>
            <Label>{Name}</Label>
            <Row>
              <Col sm='6'>
                <input className='form-control' type='text' defaultValue={editdata?.name} {...register('name', { required: true })} />
                <span style={{ color: 'red' }}>{errors.name && 'First name is required'}</span>
              </Col>
              <Col sm='6'>
                <input className='form-control' type='text' defaultValue={editdata.surname} {...register('surname', { required: true })} />
                <span style={{ color: 'red' }}>{errors.surname && 'Last name is required'}</span>
              </Col>
            </Row>
          </FormGroup>
          <FormGroup className='col-md-12'>
            <Label>{Email}</Label>
            <input className='form-control' type='text' defaultValue={editdata.email} {...register('email', { required: true })} />
            <span style={{ color: 'red' }}>{errors.email && 'Please enter email between 18 to 70 year.'}</span>
          </FormGroup>
          <FormGroup className='mb-3 col-md-12 my-0'>
            <Row>
              <Col sm='6'>
                <Label htmlFor='con-phone'>{Phone}</Label>
                <input className='form-control' type='number' defaultValue={editdata.mobile} {...register('mobile', { required: true })} />
                <span style={{ color: 'red' }}>{errors.mobile && 'Please enter Mobile no.'}</span>
              </Col>
              <Col sm='6'>
                <Label htmlFor='con-phone'>{Mobile}</Label>
                <Input type='select' className='form-control'>
                  <option value='1'>{Mobile}</option>
                  <option value='2'>{Work}</option>
                  <option value='3'>{Other}</option>
                </Input>
              </Col>
            </Row>
          </FormGroup>
        </Row>
        <Button color='secondary' className='update-contact me-1'>
          {Save}
        </Button>
        &nbsp;&nbsp;
        <Button color='primary' onClick={() => userEditCallback(false, editdata)}>
          {Cancel}
        </Button>
      </Form>
    </div>
  );
};

export default UpdateUser;
