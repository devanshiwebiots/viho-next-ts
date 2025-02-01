import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { BankName, NetBanking, Submit } from '@/Constant';
import React from 'react';
import { Button, Card, CardBody, Col, FormGroup, Input, Row } from 'reactstrap';

const NetBankings = () => {
  return (
    <Col lg='6' xxl='4' className=' box-col-6'>
      <Card>
        <CardHeaderCommon title={NetBanking} />
        <CardBody>
          <Row className='theme-form'>
            <FormGroup className='mb-3 col-12'>
              <Input type='text' placeholder='AC Holder name' />
            </FormGroup>
            <FormGroup className='mb-3 col-12'>
              <Input type='text' placeholder='Account number' />
            </FormGroup>
            <FormGroup className='mb-3 col-6 p-r-0'>
              <select className='form-control' size={1}>
                {BankName.map((name, i) => (
                  <option key={i}>{name}</option>
                ))}
              </select>
            </FormGroup>
            <FormGroup className='mb-3 col-6'>
              <Input type='text' placeholder='IFSC code' />
            </FormGroup>
            <FormGroup className='mb-3 col-12'>
              <Input type='number' placeholder='Enter mobile number' />
            </FormGroup>
            <FormGroup className='mb-3 col-12'>
              <Input type='text' placeholder='Other Details' />
            </FormGroup>
            <div className='col-12'>
              <Button color='primary' className=' btn-block'>
                {Submit}
              </Button>
            </div>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
export default NetBankings;
