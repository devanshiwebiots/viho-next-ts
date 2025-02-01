'use client';

import { Container, Row } from 'reactstrap';
import BarChartClass from '../../../../Component/Charts/ChartJS/BarChart';
import DoughnutChartClass from '../../../../Component/Charts/ChartJS/DoughnutChart';
import LineChartClass from '../../../../Component/Charts/ChartJS/LineChart';
import LineChart2Class from '../../../../Component/Charts/ChartJS/LineChart2';
import PolarChartClass from '../../../../Component/Charts/ChartJS/PolarChart';
import RadarChartClass from '../../../../Component/Charts/ChartJS/RadarChart';
const ChartJsContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <BarChartClass />
        <LineChartClass />
        <RadarChartClass />
        <LineChart2Class />
        <DoughnutChartClass />
        <PolarChartClass />
      </Row>
    </Container>
  );
};

export default ChartJsContainer;
