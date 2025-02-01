'use client';

import { Row, Col, Card, Container } from 'reactstrap';
import RibbonClass from '../../../../Component/bonus-ui/Ribbons/RibbonClass';
import RibbonComponent from '../../../../Component/bonus-ui/Ribbons/RibbonCommon';
import { ColoredBreadcrumb } from '@/Constant';
import { RibbonsContainerDescription } from '@/Data/CardHeaderCommonData';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const RibbonsContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col sm='12' xl='12' md='12'>
          <Card>
            <CardHeaderCommon title={ColoredBreadcrumb} description={RibbonsContainerDescription} />
            <RibbonClass />
          </Card>
        </Col>
        <RibbonComponent />
      </Row>
    </Container>
  );
};

export default RibbonsContainer;
