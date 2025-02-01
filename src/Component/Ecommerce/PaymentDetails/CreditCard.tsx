import { Card, CardBody, Col, Form, FormGroup, Input, Row } from 'reactstrap';
import React, { Fragment } from 'react';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import Image from 'next/image';
import { AssetsImagePath, CreditCard } from '@/Constant';

const CreditCards = () => {
  return (
    <Fragment>
      <Col sm='12' xxl='8' className=' box-col-12 '>
        <Card>
          <CardHeaderCommon title={CreditCard} />
          <CardBody>
            <Row>
              <Col md='7'>
                <Form className='theme-form mega-form'>
                  <FormGroup className='mb-3'>
                    <Input type='text' placeholder='Card number' />
                  </FormGroup>
                  <FormGroup className='mb-3'>
                    <Input type='text' placeholder='First Name' />
                  </FormGroup>
                  <FormGroup className='mb-3'>
                    <Input type='date' />
                  </FormGroup>
                  <FormGroup className='mb-3'>
                    <Input type='text' placeholder='Name on card' />
                  </FormGroup>
                  <FormGroup className='mb-3'>
                    <select className='form-select' size={1}>
                      <option>Select Type</option>
                      <option>Master</option>
                      <option>Visa</option>
                    </select>
                  </FormGroup>
                </Form>
              </Col>
              <Col md='5' className='text-center'>
                <Image width={352} height={235} className='img-fluid' src={`${AssetsImagePath}/ecommerce/card.png`} alt='' />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default CreditCards;
