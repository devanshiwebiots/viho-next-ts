'use client';

import React from 'react';
import { Container, Row } from 'reactstrap';
import BasicTree from '../../../../Component/bonus-ui/TreeView/BasicTree';
import CheckboxTree from '../../../../Component/bonus-ui/TreeView/CheckboxTree';
import ContextmenuTree from '../../../../Component/bonus-ui/TreeView/ContextmenuTree';
import DragTree from '../../../../Component/bonus-ui/TreeView/DragTree';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';

const TreeViewContainer = () => {
  return (
    <Container fluid={true}>
      <Breadcrumbs mainTitle='Tree View' parent='Bonus Ui' title='Tree View' />
      <Row>
        <BasicTree />
        <CheckboxTree />
        <DragTree />
        <ContextmenuTree />
      </Row>
    </Container>
  );
};

export default TreeViewContainer;
