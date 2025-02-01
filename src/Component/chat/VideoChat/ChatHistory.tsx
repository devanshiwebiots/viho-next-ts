import { Button, Col, Row } from 'reactstrap';
import CallIcons from './CallIcons';
import Image from 'next/image';
import { AssetsImagePath, EndCall } from '@/Constant';

const ChatHistory = () => {
  return (
    <Row>
      <Col className='text-center pe-0 call-content'>
        <div>
          <div className='total-time'>
            <h2 className='digits'>36 : 56</h2>
          </div>
          <CallIcons />
          <Button size='lg' className='btn-danger-gradien btn-lg'>
            {EndCall}
          </Button>
          <div className='receiver-img'>
            <Image width={230} height={230} src={`${AssetsImagePath}/other-images/receiver-img.jpg`} alt='receiver-img' />
          </div>
        </div>
      </Col>
      <Col sm='6' className='ps-0 caller-img'>
        <Image height={705} width={607} className='img-fluid' src={`${AssetsImagePath}/other-images/caller.jpg`} alt='caller' />
      </Col>
    </Row>
  );
};

export default ChatHistory;
