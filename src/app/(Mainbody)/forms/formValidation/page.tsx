'use client';

import { Col, Container, Row } from 'reactstrap';
import CustomForm from '../../../../Component/forms-control/FormValidition/customForm';
import BrowserDefaultsForm from '../../../../Component/forms-control/FormValidition/BrowserDefaults';
import FormSupportedElements from '../../../../Component/forms-control/FormValidition/FormSupportedElements';
import CustomTootltipForm from '../../../../Component/forms-control/FormValidition/CustomTootltipForm';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';

const FormValiditionContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle='Validation Forms' title='Validation Forms' parent='Form' />
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            <CustomForm />
            <BrowserDefaultsForm />
            <FormSupportedElements />
            <CustomTootltipForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FormValiditionContainer;
