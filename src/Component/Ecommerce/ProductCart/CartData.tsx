import EmptyCart from './EmptyCart';
import { CardBody, CardHeader, Table, Row, Input, Button } from 'reactstrap';
import { XCircle } from 'react-feather';
import React, { Fragment, useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/Redux/ReduxStore';
import { Apply, AssetsImagePath, CartTableHeader, CartTitle, Javascript, symbol } from '@/Constant';
import Image from 'next/image';
import Link from 'next/link';
import { decrementCart, incrementCart } from '@/Redux/Slices/E-comerceSlice';

const CartData = () => {

  const dispatch = useDispatch();
  const { cartData } = useSelector((store: RootState) => store.EcommerceSlice);
  const getCartTotal = () => {
    let total = 0;
    cartData.map((item) => {
      total += item.price * (item.quantity ? item.quantity : 1);
    });
    return total;
  };
  return (
    <Fragment>
      {cartData && cartData.length > 0 ? (
        <div>
          <CardHeader className='pb-0'>
            <h5>{CartTitle}</h5>
          </CardHeader>
          <CardBody className='cart'>
            <Row>
              <div className='order-history table-responsive wishlist'>
                <Table className='table-bordered'>
                  <thead>
                    <tr>
                      {CartTableHeader.map((items, i) => (
                        <th key={i}>{items}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody style={{ borderTop: 'none' }}>
                    {cartData.map((item, i) => {
                      return (
                        item.quantity && (
                          <tr key={i}>
                            <td>
                              <Image height={43} width={40} className='img-fluid img-40' src={`${AssetsImagePath}/${item.img}`} alt='#' unoptimized/>
                            </td>
                            <td>
                              <div className='product-name'>
                                <a href={Javascript}>{item.name}</a>
                              </div>
                            </td>
                            <td>{item.price}</td>
                            <td>
                              <div className='input-group'>
                                <span className='input-group-prepend'>
                                  <Button color='primary' className='bootstrap-touchspin-down' onClick={() => dispatch(decrementCart(i))}>
                                    <i className='fa fa-minus'></i>
                                  </Button>
                                </span>
                                <Input type='text' name='quantity' value={item.quantity} readOnly={true} style={{ textAlign: 'center' }} className='input-number' />
                                <span className='input-group-append'>
                                  <Button color='primary' className='bootstrap-touchspin-up' onClick={() => dispatch(incrementCart(i))}>
                                    <i className='fa fa-plus'></i>
                                  </Button>
                                </span>
                              </div>
                            </td>
                            <td>
                              <a href={Javascript} onClick={() => {}}>
                                <XCircle />
                              </a>
                            </td>
                            <td>
                              {symbol}
                              {item.price * item.quantity}
                            </td>
                          </tr>
                        )
                      );
                    })}
                    <tr>
                      <td colSpan={4}>
                        <div className='input-group'>
                          <Input className='me-2' type='text' placeholder='Enter coupan code' />
                          <a className='btn btn-primary' href={Javascript}>
                            {Apply}
                          </a>
                        </div>
                      </td>
                      <td className='total-amount'>
                        <h6 className='m-0 text-end'>
                          <span className='f-w-600'>Total Price :</span>
                        </h6>
                      </td>
                      <td>
                        <span>{getCartTotal()}</span>
                      </td>
                    </tr>
                    <tr>
                      <td className='text-end' colSpan={5}>
                        <Link href={`/ecommerce/product`} className='btn btn-secondary cart-btn-transform'>
                          continue shopping
                        </Link>
                      </td>
                      <td>
                        <Link className='btn btn-success cart-btn-transform' href={`/ecommerce/checkout`}>
                          check out
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Row>
          </CardBody>
        </div>
      ) : (
        <EmptyCart />
      )}
    </Fragment>
  );
};
export default CartData;
