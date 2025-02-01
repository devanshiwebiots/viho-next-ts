"use client";
import Breadcrumbs from "@/CommonComponents/BreadCrumb";
import dynamic from "next/dynamic";
import { Container } from "reactstrap";
const Containermap = dynamic(() => import("@/Component/LeafletMaps/Containermap"), { ssr: false });

const LeafletMaps = () => {
  return (
    <>
      <Breadcrumbs parent='Map' title='Leaflet Map' mainTitle='Leaflet Map' />
      <Container fluid>
        <Containermap />
      </Container>
    </>
  );
};

export default LeafletMaps;
