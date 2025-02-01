import React, { Fragment } from 'react';
import FacebookCus from './Facebook';
import GithubCus from './Github';
import GoogleCus from './Google';
import { CreateAccount, Javascript } from '@/Constant';

const SocialAuth = () => {
  return (
    <Fragment>
      <h6 className='text-muted mt-4 or'>{'Or Sign in with'}</h6>
      <div className='social mt-4'>
        <div className='btn-showcase'>
          <FacebookCus />
          <GoogleCus/>
          <GithubCus />
        </div>
      </div>
      <p className='mt-4 mb-0'>
        {"Don't have account?"}
        <a className='ms-2' href={Javascript}>
          {CreateAccount}
        </a>
      </p>
    </Fragment>
  );
};

export default SocialAuth;
