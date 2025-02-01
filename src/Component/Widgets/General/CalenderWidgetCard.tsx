import React, { Fragment } from 'react';
import { Card, Col, CardBody } from 'reactstrap';

const CalenderWidgetCard = () => {
  return (
      <Col sm='12' lg='6' xl='4' md='12' className='box-col-6'>
        <Card className='height-equal'>
          <div className='calender-widget'>
            <div className='cal-img'></div>
            <div className='cal-date'>
              <h5>
                25
                <br />
                Apr
              </h5>
            </div>
            <CardBody className='cal-desc text-center'>
              <h6 className='f-w-600'>I must explain to you how? </h6>
              <p>Denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,Letraset sheets.</p>
            </CardBody>
          </div>
        </Card>
      </Col>
  );
};

export default CalenderWidgetCard;
