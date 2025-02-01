'use client';

import React, { Fragment } from 'react';
import { Container, Col } from 'reactstrap';
import Link from 'next/link';
import { Error1 } from '@/Component/svgicons';
import { useSelector } from 'react-redux';
import { RootState } from '@/Redux/ReduxStore';

const ErrorPage1 = () => {
  return (
    <Fragment>
      <div className='page-wrapper' id='pageWrapper'>
        <div className='error-wrapper'>
          <Container>
            <div className='error-page1'>
              <div className='svg-wrraper mb-0'>
                <Error1 />
              </div>
              <Col md='8' className='offset-md-2'>
                <h3>Oops! This Page is Not Found.</h3>
                <p className='sub-content'>The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved.</p>
                <Link href={`/dashboard/default`} className='btn btn-primary btn-lg'>
                  BACK TO HOME PAGE
                </Link>
              </Col>
            </div>
          </Container>
        </div>
      </div>
    </Fragment>
  );
};

export default ErrorPage1;
