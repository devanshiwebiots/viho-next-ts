'use client';
import React, { Fragment } from 'react';
import { Container } from 'reactstrap';
import Image from 'next/image';
import CountdownData from '@/Component/Pages/ComingSoon/CountdownData';
import { AssetsImagePath } from '@/Constant';

const ComingSimple = () => {
  return (
    <Fragment>
      <div className='page-wrapper' id='pageWrapper'>
        <Container fluid={true} className='p-0'>
          <div className='comingsoon'>
            <div className='comingsoon-inner text-center'>
              <a href='index.html'>
                <Image height={111} width={80} src={`${AssetsImagePath}/logo/logo-1.png`} alt='' className='img-fluid mx-auto media' unoptimized/>
              </a>
              <h5>WE ARE COMING SOON</h5>
              <div className='countdown' id='clockdiv'>
                <CountdownData />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default ComingSimple;
