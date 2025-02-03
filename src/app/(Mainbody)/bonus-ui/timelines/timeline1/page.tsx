'use client';
import { Fragment } from 'react';
import { Container, Row, Col, Card, CardBody, Breadcrumb } from 'reactstrap';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import TimelineMain from '@/Component/bonus-ui/Timeline';

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
                <TimelineMain />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default TimelineContainer;
