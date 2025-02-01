import { useState } from 'react';
import { Form, Input } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { searchMember } from '@/Redux/Slices/ChatSlice';

const SearchChatList = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const dispatch = useDispatch();
  const handleSearchKeyword = (keyword: string) => {
    setSearchKeyword(keyword);
    dispatch(searchMember(keyword));
  };
  return (
    <div className='search'>
      <Form className='theme-form'>
        <div className='mb-3 mt-3'>
          <Input type='text' defaultValue={searchKeyword} placeholder='search' onChange={(e) => handleSearchKeyword(e.target.value)} />
          <i className='fa fa-search' />
        </div>
      </Form>
    </div>
  );
};

export default SearchChatList;
