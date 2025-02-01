'use client';

import Breadcrumbs from '@/CommonComponents/BreadCrumb';
import BasicClass from '@/Component/bonus-ui/Steps/Basic';
import DefaultSteps from '@/Component/bonus-ui/Steps/DefaultSteps/DefaultSteps';
import PearlsStepSizingClass from '@/Component/bonus-ui/Steps/PearlsStepSizing';
import PearlsStepStatesClass from '@/Component/bonus-ui/Steps/PearlsStepStates';
import PearlsStepsClass from '@/Component/bonus-ui/Steps/PearlsSteps';
import StepsSizingClass from '@/Component/bonus-ui/Steps/StepSizing';
import StepsStatesClass from '@/Component/bonus-ui/Steps/StepsStates';
import StepsWithIcon from '@/Component/bonus-ui/Steps/StepsWithIcon/StepsWithIcon';
import VerticalStepClass from '@/Component/bonus-ui/Steps/VerticalStep';
import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';

const StepsContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle='Steps' parent='Bonus Ui' title='Steps' />
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
    </Fragment>
  );
};

export default StepsContainer;
