'use client';
import { Card, Col, Container, Row } from 'reactstrap';
import ColoredNavigation from '../../../../Component/bonus-ui/Breadcrumb/ColoredNavigation';
import BreadcrumbCardBody from '../../../../Component/bonus-ui/Breadcrumb/BreadcrumbCardBody';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { BreadcrumbContainerDescription } from '@/Data/CardHeaderCommonData';
import NavBreadcrumb from '../../../../Component/bonus-ui/Breadcrumb/Navbreadcrumb';

const BreadcrumbContainer = () => {
  return (
    <Container fluid={true} className='breadcrumb-items'>
      <Row>
        <Col sm='12'>
          <Card>
            <CardHeaderCommon title='Default bootstrap breadcrumb' description={BreadcrumbContainerDescription} />
            <BreadcrumbCardBody />
          </Card>
        </Col>
        <NavBreadcrumb />
        <ColoredNavigation />
      </Row>
    </Container>
  );
};
export default BreadcrumbContainer;
