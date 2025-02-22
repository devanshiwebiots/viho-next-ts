"use client"

import React, { Fragment } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { SampleCard } from '@/Constant';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const Sample = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle='Sample Page' parent='Pages' title='Sample Page' />
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            <Card>
              <CardHeaderCommon title={SampleCard} description='lorem ipsum dolor sit amet, consectetur adipisicing elit' />
              <CardBody>
                <p>
                  {
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                  }
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Sample;
