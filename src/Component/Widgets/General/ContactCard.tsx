import { ContactUs, Email, Messages, YourName, email, sendIt } from '@/Constant';
import { RootState } from '@/Redux/ReduxStore';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Button, Card, CardBody, CardHeader, Col, Form, Input, Label } from 'reactstrap';

const ContactCard = () => {

  return (
    <Fragment>
      <Col sm='12' lg='6' xl='8' md='12' className='box-col-6'>
        <Card className='height-equal'>
          <CardHeader className='pb-0 d-flex justify-content-between align-items-center'>
            <h5>{ContactUs}</h5>
          </CardHeader>
          <CardBody className='contact-form'>
            <Form className='theme-form'>
              <div className='form-icon'>
                <i className='icofont icofont-envelope-open'></i>
              </div>
              <div className='mb-3'>
                <Label htmlFor='exampleInputName'>{YourName}</Label>
                <Input id='exampleInputName' type='text' placeholder='John Dio' />
              </div>
              <div className='mb-3'>
                <Label className='col-form-label' htmlFor='exampleInputEmail1'>
                  {Email}
                </Label>
                <Input id='exampleInputEmail1' type='email' placeholder='Demo@gmail.com' />
              </div>
              <div className='mb-3'>
                <Label className='col-form-label' htmlFor='exampleInputEmail1'>
                  {Messages}
                </Label>
                <Input type='textarea' rows={3} cols={50} placeholder='Your Message'></Input>
              </div>
              <div className='text-sm-end'>
                <Link href={`/contact`}>
                  <Button color='primary'>{sendIt}</Button>
                </Link>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default ContactCard;
