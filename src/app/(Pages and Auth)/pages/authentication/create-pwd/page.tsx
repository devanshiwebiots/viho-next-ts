'use client';

import { Javascript } from '@/Constant';
import React, { Fragment } from 'react';
import { Button, Col, Container, Form, FormGroup, Input, InputGroup, InputGroupText, Label, Row } from 'reactstrap';

const CreatePwd = () => {
  return (
    <Fragment>
      <section>
        <Container fluid={true} className='p-0'>
          <Row className='m-0'>
            <Col xl='12 ' className='p-0'>
              <div className='login-card'>
                <Form className='theme-form login-form'>
                  <h4 className='mb-3'>Create Your Password</h4>
                  <FormGroup>
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
                    <Label>Password</Label>
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
                    <Button className='btn-block' color='primary' type='submit'>
                      Done
                    </Button>
                  </FormGroup>
                  <p>
                    Don't have account?
                    <a className='ps-2' href={Javascript}>
                      Create Account
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

export default CreatePwd;
