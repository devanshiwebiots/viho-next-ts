import { RecentActivityHeading } from '@/Constant';
import { RecentActivityData } from '@/Data/Widgets';
import React from 'react';
import { Col, Card, CardHeader, CardBody, Media, ListGroupItem, ListGroup } from 'reactstrap';

const RecentActivityCard = () => {
  return (
    <Col xl='4' md='6' className='box-col-6'>
      <div>
        <Card className='card-activity'>
          <CardHeader className='pb-0 d-flex justify-content-between align-items-center'>
            <h5 className='text-uppercase'>{RecentActivityHeading}</h5>
          </CardHeader>
          <CardBody>
            <ListGroup className='crm-activity'>
              {RecentActivityData.map((item, i) => (
                <Media tag={'li'} className='media' key={i}>
                  <span className='me-3 font-primary'>{item.title}</span>
                  <Media body className='align-self-center'>
                    <h6 className='mt-0'>{item.subtitle}</h6>
                    <ul className='dates d-flex flex-row'>
                      <li>{item.date}</li>
                      <li>{item.time}</li>
                    </ul>
                  </Media>
                </Media>
              ))}
              <ListGroupItem className='media'>
                <Media body className='align-self-center'>
                  <ul className='dates d-flex flex-row'>
                    <li>25 July 2023</li>
                    <li>20 hours ago</li>
                  </ul>
                </Media>
              </ListGroupItem>
            </ListGroup>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};

export default RecentActivityCard;
