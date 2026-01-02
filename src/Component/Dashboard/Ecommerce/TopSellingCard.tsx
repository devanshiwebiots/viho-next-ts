import { AssetsImagePath, Month, Today, TopSellingProduct } from '@/Constant';
import { RootState } from '@/Redux/ReduxStore';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardBody, CardHeader, Media } from 'reactstrap';

const TopSellingCard = () => {

  return (
    <Card>
      <CardHeader className='pb-0'>
        <div className='header-top d-sm-flex justify-content-between align-items-center'>
          <h5>{TopSellingProduct}</h5>
          <div className='center-content'>
            <ul className='week-date flex-row'>
              <li className='font-primary'>{Today}</li>
              <li>{Month}</li>
            </ul>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <Media>
          <Image className='img-fluid' height={63} width={76} src={`${AssetsImagePath}/dashboard-2/9.png`} alt='' unoptimized/>
          <Media body>
            <Link href={'/app/ecommerce/product'}>
              <h6>Trending Nike shoes</h6>
            </Link>
            <p>New Offer Only $126.00</p>
            <ul className='rating-star d-flex flex-row'>
              <li>
                <i className='fa fa-star'></i>
              </li>
              <li>
                <i className='fa fa-star'></i>
              </li>
              <li>
                <i className='fa fa-star'></i>
              </li>
              <li>
                <i className='fa fa-star'></i>
              </li>
              <li>
                <i className='fa fa-star'></i>
              </li>
            </ul>
          </Media>
          <Link href={`/ecommerce/cart`} className='btn btn-iconsolid'>
            <i className='icon-bag'></i>
          </Link>
        </Media>
      </CardBody>
    </Card>
  );
};

export default TopSellingCard;
