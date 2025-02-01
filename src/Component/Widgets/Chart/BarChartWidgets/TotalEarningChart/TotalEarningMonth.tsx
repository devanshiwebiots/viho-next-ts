import { Month } from '@/Constant';
import React from 'react';
import { Col } from 'reactstrap';
import CountUp from 'react-countup';

const TotalEarningMonth = () => {
  return (
    <Col xs='4' className=' b-r-light'>
      <div>
        <span className='font-primary'>
          15%<i className='icon-angle-up f-12 ms-1'></i>
        </span>
        <span className='text-muted block-bottom'>{Month}</span>
        <h4 className='num m-0'>
          <span className='counter color-bottom'>
            <CountUp end={698} duration={5} />
          </span>
          M
        </h4>
      </div>
    </Col>
  );
};

export default TotalEarningMonth;
