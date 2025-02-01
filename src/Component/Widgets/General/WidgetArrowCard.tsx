import React from 'react';
import { Card, Col, Media, Row } from 'reactstrap';
import CountUp from 'react-countup';
import { TotalSaleData } from '@/Data/Widgets';

const WidgetArrowCard = () => {
  return (
    <Col xl='6' className='box-col-12'>
      <Card className='widget-joins widget-arrow'>
        <Row>
          {TotalSaleData.map((item, index) => (
            <Col sm='6' key={index} className={item.colClass}>
              <Media className={item.divClass}>
                <div className='align-self-center me-3 text-start'>
                  <span className='widget-t mb-1'>{item.tittle}</span>
                  <h5 className='mb-0'>{item.subTittle}</h5>
                </div>
                <Media body className='align-self-center'>
                  {item.icon}
                </Media>
                <Media body>
                  <h5 className='mb-0'>
                    $
                    <CountUp end={item.amount} duration={5} />
                  </h5>
                  <span className='mb-1'>{item.subAmount}</span>
                </Media>
              </Media>
            </Col>
          ))}
        </Row>
      </Card>
    </Col>
  );
};

export default WidgetArrowCard;
