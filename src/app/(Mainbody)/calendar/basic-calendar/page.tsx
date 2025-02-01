'use client';

import myEventsList from '../../../../Component/Calender/Events';
import React, { Fragment } from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { Calendar, momentLocalizer, Views, View } from 'react-big-calendar';
import moment from 'moment';
import { BasicCalendars } from '@/Constant';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
type CalendarView = View;
const localizer = momentLocalizer(moment);
const allViews: CalendarView[] = Object.values(Views) as CalendarView[];
const CalenderContain = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle='Calender' parent='Apps' title='Calender' />
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            <Card>
              <CardHeaderCommon title={BasicCalendars} />
              <CardBody>
                <Calendar localizer={localizer} scrollToTime={new Date(1970, 1, 1, 6)} defaultDate={new Date(2023, 2, 12)} onSelectEvent={(event) => alert(event.title)} views={allViews} events={myEventsList} showMultiDayTimes step={60} startAccessor='start' endAccessor='end' />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default CalenderContain;
