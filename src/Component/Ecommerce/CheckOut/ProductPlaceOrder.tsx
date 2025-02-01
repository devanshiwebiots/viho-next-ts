import React from "react";

import { Col, Input, Label, ListGroup, ListGroupItem, Row } from "reactstrap";
import Image from "next/image";
import { AssetsImagePath, CashOnDelivery, CheckPayments, PayPal, Product, Shipping, Subtotal, Total } from "@/Constant";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/ReduxStore";

const ProductPlaceOrder = () => {
  const { cartData } = useSelector((store: RootState) => store.EcommerceSlice);
  const getCartTotal = () => {
    let total = 0;
    cartData.map((item) => {
      total += item.price * (item.quantity ? item.quantity : 1);
    });
    return total;
  };
  return (
    <Col xl="6" sm="12">
      <div className="checkout-details">
        <div className="order-box">
          <div className="title-box">
            <div className="checkbox-title">
              <h4>{Product}</h4>
              <span>{Total}</span>
            </div>
          </div>
          {cartData &&
            cartData.map((item) => {
              return (
                <ListGroup className="qty" key={item.id}>
                  <ListGroupItem>
                    {item.name} x {item.quantity}
                    <span>${item.price}</span>
                  </ListGroupItem>
                </ListGroup>
              );
            })}
          <ListGroup className="sub-total">
            <ListGroupItem>
              {Subtotal} <span className="count">$ {getCartTotal()}</span>
            </ListGroupItem>
            <ListGroupItem className="shipping-class">
              {Shipping}
              <div className="shopping-checkout-option">
                <Label className="d-block" htmlFor="chk-ani">
                  <Input className="checkbox_animated" id="chk-ani" type="checkbox" />
                  Option 1
                </Label>
                <Label className="d-block" htmlFor="chk-ani1">
                  <Input className="checkbox_animated" id="chk-ani1" type="checkbox" />
                  Option 2
                </Label>
              </div>
            </ListGroupItem>
          </ListGroup>
          <ListGroup className=" sub-total total">
            <ListGroupItem>
              {Total} <span className="count">$ {getCartTotal()}</span>
            </ListGroupItem>
          </ListGroup>

          <div className="animate-chk">
            <Row>
              <Col>
                <Label className="d-block" htmlFor="edo-ani">
                  <Input className="radio_animated" id="edo-ani" type="radio" name="rdo-ani" data-original-title="" title="" />
                  {CheckPayments}
                </Label>
                <Label className="d-block" htmlFor="edo-ani1">
                  <Input className="radio_animated" id="edo-ani1" type="radio" name="rdo-ani" data-original-title="" title="" />
                  {CashOnDelivery}
                </Label>
                <Label className="d-flex align-items-center" htmlFor="edo-ani2">
                  <Input className="radio_animated" id="edo-ani2" type="radio" name="rdo-ani" defaultChecked />
                  {PayPal}
                  <Image width={428} height={113} className="img-paypal w-auto" src={`${AssetsImagePath}/checkout/paypal.png`} alt="" />
                </Label>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Col>
  );
};
export default ProductPlaceOrder;
