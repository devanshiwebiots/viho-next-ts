import React, { Fragment, useRef } from 'react';
import { Col, Button } from 'reactstrap';
import { useReactToPrint } from 'react-to-print';
import { Cancel, Print } from '@/Constant';
import Link from 'next/link';
import ItemDescription from './ItemDescription';
const PrintComponent = () => {
  const componentRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <Fragment>
      <ItemDescription ref={componentRef} />
      <Col sm='12' className='text-center my-3'>
        <Button color='primary' className='me-2' onClick={handlePrint}>{Print}</Button>
        <Link href={`/ecommerce/product`}>
          <Button color='secondary'>{Cancel}</Button>
        </Link>
      </Col>
    </Fragment>
  );
};

export default PrintComponent;
