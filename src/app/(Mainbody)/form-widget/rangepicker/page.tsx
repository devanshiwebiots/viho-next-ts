'use client';

import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import DateRangedata from '../../../../Component/FormWidgets/DateRangePicker/DateRangedata';
import SingleDate from '../../../../Component/FormWidgets/DateRangePicker/SingleDate';
import TimeAndDate from '../../../../Component/FormWidgets/DateRangePicker/TimeAndDate';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { DaterangePicker } from '@/Constant';

const DateRangerComponent = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col>
          <Card>
            <CardHeaderCommon title={DaterangePicker} />
            <CardBody>
              <Row className='date-range-picker'>
                <DateRangedata />
                <SingleDate />
                <TimeAndDate />
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DateRangerComponent;
