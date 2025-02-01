import { Col, Card, CardBody, Button } from 'reactstrap';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { CopyPortionFromParagraph } from '@/Constant';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useState } from 'react';

const ClipboardHighlight = () => {
  const Highlight = "dolor ertrsiertertt amet"
  const [state, setState] = useState({
    value: Highlight,
    copied: false
  })
  return (
    <Col sm='12' md='6'>
      <Card>
        <CardHeaderCommon title={CopyPortionFromParagraph} />
        <CardBody>
          <div className="clipboaard-container">
            <p className="card-description">Copy Portion From Paragraph</p>
            <h6 className="border rounded card-body f-w-300">Lorem ipsum <span className="bg-primary text-white p-1" >{Highlight}</span>, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h6>
            <div className="mt-3">
              <CopyToClipboard text={state.value}
                onCopy={() => setState({ value: Highlight, copied: true })}>
                <Button className="btn-clipboard" color="primary"><i className="fa fa-copy"></i> Copy highlighted text</Button>
              </CopyToClipboard>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ClipboardHighlight;
