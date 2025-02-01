import { EarningData } from '@/Data/Widgets';
import React from 'react';
import { Card, CardBody, Col, Media } from 'reactstrap';

const EarningsCard = () => {
  return EarningData.map((item) => (
    <Col sm='6' xl='3' lg='6' key={item.id}>
      <Card className='o-hidden border-0'>
        <CardBody className={item.classCompo}>
          <Media className=' static-top-widget'>
            <div className='align-self-center text-center'>{item.icon}</div>
            <Media body>
              <span className='m-0'>{item.title}</span>
              <h4 className='mb-0 counter'>{item.count}</h4>
              {item.iconWithClass}
            </Media>
          </Media>
        </CardBody>
      </Card>
    </Col>
  ));
};

export default EarningsCard;
