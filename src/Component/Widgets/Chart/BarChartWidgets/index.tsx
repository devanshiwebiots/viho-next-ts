import React, { Fragment } from 'react';
import { Row } from 'reactstrap';
import MarketChartMain from './MarketChart';
import TotalEarningChartMain from './TotalEarningChart';

const BarChartsWidgets = () => {
  return (
    <Row>
      <MarketChartMain />
      <TotalEarningChartMain />
    </Row>
  );
};

export default BarChartsWidgets;
