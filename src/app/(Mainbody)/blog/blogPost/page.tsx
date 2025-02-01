'use client';

import React from 'react';
import { Card, CardBody, Col, Container, Form, Row } from 'reactstrap';
import DropItems from '../../../../Component/Blog/BlogPost/DropItems';
import MainForm from '../../../../Component/Blog/BlogPost/MainForm';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const BlogPost = () => {
  return (
    <>
      <Breadcrumbs parent='Blog' title='Blog Post' mainTitle='Blog Post' />
      <Container fluid>
        <Row>
          <Form suppressHydrationWarning className=' needs-validation'>
            <Col sm='12'>
              <Card>
                <CardHeaderCommon title='Post Edit' />
                <CardBody className='add-post'>
                  <MainForm />
                  <DropItems />
                </CardBody>
              </Card>
            </Col>
          </Form>
        </Row>
      </Container>
    </>
  );
};

export default BlogPost;
