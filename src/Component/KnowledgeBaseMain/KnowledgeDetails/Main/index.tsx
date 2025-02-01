import React, { Fragment } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { AssetsImagePath } from '@/Constant';
import Image from 'next/image';
import { KnowledgeDetailsParagraph1, KnowledgeDetailsParagraph2 } from '@/Data/KnowledgeBase';

const MainCard = () => {
  return (
    <Fragment>
      <Col xl='9' className='xl-60 box-col-8'>
        <div className='blog-single'>
          <div className='blog-box'>
            <Card>
              <Image height={200} width={900} className='img-fluid w-100' src={`${AssetsImagePath}/knowledgebase/1.jpg`} priority alt='blog-main' />
            </Card>
            <Card>
              <CardBody>
                <div className='blog-details'>
                  <h4 className='mt-0'>Why Choose Knowledge Course ?</h4>
                  <div className='single-blog-content-top'>
                    <p>{KnowledgeDetailsParagraph1}</p>
                    <p>{KnowledgeDetailsParagraph2}</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </Col>
    </Fragment>
  );
};
export default MainCard;
