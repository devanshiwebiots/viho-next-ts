'use client';

import BasicGroup from '@/Component/forms-control/InputGroups/BasicGroup';
import BasicGroup2 from '@/Component/forms-control/InputGroups/BasicGroup2';
import { Col, Container, Row } from 'reactstrap';

const InputGroupsContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col sm='12'>
          <BasicGroup />
          <BasicGroup2 />
        </Col>
      </Row>
    </Container>
  );
};
export default InputGroupsContainer;
