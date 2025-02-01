'use client';

import { Dragging_Event } from '@/Constant';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import React, { Fragment } from 'react';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';
import DragCalendar from '@/Component/Calender/DraggableCalender/DragCalendar';

const DraggableContain = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle='Dragable Calender' parent='Apps' title='Dragable Calender' />
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            <Card>
              <CardHeaderCommon title={Dragging_Event} />
              <CardBody>
                <div className='basic-calendar'>
                  <Row>
                    <DragCalendar />
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default DraggableContain;
