//@ts-nocheck

'use client';
import React, { Fragment, useState } from 'react';
import { Button, Card, CardBody, Col, Container, Row } from 'reactstrap';
import Files from 'react-files';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';
import Image from 'next/image';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { Delete, SelectSingleImageUpload, UploadImages } from '@/Constant';

const UploadImage = () => {
  const [files, setFiles] = useState([]);

  function deleteFile() {
    setFiles([]);
    return files;
  }
  const onFilesChange = (files: any) => {
    setFiles(files);
  };
  const onFilesError = (error: string, file: any) => {
    setFiles(file);
  };

  return (
    <Fragment>
      <Breadcrumbs mainTitle='Image Upload' parent='Bouns Ui' title='Uploads' />
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            <Card>
              <CardHeaderCommon title={SelectSingleImageUpload} />
              <CardBody className='fileUploader'>
                <Files className='files-dropzone fileContainer' onChange={onFilesChange} onError={onFilesError} accepts={['image/*']} multiple={false} maxFileSize={10000000} minFileSize={0} clickable>
                  {files.length > 0 ? (
                    <div className='files-gallery'>
                      {files.map((file, index) => (
                        <div key={index}>
                          <img className='files-gallery-item w-100' alt='img' src={file.preview?.url} />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className='d-flex justify-content-center'>
                      <Button className='mt-2' color='primary'>
                        {UploadImages}
                      </Button>
                    </div>
                  )}
                </Files>
                {files.length > 0 ? (
                  <div className='d-flex justify-content-center'>
                    <Button className='mt-2' color='primary' onClick={() => deleteFile()}>
                      {Delete}
                    </Button>
                  </div>
                ) : (
                  ''
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default UploadImage;
