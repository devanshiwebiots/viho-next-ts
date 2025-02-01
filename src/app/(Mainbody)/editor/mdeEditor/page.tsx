"use client";

import React from "react";
import { Container } from "reactstrap";
import Breadcrumbs from "@/CommonComponents/BreadCrumb";
import dynamic from "next/dynamic";
const MDEExample = dynamic(() => import("../../../../Component/Editor/MDEEditor/MDEExample"), { ssr: false });
const SecondExample = dynamic(() => import("../../../../Component/Editor/MDEEditor/SecondExample"), { ssr: false });

const MDEEditor = () => {
  return (
    <>
      <Breadcrumbs title='MDE Editor' parent='Editor' mainTitle='MDE Editor' />
      <Container fluid>
        <MDEExample />
        <SecondExample />
      </Container>
    </>
  );
};

export default MDEEditor;
