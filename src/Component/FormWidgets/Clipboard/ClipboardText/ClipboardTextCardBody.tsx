import { useState } from 'react';
import { Button, CardBody, Input } from 'reactstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Copy, Cut, CutcopyFromTextInput } from '@/Constant';

const ClipboardTextCardBody = () => {
  const [clipboardTextValue, setClipboardTextValue] = useState({ value: '', copied: false });
  return (
    <CardBody>
      <div className='clipboaard-container'>
        <p className='card-description'>{CutcopyFromTextInput}</p>
        <Input type='text' placeholder='type some text to copy / cut' value={clipboardTextValue.value} onChange={({ target: { value } }) => setClipboardTextValue({ value, copied: false })} />
        <div className='mt-3'>
          <CopyToClipboard text={clipboardTextValue.value} onCopy={(value) => setClipboardTextValue({ value, copied: true })}>
            <Button className='btn-clipboard me-2' color='primary'>
              <i className='fa fa-copy'></i> {Copy}
            </Button>
          </CopyToClipboard>
          <CopyToClipboard text={clipboardTextValue.value} onCopy={() => setClipboardTextValue({ copied: true, value: '' })}>
            <Button className='btn-clipboard-cut' color='secondary'>
              <i className='fa fa-cut'></i> {Cut}
            </Button>
          </CopyToClipboard>
        </div>
      </div>
    </CardBody>
  );
};

export default ClipboardTextCardBody;
