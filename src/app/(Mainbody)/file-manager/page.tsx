"use client"

import React from 'react';
import { Container, Row } from 'reactstrap';
import LeftFileManager from '../../../Component/FileManager/LeftFileManager';
import RightFileManager from '../../../Component/FileManager/RightFileManager';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';

const FileManager = () => {
  return (
    <>
      <Breadcrumbs parent='File Manager' title='File Manager' mainTitle='File Manager' />
      <Container fluid>
        <Row>
          <LeftFileManager />
          <RightFileManager />
        </Row>
      </Container>
    </>
  );
};

export default FileManager;
