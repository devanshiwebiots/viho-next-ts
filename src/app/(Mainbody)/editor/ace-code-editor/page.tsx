"use client"

import React from 'react';
import { Container, Row } from 'reactstrap';
import JavascriptMode from '../../../../Component/Editor/ACEEditor/JavascriptMode';
import HtmlMode from '../../../../Component/Editor/ACEEditor/HTMLMode';
import CssMode from '../../../../Component/Editor/ACEEditor/CSSMode';
import JavaMode from '../../../../Component/Editor/ACEEditor/JavaMode';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';
const ACEEditor = () => {
  return (
    <>
      <Breadcrumbs title='ACE Editor' parent='Editor' mainTitle='ACE Editor' />
      <Container fluid>
        <Row>
          <JavascriptMode />
          <HtmlMode />
          <CssMode />
          <JavaMode />
        </Row>
      </Container>
    </>
  );
};

export default ACEEditor;
