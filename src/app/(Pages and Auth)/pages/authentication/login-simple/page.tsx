'use client';

import LoginForm from '@/Component/Pages/Auth/LoginForm';
import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';

const Login = () => {
  return (
    <Fragment>
      <Container fluid={true} className='p-0'>
        <Row>
          <Col>
            <LoginForm />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Login;
