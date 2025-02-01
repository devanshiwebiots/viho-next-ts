'use client';

import { Container, Row } from 'reactstrap';
import DefaultLists from '../../../../Component/UiKits/Lists/DeafultLists';
import FlushStyles from '../../../../Component/UiKits/Lists/FlushStyles';
import JavascriptBase from '../../../../Component/UiKits/Lists/JavascriptBase';
import CustomContents from '../../../../Component/UiKits/Lists/CustomContents/CustomContents';
import WithImage from '../../../../Component/UiKits/Lists/WithImage/WithImage';
import WithImageRound from '../../../../Component/UiKits/Lists/WithImageRound';
import LinksButtons from '../../../../Component/UiKits/Lists/LinksButtons';
import ContextualClass from '../../../../Component/UiKits/Lists/ContextualClass';
import WithBadge from '../../../../Component/UiKits/Lists/WithBadge';
import WithIcons from '../../../../Component/UiKits/Lists/WithIcons';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';

const ListsContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle='Lists' parent='Ui Kits' title='Lists' />
      <Container fluid={true} className='ui-list'>
        <Row>
          <DefaultLists />
          <LinksButtons />
          <FlushStyles />
          <ContextualClass />
          <WithBadge />
          <CustomContents />
          <JavascriptBase />
          <WithIcons />
          <WithImage />
          <WithImageRound />
        </Row>
      </Container>
    </>
  );
};

export default ListsContainer;
