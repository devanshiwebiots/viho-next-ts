import React from 'react';
import { Card, Col, Media, Row } from 'reactstrap';
import CountUp from 'react-countup';
import { TotalSaleRowData } from '@/Data/Widgets';

const WidgetsJoinsCard = () => {
  return (
    <Col xl='6' className='xl-50 box-col-12'>
      <Card className='widget-joins'>
        <Row>
          {TotalSaleRowData.map((item, index) => (
            <Col sm='6' key={index} className='pe-0'>
              <Media className='border-after-xs'>
                <div className='align-self-center me-3'>
                  {item.number}
                  <i className='fa fa-angle-up ms-2'></i>
                </div>
                <Media body className=' details ps-3'>
                  <span className='mb-1'>{item.tittle}</span>
                  <h5>
                    <CountUp end={item.amount} duration={5} className='mb-0 counter' />
                  </h5>
                </Media>
                <Media body className='align-self-center'>
                  {item.icon}
                </Media>
              </Media>
            </Col>
          ))}
        </Row>
      </Card>
    </Col>
  );
};

export default WidgetsJoinsCard;
