"use client";
import { Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonComponents/BreadCrumb";
import BlockQuoteCard from "@/Component/UiKits/Typography/BlockQuoteCard";
import DisplayHeadingCard from "@/Component/UiKits/Typography/DisplayHeadingCard";
import FadedHeadingCard from "@/Component/UiKits/Typography/FadedHeadingCard";
import FontWeightCards from "@/Component/UiKits/Typography/FontWeightCards";
import HeadingCard from "@/Component/UiKits/Typography/HeadingCard";
import InlineTextCard from "@/Component/UiKits/Typography/InlineTextCard";
import LeadCard from "@/Component/UiKits/Typography/LeadCard";
import ListCard from "@/Component/UiKits/Typography/ListCard";
import TextColorCard from "@/Component/UiKits/Typography/TextColorCard";

const Typography = () => {
  return (
    <>
      <Breadcrumbs mainTitle='Typography' parent='Ui Kits' title='Typography' />
      <Container fluid={true}>
        <Row>
          <HeadingCard />
          <FontWeightCards />
          <FadedHeadingCard />
          <DisplayHeadingCard />
          <LeadCard />
          <InlineTextCard />
          <TextColorCard />
          <ListCard />
          <BlockQuoteCard />
        </Row>
      </Container>
    </>
  );
};

export default Typography;
