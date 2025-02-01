import { Back, ErrorMessage, Javascript } from '@/Constant';
import { RootState } from '@/Redux/ReduxStore';
import { handleBookmarkChange } from '@/Redux/Slices/bookmark';
import { NewBookmarksType } from '@/Type/SideBarType';
import Link from 'next/link';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input, ListGroup, ListGroupItem } from 'reactstrap';

const BookmarksBack = ({ setFlipClass }: NewBookmarksType) => {
  const dispatch = useDispatch();

  const { linkItemsArray } = useSelector((store: RootState) => store.BookMarkSliceHeader);
  const [searchedItems, setSearchedItems] = useState<any>([]);
  const [searchWord, setSearchWord] = useState('');

  const searchItems = (e: string) => {
    let copy = [...linkItemsArray];
    let result = copy.filter((item, i) => item.title?.toLowerCase().includes(e.toLowerCase()));
    setSearchedItems(result);
  };
  return (
    <div className='back'>
      <ListGroup>
        <ListGroupItem>
          <div className='droplet-dropdown bookmark-dropdown flip-back-content'>
            <Input
              onChange={(e) => {
                setSearchWord(e.target.value);
                searchItems(e.target.value);
              }}
              type='text'
              placeholder='search...'
              id='bookmark'
              value={searchWord}
            />
            <div className={`filled-bookmark Typeahead-menu  ${searchWord ? 'is-open' : ''} custom-scrollbar `}>
              {searchedItems.map((item: any, i: number) => (
                <div key={i} className='ProfileCard u-cf'>
                  <div className='ProfileCard-avatar'>{item.icon}</div>
                  <div className='ProfileCard-details'>
                    <div className='ProfileCard-realName'>
                      <a className='realname' href={Javascript}>
                        {item.title}
                      </a>
                      <span className='pull-right'>
                        <Link href={Javascript}>
                          <i onClick={() => dispatch(handleBookmarkChange(linkItemsArray[item.id - 1]))} className={`fa fa-star-o mt-1 icon-star ${linkItemsArray[item.id - 1].bookmarked ? 'starred' : ''}`}></i>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='Typeahead-menu empty-bookmark  '>
              <div className='tt-dataset tt-dataset-0'>
                <div className='EmptyMessage'>{ErrorMessage}</div>
              </div>
            </div>
          </div>
        </ListGroupItem>
        <ListGroupItem>
          <Button color='secondary' onClick={() => setFlipClass('')} className='d-block flip-back'>
            {Back}
          </Button>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
};

export default BookmarksBack;
