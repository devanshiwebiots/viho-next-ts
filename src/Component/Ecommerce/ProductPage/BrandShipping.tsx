import React, { Fragment } from 'react';
import { Truck, Clock } from 'react-feather';
import { Card, CardBody, Col, Label, Input, Media, ListGroup, ListGroupItem } from 'reactstrap';

const BrandShipping = () => {
  return (
    <Fragment>
      <Col xl='2' md='6' className='box-col-6 xl-50 proorder-lg-1'>
        <Card>
          <CardBody>
            <div className='filter-block'>
              <h4>{'Brand'}</h4>
              <ListGroup>
                <ListGroupItem>
                  <div className='form-check'>
                    <Input className='form-check-input' id='Raymond' type='checkbox' value='' />
                    <Label className='form-check-label' htmlFor='Raymond'>
                      Raymond
                    </Label>
                  </div>
                </ListGroupItem>
                <ListGroupItem>
                  <div className='form-check'>
                    <Input className='form-check-input' id='Pepe-Jeans' type='checkbox' value='' />
                    <Label className='form-check-label' htmlFor='Pepe-Jeans'>
                      Pepe-Jeans
                    </Label>
                  </div>
                </ListGroupItem>
                <ListGroupItem>
                  <div className='form-check'>
                    <Input className='form-check-input' id='Celio' type='checkbox' value='' />
                    <Label className='form-check-label' htmlFor='Celio'>
                      Celio
                    </Label>
                  </div>
                </ListGroupItem>
                <ListGroupItem>
                  <div className='form-check'>
                    <Input className='form-check-input' id='aime' type='checkbox' value='' />
                    <Label className='form-check-label' htmlFor='aime'>
                      aime
                    </Label>
                  </div>
                </ListGroupItem>
                <ListGroupItem>
                  <div className='form-check'>
                    <Input className='form-check-input' id='aliff' type='checkbox' value='' />
                    <Label className='form-check-label' htmlFor='aliff'>
                      aliff
                    </Label>
                  </div>
                </ListGroupItem>
              </ListGroup>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <div className='collection-filter-block'>
              <ListGroup className=' pro-services'>
                <ListGroupItem>
                  <Media>
                    <Truck />
                    &nbsp;
                    <Media body>
                      <h5>{'Free Shipping'}</h5>
                      <p>{'Free Shipping World Wide'}</p>
                    </Media>
                  </Media>
                </ListGroupItem>
                <ListGroupItem>
                  <Media>
                    <Clock />
                    &nbsp;
                    <Media body>
                      <h5>{'24 X 7 Service'}</h5>
                      <p>{'Online Service For New Customer'}</p>
                    </Media>
                  </Media>
                </ListGroupItem>
              </ListGroup>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default BrandShipping;
