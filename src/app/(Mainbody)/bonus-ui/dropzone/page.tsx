'use client';

import { Fragment } from 'react';
import { toast } from 'react-toastify';
import { Container, Row } from 'reactstrap';
import Dropzone1 from '../../../../Component/bonus-ui/Dropzone/Dropzone1';
import Dropzone2 from '../../../../Component/bonus-ui/Dropzone/Dropzone2';
import Dropzone3 from '../../../../Component/bonus-ui/Dropzone/Dropzone3';
import Dropzone4 from '../../../../Component/bonus-ui/Dropzone/Dropzone4';
import Dropzone5 from '../../../../Component/bonus-ui/Dropzone/Dropzone5';

const DropzoneContainer = () => {
  const getUploadParams = () => {
    return { url: 'https://httpbin.org/post' };
  };
  const handleSubmit = () => {
    toast.success('Dropzone successfully submitted !');
  };
  return (
    <Container fluid={true}>
      <Row>
        <Dropzone1 getUploadParams={getUploadParams} />
        <Dropzone2 getUploadParams={getUploadParams} handleSubmit={handleSubmit} />
        <Dropzone3 getUploadParams={getUploadParams} handleSubmit={handleSubmit} />
        <Dropzone4 getUploadParams={getUploadParams} handleSubmit={handleSubmit} />
        <Dropzone5 getUploadParams={getUploadParams} handleSubmit={handleSubmit} />
      </Row>
    </Container>
  );
};

export default DropzoneContainer;
