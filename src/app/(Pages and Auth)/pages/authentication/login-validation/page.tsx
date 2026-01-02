'use client';

import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import LoginForm from '../../../../../Component/Pages/Auth/LoginForm';
import { AssetsImagePath } from '@/Constant';
import Image from 'next/image';

const LoginValidation = () => {
  return (
    <Fragment>
      <section>
        <Container fluid={true}>
          <Row>
            <Col xl='7 ' className='order-1'>
              <Image height={748} width={838} className='bg-img-cover bg-center' src={`${AssetsImagePath}/login/1.jpg`} alt='looginpage' unoptimized/>
            </Col>
            <Col xl='5 ' className='p-0'>
              <LoginForm />
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default LoginValidation;
