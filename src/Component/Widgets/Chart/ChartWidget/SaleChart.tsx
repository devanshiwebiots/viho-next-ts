import { Sale } from '@/Constant';
import React from 'react';
import Charts from 'react-apexcharts';
import CountUp from 'react-countup';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { SaleChart } from '../../WidgetApexChartData';
const SaleChartMain = () => {
  return (
    <Col xl='4'>
      <Card className='o-hidden'>
        <div className='chart-widget-top'>
          <CardBody>
            <Row>
              <Col xs='5'>
                <h6 className='f-w-600 font-primary'>{Sale}</h6>
                <span className='num'>
                  <span className='counter'>90</span>%<i className='icon-angle-up f-12'></i>
                </span>
              </Col>
              <Col xs='7' className='text-end'>
                <h4 className='num total-value'>
                  ${' '}
                  <span className='counter'>
                    <CountUp end={3654} duration={5} />
                  </span>
                  .00
                </h4>
              </Col>
            </Row>
          </CardBody>
          <div>
            <div id='chart-widget1'>
              <Charts options={SaleChart.options} series={SaleChart.series} type='area' height={170} />
            </div>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default SaleChartMain;
