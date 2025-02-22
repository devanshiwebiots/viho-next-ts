import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Table } from 'reactstrap';
import { Details, Price, ProductCart, Quantity, Status } from '@/Constant';
import { WidgetsProductData } from '@/Data/Widgets';
import Link from 'next/link';

const ProductCard = () => {
  return (
    <Fragment>
      <Col xl='6' className='xl-100 box-col-12'>
        <Card>
          <CardHeader className='pb-0 d-flex justify-content-between align-items-center'>
            <h5>{ProductCart}</h5>
          </CardHeader>
          <CardBody>
            <div className='user-status table-responsive'>
              <Table className=' table-bordernone'>
                <thead>
                  <tr>
                    <th scope='col'>{Details}</th>
                    <th scope='col'>{Quantity}</th>
                    <th scope='col'>{Status}</th>
                    <th scope='col'>{Price}</th>
                  </tr>
                </thead>
                <tbody>
                  {WidgetsProductData.map((item) => (
                    <tr key={item.id}>
                      <td className='f-w-600'>
                        <Link href={`/app/ecommerce/product`}>{item.details}</Link>
                      </td>
                      <td>{item.quantity}</td>
                      <td className='font-primary'>{item.status}</td>
                      <td>{item.badge}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default ProductCard;
