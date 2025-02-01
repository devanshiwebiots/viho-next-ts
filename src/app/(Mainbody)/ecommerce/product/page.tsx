'use client';

import Breadcrumbs from '@/CommonComponents/BreadCrumb';
import ProductFeatures from '../../../../Component/Ecommerce/Products/ProductFeatures';
import ProductGrid from '../../../../Component/Ecommerce/Products/ProductGrid';
import React from 'react';
import { Fragment } from 'react';
import { Container } from 'reactstrap';
import { useSelector } from 'react-redux';
import { RootState } from '@/Redux/ReduxStore';

const ProductContain = () => {
  const { sidebarOpen } = useSelector((store: RootState) => store.filterSlice);
  return (
    <Fragment>
      <Breadcrumbs parent='ECommerce' title='Products' mainTitle='Products' />
      <Container fluid={true} className={`product-wrapper ${sidebarOpen ? 'sidebaron' : ''}`} id='product-wrapper'>
        <div className='product-grid'>
          <ProductFeatures />
          <ProductGrid />
        </div>
      </Container>
    </Fragment>
  );
};
export default ProductContain;
