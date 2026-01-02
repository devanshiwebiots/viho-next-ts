import { Button, Col, Media } from 'reactstrap';
import React, { Fragment, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/Redux/ReduxStore';
import Image from 'next/image';
import { AssetsImagePath, MoveToCarts, Price, symbol } from '@/Constant';
import { ProductData } from '@/Type/SideBarType';
import { addCartData, fetchProductData } from '@/Redux/Slices/E-comerceSlice';
import { useRouter } from 'next/navigation';

const WishListData = () => {

  const productData = useSelector((store: RootState) => store.EcommerceSlice.Data);
  const router = useRouter();
  const dispatch = useDispatch();

  const MoveToCart = (product: ProductData) => {
    dispatch(addCartData({ id: product.id, item: product, increment: 1 }));
    router.push(`/ecommerce/cart`);
  };
  useEffect(() => {
    dispatch(fetchProductData());
  }, []);
  return (
    <Fragment>
      {productData.map((item) => {
        return (
          <Col xl='2' md='4' sm='6' key={item.id} className='box-col-3'>
            <div className='prooduct-details-box'>
              <Media>
                <Image width={195} height={213} className='align-self-center img-fluid w-100' src={`${AssetsImagePath}/${item.img}`} alt='#' unoptimized/>
                <Media body>
                  {' '}
                  <div className='product-name'>
                    {' '}
                    <h6>
                      <a href='3'>{item.name}</a>
                    </h6>
                  </div>
                  <div className='rating'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  <div className='price'>
                    {Price}
                    <span>
                      : {item.price}
                      {symbol}
                    </span>
                  </div>
                  <div className='avaiabilty'>
                    <div className='text-success'>{item.stock}</div>
                  </div>
                  <Button color='primary' size='xs' onClick={() => MoveToCart(item)}>
                    {MoveToCarts}
                  </Button>
                </Media>
              </Media>
            </div>
          </Col>
        );
      })}
    </Fragment>
  );
};
export default WishListData;
