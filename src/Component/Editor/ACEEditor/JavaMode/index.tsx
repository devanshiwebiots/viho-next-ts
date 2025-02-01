import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';
import { Typescript } from '@/Data/Editor';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const JavaMode = () => {
  return (
    <Col xl='6'>
      <Card>
        <CardHeaderCommon title='Java Mode' />
        <CardBody>
          <AceEditor style={{ marginTop: '0px', width: '663px', height: '428px', marginLeft: '0px' }} mode='java' theme='monokai' value={Typescript} name='blah2' fontSize={14} showPrintMargin={true} showGutter={true} setOptions={{ useWorker: false }} editorProps={{ $blockScrolling: true }} highlightActiveLine={true} />
        </CardBody>
      </Card>
    </Col>
  );
};
export default JavaMode;
