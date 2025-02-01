import { Grid, List } from 'react-feather';
import { useDispatch } from 'react-redux';
import { Javascript } from '@/Constant';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { setGridView } from '@/Redux/Slices/BookMarkReducer';

const ViewBookmark = () => {
  const dispatch = useDispatch();
  const Gridbookmark = () => {
    dispatch(setGridView(true));
  };
  const Listbookmark = () => {
    dispatch(setGridView(false));
  };
  return (
    <ListGroup className=' flex-row'>
      <ListGroupItem>
        <a className='grid-bookmark-view' href={Javascript}>
          <Grid onClick={Gridbookmark} />
        </a>
      </ListGroupItem>
      &nbsp;
      <ListGroupItem>
        <a className='list-layout-view' href={Javascript}>
          <List onClick={Listbookmark} />
        </a>
      </ListGroupItem>
    </ListGroup>
  );
};
export default ViewBookmark;
