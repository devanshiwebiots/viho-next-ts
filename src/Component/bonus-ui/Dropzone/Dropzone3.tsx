import React from 'react';
import { Col, Card, CardBody, Form } from 'reactstrap';
import Dropzone from 'react-dropzone-uploader';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { MultipleImageVideoAudioUpload } from '@/Constant';
import { DropzoneType } from '@/Type/SideBarType';

const Dropzone3 = (props: DropzoneType) => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={MultipleImageVideoAudioUpload} />
        <CardBody>
          <Form>
            <div className='dz-message needsclick'>
              <Dropzone getUploadParams={props.getUploadParams} onSubmit={props.handleSubmit} accept='image/*,audio/*,video/*' />
            </div>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Dropzone3;
