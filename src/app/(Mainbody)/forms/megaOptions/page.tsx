'use client';

import DefaultStyles from '@/Component/forms-control/MegaOptions/DefaultStyles';
import HorizontalStyles from '@/Component/forms-control/MegaOptions/HorizontalStyles';
import InlineStyles from '@/Component/forms-control/MegaOptions/InlineStyles';
import NoBorders from '@/Component/forms-control/MegaOptions/NoBorders';
import OfferStyle from '@/Component/forms-control/MegaOptions/OfferStyle';
import SolidBoard from '@/Component/forms-control/MegaOptions/SolidBoard';
import VerticalStyles from '@/Component/forms-control/MegaOptions/VerticalStyles';
import { Container, Row } from 'reactstrap';

const MegaOptionsContainer = () => {
  return (
    <Container fluid={true} className='megaoptions-items'>
      <Row>
        <DefaultStyles />
        <NoBorders />
        <SolidBoard />
        <OfferStyle />
        <InlineStyles />
        <VerticalStyles />
        <HorizontalStyles />
      </Row>
    </Container>
  );
};
export default MegaOptionsContainer;
