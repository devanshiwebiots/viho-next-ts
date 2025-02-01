'use client';

import React from 'react';
import { Container, Row } from 'reactstrap';
import Header from '../../../Component/KnowledgeBaseMain/Common/HeaderKnowledgeBase';
import Courses from '../../../Component/KnowledgeBaseMain/KnowledgeBase/Courses';
import Articles from '../../../Component/KnowledgeBaseMain/Common/Articles';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';

const KnowledgeBase = () => {
  return (
    <>
      <Breadcrumbs parent='Knowledge Base' title='Knowledge Base' mainTitle='Knowledge Base' />
      <Container fluid>
        <Row>
          <Header />
          <Articles />
          <Courses />
        </Row>
      </Container>
    </>
  );
};

export default KnowledgeBase;
