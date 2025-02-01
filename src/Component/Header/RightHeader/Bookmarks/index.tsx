import React, { useState } from 'react';
import { Star } from 'react-feather';
import NewBookmarks from './NewBookmarks';
import BookmarksBack from './BookmarksBack';

const Bookmarks = () => {
  const [flipClass, setFlipClass] = useState<string>('');
  return (
    <li className='onhover-dropdown'>
      <div className='notification-box'>
        <Star />
      </div>
      <div className='onhover-show-div bookmark-flip active'>
        <div className='flip-card'>
          <div className={`flip-card-inner ${flipClass}  `}>
            <NewBookmarks setFlipClass={setFlipClass} />
            <BookmarksBack setFlipClass={setFlipClass} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default Bookmarks;
