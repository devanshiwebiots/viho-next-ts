import React from 'react';
import { Card, CardBody, Col, Media } from 'reactstrap';
import CountUp from 'react-countup';
import { AssetsImagePath, Daily, Month, Week } from '@/Constant';
import { BrowserData } from '@/Data/Widgets';
import Image from 'next/image';

const BrowserWidgetCard = () => {
  return BrowserData.map((item) => (
    <Col xl='4' sm='12' key={item.id}>
      <Card className='browser-widget'>
        <CardBody className='media'>
          <div className='media-img'>
            <Image src={`${AssetsImagePath}${item.img}`} alt='' width={80} height={80} />
          </div>
          <Media body className=' align-self-center'>
            <div>
              <p>{Daily} </p>
              <h4>
                <CountUp end={36} duration={5} />%
              </h4>
            </div>
            <div>
              <p>{Month} </p>
              <h4>
                <CountUp end={96} duration={5} />%
              </h4>
            </div>
            <div>
              <p>{Week} </p>
              <h4>
                <CountUp end={46} duration={5} />%
              </h4>
            </div>
          </Media>
        </CardBody>
      </Card>
    </Col>
  ));
};

export default BrowserWidgetCard;
