import React from 'react';
import { Col, Card, CardBody, Form } from 'reactstrap';
import Dropzone from 'react-dropzone-uploader';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { CustomFileUpload } from '@/Constant';
import { DropzoneType } from '@/Type/SideBarType';

const Dropzone5 = (props: DropzoneType) => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={CustomFileUpload} />
        <CardBody>
          <Form>
            <div className='dz-message needsclick'>
              <Dropzone getUploadParams={props.getUploadParams} onSubmit={props.handleSubmit} inputContent='Drop Files (Custom Layout)' />
            </div>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Dropzone5;
