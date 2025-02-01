'use client';

import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import { WishlistTitle } from '@/Constant';
import WishListData from '@/Component/Ecommerce/Wishlist/WishListData';

const WishListContain = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            <Card>
              <CardHeader className='pb-0'>
                <h5>{WishlistTitle}</h5>
              </CardHeader>
              <CardBody>
                <Row>
                  <WishListData />
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default WishListContain;
