'use client';

import LoginForm from '@/Component/Pages/Auth/LoginForm';
import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';

const LoginSweetalert = () => {
  return (
    <Fragment>
      <section>
        <Container className='p-0' fluid={true}>
          <Row>
            <Col xl='12'>
              <LoginForm />
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default LoginSweetalert;
