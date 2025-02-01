import React, { Fragment } from 'react';
import { Row, Col, Card, CardBody, Button } from 'reactstrap';
import { Purchase } from '@/Constant';
import { StandardPricingCardData } from '@/Data/EcommerceData';

const StandardPricingcard = () => {
  return (
    <Row className='card-body pricing-content'>
      {StandardPricingCardData.map((item, index) => (
        <Col key={index} xl='3' sm='6' className='box-col-6 '>
          <Card className='pricing-simple text-center'>
            <CardBody>
              <h3>{item.name}</h3>
              <h1>{item.price}</h1>
              <h6 className='mb-0'>{item.name} Price</h6>
            </CardBody>
            <Button color='primary'>{Purchase}</Button>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
export default StandardPricingcard;
