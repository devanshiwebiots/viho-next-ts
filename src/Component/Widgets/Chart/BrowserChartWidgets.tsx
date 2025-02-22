import { BrowserUsesConst } from '@/Constant';
import React from 'react';
import Chart from 'react-apexcharts';
import { Col, Row, Card, CardHeader, CardBody } from 'reactstrap';
import { BrowserUses } from '../WidgetApexChartData';

const BrowserChartWidgets = () => {
  return (
    <Row>
      <Col sm='12' className='box-col-12'>
        <div className='donut-chart-widget'>
          <Card>
            <CardHeader className='pb-0'>
              <h5>{BrowserUsesConst}</h5>
            </CardHeader>
            <CardBody>
              <div id='chart-widget13'>
                <Chart options={BrowserUses.options} series={BrowserUses.series} height='500' type='candlestick' />
              </div>
            </CardBody>
          </Card>
        </div>
      </Col>
    </Row>
  );
};

export default BrowserChartWidgets;
