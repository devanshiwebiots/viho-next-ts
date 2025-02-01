'use client';
import React from 'react';
import { Container, Row } from 'reactstrap';
import BasicMap from '../../../../Component/GoogleMaps/BasicMap';
import MarkerMaps from '../../../../Component/GoogleMaps/MarkerMap';
import PolygonMaps from '../../../../Component/GoogleMaps/PolygonMaps';
import PolylineMaps from '../../../../Component/GoogleMaps/PolylineMaps';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';

const GoogleMaps = () => {
  return (
    <>
      <Breadcrumbs parent='Map' title='Google Map' mainTitle='Google Map' />
      <Container fluid>
        <Row>
          <BasicMap />
          <MarkerMaps />
          <PolygonMaps />
          <PolylineMaps />
        </Row>
      </Container>
    </>
  );
};

export default GoogleMaps;
