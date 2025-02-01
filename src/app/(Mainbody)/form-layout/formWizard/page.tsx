'use client';

import { Card, CardBody, CardHeader, Container, Row } from 'reactstrap';
import { Col } from 'react-bootstrap';
import { useState } from 'react';
import { Stepper, Step } from 'react-form-stepper';
import { FormWizardWithIcon } from '@/Constant';
import Registration from '@/Component/FormLayout/FormWizard/Registration';
import Emails from '@/Component/FormLayout/FormWizard/Email';
import Birthdate from '@/Component/FormLayout/FormWizard/Birthdate';

const FormWizardContainer = () => {
  const [goSteps, setGoSteps] = useState(0);
  return (
    <Container fluid={true}>
      <Row>
        <Col sm='12'>
          <Card>
            <CardHeader>
              <h5>{FormWizardWithIcon}</h5>
            </CardHeader>
            <CardBody>
              <Stepper activeStep={goSteps}>
                <Step onClick={() => setGoSteps(0)} label='StepOne' />
                <Step onClick={() => setGoSteps(1)} label='StepTwo' />
                <Step onClick={() => setGoSteps(2)} label='StepThree' />
              </Stepper>
              {goSteps === 0 && <Registration goSteps={goSteps} setGoSteps={setGoSteps} />}
              {goSteps === 1 && <Emails goSteps={goSteps} setGoSteps={setGoSteps} />}
              {goSteps === 2 && <Birthdate goSteps={goSteps} setGoSteps={setGoSteps} />}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default FormWizardContainer;
