import React from 'react';
import { Row } from 'reactstrap';
import SaleChartMain from './SaleChart';
import ProjectChartMain from './projectChart';
import ProductChartMain from './ProductChart';

const ChartWidgets = () => {
  return (
    <Row>
      <SaleChartMain />
      <ProjectChartMain />
      <ProductChartMain />
    </Row>
  );
};

export default ChartWidgets;
