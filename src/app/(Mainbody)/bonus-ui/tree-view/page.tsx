'use client';

import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';
import BasicTrees from '@/Component/bonus-ui/TreeView/BasicTrees';
import DisabledTree from '@/Component/bonus-ui/TreeView/DisabledTree';

const TreeViewContainer = () => {
  return (
    <Container fluid={true}>
      <Breadcrumbs mainTitle="Tree View" parent="Bonus Ui" title="Tree View" />
      <Row>
        <Col md="6">
          <BasicTrees />
        </Col>
        <Col md="6">
          <DisabledTree />
        </Col>
      </Row>
    </Container>
  );
};

export default TreeViewContainer;
