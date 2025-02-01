import { useState } from 'react';
import { Button, Nav, NavItem } from 'reactstrap';
import { Bookmark, PlusCircle } from 'react-feather';
import { Javascript, NewBookmark, Tags, Views } from '@/Constant';
import { useDispatch } from 'react-redux';
import ModalTag from './ModalTag';
import BookmarkModal from './ModalBookMark';
import { useSelector } from 'react-redux';
import { RootState } from '@/Redux/ReduxStore';
import { sideBarData, sideBarData2 } from '@/Data/Bookmark/sideBar';
import { updateActiveTabss } from '@/Redux/Slices/BookMarkReducer';

const NavTab = () => {
  const { activeTabss, mybookmarkData } = useSelector((state: RootState) => state.BookMarkSlice);
  const [addModal, setaddModal] = useState(false);
  const [tagModal, setTagModal] = useState(false);
  const dispatch = useDispatch();
  const onHandleClick = (id: string) => {
    dispatch(updateActiveTabss(id));
  };
  const tagToggle = () => {
    setTagModal(!tagModal);
  };
  const addToggle = () => {
    setaddModal(!addModal);
  };
  return (
    <Nav className='main-menu' role='tablist'>
      <NavItem>
        <button className='btn-mail btn-block badge-light btn btn-' type='button' onClick={addToggle}>
          <Bookmark className='me-2' />
          {NewBookmark}
          <BookmarkModal value={addModal} addToggle={addToggle} />
        </button>
      </NavItem>
      <NavItem>
        <span className='main-title'> {Views}</span>
      </NavItem>
      {sideBarData.map((data, index) => (
        <NavItem key={index}>
          <a className={`show ${activeTabss === data.value ? 'active' : ''}`} onClick={() => onHandleClick(data.value)} href={Javascript}>
            {data.tittle === 'Favourites' ? (
              <span className='title'>
                {data.tittle}
                {'('}
                {mybookmarkData.length}
                {')'}
              </span>
            ) : (
              <span className='title'> {data.tittle}</span>
            )}
          </a>
        </NavItem>
      ))}
      <NavItem>
        <hr />
      </NavItem>
      <NavItem>
        <span className='main-title'>
          {Tags}
          <span className='pull-right'>
            <a href={Javascript} onClick={tagToggle}>
              <PlusCircle />
            </a>
          </span>
        </span>
      </NavItem>
      <ModalTag value={tagModal} tagToggle={tagToggle} />
      {sideBarData2.map((data, index) => (
        <NavItem key={index}>
          <a className={`show ${activeTabss === data.value ? 'active' : ''}`} onClick={() => onHandleClick(data.value)} href={Javascript}>
            <span className='title'> {data.tittle}</span>
          </a>
        </NavItem>
      ))}
    </Nav>
  );
};

export default NavTab;
