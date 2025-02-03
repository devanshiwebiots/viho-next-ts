import InvoiceHeader from './InvoiceHeader';
import InvoiceDescription from './InvoiceDescription';
import PrintInvoice from './PrintInvoice';
import { Col, Label, Row, Table, Container, CardBody, Card } from 'reactstrap';
import { useSelector } from 'react-redux';
import { RootState } from '@/Redux/ReduxStore';
import { Price, ProductName, Quantity, Sub_total, symbol } from '@/Constant';
import { ItemDescriptionTypes, ProductData } from '@/Type/SideBarType';
import React, { Ref } from "react";

const ItemDescription = React.forwardRef((props, ref: Ref<HTMLDivElement> | undefined ) => {

  const getCartTotal = (item: ProductData) => {
    if (item.quantity) {
      return item.quantity * item.price;
    }
  };
  const { cartData } = useSelector((store: RootState) => store.EcommerceSlice);
  return (
    <div ref={ref}>
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            <Card>
              <CardBody>
                <div className='invoice'>
                  <div>
                    <InvoiceHeader />
                    <InvoiceDescription />
                    <div className='table-responsive invoice-table' id='table'>
                      <Table bordered striped>
                        <tbody>
                          <tr>
                            <td className='item'>
                              <h6 className='p-2 mb-0'>{ProductName}</h6>
                            </td>
                            <td className='quantity'>
                              <h6 className='p-2 mb-0'>{Quantity}</h6>
                            </td>
                            <td className='Rate'>
                              <h6 className='p-2 mb-0'>{Price}</h6>
                            </td>
                            <td className='subtotal'>
                              <h6 className='p-2 mb-0'>{Sub_total}</h6>
                            </td>
                          </tr>
                          {cartData &&
                            cartData.map((item) => {
                              return (
                                <tr key={item.id}>
                                  <td>
                                    <Label>{item.name}</Label>
                                  </td>
                                  <td>
                                    <p className='itemtext digits'>{item.quantity}</p>
                                  </td>
                                  <td>
                                    <p className='itemtext digits'>
                                      {symbol} {item.price}{' '}
                                    </p>
                                  </td>
                                  <td className='payment digits'>
                                    <p className='itemtext digits'>
                                      {symbol} {getCartTotal(item)}
                                    </p>
                                  </td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </Table>
                    </div>
                    <PrintInvoice />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
});

export default ItemDescription;
