import React, { Fragment, useContext } from 'react';
import SocialIcons from './SocialIcons';
import StarRatings from './StarRating';
import { Row, Col, Card, CardBody, Table, ListGroup, ListGroupItem, Button } from 'reactstrap';
import Link from 'next/link';
import { AddToCart, Availability, Brand, BuyNow, symbol } from '@/Constant';
import { useSelector } from 'react-redux';
import { RootState } from '@/Redux/ReduxStore';
import { useRouter } from 'next/navigation';

const ProductDetails = () => {

  const productData = useSelector((store: RootState) => store.EcommerceSlice.Data);
  const router = useRouter();
  const products = {
    price: productData[0]?.price,
    discountPrice: productData[0]?.discountPrice,
    discription: productData[0]?.discription,
    stock: productData[0]?.stock,
  };

  const addWishList = () => {
    router.push(`/ecommerce/wishlist`);
  };
  return (
    <Col xl='5' className='box-col-6 proorder-xl-3 xl-100'>
      <Card>
        <CardBody>
          <div className='pro-group pt-0'>
            <StarRatings />
            <div className='product-price'>
              {symbol}
              {products.price}
              <del>
                {symbol}
                {products.discountPrice}
              </del>
            </div>
            <ListGroup className=' product-color d-flex flex-row'>
              <ListGroupItem className='bg-primary'></ListGroupItem>&nbsp;
              <ListGroupItem className='bg-secondary'></ListGroupItem>&nbsp;
              <ListGroupItem className='bg-success'></ListGroupItem>&nbsp;
              <ListGroupItem className='bg-danger'></ListGroupItem>&nbsp;
              <ListGroupItem className='bg-info'></ListGroupItem>&nbsp;
              <ListGroupItem className='bg-warning'></ListGroupItem>&nbsp;
            </ListGroup>
            <Link href={`/ecommerce/checkout`}>
              <Button color='secondary' className=' mt-0'>
                <i className='fa fa-shopping-cart me-2'></i>
                {BuyNow}
              </Button>
            </Link>{' '}
          </div>
          <div className='pro-group'>
            <p>
              {products.discription}
              The point of using Lorem Ipsum is that.
            </p>
          </div>
          <div className='pro-group'>
            <Row>
              <Col md='6'>
                <Table>
                  <tbody>
                    <tr>
                      <td>
                        <b>{Availability} &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b>
                      </td>
                      <td className='txt-success'>{products.stock}</td>
                    </tr>
                    <tr>
                      <td>
                        <b>{Brand} &nbsp;&nbsp;&nbsp;:</b>
                      </td>
                      <td>{'Pixelstrap'}</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
              <Col md='6'>
                <Table>
                  <tbody>
                    <tr>
                      <td>
                        <b>{'Seller'} &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b>
                      </td>
                      <td>{'ABC'}</td>
                    </tr>
                    <tr>
                      <td>
                        <b>{'Fabric'}&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</b>
                      </td>
                      <td>{'Cotton'}</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </div>
          <SocialIcons />
          <div className='pro-group pb-0'>
            <div className='pro-shop'>
              <Link href={`/ecommerce/cart`}>
                <Button color='primary'>
                  <i className='fa fa-shopping-basket me-2'></i>
                  {AddToCart}
                </Button>
              </Link>
              &nbsp;&nbsp;&nbsp;
              <Button color='secondary' onClick={() => addWishList()}>
                <i className='fa fa-heart me-2'></i>
                {'Add To WishList'}{' '}
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ProductDetails;
