import { Today } from '@/Constant';
import React from 'react';
import { Col } from 'reactstrap';
import CountUp from 'react-countup';
const TotalEarningDay = () => {
  return (
    <Col xs='4'>
      <div>
        <span className='font-primary'>
          34%<i className='icon-angle-up f-12 ms-1'></i>
        </span>
        <span className='text-muted block-bottom'>{Today}</span>
        <h4 className='num m-0'>
          <span className='counter color-bottom'>
            <CountUp end={9361} duration={5} />
          </span>
          M
        </h4>
      </div>
    </Col>
  );
};

export default TotalEarningDay;
