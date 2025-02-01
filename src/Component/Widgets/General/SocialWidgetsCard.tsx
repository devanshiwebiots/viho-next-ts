import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import CountUp from 'react-countup';
import { SocialData } from '@/Data/Widgets';
import { Post } from '@/Constant';

const SocialWidgetsCard = () => {
  return SocialData.map((item) => (
    <Col sm='6' xl='3' lg='6' className=' box-col-6' key={item.id}>
      <Card className='social-widget-card'>
        <CardBody>
          <div className='redial-social-widget radial-bar-70'>
            <i className={`${item.icon} font-primary`}></i>
          </div>
          <h5 className='b-b-light'>{item.socialName}</h5>
          <Row>
            <Col className='text-center b-r-light'>
              <span>{Post}</span>
              <h4 className='counter mb-0'>
                <CountUp end={item.count1} duration={5} />
              </h4>
            </Col>
            <Col className='text-center'>
              <span>{item.title}</span>
              <h4 className='counter mb-0'>
                <CountUp end={item.count2} duration={5} />
              </h4>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  ));
};

export default SocialWidgetsCard;
