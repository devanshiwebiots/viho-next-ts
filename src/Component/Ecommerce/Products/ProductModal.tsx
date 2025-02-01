import React, { Fragment, useContext, useEffect, useState } from 'react';

import { Modal, Col, InputGroup, InputGroupText, Input, ModalHeader, Row, Button } from 'reactstrap';
import Image from 'next/image';
import { AddToCart, AssetsImagePath, ProductDetails, ProductSizeArray, Quantity, ViewDetails, symbol } from '@/Constant';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { addCartData, decrementCart, incrementCart } from '@/Redux/Slices/E-comerceSlice';
import { RootState } from '@/Redux/ReduxStore';

const ProductModal = (props: any) => {

  const dispatch = useDispatch();
  const [cartCount, setCartCount] = useState(1);
  const [open, setOpen] = useState(props.value);

  const incrementCount = () => {
    setCartCount(cartCount + 1);
  };
  const decrementCount = () => {
    if (cartCount === 1) {
      return;
    } else {
      setCartCount(cartCount - 1);
    }
  };
  const handleAddToCart = () => {
    dispatch(addCartData({ id: props.dataId, item: props.modelData, increment: cartCount }));
  };

  const onCloseModal = () => {
    setOpen(false);
    props.setOpenModal(false);
  };

  return (
    <Fragment>
      <Modal className='product-box' toggle={onCloseModal} size='lg' centered={true} isOpen={open}>
        <ModalHeader toggle={onCloseModal}>
          <Row className='product-box'>
            <Col md='6' className='product-img'>
              <Image alt='image' className='img-fluid' height={403} width={370} src={props.modelData.img ? `${AssetsImagePath}/${props.modelData.img}` : ''} />
            </Col>
            <Col md='6' className='product-details text-start'>
              <h4>{props.modelData.name}</h4>
              <div className='rating'>
                <i className='fa fa-star font-warning'></i>
                <i className='fa fa-star font-warning'></i>
                <i className='fa fa-star font-warning'></i>
                <i className='fa fa-star font-warning'></i>
                <i className='fa fa-star font-warning'></i>
              </div>
              <div className='product-price'>
                {symbol}
                {props.modelData.discountPrice}
                <del>
                  {symbol}
                  {props.modelData.price}
                </del>
              </div>
              <div className='product-view'>
                <h6 className='f-w-600'>{ProductDetails}</h6>
                <p className='mb-0'>{props.modelData.discription}</p>
              </div>
              <div className='product-size my-2'>
                <ul className='simple-list flex-row'>
                  {ProductSizeArray.map((items: string, i: number) => (
                    <li key={i} className='me-2'>
                      <Button color='outline-light'>{items}</Button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='product-qnty'>
                <h6 className='f-w-600'>{Quantity}</h6>
                <fieldset>
                  <InputGroup className='bootstrap-touchspin'>
                    <Button color='primary' className='bootstrap-touchspin-down btn-square' onClick={decrementCount}>
                      <i className='fa fa-minus'></i>
                    </Button>
                    <InputGroupText className='bootstrap-touchspin-prefix' style={{ display: 'none' }}></InputGroupText>
                    <Input className='touchspin text-center' type='text' name='quantity' value={cartCount} />
                    <InputGroupText className='bootstrap-touchspin-postfix' style={{ display: 'none' }}></InputGroupText>
                    <Button color='primary' className='bootstrap-touchspin-up btn-square' onClick={incrementCount}>
                      <i className='fa fa-plus'></i>
                    </Button>
                  </InputGroup>
                  <br />
                </fieldset>
                <div className='addcart-btn'>
                  <Link
                    href={`/ecommerce/cart`}
                    className='btn btn-primary text-white me-3'
                    onClick={() => {
                      handleAddToCart();
                    }}>
                    {AddToCart}
                  </Link>
                  <Link href={`/ecommerce/product-page`} className='btn btn-primary text-white'>
                    {ViewDetails}
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </ModalHeader>
      </Modal>
    </Fragment>
  );
};
export default ProductModal;
