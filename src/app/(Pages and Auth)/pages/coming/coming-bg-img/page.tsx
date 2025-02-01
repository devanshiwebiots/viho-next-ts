'use client';

import React, { Fragment } from 'react';
import { Container } from 'reactstrap';
import CountdownData from '../../../../../Component/Pages/ComingSoon/CountdownData';
import { AssetsImagePath } from '@/Constant';
import Image from 'next/image';

const ComingBgImg = () => {
  return (
    <Fragment>
      <div className='page-wrapper' id='pageWrapper'>
        <Container fluid={true} className='p-0 m-0'>
          <div className='comingsoon comingsoon-bgimg'>
            <div className='comingsoon-inner text-center'>
              <a href='index.html'>
                <Image width={80} height={111} src={`${AssetsImagePath}/logo/logo-1.png`} alt='' className='img-fluid mx-auto media' />
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

export default ComingBgImg;
