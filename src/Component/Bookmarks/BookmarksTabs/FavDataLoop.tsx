import { Row, Card, Col } from 'reactstrap';
import { AssetsImagePath, Javascript } from '@/Constant';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import SweetAlert from 'sweetalert2';
import { bookMarkType } from '../ReducerTypes';
import NoBookmarksFoundComponent from './NoBookmarksFoundComponent';
import FavDesciptionData from './FavDesciptionData';
import Image from 'next/image';
import { RootState } from '@/Redux/ReduxStore';
import { removeMyBookMark, updateBookMark, updateFavFilStar } from '@/Redux/Slices/BookMarkReducer';

const FavDataLoop = () => {
  const { mybookmarkData } = useSelector((state: RootState) => state.BookMarkSlice);
  const dispatch = useDispatch();
  const Remove_from_favourite = (data: bookMarkType) => {
    if (data.fillstar) {
      dispatch(updateFavFilStar(data.id));
      dispatch(removeMyBookMark(data.id));
      dispatch(updateBookMark({ id: data.id, data, image_url: data.image }));
    }
  };
  const Remove_from_my_bookmark = (mybookmarkId: number) => {
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
        dispatch({ type: 'removeMyBookMark', payload: mybookmarkId });
        SweetAlert.fire('Deleted!', 'Your file has been deleted.', 'success');
      } else {
        SweetAlert.fire('Your imaginary file is safe!');
      }
    });
  };

  return (
    <Row>
      {mybookmarkData.length ? (
        mybookmarkData.map((myBookData: bookMarkType) => (
          <Col xl='3' className='xl-50' md='4' key={myBookData.id}>
            <Card className='card-with-border bookmark-card o-hidden'>
              <div className='details-website'>
                <Image height={169} width={255} className='img-fluid' src={`${AssetsImagePath}/${myBookData.image}`} alt='Image' unoptimized/>
                <div className={`favourite-icon favourite_0 ${myBookData.fillstar ? 'favourite' : ''}`}>
                  <a href={Javascript}>
                    <i className='fa fa-star' onClick={() => Remove_from_favourite(myBookData)}></i>
                  </a>
                </div>
                <FavDesciptionData myBookData={myBookData} Remove_from_my_bookmark={Remove_from_my_bookmark} />
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
export default FavDataLoop;
