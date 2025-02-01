'use client';
import React, { Fragment } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from 'reactstrap';
import { CustomStateButtons } from '@/Constant';
import { RaisedButtonData } from '@/Data/Buttons';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { CustomStateButtonsSubHeading } from '@/Data/CardHeaderCommonData';
import { btnSubType } from '@/Type/SideBarType';

const RaisedButton = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle='Raised Buttons' parent='Buttons' title='Raised Buttons' />
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            {RaisedButtonData.map((item, i) => (
              <Card key={i}>
                <CardHeaderCommon title={item.title} description={item.subHeading} />
                <CardBody className='btn-showcase'>
                  {item.btnSub.map((btnItem: btnSubType, i: number) => (
                    <Fragment key={i}>
                      <Button className={btnItem.btnClass} color={btnItem.colorClass} size={btnItem.size ? btnItem.size : ''} active={btnItem.active} disabled={btnItem.disabled} outline={btnItem.outline}>
                        {btnItem.title}
                      </Button>
                    </Fragment>
                  ))}
                </CardBody>
              </Card>
            ))}
            <Card>
              <CardHeaderCommon title={CustomStateButtons} description={CustomStateButtonsSubHeading} />
              <CardBody className='btn-showcase'>
                <Button className='btn-pill btn-air-primary' color='primary'>
                  {'Link'}
                </Button>
                <input className='btn btn-pill btn-air-secondary btn-secondary' type='button' value='Input' title='btn btn-secondary' />
                <input className='btn btn-pill btn-air-success btn-success' type='submit' value='Submit' title='btn btn-success' />
                <Button className='btn-pill btn-air-info' color='info' type='submit'>
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

export default RaisedButton;
