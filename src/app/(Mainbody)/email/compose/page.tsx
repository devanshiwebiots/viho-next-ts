'use client';

import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import MailSidebar from '../../../../Component/Email/MailInbox/MailSidebar';
import ComposeMessage from '../../../../Component/Email/Compose/ComposeMessage';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';

const ComposeContain = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle='Email Compose' parent='Apps' title='Email Compose' />
      <Container fluid={true}>
        <div className='email-wrap'>
          <Row>
            <Col xl='3' md='6' className='box-col-4'>
              <MailSidebar />
            </Col>
            <Col xl='9' md='12' className='box-col-8'>
              <ComposeMessage />
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default ComposeContain;
