import { AssetsImagePath, InvoiceHash, IssuedJan, PaymentDue, Viho } from '@/Constant';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Col, Media, Row } from 'reactstrap';

const InvoiceHeader = () => {
  return (
    <Row className='invo-header'>
      <Col sm='6'>
        <Media>
          <div className='media-left'>
            <Link href={`/dashboard/default`}>
              <Image className='media-object img-60' height={83} width={60} src={`${AssetsImagePath}/logo/logo-1.png`} alt='' />
            </Link>
          </div>
          <Media body className='m-l-20'>
            <h4 className='media-heading f-w-600'>{Viho}</h4>
            <p>
              {' '}
              hello@Viho.in
              <br />
              <span className='digits'>{'289-335-6503'}</span>
            </p>
          </Media>
        </Media>
      </Col>
      <Col sm='6'>
        <div className='text-md-end text-xs-center'>
          <h3>
            {InvoiceHash}
            <span className='digits counter'>1069</span>
          </h3>
          <p>
            {IssuedJan}
            <span className='digits'> 27, 2023</span>
            <br />
            {PaymentDue} <span className='digits'> 27, 2023</span>
          </p>
        </div>
      </Col>
    </Row>
  );
};
export default InvoiceHeader;
