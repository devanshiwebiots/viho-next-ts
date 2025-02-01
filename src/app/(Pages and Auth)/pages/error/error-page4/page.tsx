'use client';
import { Error4 } from '@/Component/svgicons';
import { RootState } from '@/Redux/ReduxStore';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Container, Col } from 'reactstrap';

const ErrorPage4 = () => {

  return (
    <Fragment>
      <div className='page-wrapper' id='pageWrapper'>
        <div className='error-wrapper'>
          <Container>
            <div className='error-page1'>
              <div className='svg-wrraper'>
                <Error4 />
              </div>
              <Col md='8' className='offset-md-2'>
                <h3>500 - Internal server error</h3>
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

export default ErrorPage4;
