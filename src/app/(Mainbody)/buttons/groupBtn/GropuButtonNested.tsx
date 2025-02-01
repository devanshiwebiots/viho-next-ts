import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { Nesting } from '@/Constant';
import React from 'react';
import { Button, ButtonGroup, Card, CardBody, Col, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';

const GropuButtonNested = () => {
  return (
    <Col lg='6'>
      <Card className='height-equal'>
        <CardHeaderCommon title={Nesting} description='Make nesting buttons' />
        <CardBody className='btn-group-wrapper'>
          <div className='m-b-30'>
            <ButtonGroup>
              <Button color='primary'>
                <i className='fa fa-bold'></i>
              </Button>
              <Button color='secondary'>
                <i className='fa fa fa-italic'></i>
              </Button>
              <UncontrolledDropdown>
                <DropdownToggle color='light'>{'Dropdown'}</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>{'Header'}</DropdownItem>
                  <DropdownItem disabled>{'Action'}</DropdownItem>
                  <DropdownItem>{'Another Action'}</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>{'Another Action'}</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </ButtonGroup>
          </div>
          <div className='m-b-30'>
            <ButtonGroup>
              <Button color='primary'>
                <i className='fa fa-bold'></i>
              </Button>
              <Button color='secondary'>
                <i className='fa fa fa-italic'></i>
              </Button>
              <Button color='success'>
                <i className='fa fa-file-image-o'></i>
              </Button>
              <Button color='info'>
                <i className='fa fa-paperclip'></i>
              </Button>
            </ButtonGroup>
          </div>
          <div className='m-b-30'>
            <ButtonGroup>
              <Button color='primary' size='lg'>
                <i className='fa fa-bold'></i>
              </Button>
              <Button color='secondary' size='lg'>
                <i className='fa fa fa-italic'></i>
              </Button>
              <Button color='success' size='lg'>
                <i className='fa fa-file-image-o'></i>
              </Button>
              <Button color='info' size='lg'>
                <i className='fa fa-paperclip'></i>
              </Button>
            </ButtonGroup>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default GropuButtonNested;
