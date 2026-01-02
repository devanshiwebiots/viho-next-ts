'use client';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { AssetsImagePath, Javascript, PortfolioTitle } from '@/Constant';
import { GalleryData, GalleryDescription, MasonryImageData } from '@/Data/Gallery';
import Image from 'next/image';
import Masonry from 'react-masonry-css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';

const GridDescGallery = () => {
  const breakpointColumnsObj = {
    default: 4,
    1199: 3,
    700: 2,
    500: 1,
  };

  return (
    <>
      <Breadcrumbs parent='Gallery' title='Gallery Grid Desc' mainTitle='Gallery Grid Desc' />
      <Container fluid>
        <Row>
          <Col sm='12'>
            <Card>
              <CardHeaderCommon title='Image Gallery' />
              <CardBody className='my-gallery  gallery-with-description'>
                <Row>
                  <Gallery>
                    {GalleryData.map((item, index) => (
                      <Col xl='3' sm='6' className='box-col-25'>
                        <figure key={index} className='img-thumbnail'>
                          <Item original={`${AssetsImagePath}/${item}`} width='1024' height='768' caption='hello'>
                            {({ ref, open }) => (
                              <a href={Javascript}>
                                <Image style={{ cursor: 'pointer' }} onClick={open} height={206} width={342} ref={ref} src={`${AssetsImagePath}/${item}`} alt='thumbnail'  unoptimized/>
                                <div className='caption mb-0'>
                                  <h4>{PortfolioTitle}</h4>
                                  <p>{GalleryDescription}</p>
                                </div>
                              </a>
                            )}
                          </Item>
                        </figure>
                      </Col>
                    ))}
                  </Gallery>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GridDescGallery;
