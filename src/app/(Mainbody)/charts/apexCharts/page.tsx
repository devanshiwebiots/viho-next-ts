"use client";
import dynamic from "next/dynamic";
import { Container } from "reactstrap";

const ApexContainer = dynamic(() => import("@/Component/Charts/ApexChart/Container"), { ssr: false });
const ApexChartContainer = () => {
  return (
    <Container fluid={true}>
      <ApexContainer />
    </Container>
  );
};

export default ApexChartContainer;
