import React from 'react';
import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import Chart from 'react-apexcharts';
import { Uses } from '@/Constant';
import { WidgetsUserChart } from '../WidgetApexChartData';

const UsesChart = () => {
  return (
    <Col xl='7' className='box-col-6'>
      <div className='small-chart-widget chart-widgets-small'>
        <Card>
          <CardHeader className='pb-0'>
            <h5>{Uses}</h5>
          </CardHeader>
          <CardBody>
            <div className='chart-container'>
              <Row>
                <Col>
                  <div id='chart-widget9'>
                    <Chart options={WidgetsUserChart.options} series={WidgetsUserChart.series} height='320' type='bubble' />
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

export default UsesChart;
