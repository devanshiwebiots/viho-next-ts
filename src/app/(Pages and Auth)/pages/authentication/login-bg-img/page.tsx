'use client';

import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import LoginForm from '../../../../../Component/Pages/Auth/LoginForm';
import Image from 'next/image';
import { AssetsImagePath } from '@/Constant';

const LoginOne = () => {
  return (
    <Fragment>
      <section>
        <Container fluid={true}>
          <Row>
            <Col xl='5'>
              <Image className='bg-img-cover bg-center' width={770} height={927} src={`${AssetsImagePath}/login/3.jpg`} alt='looginpage' />
            </Col>
            <Col xl='7 ' className='p-0'>
              <LoginForm />
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default LoginOne;
