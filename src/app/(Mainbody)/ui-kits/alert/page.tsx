"use client";
import Breadcrumbs from "@/CommonComponents/BreadCrumb";
import ErrorBoundary from "@/CommonComponents/ErrorBoundry";
import AdditionalContents from "@/Component/UiKits/Alert/AdditionalContents";
import AlertWithDarkDismiss from "@/Component/UiKits/Alert/AlertWithDarkDismiss";
import AlertWithIcons from "@/Component/UiKits/Alert/AlertWithIcons";
import AlertWithLightDismiss from "@/Component/UiKits/Alert/AlertWithLightDismiss";
import DarkOutlineAlert from "@/Component/UiKits/Alert/DarkOutlineAlert";
import IconInverse from "@/Component/UiKits/Alert/IconInverse";
import IconsWithOutline from "@/Component/UiKits/Alert/IconsWithOutline";
import LightAlert from "@/Component/UiKits/Alert/LightAlert";
import LightLinkColor from "@/Component/UiKits/Alert/LightLinkColor";
import LinkColors from "@/Component/UiKits/Alert/LinkColors";
import OutlineAlert from "@/Component/UiKits/Alert/OutlineAlert";
import TextAsActions from "@/Component/UiKits/Alert/TextAsActions";
import ThemeColorAlert from "@/Component/UiKits/Alert/ThemeColorAlert";
import React, { Fragment } from "react";
import { Container, Row } from "reactstrap";

const Alerts = () => {
  return (
    <Fragment>
      <ErrorBoundary>
        <Breadcrumbs mainTitle='Alert' parent='Ui Kits' title='Alert' />
        <Container fluid={true}>
          <Row>
            <ThemeColorAlert />
            <LinkColors />
            <AlertWithDarkDismiss />
            <AlertWithIcons />
            <LightAlert />
            <LightLinkColor />
            <AlertWithLightDismiss />
            <OutlineAlert />
            <DarkOutlineAlert />
            <IconsWithOutline />
            <IconInverse />
            <TextAsActions />
            <AdditionalContents />
          </Row>
        </Container>
      </ErrorBoundary>
    </Fragment>
  );
};

export default Alerts;
