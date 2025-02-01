import React from 'react';
import { Col, Card, CardBody, Form } from 'reactstrap';
import Dropzone from 'react-dropzone-uploader';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { LimitationFileUpload } from '@/Constant';
import { DropzoneType } from '@/Type/SideBarType';

const Dropzone4 = (props: DropzoneType) => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={LimitationFileUpload} />
        <CardBody>
          <Form>
            <div className='dz-message needsclick'>
              <Dropzone onSubmit={props.handleSubmit} maxFiles={3} inputContent='Drop 3 Files' inputWithFilesContent={(files) => `${3 - files.length} more`} submitButtonDisabled={(files) => files.length < 3} />
            </div>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Dropzone4;
