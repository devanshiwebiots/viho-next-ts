'use client';

import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import RegisterFrom from '../../../../../Component/Pages/Auth/RegisterFrom';
import { AssetsImagePath } from '@/Constant';
import Image from 'next/image';

const RegisterVideo = () => {
  return (
    <Fragment>
      <section>
        <Container fluid={true} className='p-0'>
          <Row className='m-0'>
            <Col xl='7' className='p-0'>
              <Image width={1119} height={922} className='bg-img-cover bg-center' src={`${AssetsImagePath}/login/1.jpg`} alt='looginpage' unoptimized/>
            </Col>
            <Col xl='5' className='p-0'>
              <RegisterFrom />
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default RegisterVideo;
