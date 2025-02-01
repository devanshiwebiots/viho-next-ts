import React from 'react';
import { Col, Card, CardBody, Form } from 'reactstrap';
import Dropzone from 'react-dropzone-uploader';
import { ToastContainer } from 'react-toastify';
import { MultiImageUpload } from '@/Constant';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { DropzoneType } from '@/Type/SideBarType';

const Dropzone2 = (props: DropzoneType) => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={MultiImageUpload} />
        <CardBody>
          <Form>
            <ToastContainer />
            <div className='dz-message needsclick'>
              <Dropzone getUploadParams={props.getUploadParams} onSubmit={props.handleSubmit} accept='image/*' />
            </div>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Dropzone2;
