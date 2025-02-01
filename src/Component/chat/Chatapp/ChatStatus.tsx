import { useSelector, useDispatch } from 'react-redux';
import CurrentUser from './CurrentUser';
import SearchChatList from './SearchChatList';
import { allMembersType } from '../ChatAppTypes';
import { ListGroup, ListGroupItem } from 'reactstrap';
import Image from 'next/image';
import { AssetsImagePath } from '@/Constant';
import { changeChat, createNewChatAsync } from '@/Redux/Slices/ChatSlice';
import { RootState } from '@/Redux/ReduxStore';
import { useEffect } from 'react';

const ChatStatus = () => {
  const { members, currentUser, selectedUser, chats } = useSelector((state: RootState) => state.ChatReducer);
  var activeChat = 0;
  if (selectedUser != null) activeChat = selectedUser.id;
  const dispatch = useDispatch();

  const changeChatClick = (selectedUserId: number) => {
    const currentUserId = currentUser.id;
    const currentChat = chats.find((x: any) => x.users.includes(currentUser.id) && x.users.includes(selectedUserId));
    if (currentChat) {
      dispatch(changeChat(selectedUserId));
    } else {
      dispatch(createNewChatAsync({ currentUserId, selectedUserId, chats }));
    }
  };
  return (
    <div className='chat-box'>
      <div className='chat-left-aside'>
        <CurrentUser />
        <div className='people-list'>
          <SearchChatList />
          {members && members.length > 0 ? (
            <ListGroup className='simple-list custom-scrollbar'>
              {members
                .filter((x: allMembersType) => x.id !== currentUser.id)
                .map((item: allMembersType, id: number) => (
                  <ListGroupItem key={id} className={`clearfix ${activeChat === item.id ? 'active' : ''}`} onClick={() => changeChatClick(item.id)}>
                    <div className='d-flex'>
                      <img src={`${AssetsImagePath}/${item.thumb}`} className='rounded-circle user-image' alt={'user'} />
                      <div className={`status-circle ${item.online === true ? 'online' : 'offline'}`}></div>
                      <div className='about flex-grow-1'>
                        <div className='name'>{item.name}</div>
                        <div className='status'>{item.status}</div>
                      </div>
                    </div>
                  </ListGroupItem>
                ))}
            </ListGroup>
          ) : (
            <Image className='img-fluid m-auto' height={50} width={50} src={`${AssetsImagePath}/search-not-found.png`} alt='search-not-found' />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatStatus;
