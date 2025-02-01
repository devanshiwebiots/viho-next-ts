import { Headphones, Paperclip, Search, Video, Menu } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { setToggleSideBar } from '@/Redux/Slices/ChatSlice';
import { chatAppTypes } from '../ChatAppTypes';

const IconsMenuList = () => {
  const { toggleSideBar } = useSelector((state: chatAppTypes) => state.ChatReducer);
  const toggleChatSideBar = () => {
    if (window.innerWidth <= 1200) {
      dispatch({ type: 'setToggleSideBar', payload: toggleSideBar ? true : false });
    } else {
      dispatch({ type: 'setToggleSideBar', payload: true });
    }
  };
  useEffect(() => {
    toggleChatSideBar();
    window.addEventListener('resize', () => {
      toggleChatSideBar();
    });
  }, [toggleSideBar, window.innerWidth]);
  const dispatch = useDispatch();
  return (
    <ListGroup className=' list-inline float-start float-sm-end chat-menu-icons flex-row'>
      <ListGroupItem className='list-inline-item'>
        <Search />
      </ListGroupItem>
      <ListGroupItem className='list-inline-item'>
        <Paperclip />
      </ListGroupItem>
      <ListGroupItem className='list-inline-item'>
        <Headphones />
      </ListGroupItem>
      <ListGroupItem className='list-inline-item'>
        <Video />
      </ListGroupItem>
      <ListGroupItem
        className='list-inline-item toogle-bar'
        onClick={() => {
          dispatch(setToggleSideBar(!toggleSideBar));
        }}>
        <Menu />
      </ListGroupItem>
    </ListGroup>
  );
};

export default IconsMenuList;
