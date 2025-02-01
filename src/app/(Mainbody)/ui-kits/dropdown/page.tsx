'use client';

import Breadcrumbs from '@/CommonComponents/BreadCrumb';
import Basic from '@/Component/UiKits/Dropdown/Basic';
import BasicColor from '@/Component/UiKits/Dropdown/BasicColor';
import Rounded from '@/Component/UiKits/Dropdown/Rounded';
import SplitButton from '@/Component/UiKits/Dropdown/SplitButton';
import WithDisable from '@/Component/UiKits/Dropdown/WithDisable';
import WithDivider from '@/Component/UiKits/Dropdown/WithDivider';
import WithDropUp from '@/Component/UiKits/Dropdown/WithDropUp';
import WithHeader from '@/Component/UiKits/Dropdown/WithHeader';
import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';

const Dropdowns = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle='Dropdown' parent='Ui Kits' title='Dropdown' />
      <Container fluid={true}>
        <Row>
          <Basic />
          <BasicColor />
          <SplitButton />
          <Rounded />
          <WithDivider />
          <WithHeader />
          <WithDropUp />
          <WithDisable />
        </Row>
      </Container>
    </Fragment>
  );
};

export default Dropdowns;
