import { Row, Card, Col } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { bookMarkType } from '../ReducerTypes';
import SweetAlert from 'sweetalert2';
import DesciptionData from './DesciptionData';
import NoBookmarksFoundComponent from './NoBookmarksFoundComponent';
import { AssetsImagePath, Javascript } from '@/Constant';
import Image from 'next/image';
import { RootState } from '@/Redux/ReduxStore';
import { fillStarFalse, removeBookmMark, removeMyBookMark, setEditImgUrl, setEditModal, setEditRow, updateFillStar } from '@/Redux/Slices/BookMarkReducer';

const DataLoop = () => {
  const { bookmark, editModal } = useSelector((store: RootState) => store.BookMarkSlice);
  const dispatch = useDispatch();
  const editToggle = () => {
    dispatch(setEditModal(!editModal));
  };
  const addToFavourites = (data: bookMarkType) => {
    if (data.fillstar === false) {
      dispatch(updateFillStar(data));
    } else {
      dispatch(fillStarFalse(data.id));
      dispatch(removeMyBookMark(data.id));
    }
  };
  const OnHandleClick = (data: bookMarkType) => {
    editToggle();
    dispatch(setEditRow(data));
    dispatch(setEditImgUrl(`${AssetsImagePath}/${data.image}`));
  };
  const Removefrombookmark = (bookmarkId: number, fillstar: boolean) => {
    SweetAlert.fire({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'cancel',
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        if (fillstar) dispatch(removeMyBookMark(bookmarkId));
        dispatch(removeBookmMark(bookmarkId));
        SweetAlert.fire('Deleted!', 'Your file has been deleted.', 'success');
      } else {
        SweetAlert.fire('Your imaginary file is safe!');
      }
    });
  };

  return (
    <Row id='bookmarkData'>
      {bookmark.length ? (
        bookmark.map((data: bookMarkType, index: number) => (
          <Col xl='3' lg='6' sm='6' md='4' key={index} className='xl-50 box-col-6'>
            <Card className='bookmark-card o-hidden'>
              <div className='details-website'>
                <Image height={169} width={255} src={`${AssetsImagePath}/${data.image}`} alt='image' unoptimized/>
                <div className={`favourite-icon favourite_0 ${data.fillstar ? 'favourite' : ''}`} onClick={() => addToFavourites(data)}>
                  <a href={Javascript}>
                    <i className='fa fa-star'></i>
                  </a>
                </div>
                <DesciptionData data={data} OnHandleClick={OnHandleClick} Removefrombookmark={Removefrombookmark} />
              </div>
            </Card>
          </Col>
        ))
      ) : (
        <NoBookmarksFoundComponent />
      )}
    </Row>
  );
};
export default DataLoop;
