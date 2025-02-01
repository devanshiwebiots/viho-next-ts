'use client';

import { Javascript } from '@/Constant';
import React, { Fragment } from 'react';
import { Button, Col, Container, Form, FormGroup, Input, InputGroup, InputGroupText, Label, Row } from 'reactstrap';

const ForgetPwd = () => {
  return (
    <Fragment>
      <section>
        <Container className='p-0' fluid={true}>
          <Row className='m-0'>
            <Col className='p-0'>
              <div className='login-card'>
                <Form className='theme-form login-form'>
                  <h4 className='mb-3'>Reset Your Password</h4>
                  <FormGroup>
                    <Label>Enter Your Mobile Number</Label>
                    <Row>
                      <Col xl='4' sm='3'>
                        <Input type='text' value='+91' />
                      </Col>
                      <Col xl='8' sm='9'>
                        <Input type='tel' value='000-000-0000' />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Button className='btn-block' color='primary' type='submit'>
                      Send
                    </Button>
                  </FormGroup>
                  <FormGroup>
                    {' '}
                    <span className='reset-password-link'>
                      If don't receive OTP?  
                      <a className='btn-link text-danger' href={Javascript}>
                        Resend
                      </a>
                    </span>
                  </FormGroup>
                  <FormGroup>
                    <Label>Enter OTP</Label>
                    <Row>
                      <Col>
                        <Input className='text-center opt-text' type='text' value='00' maxlength='2' />
                      </Col>
                      <Col>
                        <Input className='text-center opt-text' type='text' value='00' maxlength='2' />
                      </Col>
                      <Col>
                        <Input className='text-center opt-text' type='text' value='00' maxlength='2' />
                      </Col>
                    </Row>
                  </FormGroup>
                  <h6>Create Your Password</h6>
                  <FormGroup className='position-relative'>
                    <Label>New Password</Label>
                    <InputGroup>
                      <InputGroupText>
                        <i className='icon-lock'></i>
                      </InputGroupText>
                      <Input type='password' name='login[password]' required={true} placeholder='*********' />
                      <div className='show-hide'>
                        <span className='show'></span>
                      </div>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <Label>Retype Password</Label>
                    <InputGroup>
                      <InputGroupText>
                        <i className='icon-lock'></i>
                      </InputGroupText>
                      <Input type='password' name='login[password]' required={true} placeholder='*********' />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <div className='checkbox'>
                      <Input id='checkbox1' type='checkbox' />
                      <Label className='text-muted' for='checkbox1'>
                        Remember password
                      </Label>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Button color='primary' className='btn-block'>
                      Done
                    </Button>
                  </FormGroup>
                  <p>
                    Already have an password?
                    <a className='ms-2' href='login.html'>
                      Sign in
                    </a>
                  </p>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default ForgetPwd;
