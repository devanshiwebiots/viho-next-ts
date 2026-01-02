import Category from '../Filters/Category';
import { Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Row } from 'reactstrap';
import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '@/Redux/Slices/filterSlice';
import { setSearchInput } from '@/Redux/Slices/E-comerceSlice';
import { AssetsImagePath } from '@/Constant';
import Image from 'next/image';

const ProductSidebar = () => {
  const dispatch = useDispatch();
  const handleSearchChange = (e: { target: { value: string } }) => {
    dispatch(setSearchInput(e.target.value));
  };
  return (
    <Fragment>
      <Row>
        <Col xl='3' sm='12'>
          <div className={`product-sidebar`}>
            <div className='filter-section'>
              <Card>
                <CardHeader>
                  <h6
                    className='mb-0 f-w-600'
                    onClick={() => {
                      dispatch(toggleSidebar());
                    }}>
                    Filters
                    <span className='pull-right'>
                      <i className='fa fa-chevron-down toggle-data'></i>
                    </span>
                  </h6>
                </CardHeader>
                <div className='left-filter'>
                  <CardBody className='filter-cards-view animate-chk'>
                    <Category />
                    <div className='product-filter text-center mt-2'>
                      <Image height={300} width={198} className='img-fluid banner-product m-auto' src={`${AssetsImagePath}/ecommerce/banner.jpg`} alt='' unoptimized/>
                    </div>
                  </CardBody>
                </div>
              </Card>
            </div>
          </div>
        </Col>
        <Col xl='9' sm='12'>
          <div className='product-search'>
            <Form>
              <FormGroup className='mb-3'>
                <Input type='text' placeholder='search' onChange={handleSearchChange} />
                <i className='fa fa-search' />
              </FormGroup>
            </Form>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};
export default ProductSidebar;
