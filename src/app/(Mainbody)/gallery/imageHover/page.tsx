'use client';

import Breadcrumbs from '@/CommonComponents/BreadCrumb';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { AssetsImagePath } from '@/Constant';
import { HoverEffectsData, HoverImageData } from '@/Data/Gallery';
import { Image } from 'react-bootstrap';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';

const HoverEffect = () => {
  return (
    <>
      <Breadcrumbs parent='Gallery ' title='Hover Effect' mainTitle='Hover Effect' />
      <Container fluid>
        {HoverEffectsData.map((item, i) => (
          <Row key={i}>
            <Col sm='12'>
              <Card>
                <CardHeaderCommon title={`Hover effect ${item}`} />
                <CardBody>
                  <Row id='aniimated-thumbnials' className='my-gallery gallery'>
                    {HoverImageData.map((image, index) => (
                      <Col sm='6' md='3' key={index}>
                        <figure itemProp='associatedMedia' className={`img-hover hover-${item}`} key={i}>
                          <div>
                            <Image height={220} width={347} className='img-thumbnail' src={`${AssetsImagePath}/${image}`} alt='' />
                          </div>
                        </figure>
                      </Col>
                    ))}
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};

export default HoverEffect;
