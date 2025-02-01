'use client';

import React, { Fragment } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from 'reactstrap';
import { CustomStateButtons } from '@/Constant';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';
import { DefaultButtonData } from '@/Data/Buttons';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { DefaultButtonDataPropType, btnSubType } from '@/Type/SideBarType';
import { CustomStateButtonsSubHeading } from '@/Data/CardHeaderCommonData';

const DefaultButton = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle='Default Style' parent='Buttons' title='Default Style' />
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            {DefaultButtonData.map((item: DefaultButtonDataPropType, i: number) => (
              <Card key={i}>
                <CardHeaderCommon title={item.title} description={item.subHeading} />
                <CardBody className='btn-showcase'>
                  {item.btnSub.map((btnItem: btnSubType, i: number) => (
                    <Fragment key={i}>
                      <Button color={btnItem.colorClass} size={btnItem.size ? btnItem.size : ''} active={btnItem.active} disabled={btnItem.disabled} outline={btnItem.outline}>
                        {btnItem.title}
                      </Button>
                    </Fragment>
                  ))}
                </CardBody>
              </Card>
            ))}
            <Card id='custom-state-button'>
              <CardHeaderCommon title={CustomStateButtons} description={CustomStateButtonsSubHeading} />
              <CardBody className=' btn-showcase'>
                <Button color='primary'>{'Link'}</Button>
                <input className='btn btn-secondary' type='button' value='Input' title='btn btn-secondary' />
                <input className='btn btn-success' type='submit' value='Submit' title='btn btn-success' />
                <Button color='info' type='submit'>
                  {'Button'}
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default DefaultButton;
