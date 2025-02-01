'use client';

import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';
import { ProductListTitle } from '@/Constant';
import ProductTableData from '@/Component/Ecommerce/ProductList/ProductTableData';

const ProductListContain = () => {
  const ProductListDesc = 'The searching functionality provided by DataTables is useful for quickly search through the information in the table - however the search is global, and you may wish to present controls that search on specific columns.';
  return (
    <Fragment>
      <Breadcrumbs parent='ECommerce' title='Products List' mainTitle='Products List' />
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            <Card>
              <CardHeader className='pb-0'>
                <h5>{ProductListTitle} </h5>
                <span>{ProductListDesc}</span>
              </CardHeader>
              <CardBody>
                <ProductTableData />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default ProductListContain;
