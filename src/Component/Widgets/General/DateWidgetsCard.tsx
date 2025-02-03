import React, { Fragment, useState } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import DatePicker from 'react-datepicker';

const DatewidgetCard = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const handleChange = (date: Date | null) => {
    setStartDate(date);
  };

  return (
    <Col xl='6' className='box-col-12 xl-100'>
      <Card>
        <CardBody className='cal-date-widget'>
          <Row>
            <Col xl='6' xs='12' md='6' sm='6'>
              <div className='cal-info text-center'>
                <div>
                  <h2>24</h2>
                  <div className='d-inline-block'>
                    <span className='b-r-dark pe-3'>March</span>
                    <span className='ps-3'>2023</span>
                  </div>
                  <p className='f-16'>There is no minimum donation, any sum is appreciated</p>
                </div>
              </div>
            </Col>
            <Col xl='6' xs='12' md='6' sm='6'>
              <div className='cal-datepicker'>
                <div className='datepicker-here float-sm-end'>
                  <DatePicker selected={startDate} onChange={handleChange} inline />
                </div>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DatewidgetCard;
