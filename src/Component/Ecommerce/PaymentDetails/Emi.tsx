import { Button, Card, CardBody, Col, FormGroup, Input, ListGroup, ListGroupItem, Row } from 'reactstrap';
import React from 'react';
import { AssetsImagePath, BankName, EMI, SelectCard, SelectDuration, Submit } from '@/Constant';
import Image from 'next/image';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const EMIs = () => {
  return (
    <Col lg='6' xxl='4' className=' box-col-6'>
      <Card>
        <CardHeaderCommon title={EMI} />
        <CardBody>
          <Row className='theme-form'>
            <FormGroup className='mb-3 col-6 p-r-0'>
              <Input type='text' placeholder='First Name' />
            </FormGroup>
            <FormGroup className='mb-3 col-6'>
              <Input type='text' placeholder='Last name' />
            </FormGroup>
            <FormGroup className='mb-3 col-6 p-r-0'>
              <Input type='text' placeholder='Pincode' />
            </FormGroup>
            <FormGroup className='mb-3 col-6'>
              <select className='form-control' size={1}>
                {BankName.map((name, i) => (
                  <option key={i}>{name}</option>
                ))}
              </select>
            </FormGroup>
            <FormGroup className='mb-3 col-12'>
              <select className='form-control' size={1}>
                {SelectCard.map((card, i) => (
                  <option key={i}>{card}</option>
                ))}
              </select>
            </FormGroup>
            <FormGroup className='mb-3 col-12'>
              <select className='form-control' size={1}>
                {SelectDuration.map((duration, i) => (
                  <option key={i}>{duration}</option>
                ))}
              </select>
            </FormGroup>
            <FormGroup className='mb-3 col-12'>
              <ListGroup className=' payment-opt d-flex flex-row'>
                <ListGroupItem>
                  <Image width={33} height={20} src={`${AssetsImagePath}/ecommerce/mastercard.png`} alt='' unoptimized/>{' '}
                </ListGroupItem>
                <ListGroupItem>
                  {' '}
                  <Image width={63} height={20} src={`${AssetsImagePath}/ecommerce/visa.png`} alt='' unoptimized/>
                </ListGroupItem>
                <ListGroupItem>
                  <Image width={77} height={20} src={`${AssetsImagePath}/ecommerce/paypal.png`} alt='' unoptimized/>
                </ListGroupItem>
              </ListGroup>
            </FormGroup>
            <div className='col-12'>
              <Button color='primary' className='btn-block'>
                {Submit}
              </Button>
            </div>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
export default EMIs;
