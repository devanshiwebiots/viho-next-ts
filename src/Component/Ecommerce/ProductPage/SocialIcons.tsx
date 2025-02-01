import { Javascript } from '@/Constant';
import React, { Fragment } from 'react';
import { Col, Form, ListGroup, ListGroupItem, Row } from 'reactstrap';

const SocialIcons = () => {
  return (
    <Fragment>
      <div className='pro-group'>
        <Row>
          <Col md='6'>
            <h6 className='product-title'>{'share it'}</h6>
          </Col>
          <Col md='6'>
            <div className='product-icon'>
              <ListGroup className=' d-flex flex-row product-social'>
                <ListGroupItem className='d-inline-block'>
                  <a href={Javascript}>
                    <i className='fa fa-facebook'></i>
                  </a>
                </ListGroupItem>
                <ListGroupItem className='d-inline-block'>
                  <a href={Javascript}>
                    <i className='fa fa-google-plus'></i>
                  </a>
                </ListGroupItem>
                <ListGroupItem className='d-inline-block'>
                  <a href={Javascript}>
                    <i className='fa fa-twitter'></i>
                  </a>
                </ListGroupItem>
                <ListGroupItem className='d-inline-block'>
                  <a href={Javascript}>
                    <i className='fa fa-instagram'></i>
                  </a>
                </ListGroupItem>
                <ListGroupItem className='d-inline-block'>
                  <a href={Javascript}>
                    <i className='fa fa-rss'></i>
                  </a>
                </ListGroupItem>
              </ListGroup>
              <Form className='d-inline-block f-right'></Form>
            </div>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};
export default SocialIcons;
