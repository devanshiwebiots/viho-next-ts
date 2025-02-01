"use client"
import { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import Basic from '../../../../Component/bonus-ui/BootstrapNotify/Basic';
import CustomAutocloseClass from '../../../../Component/bonus-ui/BootstrapNotify/CustomAutocloseClass/CustomAutocloseClass';
import CustomDirectionsClass from '../../../../Component/bonus-ui/BootstrapNotify/CustomDirectionsClass';

const BootstrapNotifyContainer = () => {
  return (
      <Container fluid={true}>
        <Row>
          <Basic />
          <CustomDirectionsClass />
          <CustomAutocloseClass />
        </Row>
      </Container>
  );
};

export default BootstrapNotifyContainer;
