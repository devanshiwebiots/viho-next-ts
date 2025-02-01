'use client';

import Breadcrumbs from '@/CommonComponents/BreadCrumb';
import Animated from '@/Component/UiKits/Progress/Animated';
import Basic from '@/Component/UiKits/Progress/Basic';
import Custom from '@/Component/UiKits/Progress/Custom';
import Large from '@/Component/UiKits/Progress/Large';
import MultiBars from '@/Component/UiKits/Progress/MultiBars';
import Small from '@/Component/UiKits/Progress/Small';
import States from '@/Component/UiKits/Progress/States';
import Striped from '@/Component/UiKits/Progress/Stripped';
import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';

const ProgressBars = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle='Progress' parent='Ui Kits' title='Progress' />
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            <Basic />
            <Small />
            <Large />
            <Custom />
            <States />
            <MultiBars />
            <Striped />
            <Animated />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ProgressBars;
