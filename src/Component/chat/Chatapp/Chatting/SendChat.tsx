import { useState } from "react";
import { Button, Col, Input, InputGroup, Row } from "reactstrap";
import EmojiPicker from "emoji-picker-react";
import { AssetsImagePath, Send } from "@/Constant";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { replyByUserAsync, sendMessageAsync } from "@/Redux/Slices/ChatSlice";
import { RootState } from "@/Redux/ReduxStore";

const SendChat = () => {
  const [messageInput, setMessageInput] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const { chats, selectedUser, currentUser } = useSelector((state: RootState) => state.ChatReducer);
  const dispatch = useDispatch();
  const addEmoji = (emoji: string) => {
    const text = `${messageInput}${emoji}`;
    setShowEmojiPicker(false);
    setMessageInput(text);
  };
  const handleMessageChange = (message: string) => {
    setMessageInput(message);
  };

  const handleMessagePress = () => {
    var container = document.getElementsByClassName("chat-history")[0];
    setTimeout(function () {
      container?.scrollBy({ top: 200, behavior: "smooth" });
    }, 310);
    let currentUserId = currentUser?.id;
    let selectedUserId = selectedUser?.id;
    let selectedUserName = selectedUser?.name;
    if (messageInput.length > 0) {
      dispatch(sendMessageAsync({ currentUserId, selectedUserId, messageInput, chats }));
      setMessageInput("");
      setTimeout(() => {
        const replyMessage = "Hey This is " + selectedUserName + ", Sorry I'm busy right now, I will text you later";
        dispatch(replyByUserAsync({ currentUserId, selectedUserId, replyMessage, chats }));
      }, 2000);
    }
  };
  return (
    <div className="chat-message clearfix">
      <Row>
        <div>{showEmojiPicker ? <EmojiPicker onEmojiClick={({ emoji }) => addEmoji(emoji)} /> : null}</div>
        <Col xl="12" className="d-flex">
          <div className='smiley-box bg-primary'>
            <div className='picker' onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
              <Image width={28} height={29} src={`${AssetsImagePath}/smiley.png`} alt='smiley' unoptimized/>
            </div>
          </div>
          <InputGroup className="text-box">
            <Input type="text" className="input-txt-bx" placeholder="Type a message......" value={messageInput} onChange={(e) => handleMessageChange(e.target.value)} />
            <Button className="input-group-text" color="primary" onClick={handleMessagePress}>
              {Send}
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </div>
  );
};

export default SendChat;
