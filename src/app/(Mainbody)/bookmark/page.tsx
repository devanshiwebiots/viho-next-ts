'use client';

import { useEffect } from 'react';
import { Card, Col, Container, Row } from 'reactstrap';
import BookmarksTabs from '../../../Component/Bookmarks/BookmarksTabs';
import { useDispatch } from 'react-redux';
import SideBar from '../../../Component/Bookmarks/SideBar';
import { addData } from '@/Redux/Slices/BookMarkReducer';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';

const BookmarksContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getBookmMarkData = async () => {
      try {
        await fetch('/api/BookmarkApi')
          .then((res) => res.json())
          .then((resp) => {
            dispatch(addData(resp));
          });
      } catch (error) {
        console.log('cancelled', error);
      }
    };
    getBookmMarkData();
  }, []);

  return (
    <>
      <Breadcrumbs mainTitle='Bookmark' parent='Apps' title='Bookmark' />

      <Container fluid={true}>
        <div className='email-wrap bookmark-wrap'>
          <Row>
            <SideBar />
            <Col xl='9' md='12' className='box-col-8 xl-70'>
              <div className='email-right-aside bookmark-tabcontent'>
                <Card className='email-body radius-left'>
                  <div className='ps-0'>
                    <BookmarksTabs />
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};
export default BookmarksContainer;
