import React from 'react';
import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import Chart from 'react-apexcharts';
import { MonthlySalesConst } from '@/Constant';
import { MonthlySale } from '../WidgetApexChartData';

const MonthlySaleChart = () => {
  return (
    <Col xl='5' className='box-col-6'>
      <div className='small-chart-widget chart-widgets-small'>
        <Card>
          <CardHeader className='pb-0'>
            <h5>{MonthlySalesConst}</h5>
          </CardHeader>
          <CardBody>
            <div className='chart-container'>
              <Row>
                <Col>
                  <div id='chart-widget8'>
                    <Chart options={MonthlySale.options} series={MonthlySale.series} height='300' type='radar' />
                  </div>
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};

export default MonthlySaleChart;
