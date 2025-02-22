import React from 'react';
import { Col, Card, CardBody } from 'reactstrap';
import { LineChart } from '../../../Constant/index';
import { Line } from 'react-chartjs-2';
import { lineChartData, lineChartOptions } from '../../../Data/Charts/ChartJsData';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const LineChartClass = () => {
  return (
    <Col xl='6' md='12' className='box-col-12'>
      <Card>
        <CardHeaderCommon title={LineChart} />
        <CardBody className='chart-block'>
          <Line data={lineChartData} options={lineChartOptions} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default LineChartClass;
