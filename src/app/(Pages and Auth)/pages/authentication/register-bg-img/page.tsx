'use client';

import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { AssetsImagePath } from '@/Constant';
import Image from 'next/image';
import RegisterFrom from '@/Component/Pages/Auth/RegisterFrom';

const RegisterBgImg = () => {
  return (
    <Fragment>
      <section>
        <Container fluid={true} className='p-0'>
          <Row className='m-0'>
            <Col xl='5'>
              <Image height={927} width={770} className='bg-img-cover bg-center' src={`${AssetsImagePath}/login/3.jpg`} alt='looginpage' unoptimized/>
            </Col>
            <Col xl='7 ' className='p-0'>
              <RegisterFrom />
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default RegisterBgImg;
