'use client';

import myEventsList from '../../../../Component/Calender/Events';
import React, { Fragment } from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { BasicCalendars } from '@/Constant';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";

const CalenderContain = () => {
  const calendarEvents = myEventsList.map((event) => ({
    id: event.id.toString(),
    title: event.title,
    start: event.start,
    end: event.end,
    allDay: event.allDay || false,
  }));
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Calender" parent="Apps" title="Calender" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeaderCommon title={BasicCalendars} />
              <CardBody>
                <FullCalendar
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                  initialView="dayGridMonth"
                  headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
                  }}
                  events={calendarEvents}
                  selectable
                  dateClick={(info) => alert(`Clicked on: ${info.dateStr}`)}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default CalenderContain;
