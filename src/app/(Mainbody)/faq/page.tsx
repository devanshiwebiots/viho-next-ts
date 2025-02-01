'use client';

import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import TopSectionFAQ from '../../../Component/FAQ/TopSectionFAQ';
import RightSectionFAQ from '../../../Component/FAQ/RightSectionFAQ';
import LeftSectionFAQ from '../../../Component/FAQ/LeftSectionFAQ';
import FeaturedTutorial from '../../../Component/FAQ/FeaturedTutorials';
import LatestArticles from '../../../Component/FAQ/LatestArticles';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';

const FAQ = () => {
  return (
    <>
      <Breadcrumbs parent='FAQ' title='FAQ' mainTitle='FAQ' />
      <Container fluid>
        <Row>
          <TopSectionFAQ />
          <Col lg='12' className='header-faq'>
            <div className='pb-3 card-header'>
              <h6>Quick Questions are answered</h6>
            </div>
            <Row className='default-according style-1 faq-accordion' id='accordionoc'>
              <LeftSectionFAQ />
              <RightSectionFAQ />
            </Row>
          </Col>
          <FeaturedTutorial />
          <LatestArticles />
        </Row>
      </Container>
    </>
  );
};

export default FAQ;
