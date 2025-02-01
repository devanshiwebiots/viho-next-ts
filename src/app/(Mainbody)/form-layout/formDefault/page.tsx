'use client';

import { Col, Container, Row } from 'reactstrap';
import DefaultLayoutCard from '../../../../Component/FormLayout/DefaultForms/DefaultLayout/DefaultLayoutCard';
import HorizontalLayoutCard from '../../../../Component/FormLayout/DefaultForms/HorizontalLayout/HorizontalLayoutCard';
import MegaFormsCard from '../../../../Component/FormLayout/DefaultForms/MegaForms/MegaFormsCard';
import InlineFormCard from '../../../../Component/FormLayout/DefaultForms/InlineForm/InlineFormCard';
const DefaultFormsContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col sm='12' xl='6'>
          <Row>
            <DefaultLayoutCard />
            <HorizontalLayoutCard />
          </Row>
        </Col>
        <Col sm='12' xl='6'>
          <Row>
            <MegaFormsCard />
            <InlineFormCard />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default DefaultFormsContainer;
