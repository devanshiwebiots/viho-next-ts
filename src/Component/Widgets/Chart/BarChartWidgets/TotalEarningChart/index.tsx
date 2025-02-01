import { TotalEarning } from '@/Constant';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import TotalEarningYear from './TotalEarningYear';
import TotalEarningMonth from './TotalEarningMonth';
import { TotalEarningChart } from '@/Component/Widgets/WidgetApexChartData';
import TotalEarningDay from './TotalEarningDay';
import ReactApexChart from 'react-apexcharts';

const TotalEarningChartMain = () => {
  return (
    <Col xl='5'>
      <Card className='o-hidden'>
        <CardHeader className='pb-0'>
          <h5>{TotalEarning}</h5>
        </CardHeader>
        <div className='bar-chart-widget'>
          <div className='top-content bg-primary'></div>
          <CardBody className='bottom-content pt-0'>
            <Row>
              <Col xs="12">
                <div id='chart-widget5'>
                  <ReactApexChart options={TotalEarningChart.options} series={TotalEarningChart.series} type='radialBar' height={350} />
                </div>
              </Col>
            </Row>
            <Row className='text-center'>
              <TotalEarningYear />
              <TotalEarningMonth />
              <TotalEarningDay />
            </Row>
          </CardBody>
        </div>
      </Card>
    </Col>
  );
};

export default TotalEarningChartMain;