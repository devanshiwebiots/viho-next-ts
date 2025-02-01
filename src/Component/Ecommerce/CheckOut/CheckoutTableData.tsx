import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Address, CheckMeOut, Country, CountryMenu, EmailAddress, FirstName, LastName, Phone, PlaceOrder, PostalCode, StateCountry, TownCity } from '@/Constant';
import { CheckoutTableDataType } from '@/Type/SideBarType';
import { useSelector } from 'react-redux';
import { RootState } from '@/Redux/ReduxStore';

const CheckoutTableData = () => {

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutTableDataType>();
  const onSubmit: SubmitHandler<CheckoutTableDataType> = async (data) => {
    alert('you submited the form and stuff');
    router.push(`/ecommerce/invoice`);
  };
  return (
    <Col xl='6' sm='12'>
      <Form onSubmit={handleSubmit(onSubmit)} className='needs-validation'>
        <Row>
          <FormGroup className='mb-3 col-sm-6'>
            <Label>{FirstName}</Label>
            <input className='form-control' type='text' {...register('firstName', { required: true })} />
            <span style={{ color: '#ff5370' }}>{errors.firstName && 'First name is required'}</span>
          </FormGroup>
          <FormGroup className='mb-3 col-sm-6'>
            <Label>{LastName}</Label>
            <input className='form-control' type='text' {...register('lastName', { required: true })} />
            <span style={{ color: '#ff5370' }}>{errors.lastName && 'Last name is required'}</span>
          </FormGroup>
        </Row>
        <Row>
          <FormGroup className='mb-3 col-sm-6'>
            <Label>{Phone}</Label>
            <input className='form-control' type='number' {...register('phone', { required: true })} />
            <span style={{ color: '#ff5370' }}>{errors.phone && 'Please enter number for phone.'}</span>
          </FormGroup>
          <FormGroup className='mb-3 col-sm-6'>
            <Label>{EmailAddress}</Label>
            <input className='form-control' type='text' {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
            <span style={{ color: '#ff5370' }}>{errors.email && 'Please enter proper email address .'}</span>
          </FormGroup>
        </Row>
        <FormGroup className='mb-3'>
          <Label>{Country}</Label>
          <Input className='form-control' type='select' name='selectMulti'>
            {CountryMenu.map((items: string, i: number) => (
              <option key={i}>{items}</option>
            ))}
          </Input>
        </FormGroup>
        <FormGroup className='mb-3'>
          <Label for='inputAddress5'>{Address}</Label>
          <input className='form-control' type='text' {...register('address', { required: true, min: 20, max: 120 })} />
          <span style={{ color: '#ff5370' }}>{errors.address && 'Please right your address .'}</span>
        </FormGroup>
        <FormGroup className='mb-3'>
          <Label for='inputCity'>{TownCity}</Label>
          <input className='form-control' type='text' {...register('city', { required: true })} />
          <span style={{ color: '#ff5370' }}>{errors.city && 'select one city'}</span>
        </FormGroup>
        <FormGroup className='mb-3'>
          <Label for='inputAddress2'>{StateCountry}</Label>
          <input className='form-control' type='text' {...register('state', { required: true })} />
          <span style={{ color: '#ff5370' }}>{errors.state && 'select one state'}</span>
        </FormGroup>
        <FormGroup className='mb-3'>
          <Label for='inputAddress6'>{PostalCode}</Label>
          <input className='form-control' type='text' {...register('pincode', { pattern: /\d+/ })} />
          <span style={{ color: '#ff5370' }}>{errors.pincode && 'Required integer'}</span>
        </FormGroup>
        <FormGroup className='mb-3'>
          <div className='form-check'>
            <Input type='checkbox' className='form-check-input checkbox_animated' />
            <Label>{CheckMeOut}</Label>
          </div>
        </FormGroup>
        <FormGroup>
          <div className='text-end'>
            <Button type='submit' color='primary'>
              {PlaceOrder}
            </Button>
          </div>
        </FormGroup>
      </Form>
    </Col>
  );
};
export default CheckoutTableData;
