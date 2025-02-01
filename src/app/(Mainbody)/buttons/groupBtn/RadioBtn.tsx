import { RadioBtnData } from '@/Data/Buttons';
import { GroupBtnColorType, RadioButtonSubType } from '@/Type/SideBarType';
import React, { Fragment } from 'react';
import { Row, Col, Card, CardHeader, CardBody, ButtonGroup, Label, Input, Button } from 'reactstrap';

const RadioBtnClass = () => {
  return (
    <Fragment>
      <div className='col-12'>
        {RadioBtnData.map((item, i) => (
          <Card key={i}>
            <CardHeader className='pb-0'>
              <h5>{item.title}</h5>
              <span>
                {item.span} <code>{item.code1}</code> {item.detail1}
                <code>{item.code2}</code> {item.detail2} <code>{item.code3}</code> {item.detail3}
              </span>
            </CardHeader>
            <CardBody className='btn-group-showcase'>
              <Row>
                {item.btnSub.map((btnItem: RadioButtonSubType, i: number) =>
                  btnItem.checkBox ? (
                    <Col xl='6' sm='12' key={i}>
                      <ButtonGroup className={btnItem.btnClass}>
                        <Button color={btnItem.colorClass}>
                          <div className={btnItem.divClass}>
                            <Input id={btnItem.id1} type='checkbox' />
                            <Label htmlFor={btnItem.id1}>{'Option 1'}</Label>
                          </div>
                        </Button>
                        <Button color={btnItem.colorClass}>
                          <div className={btnItem.divClass}>
                            <Input id={btnItem.id2} type='checkbox' />
                            <Label htmlFor={btnItem.id2}>{'Option 2'}</Label>
                          </div>
                        </Button>
                      </ButtonGroup>
                    </Col>
                  ) : (
                    <Col xl='4' md='6' lg='12' sm='12' className='xl-50' key={i}>
                      <div className={btnItem.btnClass}>
                        <ButtonGroup>
                          <Button color={btnItem.colorClass}>
                            <div className={btnItem.divClass}>
                              <Input id={btnItem.id1} type='radio' name='radio1' value='option1' />
                              <Label htmlFor={btnItem.id1}>{btnItem.title1}</Label>
                            </div>
                          </Button>
                          <Button color={btnItem.colorClass}>
                            <div className={btnItem.divClass}>
                              <Input id={btnItem.id2} type='radio' name='radio1' value='option1' defaultChecked />
                              <Label htmlFor={btnItem.id2}>{btnItem.title2}</Label>
                            </div>
                          </Button>
                        </ButtonGroup>
                      </div>
                    </Col>
                  ),
                )}
              </Row>
            </CardBody>
          </Card>
        ))}
      </div>
    </Fragment>
  );
};

export default RadioBtnClass;
