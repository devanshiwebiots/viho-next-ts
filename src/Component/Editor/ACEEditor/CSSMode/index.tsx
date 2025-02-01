import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import AceEditor from 'react-ace';
import { CssData } from '@/Data/Editor';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const CssMode = () => {
  return (
    <Col xl='6'>
      <Card>
        <CardHeaderCommon title='CSS Mode' />
        <CardBody>
          <AceEditor style={{ marginTop: '0px', width: '663px', height: '428px', marginLeft: '0px' }} mode='css' theme='monokai' value={CssData} name='blah2' fontSize={14} showPrintMargin={true} showGutter={true} setOptions={{ useWorker: false }} editorProps={{ $blockScrolling: true }} highlightActiveLine={true} />
        </CardBody>
      </Card>
    </Col>
  );
};
export default CssMode;
