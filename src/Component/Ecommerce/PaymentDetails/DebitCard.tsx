import React, { Fragment } from 'react';
import { Card, CardBody, Col, FormGroup, Input, Row, Label, Button } from 'reactstrap';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { DebitCard, ExpirationDate, SelectMonth, SelectYear, Submit } from '@/Constant';

const DebitCards = () => {
  return (
    <Fragment>
      <Col lg='6' xxl='4' className='debit-card box-col-6'>
        <Card>
          <CardHeaderCommon title={DebitCard} />
          <CardBody>
            <Row className='theme-form e-commerce-form'>
              <FormGroup className='mb-3 col-6 p-r-0'>
                <Input type='text' placeholder='Full name here' />
              </FormGroup>
              <FormGroup className='mb-3 col-6'>
                <Input type='text' placeholder='Card number' />
              </FormGroup>
              <FormGroup className='mb-3 col-6 p-r-0'>
                <Input type='text' placeholder='CVV number' />
              </FormGroup>
              <FormGroup className='mb-3 col-6'>
                <Input type='text' placeholder='CVC' />
              </FormGroup>
              <div className='col-12'>
                <Label className='col-form-label p-b-20'>{ExpirationDate}</Label>
              </div>
              <FormGroup className='mb-3 col-6 p-r-0'>
                <select className='form-control form-select' size={1}>
                  {SelectMonth.map((months, i) => (
                    <option key={i}>{months}</option>
                  ))}
                </select>
              </FormGroup>
              <FormGroup className='mb-3 col-6'>
                <select className='form-control form-select' size={1}>
                  {SelectYear.map((years, i) => (
                    <option key={i}>{years}</option>
                  ))}
                </select>
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
    </Fragment>
  );
};
export default DebitCards;
