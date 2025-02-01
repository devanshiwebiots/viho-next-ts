'use client';

import BasicColor from '../../../../Component/FormWidgets/Switch/SwitchColor';
import { Container, Row } from 'reactstrap';
import BasicSwitch from '../../../../Component/FormWidgets/Switch/BasicSwitch';
import SwitchOutlineCard from '../../../../Component/FormWidgets/Switch/SwitchOutline/index';
import SwitchUncheckedOutlineCard from '../../../../Component/FormWidgets/Switch/SwitchUncheckedOutline/index';
import SwitchSizingCard from '../../../../Component/FormWidgets/Switch/SwitchSizing';
import SwitchWithIconCard from '../../../../Component/FormWidgets/Switch/SwitchWithIcon/index';
import SwitchWithColorCard from '../../../../Component/FormWidgets/Switch/SwitchWithColor/index';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';

const SwitchContainer = () => {
  return (
    <>
      <Breadcrumbs parent='Forms' title='Switch' mainTitle='Switch' />
      <Container fluid={true}>
        <Row>
          <BasicSwitch />
          <BasicColor />
          <SwitchOutlineCard />
          <SwitchUncheckedOutlineCard />
          <SwitchSizingCard />
          <SwitchWithIconCard />
          <SwitchWithColorCard />
        </Row>
      </Container>
    </>
  );
};
export default SwitchContainer;
