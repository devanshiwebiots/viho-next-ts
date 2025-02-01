'use client';
import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';
import BasicAccordions from '@/Component/UiKits/Accordion/Basic/Basic';
import AllClose from '@/Component/UiKits/Accordion/AllClose/AllClose';
import WithIcon from '@/Component/UiKits/Accordion/WithIcon/WithIcon';
import SecondaryColorAccordion from '@/Component/UiKits/Accordion/SecondaryColorAccordion/SecondaryColorAccordion';
import PrimaryColorAccordion from '@/Component/UiKits/Accordion/PrimaryColorAccordion/PrimaryColorAccordion';
import WithOperand from '@/Component/UiKits/Accordion/WithOperand/WithOperand';

const Accordion = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle='Accordion' parent='Ui Kits' title='Accordion' />
      <Container fluid={true}>
        <Row>
          <BasicAccordions />
          <AllClose />
          <PrimaryColorAccordion />
          <SecondaryColorAccordion />
          <WithIcon />
          <WithOperand />
        </Row>
      </Container>
    </Fragment>
  );
};
export default Accordion;
