import React, { Fragment, useState } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import CommonModal from '../../common/modal';
import { ModalTitle, UsingTheGrid } from '@/Constant';

const GridModal = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <Fragment>
      <Button color='primary' onClick={toggle}>
        {UsingTheGrid}
      </Button>
      <CommonModal isOpen={modal} title={ModalTitle} toggler={toggle} bodyClass='grid-showcase'>
        <Container fluid={true} className='bd-example-row'>
          <Row>
            <Col md='4'>
              <span>{'.col-md-4'}</span>
            </Col>
            <Col md='4' className='ml-auto'>
              <span>{'.col-md-4 .ml-auto'}</span>
            </Col>
          </Row>
          <Row>
            <Col md='3' className='ml-auto'>
              <span>{'.col-md-3 .ml-auto'}</span>
            </Col>
            <Col md='2' className='ml-auto'>
              <span>{'.col-md-2 .ml-auto'}</span>
            </Col>
          </Row>
          <Row>
            <Col md='6' className='ml-auto'>
              <span>{'.col-md-6 .ml-auto'}</span>
            </Col>
          </Row>
          <Row>
            <Col sm='9'>
              <span>{'Level 1: .col-sm-9'}</span>
              <Row>
                <Col sm='6' col='9'>
                  <span>{'Level 2: .col-8 .col-sm-6'}</span>
                </Col>
                <Col sm='6' col='4'>
                  <span>{'Level 2: .col-4 .col-sm-6'}</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </CommonModal>
    </Fragment>
  );
};

export default GridModal;
