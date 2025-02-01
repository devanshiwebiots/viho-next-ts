import { ProductCap } from '@/Constant';
import React from 'react';
import Charts from 'react-apexcharts';
import CountUp from 'react-countup';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { ProductChart } from '../../WidgetApexChartData';

const ProductChartMain = () => {
  return (
    <Col xl='4'>
      <Card className='o-hidden'>
        <div className='chart-widget-top'>
          <CardBody>
            <Row>
              <Col>
                <h6 className='f-w-600 font-success'>{ProductCap}</h6>
                <span className='num'>
                  <span className='counter'>68</span>%<i className='icon-angle-up f-12'></i>
                </span>
              </Col>
              <Col xs='4' className='text-end'>
                <h4 className='num total-value'>
                  <span className='counter'>
                    <CountUp end={93} duration={5} />
                  </span>
                  M
                </h4>
              </Col>
            </Row>
          </CardBody>
          <div id='chart-widget3'>
            <Charts options={ProductChart.options} series={ProductChart.series} type='area' height={170} />
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default ProductChartMain;
