'use client';
import { Container, Row } from 'reactstrap';
import BottomTab from '../../../../Component/UiKits/Tabs/LineTabs/BottomTab';
import InfoColorTab from '../../../../Component/UiKits/Tabs/LineTabs/InfoColorTab';
import LeftTab from '../../../../Component/UiKits/Tabs/LineTabs/LeftTab';
import PrimaryColorTab from '../../../../Component/UiKits/Tabs/LineTabs/PrimaryColorTab';
import RightTab from '../../../../Component/UiKits/Tabs/LineTabs/RightTab';
import SecondaryColorTab from '../../../../Component/UiKits/Tabs/LineTabs/SecondaryColorTab';
import Simple from '../../../../Component/UiKits/Tabs/LineTabs/Simple';
import SuccessColorTab from '../../../../Component/UiKits/Tabs/LineTabs/SuccessColorTab';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';

const LineTabsContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle='Tab-Line' parent='Ui Kits' title='Tab-Line' />
      <Container fluid={true}>
        <Row>
          <Simple />
          <BottomTab />
          <LeftTab />
          <RightTab />
          <PrimaryColorTab />
          <SecondaryColorTab />
          <SuccessColorTab />
          <InfoColorTab />
        </Row>
      </Container>
    </>
  );
};

export default LineTabsContainer;
