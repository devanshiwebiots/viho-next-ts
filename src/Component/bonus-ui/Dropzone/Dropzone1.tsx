import { Fragment } from 'react';
import { Col, Card, CardBody, Form, CardHeader } from 'reactstrap';
import Dropzone from 'react-dropzone-uploader';
import { SingleFileUpload } from '@/Constant';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { Dropzone1Type } from '@/Type/SideBarType';

const Dropzone1 = (props: Dropzone1Type) => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={SingleFileUpload} />
        <CardBody>
          <Form>
            <div className='dz-message needsclick'>
              <Dropzone
                getUploadParams={props.getUploadParams}
                maxFiles={1}
                multiple={false}
                canCancel={false}
                inputContent='Drop A File'
                styles={{
                  dropzoneActive: { borderColor: 'green' },
                }}
              />
            </div>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Dropzone1;
