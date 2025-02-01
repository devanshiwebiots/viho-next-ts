import { useState } from 'react';
import { Button, CardBody } from 'reactstrap';
// import CopyToClipboard from 'react-copy-to-clipboard';
import { Copy, CopyFromParagraph } from '@/Constant';

const ClipboardParaGraphCardBody = () => {
  const clipBoardParaGraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  const [clipBoardValues, setClipBoardValues] = useState({ value: clipBoardParaGraph, copied: false });

  return (
    <CardBody>
      <div className='clipboaard-container'>
        <p className='card-description'>{CopyFromParagraph}</p>
        {/* <CopyToClipboard text={clipBoardValues.value} onCopy={(value) => setClipBoardValues({ value, copied: true })}>
          <h6 className='border rounded  f-w-300'>{clipBoardParaGraph}</h6>
        </CopyToClipboard> */}
        <div className='mt-3'>
          {/* <CopyToClipboard text={clipBoardValues.value} onCopy={(value) => setClipBoardValues({ value, copied: true })}>
            <Button className='btn-clipboard' color='primary'>
              <i className='fa fa-copy'></i> {Copy}
            </Button>
          </CopyToClipboard> */}
        </div>
      </div>
    </CardBody>
  );
};
export default ClipboardParaGraphCardBody;
