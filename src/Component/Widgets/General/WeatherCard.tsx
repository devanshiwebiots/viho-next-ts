import { WeatherData } from '@/Data/Widgets';
import React, { Fragment } from 'react';
import { CloudDrizzle } from 'react-feather';
import { Card, Col, CardBody, Row, Media } from 'reactstrap';

const WeatherCard = () => {
  return (
    <Fragment>
      <Col xl='3' sm='6' className='xl-50 box-col-6'>
        <Card>
          <div className='weather-widget-two'>
            <CardBody>
              {WeatherData.map((item) => (
                <Media key={item.id}>
                  <Media body className=' align-self-center text-white'>
                    <h4 className='m-0 f-w-600 num'>{item.temp}</h4>
                    <p className='m-0 f-14'>{item.place}</p>
                  </Media>
                </Media>
              ))}
             
              <div className='bottom-whetherinfo'>
                <Row>
                  <Col>
                    <CloudDrizzle />
                  </Col>
                  <Col>
                    <div className='whether-content'>
                      <span>India, Surat</span>
                      <h4 className='num mb-0'>36°F</h4>
                    </div>
                  </Col>
                </Row>
              </div>
            </CardBody>
          </div>
        </Card>
      </Col>
    </Fragment>
  );
};

export default WeatherCard;
