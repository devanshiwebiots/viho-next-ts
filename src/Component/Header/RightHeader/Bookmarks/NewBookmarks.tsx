import { AddNewBookmark, Bookmark } from '@/Constant';
import { RootState } from '@/Redux/ReduxStore';
import { NewBookmarksType, bookmarkedDataType } from '@/Type/SideBarType';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Col, ListGroup, ListGroupItem, Row } from 'reactstrap';

const NewBookmarks = ({ setFlipClass }: NewBookmarksType) => {

  const router = useRouter();
  const { bookmarkedData } = useSelector((store: RootState) => store.BookMarkSliceHeader);
  return (
    <div className='front'>
      <ListGroup className='droplet-dropdown bookmark-dropdown list-group'>
        <ListGroupItem className='p-0'>
          <h6 className='f-18 mb-0'>{Bookmark} </h6>
        </ListGroupItem>
        <ListGroupItem className='custom-scrollbar'>
          <Row>
            {bookmarkedData.map((item: bookmarkedDataType, i: number) => (
              <Col key={i} xs='4' className=' text-center'>
                <div className='bookmark-content' onClick={() => router.push(`${item.path}`)}>
                  <div className='bookmark-icon'>{item.icon}</div>
                </div>
              </Col>
            ))}
          </Row>
        </ListGroupItem>
        <ListGroupItem className='text-center'>
          <Button color='secondary' onClick={() => setFlipClass('flipped')} className='flip-btn'>
            {AddNewBookmark}
          </Button>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
};

export default NewBookmarks;
