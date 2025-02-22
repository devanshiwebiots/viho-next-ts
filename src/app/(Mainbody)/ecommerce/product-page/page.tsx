'use client';

import BrandShipping from '../../../../Component/Ecommerce/ProductPage/BrandShipping';
import ClothsDetails from '../../../../Component/Ecommerce/ProductPage/ClothsDetails';
import ImageSlider from '../../../../Component/Ecommerce/ProductPage/ImageSilder';
import ProductDetails from '../../../../Component/Ecommerce/ProductPage/ProductDetails';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { Fragment } from 'react';
import React from 'react';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';

const ProductPageContain = () => {
  return (
    <Fragment>
      <Breadcrumbs parent='ECommerce' title='Products Page' mainTitle='Products Page' />
      <Container fluid={true}>
        <div>
          <Row className='product-page-main p-0'>
            <Col xl='5' md='6' className='box-col-12'>
              <Card>
                <CardBody>
                  <Row>
                    <ImageSlider />
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <ProductDetails />
            <BrandShipping />
          </Row>
        </div>
        <Card>
          <Row className='product-page-main'>
            <Col sm='12'>
              <ClothsDetails />
            </Col>
          </Row>
        </Card>
      </Container>
    </Fragment>
  );
};
export default ProductPageContain;
