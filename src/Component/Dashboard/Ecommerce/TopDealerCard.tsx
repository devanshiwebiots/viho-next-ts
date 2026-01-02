import React from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { DealerBox } from '@/Data/Dashboard';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import { TopDealer, ViewMore } from '@/Constant';
import { useSelector } from 'react-redux';
import { RootState } from '@/Redux/ReduxStore';

const TopDealerCard = () => {
  var settings = {
    responsive: [
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
    ]
  };

  return (
    <Card>
      <CardHeader className='pb-0'>
        <div className='header-top d-sm-flex justify-content-between align-items-center'>
          <h5>{TopDealer}</h5>
          <div className='center-content'>
            <p className='d-sm-flex align-items-center'>
              <span className='m-r-10'>845 Dealer</span>
              <i className='toprightarrow-primary fa fa-arrow-up m-r-10'></i>86% More Than Last Year
            </p>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <div className='item'>
          <Row>
            <Col>
              <Slider dots={true} infinite={true} centerMode={false} speed={100} arrows={false} slidesToShow={4} slidesToScroll={4} adaptiveHeight={true} {...settings}>
                {DealerBox.map((item) => (
                  <div className='item' key={item.id}>
                    <Card>
                      <div className='top-dealerbox text-center'>
                        <Image className='card-img-top' height={50} width={50} src={item.img} alt='' unoptimized/>
                        <h6>{item.name}</h6>
                        <p>{item.place}</p>
                        <Link className='btn btn-rounded' href={`/users/userProfile`}>
                          {ViewMore}
                        </Link>
                      </div>
                    </Card>
                  </div>
                ))}
              </Slider>
            </Col>

            <Col>
              <Slider dots={true} infinite={true} centerMode={false} speed={100} arrows={false} slidesToShow={4} slidesToScroll={4} adaptiveHeight={true} {...settings}>
                {DealerBox.map((item) => (
                  <div className='item' key={item.id}>
                    <Card>
                      <div className='top-dealerbox text-center'>
                        <Image className='card-img-top' height={50} width={50} src={item.img} alt='...' unoptimized/>
                        <h6>{item.name}</h6>
                        <p>{item.place}</p>
                        <Link className='btn btn-rounded' href={`/users/userProfile`}>
                          {ViewMore}
                        </Link>
                      </div>
                    </Card>
                  </div>
                ))}
              </Slider>
            </Col>
          </Row>
        </div>
      </CardBody>
    </Card>
  );
};

export default TopDealerCard;
