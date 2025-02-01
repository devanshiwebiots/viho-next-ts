'use client';

import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import MailSidebar from '../../../../Component/Email/MailInbox/MailSidebar';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';
import MailContain from '@/Component/Email/MailInbox/MailContain';

const MailInboxContain = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle='Email Application' parent='Apps' title='Email App' />
      <Container fluid={true}>
        <div className='email-wrap'>
          <Row>
            <Col xl='3' md='6' className='box-col-4'>
              <MailSidebar />
            </Col>
            <Col xl='9' md='12' className='box-col-8'>
              <MailContain />
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default MailInboxContain;
