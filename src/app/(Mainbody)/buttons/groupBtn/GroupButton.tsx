import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { GroupBtnData } from '@/Data/Buttons';
import { GroupBtnColorType } from '@/Type/SideBarType';
import React, { Fragment } from 'react';
import { Row, Col, Card, CardBody, ButtonGroup, Button } from 'reactstrap';

const GroupButtonClass = () => {
  return (
    <Fragment>
      {GroupBtnData.map((item, i) => (
        <div className='col-12' key={i}>
          <Card>
            <CardHeaderCommon title={item.title} />
            <CardBody className='btn-group-showcase'>
              <Row>
                {item.color.map((colorItem: GroupBtnColorType, i) => (
                  <Col xl='4' md='6' sm='12' className={`xl-50 ${colorItem.colClass ? colorItem.colClass : ''}`} key={i}>
                    <ButtonGroup className={colorItem.btnClass ? colorItem.btnClass : ''}>
                      <Button size={colorItem.size ? colorItem.size : ''} color={colorItem.colorClass} outline={colorItem.outline1 ? true : false}>
                        {colorItem.title1}
                      </Button>
                      <Button size={colorItem.size ? colorItem.size : ''} color={colorItem.colorClass} outline={colorItem.outline2 ? true : false}>
                        {colorItem.title2}
                      </Button>
                      <Button size={colorItem.size ? colorItem.size : ''} color={colorItem.colorClass} outline={colorItem.outline3 ? true : false}>
                        {colorItem.title3}
                      </Button>
                    </ButtonGroup>
                  </Col>
                ))}
              </Row>
            </CardBody>
          </Card>
        </div>
      ))}
    </Fragment>
  );
};

export default GroupButtonClass;
