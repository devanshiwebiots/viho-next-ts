import { Col } from 'reactstrap';
import IconsMenuList from './IconsMenuList';
import ChatHistory from './ChatHistory';
import { AssetsImagePath, LastSeen, userType } from '@/Constant';
import Image from 'next/image';

const VideoCallPage = () => {
  return (
    <Col className='pr-xl-0 chat-right-aside'>
      <div className='chat'>
        <div className='chat-header clearfix'>
          <Image className='rounded-circle' height={52} width={52} src={`${AssetsImagePath}/user/8.jpg`} alt='user' />
          <div className='about'>
            <div className='name'>
              Kori Thomas&nbsp;&nbsp;
              <span className='font-primary f-12'>{userType}</span>
            </div>
            <div className='status digits'>{LastSeen} 3:55 PM</div>
          </div>
          <IconsMenuList />
        </div>
        <div className='chat-history'>
          <ChatHistory />
        </div>
      </div>
    </Col>
  );
};

export default VideoCallPage;
