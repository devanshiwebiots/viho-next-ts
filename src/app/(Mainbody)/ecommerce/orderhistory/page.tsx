'use client';
import React, { Fragment } from 'react';
import OrderTableData from '../../../../Component/Ecommerce/OrderHistory/OrderTableData';
import { Card, CardHeader, Col, Container, Row } from 'reactstrap';
import { OrderHistory } from '@/Constant';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';

const OrderHistoryContain = () => {
  return (
    <Fragment>
      <Breadcrumbs parent='ECommerce' title='Order History' mainTitle='Order History' />
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            <Card>
              <CardHeader className='pb-0'>
                <h5>{OrderHistory}</h5>
              </CardHeader>
              <OrderTableData />
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default OrderHistoryContain;
