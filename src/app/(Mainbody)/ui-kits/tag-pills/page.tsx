'use client';

import Breadcrumbs from '@/CommonComponents/BreadCrumb';
import BadgeExample from '@/Component/UiKits/TagAndPills/BadgeExample';
import ButtonPart from '@/Component/UiKits/TagAndPills/ButtonPart';
import ContextualPills from '@/Component/UiKits/TagAndPills/Pills/Contextual';
import PillWithIcon from '@/Component/UiKits/TagAndPills/Pills/WithIcon';
import PillWithNum from '@/Component/UiKits/TagAndPills/Pills/WithNum';
import ContextualBadge from '@/Component/UiKits/TagAndPills/Tags/Contextual';
import TagWithIcon from '@/Component/UiKits/TagAndPills/Tags/WithIcon';
import TagWithNum from '@/Component/UiKits/TagAndPills/Tags/WithNum';
import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';

const TagAndPills = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle='Tag & Pills' parent='Ui Kits' title='Tag & Pills' />
      <Container fluid={true}>
        <Row>
          <ContextualBadge />
          <ContextualPills />
          <TagWithNum />
          <PillWithNum />
          <TagWithIcon />
          <PillWithIcon />
          <BadgeExample />
          <ButtonPart />
        </Row>
      </Container>
    </Fragment>
  );
};

export default TagAndPills;
