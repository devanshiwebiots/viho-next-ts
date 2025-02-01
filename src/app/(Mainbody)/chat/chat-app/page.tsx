'use client';

import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FetchChatMemberApiData, fetchChatApiData } from '@/Redux/Slices/ChatSlice';
import ChatStatus from '@/Component/chat/Chatapp/ChatStatus';
import Chatting from '@/Component/chat/Chatapp/Chatting';

const ChatappConatainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChatApiData());
    dispatch(FetchChatMemberApiData());
  }, []);

  return (
    <Container fluid={true}>
      <Row>
        <Col sm='12' className='call-chat-sidebar'>
          <Card>
            <CardBody className='chat-body'>
              <ChatStatus />
            </CardBody>
          </Card>
        </Col>
        <Col className='call-chat-body'>
          <Card>
            <CardBody className='p-0'>
              <Chatting />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ChatappConatainer;
