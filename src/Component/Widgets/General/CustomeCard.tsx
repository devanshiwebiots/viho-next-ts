import React, { Fragment } from 'react';
import { Card, CardHeader, Col, Row, ListGroup, ListGroupItem } from 'reactstrap';
import CountUp from 'react-countup';
import Link from 'next/link';
import { AssetsImagePath, Follower, Following, Manager, TotalPost } from '@/Constant';
import Image from 'next/image';
import { SocialBottomData, Socialdata } from '@/Data/Widgets';
import { useSelector } from 'react-redux';
import { RootState } from '@/Redux/ReduxStore';

const CustomCard = () => {

  return (
    <Fragment>
      <Col xl='4' md='6' className='box-col-6'>
        <Card className='custom-card'>
          <CardHeader>
            <Image className='img-fluid' src={`${AssetsImagePath}/user-card/3.jpg`} alt='' width={663} height={414} unoptimized/>
          </CardHeader>
          <div className='card-profile'>
            <Image className='rounded-circle d-inline' src={`${AssetsImagePath}/avtar/3.jpg`} alt='' width={110} height={110} unoptimized/>
          </div>
          <ListGroup className='card-social flex-row d-flex'>
            {Socialdata.map((element, index) => (
              <ListGroupItem key={index}>
                <a href={element.href}>{element.icon}</a>
              </ListGroupItem>
            ))}
          </ListGroup>
          <Link href={`/users/userProfile`}>
            <div className='text-center profile-details'>
              <h4>Scarlett john</h4>
              <h6>{Manager}</h6>
            </div>
          </Link>
          <Row className='card-footer'>
            {SocialBottomData.map((item, index) => (
              <Col sm='4' key={index}>
                <h6>{item.heading}</h6>
                <h3 className='counter'>
                  <CountUp end={item.amount} duration={5} />
                </h3>
              </Col>
            ))}
          </Row>
        </Card>
      </Col>
    </Fragment>
  );
};

export default CustomCard;
