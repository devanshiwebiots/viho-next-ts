import { PortfolioTitle } from '@/Constant';
import PagesSort from './Pages';
import React, { Fragment, useState, useEffect } from 'react';
import { Col, Row, Card, CardBody } from 'reactstrap';
import Lightbox from 'react-18-image-lightbox';
import { AssetsImagePath, Javascript } from '@/Constant';
import Image from 'next/image';

const PhotosTab = () => {
  const description = "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.";
  const [imagess, setImage] = useState<string[]>([]);
  const [smallImages, setsmallImages] = useState([]);
  const initilindex = { index: 0, isOpen: false };
  const [photoIndex, setPhotoIndex] = useState(initilindex);

  const onMovePrev = () => {
    const prev = (photoIndex.index + imagess.length - 1) % imagess.length;
    setPhotoIndex({ ...photoIndex, index: prev });
  };

  const onMoveNext = () => {
    const next = (photoIndex.index + 1) % imagess.length;
    setPhotoIndex({ ...photoIndex, index: next });
  };

  useEffect(() => {
    fetch('/api/LightImageApi')
      .then((res) => res.json())
      .then((response) => {
        setImage(response.src);
      });

    fetch('/api/BigImageApi')
      .then((res) => res.json())
      .then((response) => {
        setsmallImages(response.src);
      });
  }, []);

  return (
    <Fragment>
      <Row>
        {smallImages && (
          <Col sm='12'>
            <Card>
              <CardBody className='my-gallery row gallery-with-description'>
                {smallImages &&
                  smallImages.map((item, i) => {
                    return (
                      <figure className='col-xl-3 col-sm-6' key={i}>
                        <a href={Javascript} data-size='1600x950'>
                          <Image height={206} width={341} src={`${AssetsImagePath}/${item}`} alt='Gallery' className='img-thumbnail' onClick={() => setPhotoIndex({ ...photoIndex, index: 1, isOpen: true })} />
                          <div className='caption'>
                            <h4>{PortfolioTitle}</h4>
                            <p>{description}</p>
                          </div>
                        </a>
                      </figure>
                    );
                  })}
              </CardBody>
            </Card>
          </Col>
        )}
      </Row>
      <PagesSort />
      {photoIndex.isOpen && (
        <Lightbox
          mainSrc={require(`${AssetsImagePath}/${imagess[photoIndex.index]}`)}
          nextSrc={require(`${AssetsImagePath}/${imagess[(photoIndex.index + 1) % imagess.length]}`)}
          prevSrc={require(`${AssetsImagePath}/${imagess[(photoIndex.index + imagess.length - 1) % imagess.length]}`)}
          imageTitle={photoIndex.index + 1 + '/' + imagess.length}
          onCloseRequest={() => setPhotoIndex({ ...photoIndex, isOpen: false })}
          onMovePrevRequest={onMovePrev}
          onMoveNextRequest={onMoveNext}
        />
      )}
    </Fragment>
  );
};

export default PhotosTab;
