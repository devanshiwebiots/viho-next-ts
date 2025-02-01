import { Projects } from '@/Constant';
import React from 'react';
import Charts from 'react-apexcharts';
import CountUp from 'react-countup';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { ProjectChart } from '../../WidgetApexChartData';
const ProjectChartMain = () => {
  return (
    <Col xl='4'>
      <Card className='o-hidden'>
        <div className='chart-widget-top'>
          <CardBody>
            <Row>
              <Col xs='7'>
                <h6 className='f-w-600 font-secondary'>{Projects}</h6>
                <span className='num'>
                  <span className='counter'>30</span>%<i className='icon-angle-up f-12'></i>
                </span>
              </Col>
              <Col xs='5' className=' text-end'>
                <h4 className='num total-value counter'>
                  <CountUp end={12568} duration={5} />
                </h4>
              </Col>
            </Row>
          </CardBody>
          <div id='chart-widget2'>
            <Charts options={ProjectChart.options} series={ProjectChart.series} type='area' height={170} />
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default ProjectChartMain;
