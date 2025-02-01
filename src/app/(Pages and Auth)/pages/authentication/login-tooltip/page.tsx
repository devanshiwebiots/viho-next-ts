'use client';

import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Image from 'next/image';
import { AssetsImagePath } from '@/Constant';
import LoginForm from '@/Component/Pages/Auth/LoginForm';

const LoginTooltip = () => {
  return (
    <Fragment>
      <Container fluid={true} className='p-0'>
        <Row>
          <Col xl='5'>
            <Image width={770} height={927} className='bg-img-cover bg-center' src={`${AssetsImagePath}/login/3.jpg`} alt='looginpage' />
          </Col>
          <Col xl='7 p-0'>
            <LoginForm />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default LoginTooltip;
