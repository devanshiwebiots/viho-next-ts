import React from 'react';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { Nesting, Vertical } from '@/Constant';
import { Button, ButtonGroup, Card, CardBody, Col, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
const GroupButtonVertical = () => {
  return (
    <Col lg='6'>
      <Card className='height-equal'>
        <CardHeaderCommon title={Vertical} description='Make vertical buttons' />
        <CardBody className='btn-group-wrapper'>
          <ButtonGroup vertical>
            <Button color='primary'>{'Button'}</Button>
            <Button color='secondary' className='b-r-0'>
              {'Button'}
            </Button>
            <UncontrolledDropdown>
              <DropdownToggle color='success' caret className='b-r-0'>
                {'Button Dropdown'}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>{'Another Action'}</DropdownItem>
                <DropdownItem>{'Another Action'}</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <Button color='info' className='b-r-0'>
              {'Button'}
            </Button>
            <Button color='warning' className='b-r-0'>
              {'Button'}
            </Button>
            <UncontrolledDropdown>
              <DropdownToggle color='danger' caret>
                {'Button Dropdown'}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>{'Another Action'}</DropdownItem>
                <DropdownItem>{'Another Action'}</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </ButtonGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default GroupButtonVertical;
