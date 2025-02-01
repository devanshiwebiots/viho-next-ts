'use client';

import Breadcrumbs from '@/CommonComponents/BreadCrumb';
import GridColumnCard from '@/Component/UiKits/Grid/GridColumn';
import GridOptionsCard from '@/Component/UiKits/Grid/GridOptions';
import HorizontalAlignCard from '@/Component/UiKits/Grid/HorizontalAlign';
import NestingColCard from '@/Component/UiKits/Grid/NestingColumn';
import OffsetCard from '@/Component/UiKits/Grid/Offset';
import OneColumnWidthCard from '@/Component/UiKits/Grid/OneColumnWidth';
import OrderCard from '@/Component/UiKits/Grid/Order';
import VerticalAlignCard from '@/Component/UiKits/Grid/VerticalAlign';
import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';

const Grid = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle='Grid' parent='Ui Kits' title='Grid' />
      <Container fluid={true}>
        <Row>
          <GridOptionsCard />
          <GridColumnCard />
          <OneColumnWidthCard />
          <VerticalAlignCard />
          <HorizontalAlignCard />
          <NestingColCard />
          <OrderCard />
          <OffsetCard />
        </Row>
      </Container>
    </Fragment>
  );
};

export default Grid;
