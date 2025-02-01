import { useSelector } from 'react-redux';
import ChatMenuIcons from './ChatMenuIcons';
import { AssetsImagePath } from '@/Constant';
import Image from 'next/image';
import { RootState } from '@/Redux/ReduxStore';
import { useRouter } from 'next/navigation';

const ChatHeader = () => {
  const { selectedUser } = useSelector((state: RootState) => state.ChatReducer);
  return (
    <div className='chat-header clearfix'>
      <Image className='rounded-circle' width={52} height={52} src={`${AssetsImagePath}/${selectedUser?.thumb ? selectedUser?.thumb : 'user/1.jpg'}`} alt='user' />
      <div className='about'>
        <div className='name'>{selectedUser ? selectedUser.name : 'Vincent Porter'}</div>
        <div className='status digits'>{selectedUser ? selectedUser.lastSeenDate : '5 May, 5:30 PM'}</div>
      </div>
      <ChatMenuIcons />
    </div>
  );
};

export default ChatHeader;
