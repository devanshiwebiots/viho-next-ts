'use client';

import React, { Fragment } from 'react';
import GroupButtonClass from './GroupButton';
import RadioBtnClass from './RadioBtn';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';
import GropuButtonNested from './GropuButtonNested';
import GroupButtonVertical from './GroupButtonVertical';
import { Container, Row } from 'reactstrap';

const GroupButton = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle='Button Group' parent='Buttons' title='Button Group' />
      <Container fluid={true}>
        <Row>
          <GroupButtonClass />
          <RadioBtnClass />
          <GropuButtonNested />
          <GroupButtonVertical />
        </Row>
      </Container>
    </Fragment>
  );
};

export default GroupButton;
