'use client';
import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import NoScrollbar from '../../../../Component/bonus-ui/Scrollable/NoScrollbar';
import BothSideScroll from '../../../../Component/bonus-ui/Scrollable/BothSideScroll';
import Horizontal from '../../../../Component/bonus-ui/Scrollable/Horizontal';
import VerticalScroll from '../../../../Component/bonus-ui/Scrollable/VerticalScroll';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';

const Scrollable = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle='Scrollable' parent='Bonus Ui' title='Scrollable' />
      <Container fluid={true}>
        <Row>
          <VerticalScroll />
          <Horizontal />
          <BothSideScroll />
          <NoScrollbar />
        </Row>
      </Container>
    </Fragment>
  );
};

export default Scrollable;
