'use client';

import RegisterFrom from '@/Component/Pages/Auth/RegisterFrom';
import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';

const RegisterSimple = () => {
  return (
    <Fragment>
      <section>
        <Container fluid={true} className='p-0'>
          <Row className='m-0'>
            <Col className='p-0'>
              <RegisterFrom />
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default RegisterSimple;
