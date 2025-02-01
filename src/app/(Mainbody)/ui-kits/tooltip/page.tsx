'use client';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';
import Basic from '@/Component/UiKits/Tooltip/Basic';
import Directions from '@/Component/UiKits/Tooltip/Direction';
import HtmlElement from '@/Component/UiKits/Tooltip/HtmlElement';
import Offset from '@/Component/UiKits/Tooltip/Offset';
import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';

const Tooltips = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle='Tooltip' parent='Ui Kits' title='Tooltip' />
      <Container fluid={true}>
        <Row>
          <Basic />
          <Directions />
          <HtmlElement />
          <Offset />
        </Row>
      </Container>
    </Fragment>
  );
};

export default Tooltips;
