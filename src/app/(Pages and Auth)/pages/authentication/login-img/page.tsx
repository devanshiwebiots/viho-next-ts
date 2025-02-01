'use client';

import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { AssetsImagePath } from '@/Constant';
import Image from 'next/image';
import LoginForm from '@/Component/Pages/Auth/LoginForm';

const LoginTwo = () => {
  return (
    <Fragment>
      <section>
        <Container fluid={true}>
          <Row>
            <Col xl='7'>
              <Image width={1090} height={930} className='bg-img-cover bg-center' src={`${AssetsImagePath}/login/2.jpg`} alt='looginpage' />
            </Col>
            <Col xl='5 p-0'>
              <LoginForm />
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default LoginTwo;
