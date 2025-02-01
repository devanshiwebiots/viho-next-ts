'use client';

import { Fragment } from 'react';
import Timeline from '../../../../../Component/bonus-ui/Timeline/timeline1';
import { Container, Row, Col, Card, CardBody, Breadcrumb } from 'reactstrap';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const TimelineContainer = () => {
  return (
    <Fragment>
      <Breadcrumb />
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            <Card>
              <CardHeaderCommon title='Timeline' />
              <CardBody>
                <Timeline />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default TimelineContainer;
