import ProductModal from './ProductModal';
import React, { Fragment, useEffect, useState } from 'react';
import { Row, Card, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { Eye, ShoppingCart } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { addCartData, fetchProductData } from '@/Redux/Slices/E-comerceSlice';
import { RootState } from '@/Redux/ReduxStore';
import { AssetsImagePath, symbol } from '@/Constant';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { EccomInitialStateProps, ProductData, filterValueTypes } from '@/Type/SideBarType';

const ProductGrid = () => {

  const router = useRouter();
  const { Data, filterValue } = useSelector((store: RootState) => store.EcommerceSlice);
  const { gridClass, columnClass } = useSelector((store: RootState) => store.filterSlice);

  const [dataId, setDataId] = useState();
  const [modelData, setModelData] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const onClickHandle = (data: any) => {
    setOpenModal(true);
    setModelData(data);
    setDataId(data.id);
  };

  const productData = (Data: ProductData[], filterValue: filterValueTypes) => {
    let data: ProductData[] = [];
    Data.map((item, index) => {
      let category;
      if (filterValue.category.includes(item.name)) {
        category = true;
      }
      let brand;
      item.tags.map((element, index) => {
        if (filterValue.brand.includes(element)) {
          brand = true;
        }
      });

      let color;
      if (item.colors.includes(filterValue.color)) {
        color = true;
      }

      let value;
      if (item.price >= filterValue.value.min && item.price <= filterValue.value.max) {
        value = true;
      }
      let name;
      if (item.name.toLowerCase().includes(filterValue.searchBy.toLowerCase())) {
        name = true;
      }
      if (category && brand && color && value && name) {
        data.push(item);
      }
    });
    if (filterValue.sortBy === 'Lowest Prices') {
      return data.sort((a, b) => a.price - b.price);
    } else if (filterValue.sortBy === 'Highest Prices') {
      return data.sort((a, b) => b.price - a.price);
    } else {
      return data;
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (!Data.length) {
      dispatch(fetchProductData());
    }
  }, []);

  return (
    <Fragment>
      <div className={`product-wrapper-grid ${gridClass}`} id='product-wrapper-grid'>
        <Row className='gridRow' id='gridRow'>
          {productData(Data, filterValue).map((item: any) => {
            return (
              <div id='gridId' className={gridClass ? 'col-xl-12' : columnClass} key={item.id}>
                <Card>
                  <div className='product-box'>
                    <div className='product-img'>
                      {item.status === 'sale' ? <span className='ribbon ribbon-danger'>{item.status}</span> : ''}
                      {item.status === '50%' ? <span className='ribbon ribbon-success ribbon-right'>{item.status}</span> : ''}
                      {item.status === 'gift' ? (
                        <span className='ribbon ribbon-secondary ribbon-vertical-left'>
                          <i className='icon-gift'>{item.status}</i>
                        </span>
                      ) : (
                        ''
                      )}
                      {item.status === 'love' ? (
                        <span className='ribbon ribbon-bookmark ribbon-vertical-right ribbon-info'>
                          <i className='icon-heart'>{item.status}</i>
                        </span>
                      ) : (
                        ''
                      )}
                      {item.status === 'Hot' ? <span className='ribbon ribbon ribbon-clip ribbon-warning'>{item.status}</span> : ''}
                      <Image className='img-fluid media w-100' src={`${AssetsImagePath}/${item.img}`} height={403} width={370} alt='' unoptimized/>
                      <div className='product-hover'>
                        <ListGroup className=' d-flex flex-row'>
                          <ListGroupItem>
                            <Button
                              color='transprant'
                              onClick={() => {
                                dispatch(addCartData({ item: item, increment: 1, id: item.id }));
                                router.push(`/ecommerce/cart`);
                              }}>
                              <ShoppingCart />
                            </Button>
                          </ListGroupItem>
                          <ListGroupItem>
                            <Button color='transprant' onClick={() => onClickHandle(item)} className='btn' type='button'>
                              <Eye />
                            </Button>{' '}
                          </ListGroupItem>
                        </ListGroup>
                      </div>
                    </div>
                    <div className='product-details'>
                      <h4>
                        <Link href={`/ecommerce/product-page/${item.id}`}>{item.name}</Link>
                      </h4>
                      <div className='rating'>
                        <i className='fa fa-star font-warning'></i>
                        <i className='fa fa-star font-warning'></i>
                        <i className='fa fa-star font-warning'></i>
                        <i className='fa fa-star font-warning'></i>
                        <i className='fa fa-star font-warning'></i>
                      </div>
                      <p>{item.note}</p>{' '}
                      <div className='product-price'>
                        {symbol} {item.price}{' '}
                        <del>
                          {symbol} {item.discountPrice}
                        </del>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
          {openModal && <ProductModal value={openModal} dataId={dataId} setOpenModal={setOpenModal} modelData={modelData} />}
        </Row>
      </div>
    </Fragment>
  );
};
export default ProductGrid;
