import React, { Fragment, useEffect, useState } from 'react';
import { Card, Col } from 'reactstrap';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';


const ClockCard = () => {
  const month = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  var d = new Date();
  let dateshow = month[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
  const [value, setValue] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Col xl='3' sm='6' className='xl-50 box-col-6'>
      <Card>
        <div className='mobile-clock-widget'>
          <div>
            <Clock value={value} />
            <div id='date' className='date f-24 mb-2'>
              <span>{dateshow}</span>
            </div>

            <div>
              <p className='m-0 f-14 text-light'>kolkata, India</p>
            </div>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default ClockCard;
