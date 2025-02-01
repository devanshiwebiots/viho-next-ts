"use client";
import Breadcrumbs from "@/CommonComponents/BreadCrumb";
import CardHeaderCommon from "@/CommonComponents/CardHeaderCommon";
import { AssetsImagePath, Javascript } from "@/Constant";
import { GalleryData } from "@/Data/Gallery";
import Image from "next/image";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const GridGallery = () => {
  return (
    <>
      <Breadcrumbs parent="Gallery" title="Gallery Grid" mainTitle="Gallery Grid" />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeaderCommon title="Image Gallery" />
              <CardBody className="gallery my-gallery ">
                <Row>
                  <Gallery>
                    {GalleryData.map((item, index) => (
                      <figure className="col-xl-3 col-md-4 col-xs-6 m-0" key={index}>
                        <Item original={`${AssetsImagePath}/${item}`} width="1500" height="850">
                          {({ ref, open }) => (
                            <Link href={Javascript} onClick={open}>
                              <Image height={500} width={500} className="img-thumbnail mb-4 p-2" ref={ref as React.MutableRefObject<HTMLImageElement>} src={`${AssetsImagePath}/${item}`} alt="image" />
                            </Link>
                          )}
                        </Item>
                      </figure>
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

export default GridGallery;
