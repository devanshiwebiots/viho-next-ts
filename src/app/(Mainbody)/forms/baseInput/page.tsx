'use client';

import { Container, Row, Col } from 'reactstrap';
import BasicHtmlFormCard from '../../../../Component/forms-control/BasicInputs/BasicHtmlForm/BasicHtmlFormCard';
import EdgesInputFormCard from '../../../../Component/forms-control/BasicInputs/EdgesInputForm/EdgesInputFormCard';
import RaiseInputFormCard from '../../../../Component/forms-control/BasicInputs/RaiseInputForm/RaiseInputFormCard';
import SolidInputFormCard from '../../../../Component/forms-control/BasicInputs/SolidInputForm/SolidInputFormCard';
import InputSizeFormCard from '../../../../Component/forms-control/BasicInputs/InputSizeForm/InputSizeFormCard';
import CustomFormCard from '../../../../Component/forms-control/BasicInputs/CustomForm/CustomFormCard';
import BasicFormCard from '../../../../Component/forms-control/BasicInputs/BasicForm/BasicFormCard';
import FlateInputFormCard from '../../../../Component/forms-control/BasicInputs/FlateInputForm/FlateInputFormCard';

const BaseInputsContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col sm='12'>
          <BasicFormCard />
          <BasicHtmlFormCard />
          <EdgesInputFormCard />
          <FlateInputFormCard />
          <RaiseInputFormCard />
          <SolidInputFormCard />
          <InputSizeFormCard />
          <CustomFormCard />
        </Col>
      </Row>
    </Container>
  );
};

export default BaseInputsContainer;
