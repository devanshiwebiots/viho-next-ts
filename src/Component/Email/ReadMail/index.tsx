import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import MailSidebar from '../MailInbox/MailSidebar';
import MailContain from './ReadMailContain';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';

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
            <Col xl='9' md='12' className='xl-70'>
              <MailContain />
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default ReadMailContain;
