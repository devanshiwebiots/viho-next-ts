'use client';

import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import Basic from '../../../../Component/bonus-ui/SweetAlert/Basic';
import Advanced from '../../../../Component/bonus-ui/SweetAlert/Advance';
import Alert from '../../../../Component/bonus-ui/SweetAlert/Alert';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';

const SweetAlerts = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle='Sweet Alert' parent='Bouns Ui' title='Sweet Alert' />
      <Container fluid={true}>
        <Row>
          <Basic />
          <Advanced />
          <Alert />
        </Row>
      </Container>
    </Fragment>
  );
};

export default SweetAlerts;
