import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { COD, Submit } from '@/Constant';
import React, { Fragment } from 'react';
import { Button, Card, CardBody, Col, FormGroup, Input, Row } from 'reactstrap';

const CashonDelivery = () => {
  return (
    <Col lg='6' xxl='4' className=' box-col-6'>
      <Card>
        <CardHeaderCommon title={COD} />
        <CardBody>
          <Row className='theme-form'>
            <FormGroup className='mb-3 col-6 p-r-0'>
              <Input type='text' placeholder='First Name' />
            </FormGroup>
            <FormGroup className='col-6'>
              <Input type='text' placeholder='Last name' />
            </FormGroup>
            <FormGroup className='mb-3 col-6 p-r-0'>
              <Input type='text' placeholder='Pincode' />
            </FormGroup>
            <FormGroup className='col-6'>
              <Input type='number' placeholder='Enter mobile number' />
            </FormGroup>
            <FormGroup className='mb-3 col-6 p-r-0'>
              <Input type='text' placeholder='State' />
            </FormGroup>
            <FormGroup className='col-6'>
              <Input type='text' placeholder='City' />
            </FormGroup>
            <FormGroup className='mb-3 col-12'>
              <textarea className='form-control' rows={3} placeholder='Address'></textarea>
            </FormGroup>
            <Col xs='12'>
              <Button color='primary' className=' btn-block'>
                {Submit}
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
export default CashonDelivery;
