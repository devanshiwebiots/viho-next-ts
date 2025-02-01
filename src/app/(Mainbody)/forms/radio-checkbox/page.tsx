'use client';

import AnimatedCheckboxCard from '@/Component/forms-control/Checkbox&Radio/AnimatedCheckbox/AnimatedCheckboxCard';
import AnimatedRadioCard from '@/Component/forms-control/Checkbox&Radio/AnimatedRadio/AnimatedRadioCard';
import CustomCheckboxsCard from '@/Component/forms-control/Checkbox&Radio/CustomCheckboxs/CustomCheckboxsCard';
import CustomRadiosCard from '@/Component/forms-control/Checkbox&Radio/CustomRadios/CustomRadiosCard';
import SquareCheckboxsCard from '@/Component/forms-control/Checkbox&Radio/SquareCheckboxs/SquareCheckboxsCard';
import { Container, Row } from 'reactstrap';

const CheckboxRadioContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <CustomRadiosCard />
        <CustomCheckboxsCard />
        <AnimatedRadioCard />
        <AnimatedCheckboxCard />
        <SquareCheckboxsCard />
      </Row>
    </Container>
  );
};

export default CheckboxRadioContainer;
