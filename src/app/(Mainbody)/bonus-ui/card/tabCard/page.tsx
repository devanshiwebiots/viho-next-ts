'use client';

import React from 'react';
import { Container, Row } from 'reactstrap';
import TabCardCommon from '../../../../../Component/bonus-ui/TabbedCard/tabCard';
import TabCardCommonClass from '../../../../../Component/bonus-ui/TabbedCard/TabsWithIcon';
import ColorTabClass from '../../../../../Component/bonus-ui/TabbedCard/ColorTab';
import ColorOptionClass from '../../../../../Component/bonus-ui/TabbedCard/ColorOption';
import MaterialTabWithColorClass from '../../../../../Component/bonus-ui/TabbedCard/MaterialTabWithColor';

const TabbedCardContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <TabCardCommon />
        <TabCardCommonClass />
        <ColorTabClass />
        <ColorOptionClass />
        <MaterialTabWithColorClass />
      </Row>
    </Container>
  );
};

export default TabbedCardContainer;
