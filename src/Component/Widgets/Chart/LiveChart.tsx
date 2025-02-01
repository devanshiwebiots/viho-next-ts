import React from 'react';
import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import Chart from 'react-apexcharts';
import { LiveProducts } from '@/Constant';
import { LiveProductChart } from '../WidgetApexChartData';

const LiveChart = () => {
  return (
    <Col xl={7} className=' box-col-6'>
      <div className='small-chart-widget chart-widgets-small'>
        <Card>
          <CardHeader className=' pb-0'>
            <h5>{LiveProducts}</h5>
          </CardHeader>
          <CardBody>
            <div className='chart-container'>
              <Row>
                <Col>
                  <div id='chart-widget6'>
                    <Chart options={LiveProductChart.options} series={LiveProductChart.series} type='line' height={320} />
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

export default LiveChart;
