'use client';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import LargeShadows from '../../../../Component/UiKits/Shadow/LargeShadows';
import NoShadows from '../../../../Component/UiKits/Shadow/NoShadows';
import RegularShadows from '../../../../Component/UiKits/Shadow/RegularShadows';
import SmallShadows from '../../../../Component/UiKits/Shadow/SmallShadows';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { ShadowContainerDescription } from '@/Data/CardHeaderCommonData';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';
const ShadowContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle='Shadow' parent='Ui Kits' title='Shadow' />
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            <Card className='box-shadow-title'>
              <CardHeaderCommon title={'Examples'} description={ShadowContainerDescription} />
              <CardBody>
                <Row>
                  <LargeShadows />
                  <RegularShadows />
                  <SmallShadows />
                  <NoShadows />
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ShadowContainer;
