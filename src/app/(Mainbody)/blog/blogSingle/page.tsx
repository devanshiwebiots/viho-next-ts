'use client';

import { AssetsImagePath } from '@/Constant';
import { BlogSingleHeading, BlogSingleParagraph1, BlogSingleParagraph2 } from '@/Data/Blog';
import React from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import BlogComments from '../../../../Component/Blog/BlogSingle/BlogComments';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';
import Image from 'next/image';

const BlogSingle = () => {
  return (
    <>
      <Breadcrumbs title='Blog Single' parent='Blog' mainTitle='Blog Single' />
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            <div className='blog-single'>
              <div className='blog-box blog-details'>
                <Image src={`${AssetsImagePath}/blog/blog-single.jpg`} height={744} width={1561} alt='' unoptimized/>
                <Card>
                  <CardBody>
                    <div className='blog-details'>
                      <ul className='blog-social flex-row '>
                        <li>25 July 2023</li>
                        <li>
                          <i className='icofont icofont-user'></i>
                          Mark <span>Jecno </span>
                        </li>
                        <li>
                          <i className='icofont icofont-thumbs-up'></i>
                          02
                          <span>Hits</span>
                        </li>
                        <li>
                          <i className='icofont icofont-ui-chat'></i>
                          598 Comments
                        </li>
                      </ul>
                      <h4>{BlogSingleHeading}</h4>
                      <div className='single-blog-content-top'>
                        <p>{BlogSingleParagraph1}</p>
                        <p>{BlogSingleParagraph2}</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          </Col>
          <BlogComments />
        </Row>
      </Container>
    </>
  );
};

export default BlogSingle;
