"use client";
import dynamic from "next/dynamic";
import { Container } from "reactstrap";
const ContainerEcommerce = dynamic(() => import("@/Component/Dashboard/Ecommerce/ContainerEcommerce"), { ssr: false });

const Ecommerce = () => {
  return (
    <Container fluid={true} className='dashboard-2-main'>
      <ContainerEcommerce />
    </Container>
  );
};

export default Ecommerce;
