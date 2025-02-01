'use client';

import React from 'react';
import { Container, Row } from 'reactstrap';
import HeaderKnowledgeBase from '../../../../Component/KnowledgeBaseMain/Common/HeaderKnowledgeBase';
import Articles from '../../../../Component/KnowledgeBaseMain/Common/Articles';
import KnowledgeArticles from '../../../../Component/KnowledgeBaseMain/CategoryKnowledgeBase/KnowledgeArticles';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';

const KnowledgeBaseCategory = () => {
  return (
    <>
      <Breadcrumbs title='Knowledge Category' parent='Knowledge Base' mainTitle='Knowledge Category' />
      <Container fluid>
        <Row>
          <HeaderKnowledgeBase />
          <Articles />
          <KnowledgeArticles />
        </Row>
      </Container>
    </>
  );
};

export default KnowledgeBaseCategory;
