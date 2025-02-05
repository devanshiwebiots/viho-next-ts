"use client";

import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchChatMemberAsync, setAllMembers } from "@/Redux/Slices/ChatSlice";
import VideoCallPage from "@/Component/chat/VideoChat/VideoCallPage";
import ChatStatus from "@/Component/chat/Chatapp/ChatStatus";
import ChatMenu from "@/Component/chat/Chatapp/Chatting/ChatMenu";

const VideoChatContainer = () => {
  const dispatch = useDispatch();
  const getChatMembersData = async () => {
    try {
      const res = await fetch("/api/chatMemberApi");
      const result = await res.json();
      dispatch(setAllMembers(result));
      dispatch(fetchChatMemberAsync());
    } catch (error) {
      console.error("error", error);
    }
  };
  useEffect(() => {
    getChatMembersData();
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col sm="12" className="call-chat-sidebar">
          <Card>
            <CardBody className="chat-body">
              <ChatStatus />
            </CardBody>
          </Card>
        </Col>
        <Col className="call-chat-body">
          <Card>
            <CardBody className="p-0">
              <Row className="chat-box">
                <VideoCallPage />
                <ChatMenu />
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default VideoChatContainer;
