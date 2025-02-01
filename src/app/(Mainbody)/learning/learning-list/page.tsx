'use client';

import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';
import TopLearningList from '@/Component/Learning/LearningList/TopLearningDetail';
import BottomLearningList from '@/Component/Learning/LearningList/BottomLearningDetails';
import RightLearning from '@/Component/Learning/Common/RightLearningList';

const LearningList = () => {
  return (
    <>
      <Breadcrumbs title='Learning List' parent='Learning' mainTitle='Learning List' />
      <Container fluid>
        <Row className='learning-block'>
          <Col xl='9'>
            <Row>
              <TopLearningList />
              <BottomLearningList />
            </Row>
          </Col>
          <RightLearning />
        </Row>
      </Container>
    </>
  );
};

export default LearningList;
