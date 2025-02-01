import React from 'react';
import { Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { ProjectFormType } from '@/Type/SideBarType';
import { Big, Comments, Issues, Medium, Resolved, Small } from '@/Constant';

const IssueClass = ({ register }: ProjectFormType) => {
  return (
    <Row>
      <Col sm='4'>
        <FormGroup>
          <Label>{Issues}</Label>
          <Input type='select' name='issues' placeholder='Select Issues' className=' digits' required>
            <option>{Small}</option>
            <option>{Medium}</option>
            <option>{Big}</option>
          </Input>
        </FormGroup>
      </Col>
      <Col sm='4'>
        <FormGroup>
          <Label>{Resolved}</Label>
          <input className='form-control' type='text' placeholder='Add Resolved issues' {...register('resolved', { required: true })} />
        </FormGroup>
      </Col>
      <Col sm='4'>
        <FormGroup>
          <Label>{Comments}</Label>
          <input className='form-control' type='text' placeholder='Add Comment' {...register('comment', { required: true })} />
        </FormGroup>
      </Col>
    </Row>
  );
};

export default IssueClass;
