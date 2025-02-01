'use client';

import Breadcrumbs from '@/CommonComponents/BreadCrumb';
import { CKEditorExample } from '@/Constant';
import { CKEditorParagraph } from '@/Data/Editor';
import React, { useState } from 'react';
import CKEditors from 'react-ckeditor-component';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';

const CKEditor = () => {
  const [content, setContent] = useState('content');
  const onChange = (evt: any) => {
    const newContent = evt.editor.getData();
    setContent(newContent);
  };
  return (
    <>
      <Breadcrumbs title='CK Editor' parent='Editor' mainTitle='CK Editor' />
      <Container fluid>
        <Row>
          <Col sm='12'>
            <Card>
              <CardHeader className='pb-0'>
                <h5>{CKEditorExample}</h5>
              </CardHeader>
              <CardBody>
                <CKEditors
                  activeClassName='p10'
                  content={content}
                  events={{
                    change: onChange,
                  }}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm='12'>
            <Card>
              <CardHeader className='pb-0'>
                <h5>Inline Editor</h5>
              </CardHeader>
              <CardBody>
                <div id='area1'>
                  <h1>Your title</h1>
                  <p>{CKEditorParagraph}</p>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CKEditor;
