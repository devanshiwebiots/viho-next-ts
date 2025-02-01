import { Javascript } from '@/Constant';
import { changeColumnClass, toggleColumnGrid, toggleRowGrid } from '@/Redux/Slices/filterSlice';
import { Fragment } from 'react';
import { Grid, List } from 'react-feather';
import { useDispatch } from 'react-redux';
import { Col, ListGroup, ListGroupItem, Row } from 'reactstrap';
import Sorting from './Sorting';

const ProductTotal = () => {
  const dispatch = useDispatch();
  const handleColumnClass = (name: string) => {
    dispatch(changeColumnClass(name));
  };
  return (
    <Fragment>
      <Row className='m-b-10'>
        <Col md='3' sm='2' className='products-total'>
          <div className='square-product-setting d-inline-block'>
            <a
              className='icon-grid grid-layout-view'
              onClick={() => {
                dispatch(toggleColumnGrid());
              }}
              href={Javascript}>
              <Grid />
            </a>
          </div>
          <div className='square-product-setting d-inline-block ms-2'>
            <a
              className='icon-grid m-0 list-layout-view'
              onClick={() => {
                dispatch(toggleRowGrid());
              }}
              href={Javascript}>
              <List />
            </a>
          </div>
          <span className='d-none-productlist filter-toggle'>
            <h6 className='mb-0'>
              Filters
              <span className='ms-2'>
                <i className='toggle-data fa fa-chevron-down'></i>
              </span>
            </h6>
          </span>
          <div className='grid-options d-inline-block'>
            <ListGroup>
              <ListGroupItem>
                <a
                  className='product-2-layout-view'
                  onClick={() => {
                    handleColumnClass('col-xl-6 col-sm-6');
                  }}
                  href={Javascript}>
                  <span className='line-grid line-grid-1 bg-primary'></span>
                  <span className='line-grid line-grid-2 bg-primary'></span>
                </a>
              </ListGroupItem>
              <ListGroupItem>
                <a
                  className='product-3-layout-view'
                  onClick={() => {
                    handleColumnClass('col-xl-4 col-sm-4');
                  }}
                  href={Javascript}>
                  <span className='line-grid line-grid-3 bg-primary'></span>
                  <span className='line-grid line-grid-4 bg-primary'></span>
                  <span className='line-grid line-grid-5 bg-primary'></span>
                </a>
              </ListGroupItem>
              <ListGroupItem>
                <a
                  className='product-4-layout-view'
                  onClick={() => {
                    handleColumnClass('col-xl-3 col-sm-3');
                  }}
                  href={Javascript}>
                  <span className='line-grid line-grid-6 bg-primary'></span>
                  <span className='line-grid line-grid-7 bg-primary'></span>
                  <span className='line-grid line-grid-8 bg-primary'></span>
                  <span className='line-grid line-grid-9 bg-primary'></span>
                </a>
              </ListGroupItem>
              <ListGroupItem>
                <a
                  className='product-6-layout-view'
                  onClick={() => {
                    handleColumnClass('col-xl-2 col-sm-2');
                  }}
                  href={Javascript}>
                  <span className='line-grid line-grid-10 bg-primary'></span>
                  <span className='line-grid line-grid-11 bg-primary'></span>
                  <span className='line-grid line-grid-12 bg-primary'></span>
                  <span className='line-grid line-grid-13 bg-primary'></span>
                  <span className='line-grid line-grid-14 bg-primary'></span>
                  <span className='line-grid line-grid-15 bg-primary'></span>
                </a>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        <Sorting />
      </Row>
    </Fragment>
  );
};
export default ProductTotal;
