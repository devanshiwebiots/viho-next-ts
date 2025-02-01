'use client';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';
import BasicModals from '@/Component/UiKits/Modals/Basic';
import SizesModals from '@/Component/UiKits/Modals/Sizes';
import StaticModal from '@/Component/UiKits/Modals/Staic';
import VaryingContent from '@/Component/UiKits/Modals/VaryingContent';
import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';

const Modals = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle='Modal' parent='Ui Kits' title='Modal' />
      <Container fluid={true}>
        <Row>
          <StaticModal />
          <BasicModals />
          <VaryingContent />
          <SizesModals />
        </Row>
      </Container>
    </Fragment>
  );
};

export default Modals;
