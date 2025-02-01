'use client';
import { Fragment, useEffect } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, Input } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { notesState } from '@/Type/SideBarType';
import { AddNewNote, Javascript, StickyNote } from '@/Constant';

import { setNotes } from '@/Redux/Slices/StickySlice';
import { RootState } from '@/Redux/ReduxStore';

const StickyContain = () => {
  useEffect(() => {
    makeapicall();
  }, []);
  const makeapicall = async () => {
    const res = await fetch('/api/StickyApi');
    const result = await res.json();
    dispatch(setNotes(result));
  };
  const dispatch = useDispatch();
  const { notesData } = useSelector((state: RootState) => state.StickySlice);

  const addStickyNote = () => {
    dispatch(setNotes([...notesData, { id: notesData.length + 1, isDeleted: false }]));
  };
  const deleteNote = (note: notesState) => {
    const noteList = notesData.filter((item: notesState) => item.id !== note.id);
    dispatch(setNotes(noteList));
  };

  return (
    <Container fluid={true}>
      <Row className='sticky-header-main'>
        <Col sm='12'>
          <Card>
            <CardHeader>
              <h5>
                {StickyNote}
                <a href={Javascript} onClick={addStickyNote} className='btn btn-primary pull-right m-l-10'>
                  {AddNewNote}
                </a>
              </h5>
            </CardHeader>
            <CardBody>
              <div className='sticky-note' id='board'>
                {notesData.map((data, index) => (
                  <div className={`note ui-draggable ui-draggable-handle `} key={index}>
                    <a href={Javascript} onClick={() => deleteNote(data)} className='button remove'>
                      X
                    </a>
                    <div className='note_cnt'>
                      <Input className='title' placeholder='Enter note title' type='textarea' style={{ height: '64px' }} />
                      <Input className='cnt' placeholder='Enter note description here' type='textarea' style={{ height: '200px' }} />
                    </div>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default StickyContain;
