import { Year } from '@/Constant';
import React from 'react';
import { Col } from 'reactstrap';
import CountUp from 'react-countup';

const TotalEarningYear = () => {
  return (
    <Col xs='4' className=' b-r-light'>
      <div>
        <span className='font-primary'>
          12%<i className='icon-angle-up f-12 ms-1'></i>
        </span>
        <span className='text-muted block-bottom'>{Year}</span>
        <h4 className='num m-0'>
          <span className='counter color-bottom'>
            <CountUp end={3659} duration={5} />
          </span>
          M
        </h4>
      </div>
    </Col>
  );
};

export default TotalEarningYear;
