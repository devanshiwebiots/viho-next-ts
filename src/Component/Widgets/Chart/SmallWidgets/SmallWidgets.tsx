import React from 'react';
import { Row } from 'reactstrap';
import { MonthlySale } from '../../WidgetApexChartData';
import LiveProduct from './LiveProducts';
import TurnoverMain from './Turnover';
import UsesMain from './Uses';

const SmallWidgets = () => {
  return (
    <Row>
      <LiveProduct />
      <TurnoverMain />
      <MonthlySale />
      <UsesMain />
    </Row>
  );
};

export default SmallWidgets;
