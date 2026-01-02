import { Fragment, useEffect, useRef, useState } from "react";
import { allMembersType, messageType } from "../../ChatAppTypes";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ListGroup, ListGroupItem } from "reactstrap";
import Image from "next/image";
import { AssetsImagePath } from "@/Constant";
import { fetchChatMemberAsync, setChats, setSelectedUser } from "@/Redux/Slices/ChatSlice";
import { RootState } from "@/Redux/ReduxStore";

const ChatMessage = () => {
  const bottomRef = useRef<null | HTMLDivElement>(null);
  const [scroll, setScroll] = useState(0);
  const { allMembers, chats, selectedUser, currentUser } = useSelector((state: RootState) => state.ChatReducer);
  const dispatch = useDispatch();

  const fetchChatAsync = () => {
    if (chats.length > 0) {
      const currentUserId = 0;
      var chat = chats.filter((x: any) => x.users.includes(currentUserId));
      var selectedUser = chats[0].users.find((x: any) => x !== currentUserId);
      let oneSelect = allMembers.find((x: any) => x.id === selectedUser);
      if (allMembers.length > 0) {
        dispatch(setChats(chat));
        dispatch(setSelectedUser(oneSelect));
      }
      if (allMembers.length > 0) {
        return allMembers.find((x: allMembersType) => x.id === selectedUser);
      }
    }
  };

  useEffect(() => {
    dispatch(fetchChatMemberAsync());
    fetchChatAsync();
    setScroll(1);
  }, [allMembers.length, chats.length]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats, scroll]);

  const selectedChat = allMembers && chats && selectedUser ? chats.find((x: any) => x.users.includes(currentUser.id) && x.users.includes(selectedUser.id)) : null;

  return (
    <Fragment>
      <div className='chat-history chat-msg-box custom-scrollbar'>
        <ListGroup>
          {selectedChat && selectedChat.messages.length > 0 ? (
            selectedChat.messages.map((item: messageType, id: number) => {
              const participators: allMembersType | any = allMembers.find((x: allMembersType) => x.id === item.sender);
              return (
                <ListGroupItem key={id} className={` ${item.sender !== currentUser.id ? "" : "clearfix"}`}>
                  <div className={`message my-message ${item.sender !== currentUser.id ? "" : "pull-right other-message"}`}>
                    <Image width={30} height={30} alt={"user"} src={`${AssetsImagePath}/${participators.thumb}`} className={`rounded-circle ${item.sender !== currentUser.id ? "float-start" : "float-end"} chat-user-img img-30 h-auto`} unoptimized/>
                    <div className='message-data text-end'>
                      <span className='message-data-time'>{item.time}</span>
                    </div>
                    {item.text}
                  </div>
                </ListGroupItem>
              );
            })
          ) : (
            <div>
              <img className='img-fluid w-100 h-100' src={`${AssetsImagePath}/start-conversion.jpg`} alt='start conversion ' />
            </div>
          )}
          <ListGroupItem>
            <div ref={bottomRef}></div>
          </ListGroupItem>
        </ListGroup>
      </div>
    </Fragment>
  );
};
export default ChatMessage;
