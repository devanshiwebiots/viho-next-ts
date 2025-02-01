"use client";
import { BillingDetails } from "@/Constant";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import CheckoutTableData from "../../../../Component/Ecommerce/CheckOut/CheckoutTableData";
import ProductPlaceOrder from "../../../../Component/Ecommerce/CheckOut/ProductPlaceOrder";
import Breadcrumbs from "@/CommonComponents/BreadCrumb";

const CheckOutContain = () => {
  return (
    <>
      <Breadcrumbs mainTitle='Checkout' parent='Ecommerce' title='Checkout' />
      <Container fluid={true}>
        <Row>
          <Col>
            <Card className="checkout">
              <CardHeader className="pb-0">
                <h5>{BillingDetails}</h5>
              </CardHeader>
              <CardBody>
                <Row>
                  <CheckoutTableData />
                  <ProductPlaceOrder />
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default CheckOutContain;
