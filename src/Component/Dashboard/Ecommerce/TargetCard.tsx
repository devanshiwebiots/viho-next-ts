import { Completed, OurTarget, WeArchieve } from '@/Constant';
import Link from 'next/link';
import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';

const TargetCard = () => {
  return (
    <Card className='target-sec'>
      <CardHeader>
        <ul className='target-list flex-row'>
          <li>
            <Link href={`/app/todo`}>
              <h6>{OurTarget}</h6>
            </Link>
            <p>{Completed}</p>
            <span>$687.780</span>
          </li>
          <li className='bg-primary'>
            <Link href={`/app/todo`}>
              <h6>{WeArchieve}</h6>
            </Link>
            <p>Completed in After 3 Hours</p>
            <span>$687.780k</span>
          </li>
        </ul>
      </CardHeader>
      <CardBody className='p-0'>
        <div className='traget-img-sec'></div>
        <div className='animat-block'>
          <i className='fa fa-times close1'></i>
          <i className='fa fa-times close2'></i>
          <i className='fa fa-times close3'></i>
          <div className='circle1'></div>
          <div className='circle2'></div>
          <div className='circle3'></div>
        </div>
      </CardBody>
    </Card>
  );
};

export default TargetCard;
