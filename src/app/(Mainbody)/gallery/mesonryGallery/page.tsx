"use client";
import Breadcrumbs from "@/CommonComponents/BreadCrumb";
import CardHeaderCommon from "@/CommonComponents/CardHeaderCommon";
import { AssetsImagePath, Javascript } from "@/Constant";
import { MasonryImageData } from "@/Data/Gallery";
import Image from "next/image";
import Link from "next/link";
import Masonry from "react-masonry-css";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const MasonryGallery = () => {
  const styles = { width: "100%" };
  const breakpointColumnsObj = {
    default: 4,
    1199: 3,
    700: 2,
    500: 1,
  };

  return (
    <>
      <Breadcrumbs parent="Gallery" title="Masonry Gallery" mainTitle="Masonry Gallery" />
      <Container fluid>
        <Row>
          <Col sm="12" className="box-col-12">
            <Card>
              <CardHeaderCommon title="Masonry Gallery" />
              <CardBody className="photoswipe-pb-responsive">
                <Gallery>
                  <Masonry breakpointCols={breakpointColumnsObj} className="my-gallery row grid gallery" columnClassName="col-md-3 col-sm-6 grid-item">
                    {MasonryImageData.map((element, index) => (
                      <figure key={index} className="m-0">
                        <Item original={`${AssetsImagePath}/${element.src}`} width="700" height="850">
                          {({ ref, open }) => (
                            <Link href={Javascript} onClick={open}>
                              <Image width={500} height={500} className="img-thumbnail mb-4" ref={ref as React.MutableRefObject<HTMLImageElement>} src={`${AssetsImagePath}/${element.src}`} alt="images" />
                            </Link>
                          )}
                        </Item>
                      </figure>
                    ))}
                  </Masonry>
                </Gallery>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MasonryGallery;
