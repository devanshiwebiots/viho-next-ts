'use client';

import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import TopDetailCourse from '../../../../Component/Learning/DetailCourse/TopDetailCourse';
import Comments from '../../../../Component/Learning/DetailCourse/Comment';
import RightLearning from '../../../../Component/Learning/Common/RightLearningList';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';

const DetailCourse = () => {
  return (
    <>
      <Breadcrumbs parent='Learning' title='Detailed Course' mainTitle='Detailed Course' />
      <Container fluid>
        <Row className='learning-block'>
          <Col xl='9' className='box-col-8 '>
            <div className='blog-single'>
              <TopDetailCourse />
              <Comments />
            </div>
          </Col>
          <RightLearning />
        </Row>
      </Container>
    </>
  );
};

export default DetailCourse;
