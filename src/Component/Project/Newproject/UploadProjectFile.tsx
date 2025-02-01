import React from 'react';
import Dropzone from 'react-dropzone-uploader';
import { Col, FormGroup, Label, Row } from 'reactstrap';
import { UploadProjectFile } from '@/Constant';

const DropItem = () => {
  const getUploadParams = () => {
    return {
      url: 'https://httpbin.org/post',
    };
  };

  const handleChangeStatus = () => {};
  return (
    <Row>
      <Col>
        <div className='mb-3'>
          <FormGroup>
            <Label>{UploadProjectFile}</Label>
            <Dropzone getUploadParams={getUploadParams} onChangeStatus={handleChangeStatus} maxFiles={1} multiple={false} canCancel={false} inputContent='Drop files here' />
          </FormGroup>
        </div>
      </Col>
    </Row>
  );
};
export default DropItem;
