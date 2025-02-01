'use client';
import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';
import SizingCard from '@/Component/UiKits/Avatars/SizingCard';
import StatusIndicatorCard from '@/Component/UiKits/Avatars/StatusIndicatorCard';
import InitialsCard from '@/Component/UiKits/Avatars/InitialsCard';
import ShapeCard from '@/Component/UiKits/Avatars/ShapeCard';
import GroupCard from '@/Component/UiKits/Avatars/GroupCard';

const Avatars = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle='Avatars' parent='Ui Kits' title='Avatars' />
      <Container fluid={true}>
        <div className='user-profile'>
          <Row>
            <SizingCard />
            <StatusIndicatorCard />
            <InitialsCard />
            <ShapeCard />
            <GroupCard />
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default Avatars;
