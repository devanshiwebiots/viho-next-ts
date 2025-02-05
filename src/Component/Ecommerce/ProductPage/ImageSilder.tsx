import { AssetsImagePath } from '@/Constant';
import { RootState } from '@/Redux/ReduxStore';
import { fetchProductData } from '@/Redux/Slices/E-comerceSlice';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { Col, Media } from 'reactstrap';

const ImageSlider = () => {
  const dispatch = useDispatch();
  const productData = useSelector((store: RootState) => store.EcommerceSlice.Data);
  const [nav1, setNav1] = useState<Slider | null>();
  const [nav2, setNav2] = useState<Slider | null>();
  useEffect(() => {
    dispatch(fetchProductData());
  }, []);

  return (
    <Fragment>
      <Col xl='9' className='product-main'>
        <div className='pro-slide-single'>
          <Slider arrows={false} asNavFor={nav2!} ref={(slider1) => setNav1(slider1)}>
            {productData ? productData.map((item) => item.variants.map((items, id) => <img height={474} width={435} src={`${AssetsImagePath}/${items.images}`} alt={''} className={'img-fluid'} key={id} />)) : 'No product Found '}
          </Slider>
        </div>
      </Col>
      <Col xl='3' className='product-thumbnail'>
        <div className='pro-slide-right slick-vertical'>
          <Slider arrows={false} asNavFor={nav1!} ref={(slider2) => setNav2(slider2)} slidesToShow={3} vertical={true} swipeToSlide={true} focusOnSelect={true}>
            {productData &&
              productData.map((item) => {
                return item.variants.map((items, id) => <Image height={140} width={128} src={`${AssetsImagePath}/${items.images}`} alt={'img'} className='img-fluid' key={id} />);
              })}
          </Slider>
        </div>
      </Col>
    </Fragment>
  );
};
export default ImageSlider;
