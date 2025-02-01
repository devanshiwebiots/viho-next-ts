import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import BasicClass from '../../../../Component/bonus-ui/Steps/Basic';
import PearlsStepSizingClass from '../../../../Component/bonus-ui/Steps/PearlsStepSizing';
import PearlsStepStatesClass from '../../../../Component/bonus-ui/Steps/PearlsStepStates';
import StepsSizingClass from '../../../../Component/bonus-ui/Steps/StepSizing';
import StepsStatesClass from '../../../../Component/bonus-ui/Steps/StepsStates';
import DefaultSteps from '../../../../Component/bonus-ui/Steps/DefaultSteps/DefaultSteps';
import PearlsStepsClass from '../../../../Component/bonus-ui/Steps/PearlsSteps';
import StepsWithIcon from '../../../../Component/bonus-ui/Steps/StepsWithIcon/StepsWithIcon';
import VerticalStepClass from '../../../../Component/bonus-ui/Steps/VerticalStep';

const StepsContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <BasicClass />
        <StepsWithIcon />
        <StepsStatesClass />
        <StepsSizingClass />
        <VerticalStepClass />
        <DefaultSteps />
        <PearlsStepsClass />
        <PearlsStepSizingClass />
        <PearlsStepStatesClass />
      </Row>
    </Container>
  );
};

export default StepsContainer;
