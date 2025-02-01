'use client';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import DatePickersData from '../../../../Component/FormWidgets/DatePicker/DatePicker';
import { DatePickers } from '@/Constant';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const DatePickerComponent = () => {
  return (
    <Container fluid={true}>
      <Card>
        <CardHeaderCommon title={DatePickers} />
        <CardBody>
          <Row>
            <Col md='12'>
              <div className='date-picker'>
                <DatePickersData />
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
};

export default DatePickerComponent;
