"use client"
import React from 'react';
import { Container, Row } from 'reactstrap';
import Post1 from '../../../../Component/Blog/BlogDetail/Post1';
import BottomSection from '../../../../Component/Blog/BlogDetail/BottomSection';
import RightSection from '../../../../Component/Blog/BlogDetail/RightSection';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';

const BlogDetails = () => {
  return (
    <>
      <Breadcrumbs parent='Blog' title='Blog Details' mainTitle='Blog Details' />
      <Container fluid className='blog-page'>
        <Row>
          <Post1 />
          <RightSection />
          <BottomSection />
        </Row>
      </Container>
    </>
  );
};

export default BlogDetails;
