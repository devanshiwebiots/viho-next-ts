'use client';

import Breadcrumbs from '@/CommonComponents/BreadCrumb';
import MailSidebar from '@/Component/Email/MailInbox/MailSidebar';
import MailContain from '@/Component/Email/ReadMail/ReadMailContain';
import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';

const ReadMailContain = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle='Read Email' parent='Apps' title='Read Email' />
      <Container fluid={true}>
        <div className='email-wrap'>
          <Row>
            <Col xl='3' md='6' className='xl-30 box-col-4'>
              <MailSidebar />
            </Col>
            <Col xl='9' md='12' className='xl-70 box-col-8'>
              <MailContain />
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default ReadMailContain;
