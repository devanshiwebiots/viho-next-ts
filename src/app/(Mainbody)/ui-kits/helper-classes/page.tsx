'use client';

import Breadcrumbs from '@/CommonComponents/BreadCrumb';
import AllBorersColorCard from '@/Component/UiKits/HelperClass/AllBordersCards/AllBordersColor';
import BorderRadiusCard from '@/Component/UiKits/HelperClass/AllBordersCards/BorderRadius';
import BorderWidthCard from '@/Component/UiKits/HelperClass/AllBordersCards/BorderWidth';
import ButtonColorCard from '@/Component/UiKits/HelperClass/AllButtonsCards/ButtonColor';
import ButtonOutlineCard from '@/Component/UiKits/HelperClass/AllButtonsCards/ButtonOutline';
import FontSizeCard from '@/Component/UiKits/HelperClass/AllFontsCards/FontSize';
import FontStyleCard from '@/Component/UiKits/HelperClass/AllFontsCards/FontStyle';
import FontWeightCard from '@/Component/UiKits/HelperClass/AllFontsCards/FontWeight';
import MarginCard from '@/Component/UiKits/HelperClass/AllMarginCards/Margin';
import MarginBottomCard from '@/Component/UiKits/HelperClass/AllMarginCards/MarginBottom';
import MarginLeftCard from '@/Component/UiKits/HelperClass/AllMarginCards/MarginLeft';
import MarginRightCard from '@/Component/UiKits/HelperClass/AllMarginCards/MarginRight';
import MarginTopCard from '@/Component/UiKits/HelperClass/AllMarginCards/MarginTop';
import PaddingBottomCard from '@/Component/UiKits/HelperClass/AllPaddingCards/PaddingBottom';
import PaddingLeftCard from '@/Component/UiKits/HelperClass/AllPaddingCards/PaddingLeft';
import PaddingRightCard from '@/Component/UiKits/HelperClass/AllPaddingCards/PaddingRight';
import PaddingTopCard from '@/Component/UiKits/HelperClass/AllPaddingCards/PaddingTop';
import PaddingCard from '@/Component/UiKits/HelperClass/AllPaddingCards/PaddingsCard';
import BackgroundColorCard from '@/Component/UiKits/HelperClass/BackgroundColor';
import BadgeColorCard from '@/Component/UiKits/HelperClass/BadgeColor';
import FloatCard from '@/Component/UiKits/HelperClass/Float';
import ImageSizeCard from '@/Component/UiKits/HelperClass/ImageSizes';
import OverflowCard from '@/Component/UiKits/HelperClass/Overflow';
import PositionCard from '@/Component/UiKits/HelperClass/Position';
import TextColorCard from '@/Component/UiKits/HelperClass/TextColor';
import VerticalAlignCard from '@/Component/UiKits/HelperClass/VerticalAlign';

import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';

const HelperClasses = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle='Helper Classes' parent='Ui Kits' title='Helper Classes' />
      <Container fluid={true}>
        <Row>
          <PaddingCard />
          <MarginCard />
          <PaddingLeftCard />
          <PaddingRightCard />
          <PaddingTopCard />
          <PaddingBottomCard />
          <MarginLeftCard />
          <MarginRightCard />
          <MarginTopCard />
          <MarginBottomCard />
          <VerticalAlignCard />
          <ImageSizeCard />
          <TextColorCard />
          <BadgeColorCard />
          <BackgroundColorCard />
          <ButtonColorCard />
          <Col xl='6'>
            <BorderRadiusCard />
            <FontWeightCard />
            <FontStyleCard />
            <FloatCard />
            <OverflowCard />
          </Col>

          <FontSizeCard />
          <AllBorersColorCard />
          <Col xl='6'>
            <BorderWidthCard />
            <PositionCard />
            <ButtonOutlineCard />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default HelperClasses;
