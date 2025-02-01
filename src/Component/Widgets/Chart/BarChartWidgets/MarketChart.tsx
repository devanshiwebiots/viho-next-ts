import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { MarketChart } from '../../WidgetApexChartData';
import Charts from 'react-apexcharts'

const MarketChartMain = () => {
  return (
    <Col xl='7'>
      <Card className='o-hidden'>
        <CardHeaderCommon title={'Marketing Expenses'} />
        <div className='bar-chart-widget'>
          <CardBody className='bottom-content'>
            <Row>
              <Col>
                <div id='chart-widget4'>
                  <Charts options={MarketChart.options} series={MarketChart.series} type='bar' height={360} />
                </div>
              </Col>
            </Row>
          </CardBody>
        </div>
      </Card>
    </Col>
  );
};

export default MarketChartMain;
