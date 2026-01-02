import { AssetsImagePath, Developer, Profit, loss, newOrder } from '@/Constant';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { Card, CardBody, Col, Progress, Row } from 'reactstrap';

const TestimonialCard = () => {
  return (
    <Fragment>
      <Col xl='4' className='box-col-12'>
        <Card className='testimonial text-center'>
          <CardBody>
            <div>
              <div className='item'>
                <i className='fa fa-quote-left'></i>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.</p>
                <Image className='img-80' src={`${AssetsImagePath}/dashboard/boy-2.png`} alt='' height={80} width={80} unoptimized/>
                <Link href={`/app/users/userProfile`}>
                  <h5 className='font-primary text-center'>Poio klot</h5>
                </Link>
                <span>{Developer}</span>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card className='xl-none'>
          <CardBody className='ecommerce-widget'>
            <Row>
              <Col>
                <span>{newOrder}</span>
                <h3 className='total-num counter'>25639</h3>
              </Col>
              <Col>
                <div className='text-end'>
                  <ul>
                    <li>
                      {Profit}
                      <span className='product-stts font-primary m-l-10'>
                        8989<i className='icon-angle-up f-12 m-l-10'></i>
                      </span>
                    </li>
                    <li>
                      {loss}
                      <span className='product-stts font-primary m-l-10'>
                        2560<i className='icon-angle-down f-12 m-l-10'></i>
                      </span>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
            <div className='progress-showcase'>
              <div className='progress sm-progress-bar'>
                <Progress className='bg-primary' value={70} bar={true} />
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default TestimonialCard;
