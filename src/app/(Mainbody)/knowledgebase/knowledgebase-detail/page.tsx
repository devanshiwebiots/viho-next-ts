'use client';
import React from 'react';
import { Breadcrumb, Container, Row } from 'reactstrap';
import CategoriesKnowledge from '../../../../Component/KnowledgeBaseMain/KnowledgeDetails/Sidebar/Categories';
import MainCard from '../../../../Component/KnowledgeBaseMain/KnowledgeDetails/Main';

const KnowledgeDetails = () => {
  return (
    <>
      <Breadcrumb title='Knowledge Details' parent='Knowledge Base' />
      <Container fluid>
        <Row>
          <CategoriesKnowledge />
          <MainCard />
        </Row>
      </Container>
    </>
  );
};

export default KnowledgeDetails;
