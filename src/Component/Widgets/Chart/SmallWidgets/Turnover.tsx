import React from 'react';
import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import Chart from 'react-apexcharts';
import { Turnover } from '@/Constant';
import { TurnoverChart } from '../../WidgetApexChartData';

const TurnoverMain = () => {
  return (
    <Col xl='5' className='box-col-6'>
      <div className='small-chart-widget chart-widgets-small'>
        <Card>
          <CardHeader className='pb-0'>
            <h5>{Turnover}</h5>
          </CardHeader>
          <CardBody>
            <div className='chart-container'>
              <Row>
                <Col xs='12'>
                  <div id='chart-widget7'>
                    <Chart options={TurnoverChart.options} series={TurnoverChart.series} type='area' height={320} />
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

export default TurnoverMain;
