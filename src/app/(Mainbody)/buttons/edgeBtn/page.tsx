'use client';
import React, { Fragment } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from 'reactstrap';
import { CustomStateButtons } from '@/Constant';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';
import { EdgeButtonData } from '@/Data/Buttons';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { btnSubType } from '@/Type/SideBarType';
import { CustomStateButtonsSubHeading } from '@/Data/CardHeaderCommonData';

const EdgeButton = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle='Edge Buttons' parent='Buttons' title='Edge Buttons' />
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            {EdgeButtonData.map((item, i) => (
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
                <Button className='btn-square btn-pill' color='primary'>
                  {'Link'}
                </Button>
                <input className='btn btn-square btn-secondary btn-pill' type='button' value='Input' title='btn btn-secondary' />
                <input className='btn btn-square btn-success btn-pill' type='submit' value='Submit' title='btn btn-success' />
                <Button className='btn-square btn-pill' color='info' type='submit'>
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

export default EdgeButton;
