'use client';

import Breadcrumbs from '@/CommonComponents/BreadCrumb';
import BasicTabCard from '@/Component/UiKits/Tabs/BootstrapTabs/BasicTabCard';
import BottomLeftAlignCard from '@/Component/UiKits/Tabs/BootstrapTabs/BottomLeftAlignCard';
import PillDangerTab from '@/Component/UiKits/Tabs/BootstrapTabs/PillDangerTab';
import PillDarkTab from '@/Component/UiKits/Tabs/BootstrapTabs/PillDarkTab';
import PillInfoTab from '@/Component/UiKits/Tabs/BootstrapTabs/PillInfoTab';
import PillPrimaryTab from '@/Component/UiKits/Tabs/BootstrapTabs/PillPrimaryTab';
import PillSecondaryTab from '@/Component/UiKits/Tabs/BootstrapTabs/PillSecondaryTab';
import PillSucessTab from '@/Component/UiKits/Tabs/BootstrapTabs/PillSucessTab';
import PillTab from '@/Component/UiKits/Tabs/BootstrapTabs/PillTab';
import PillTabWithIcon from '@/Component/UiKits/Tabs/BootstrapTabs/PillTabWithIcon';
import PillWarningTab from '@/Component/UiKits/Tabs/BootstrapTabs/PillWarningTab';
import RighhtAlign from '@/Component/UiKits/Tabs/BootstrapTabs/RighhtAlign';
import Vertical from '@/Component/UiKits/Tabs/BootstrapTabs/Vertical';
import WithIcon from '@/Component/UiKits/Tabs/BootstrapTabs/WithIcon';
import React from 'react';
import { Container, Row } from 'reactstrap';

const BootstrapTabsContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle='Tab-Bootstrap' parent='Ui Kits' title='Tab-Bootstrap' />
      <Container fluid={true}>
        <Row>
          <BasicTabCard />
          <BottomLeftAlignCard />
          <WithIcon />
          <RighhtAlign />
          <Vertical />
          <PillTab />
          <PillTabWithIcon />
          <PillDarkTab />
          <PillPrimaryTab />
          <PillSecondaryTab />
          <PillSucessTab />
          <PillInfoTab />
          <PillWarningTab />
          <PillDangerTab />
        </Row>
      </Container>
    </>
  );
};

export default BootstrapTabsContainer;
