import { SignUp } from '@/Constant';
import { StandardsData } from '@/Data/EcommerceData';
import React, { Fragment } from 'react';
import { Col, CardBody, Card, Button, ListGroup, ListGroupItem } from 'reactstrap';

const Standards = () => {
  return (
    <Fragment>
      <CardBody className='row pricing-content pricing-col'>
        {StandardsData.map((item, index) => (
          <Col key={index} md='3'>
            <Card className='pricing-block text-center'>
              <div className='pricing-header'>
                <h2>{item.name}</h2>
                <div className='price-box'>
                  <div>
                    <h3>{item.price}</h3>
                    <p>/month</p>
                  </div>
                </div>
              </div>
              <div className='pricing-list'>
                <ListGroup className='pricing-inner'>
                  {item.offers.map((element, index) => (
                    <ListGroupItem key={index}>
                      <span>{element[0]}</span>
                      {element[1]}
                    </ListGroupItem>
                  ))}
                </ListGroup>
                <div className='pricingtable-signup'>
                  <Button color='primary' size='lg'>
                    {SignUp}
                  </Button>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </CardBody>
    </Fragment>
  );
};
export default Standards;
